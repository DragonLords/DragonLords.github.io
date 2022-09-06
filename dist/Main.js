"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// import dotenv from "dotenv";
// import * as http from 'http';
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs = __importStar(require("fs"));
// dotenv.config({path:path.resolve(__dirname,"./.env")});
// const port=process.env.PORT;
const port = "https://dragonlords.github.io";
//#region Express
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    //handle GET    
    // res.send("this is a GET");
    res.sendFile('../index.html');
});
app.post('/', (req, res) => {
    //handle POST
    const json = req.body;
    console.log(json);
    const str = req.body;
    console.log(str);
    const save = SendSave(str.Id.toString());
    res.send("this is a POST");
});
app.listen(port, () => {
    // console.log(`[server]: Server is running at https://localhost:${port}`);
});
//#endregion
const saveDir = path_1.default.resolve(__dirname, './Saves');
const SendSave = (id) => {
    const targetFile = `${id}.json`;
    const fileContent = fs.readFileSync(path_1.default.join(saveDir, targetFile), 'utf-8');
    // console.log(fileContent);
    return fileContent;
};
// TestJson();
// SendSave("69");
//# sourceMappingURL=Main.js.map