var Fluxxor   = require("fluxxor");
var Immutable = require("immutable");
var R         = require("ramda");

var constants = require("../lib/constants.js");

var UploadingFilesStore = Fluxxor.createStore({
    initialize: function () {
        this.uploadingFiles = Immutable.Map();
        this.bindActions(
            constants.UPLOADING_FILE_DISMISS_NOTIFICATION, this.onUploadingFileRemove,
            constants.UPLOADING_FILE_END, this.onUploadingFileEnd,
            constants.UPLOADING_FILE_ERROR, this.onUploadingFileError,
            constants.UPLOADING_FILE_INIT, this.onUploadingFileInit,
            constants.UPLOADING_FILE_PROGRESS, this.onUploadingFileProgress
        );
    },
    onUploadingFileEnd: function (payload) {
        this.uploadingFiles = this.uploadingFiles.setIn(
            [payload._id, "success"],
            true
        );
        this.emit("change");
    },
    onUploadingFileError: function (payload) {
        this.uploadingFiles = this.uploadingFiles.setIn(
            [payload._id, "error"],
            true
        );;
        this.emit("change");
    },
    onUploadingFileInit: function (payload) {
        this.uploadingFiles = this.uploadingFiles.set(
            payload._id,
            Immutable.Map(payload.uploadingFile).set("progress", 0)
        );
        this.emit("change");
    },
    onUploadingFileProgress: function (payload) {
        this.uploadingFiles = this.uploadingFiles.setIn(
            [payload._id, "progress"],
            payload.progress
        );
        this.emit("change");
    },
    onUploadingFileRemove: function (payload) {
        this.uploadingFiles = this.uploadingFiles.remove(
            payload._id
        );
        this.emit("change");
    },
    getUploadingFiles: function () {
        return this.uploadingFiles;
    }
});

module.exports = UploadingFilesStore;
