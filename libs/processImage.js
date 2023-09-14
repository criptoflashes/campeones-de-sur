import { writeFile } from "fs/promises";
import path from "path";
import {v4 as uuidv4} from 'uuid'
/* import os from 'os' */
import temporaryDirectory from 'temp-dir';
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});



export async function processImage(image) {

  const bytes =  await image.arrayBuffer() 
   const buffer = Buffer.from(bytes)

  const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  });
  

  const imageUrl = res.secure_url;
console.log(imageUrl)
return imageUrl
}



/* export async function processImage(image) {
    const bytes = await image.arrayBuffer();
    const buffer =  Buffer.from(bytes);
    const name = uuidv4()
    const ext = image.type.split("/")[1]


    console.log(temporaryDirectory);
 
    const filePath = path.join(temporaryDirectory, `/${name}.${ext}`);
    console.log("file.path", filePath)
    await writeFile(filePath, buffer);
    return filePath
  } */