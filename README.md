# snap-nodejs
Read metadata from ubuntu snap (2.0) files

## Install

```
sudo apt update && sudo apt install squashfs-tools
npm install snap-nodejs
```

## Usage

```
var snap = require("../snap-nodejs");

snap.read("mySnapFile.snap", function(metadata){
 console.log(metadata);
})
```
