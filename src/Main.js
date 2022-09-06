"use strict";
exports.__esModule = true;
var path_1 = require("path");
// import dotenv from "dotenv";
// import * as http from 'http';
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var fs = require("fs");
// dotenv.config({path:path.resolve(__dirname,"./.env")});
// const port=process.env.PORT;
var port = "https://dragonlords.github.io";
//#region Express
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    //handle GET    
    // res.send("this is a GET");
    res.sendFile('./index.html');
});
app.post('/', function (req, res) {
    //handle POST
    var json = req.body;
    console.log(json);
    var str = req.body;
    console.log(str);
    var save = SendSave(str.Id.toString());
    res.send("this is a POST");
});
app.listen(port, function () {
    // console.log(`[server]: Server is running at https://localhost:${port}`);
});
//#endregion
var saveDir = path_1["default"].resolve(__dirname, './Saves');
var SendSave = function (id) {
    var targetFile = "".concat(id, ".json");
    var fileContent = fs.readFileSync(path_1["default"].join(saveDir, targetFile), 'utf-8');
    // console.log(fileContent);
    return fileContent;
};
// TestJson();
// SendSave("69");
