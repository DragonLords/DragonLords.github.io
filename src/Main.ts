import path from "path";
// import dotenv from "dotenv";
// import * as http from 'http';
import express,{Express,Request,Response} from "express";
import bodyParser from "body-parser";
import * as fs from 'fs';
// import templateJson from './Temp/temp.json';
import { JsonTemplate } from './Temp/TemplateJson';

// dotenv.config({path:path.resolve(__dirname,"./.env")});
// const port=process.env.PORT;
const port="https://dragonlords.github.io";

//#region Express
const app:Express = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req:Request, res:Response) =>{
    //handle GET    
    // res.send("this is a GET");
    res.sendFile('../index.html');
});

app.post('/',(req:Request,res:Response)=>{
    //handle POST
    const json:JSON=req.body;

    console.log(json);
    const str:JsonTemplate=req.body;
    console.log(str);
    const save:string=SendSave(str.Id.toString());
    res.send("this is a POST");
});

app.listen(port, () =>{
    // console.log(`[server]: Server is running at https://localhost:${port}`);
});
//#endregion


const saveDir:string=path.resolve(__dirname,'./Saves');


const SendSave=(id:string):string=>{
    const targetFile:string=`${id}.json`;
    const fileContent:string=fs.readFileSync(path.join(saveDir,targetFile),'utf-8');
    // console.log(fileContent);
    return fileContent;
}

// TestJson();



// SendSave("69");