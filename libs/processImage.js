import { writeFile } from "fs/promises";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import temporaryDirectory from "temp-dir";
import { unlink } from "fs/promises";
import { v2 as cloudinary } from "cloudinary";
import util from "util";
/* import cloudinary from "./cloudinaryConn"; */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function savePhotosToTemp(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const name = uuidv4();
  const ext = image.type.split("/")[1];
  /* console.log(buffer) */

  const temporaryDirector = temporaryDirectory;
  /* const tempdir = os.tmpdir() */
  const uploadDir = path.join(temporaryDirector, `/${name}.${ext}`);
  /* const uploadDirOS = path.join(tempdir, `/${name}.${ext}`);  */
  /*  console.log("dir",uploadDir)
 console.log("dirOS",uploadDirOS) */
  /* console.log("tempDirectOS", tempdir)
 console.log("temporaryDirectory",temporaryDirector) */
  await fs.writeFile(uploadDir, buffer);

  return { filepath: uploadDir, filename: name };
}

async function uploadPhotosToCloudinary(newFile) {
  const newFilePath = newFile.filepath;
  console.log("newFilePath", newFilePath);

  return new Promise(async (resolve, reject) => {
    try {
      const res = await cloudinary.uploader.upload(newFilePath);
   

     /*  const imageUrlToString = res.secure_url;  */
      /* const jsonResponse = await res.json(); */
     
      resolve(res);
    
    } catch (error) {
      // Manejar cualquier error aquí
      console.error("Error al cargar la imagen a Cloudinary:", error);
      reject(error);
    }
  });
}

export async function processImage(image) {
  try {
    const newFile = await savePhotosToTemp(image);
    /* console.log(newFile); */

    const photos = await uploadPhotosToCloudinary(newFile);

    const photosToString = await photos.secure_url.toString();
    console.log(typeof photosToString)
    console.log("photosToString", photosToString);

    /* console.log("photos.secure_url", photos.secure_url); */
    const imageUrl = photosToString;
    /*  console.log("typeof" ,typeof imageUrl)
    console.log("imageUrl", imageUrl); */
    return imageUrl;
  } catch (error) {
    return { errMsg: `this error ${error.message} ` };
  }
}

/* export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const name = uuidv4();
  const ext = image.type.split("/")[1]; 

 */
//create path for images before uploading to cloudinary
/* const uploadDir = path.join(temporaryDirectory, `/${name}.${ext}`); */
/*  console.log("file.path", filePath); */
/* await writeFile(uploadDir, buffer); */

/*  const filePath = uploadDir
const fileName = name  */

/*   const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(  { resource_type: "image" }, async (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  }); */
/* 
  console.log("res cloudinary :",res)
  const imageUrl = res.secure_url; */

//delete image from temp
/*   if (res) {
    await unlink(filePath);
  }
 */
/*  return imageUrl;
}
 
 */
