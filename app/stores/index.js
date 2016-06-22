var ErrorStore          = require("./error.jsx");
var LoginStore          = require("./login.jsx");
var UploadingFilesStore = require("./uploading-files.jsx");

module.exports = {
    ErrorStore:          new ErrorStore(),
    LoginStore:          new LoginStore(),
    UploadingFilesStore: new UploadingFilesStore()
};
