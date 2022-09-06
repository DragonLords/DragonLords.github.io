import * as path from 'path'
import {Express,Request,Response} from 'express'
import * as express from 'express';
import { JsonTemplate } from './Temp/TemplateJson';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
const pathHtml=path.join(__dirname,'/index.html');
const app:Express=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const port:number=8888;

app.get('/',(req:Request,res:Response)=>{
    // res.sendFile('./index.html');
    res.sendFile(path.resolve(__dirname+'../index.html'));
});

app.post('/game',(req:Request,res:Response)=>{
    const str:JsonTemplate=req.body;
    console.log(str);
    const save:string=SendSave(str.Id.toString());
    res.send(save);
});

app.listen(8888,()=>{
    console.log(`Server started at ${port}`);
});

const saveDir:string=path.resolve(__dirname,'./Saves');
const SendSave=(id:string):string=>{
    const targetFile:string=`${id}.json`;
    const fileContent:string=fs.readFileSync(path.join(saveDir,targetFile),'utf-8');
    // console.log(fileContent);
    return fileContent;
}