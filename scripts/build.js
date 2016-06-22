//////////////////
// Dependencies //
//////////////////

var BPromise = require("bluebird");
var execSync = require("child_process").execSync;
var fs       = require("fs");
var gulp     = require("gulp");
var gp       = require("gulp-load-plugins")();
var webpack  = require("webpack");



//////////////////////////////////
// App files building functions //
//////////////////////////////////

var buildAppIndex = function (target) {
    execSync("mkdir -p builds/" + target + "/");
    return new BPromise(function (resolve, reject) {
        gulp.src("app/main.html")
            .pipe(gp.plumber(reject))
            .pipe(gp.preprocess({context: {TARGET: target}}))
            .pipe(gp.rename("index.html"))
            .pipe(gulp.dest("builds/" + target + "/"))
            .on("end", resolve);
    });
};

var buildAppScripts = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/js/");
    return new BPromise(function (resolve, reject) {
        var deps = JSON.parse(fs.readFileSync("deps.json"));
        var webpackConfig = {
            entry: {
                app: "./app/main.jsx",
                vendor: deps.js
            },
            output: {
                filename: "builds/" + target + "/assets/js/app.js"
            },
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: "jsx-loader"
                }]
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin(
                    "vendor",
                    "builds/" + target + "/assets/js/vendor.js"
                )
            ]
        };
        if (target === "web.prod") {
            webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
        }
        webpack(webpackConfig, function (err, stats) {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
};

var buildAppStyles = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/css/");
    return new BPromise(function (resolve, reject) {
        gulp.src("app/main.scss")
            .pipe(gp.plumber(reject))
            .pipe(gp.sass())
            .pipe(gp.autoprefixer("last 3 version"))
            .pipe(gp.rename("app.css"))
            .pipe(gp.if(target === "web.prod", gp.minifyCss()))
            .pipe(gulp.dest("builds/" + target + "/assets/css/"))
            .on("end", resolve);
    });
};

var buildAppImages = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/images/");
    return new BPromise(function (resolve, reject) {
        var deps = JSON.parse(fs.readFileSync("deps.json"));
        gulp.src(deps.images)
            .pipe(gp.plumber(reject))
            .pipe(gulp.dest("builds/" + target + "/assets/images/"))
            .on("end", resolve);
    });
};

var buildExternalScripts = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/js/");
    return new BPromise(function (resolve, reject) {
        var deps = JSON.parse(fs.readFileSync("deps.json"));
        gulp.src(deps.externalScripts)
            .pipe(gp.plumber(reject))
            .pipe(gp.concat("external.js"))
            .pipe(gp.if(target === "web.prod", gp.uglify()))
            .pipe(gulp.dest("builds/" + target + "/assets/js/"))
            .on("end", resolve);
    });
};

var buildVendorStyles = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/css/");
    return new BPromise(function (resolve, reject) {
        var deps = JSON.parse(fs.readFileSync("deps.json"));
        gulp.src(deps.css)
            .pipe(gp.plumber(reject))
            .pipe(gp.concat("vendor.css"))
            .pipe(gp.if(target === "web.prod", gp.minifyCss()))
            .pipe(gulp.dest("builds/" + target + "/assets/css/"))
            .on("end", resolve);
    });
};

var buildVendorFonts = function (target) {
    execSync("mkdir -p builds/" + target + "/assets/fonts/");
    return new BPromise(function (resolve, reject) {
        var deps = JSON.parse(fs.readFileSync("deps.json"));
        gulp.src(deps.fonts)
            .pipe(gp.plumber(reject))
            .pipe(gulp.dest("builds/" + target + "/assets/fonts/"))
            .on("end", resolve);
    });
};



////////////
// Export //
////////////

module.exports = {
    appIndex:        buildAppIndex,
    appScripts:      buildAppScripts,
    appStyles:       buildAppStyles,
    appImages:       buildAppImages,
    externalScripts: buildExternalScripts,
    vendorStyles:    buildVendorStyles,
    vendorFonts:     buildVendorFonts
};
