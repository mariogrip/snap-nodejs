var squashfs = require("squashfs-nodejs");
var tmp = require("tmp");
var yaml = require('js-yaml');
var rimraf = require("rimraf");
var fs = require("fs");

module.exports = {
  read: function (snapfile, callback) {
    tmp.dir(function _tempDirCreated(err, path, cleanupCallback) {
      if (err) throw err;
      squashfs.unsquashfs(snapfile, path+"/a", function () {
        var json = yaml.safeLoad(fs.readFileSync(path+"/a/meta/snap.yaml", 'utf8'));
        callback(json);
        rimraf(path+"/a", function () {
          cleanupCallback();
        });
      })
  });
  }
}
