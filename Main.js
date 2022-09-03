"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const fs = tslib_1.__importStar(require("fs"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "./.env") });
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send("this is a GET");
});
app.post('/', (req, res) => {
    const json = req.body;
    console.log(json);
    const str = req.body;
    console.log(str);
    const save = SendSave(str.Id.toString());
    res.send("this is a POST");
});
app.listen(port, () => {
});
const saveDir = path_1.default.resolve(__dirname, './Saves');
const SendSave = (id) => {
    const targetFile = `${id}.json`;
    const fileContent = fs.readFileSync(path_1.default.join(saveDir, targetFile), 'utf-8');
    return fileContent;
};
