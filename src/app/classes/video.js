"use strict";
var Video = (function () {
    function Video(name, storageName, description, mimeType) {
        this.name = name;
        this.storageName = storageName;
        this.description = description;
        this.mimeType = mimeType;
    }
    return Video;
}());
exports.Video = Video;
