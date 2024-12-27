import { IncomingMessage, ServerResponse } from "http";
import formidable, { IncomingForm, Files } from "formidable";
import fs from 'fs'
import path from "path";
import { readCsvFile } from "../utils/utils.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


const UPLOAD_DIR = path.join(__dirname,'../uploads')

if(!fs.existsSync(UPLOAD_DIR)){
    fs.mkdirSync(UPLOAD_DIR)
}

export const fileUpload = async (req:IncomingMessage, res: ServerResponse) => {
    const allowedExtension = '.csv'
    const form = new IncomingForm();

    form.parse(req, async (err,fields,files)=>{
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Error parsing form data');
            return;
        }

        if (files.file){
            const uploadedFile = files.file[0]
            const tempPath = uploadedFile.filepath;
            const fileName = uploadedFile.originalFilename || 'uploaded_file';
            const fileExtension = path.extname(fileName);

            if (fileExtension !== allowedExtension) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Only CSV files are allowed');
                return;
            }

            const newFileName = uploadedFile.newFilename + fileExtension; // add extention on file name
            const newLocation = path.join(UPLOAD_DIR, newFileName);

            fs.rename(tempPath,newLocation,async (renameErr)=>{
                if(renameErr) {
                    res.writeHead(500,{'content-type': 'text/plain'});
                    res.end('Error saving file')
                    return
                }
                try {
                    const csvData = await readCsvFile(newLocation);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(csvData));
                } catch (readErr) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Error reading CSV file: ${readErr.message}`);
                }
                
            })
            

        }
        

    })
}