"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var pathHtml = path.join(__dirname, '/index.html');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 8888;
app.get('/', function (req, res) {
    // res.sendFile('./index.html');
    res.sendFile(path.resolve(__dirname + '/index.html'));
});
app.post('/game', function (req, res) {
    var str = req.body;
    console.log(str);
    var save = SendSave(str.Id.toString());
    res.send(save);
});
app.listen(8888, function () {
    console.log("Server started at ".concat(port));
});
var saveDir = path.resolve(__dirname, './Saves');
var SendSave = function (id) {
    var targetFile = "".concat(id, ".json");
    var fileContent = fs.readFileSync(path.join(saveDir, targetFile), 'utf-8');
    // console.log(fileContent);
    return fileContent;
};
//# sourceMappingURL=index.js.map