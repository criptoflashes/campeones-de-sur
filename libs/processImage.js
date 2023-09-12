import { writeFile } from "fs/promises";
import path from "path";
import {v4 as uuidv4} from 'uuid'
/* import os from 'os' */
import temporaryDirectory from 'temp-dir';


export async function processImage(image) {
    const bytes = await image.arrayBuffer();
    const buffer =  Buffer.from(bytes);
    const name = uuidv4()
    const ext = image.type.split("/")[1]

/* console.log({name, ext}) */
    console.log(temporaryDirectory);
   /*  const tempdir = os.tmpdir() */
    /* const filePath = path.join(process.cwd(), "public", image.name); */
    const filePath = path.join(temporaryDirectory, `/${name}.${ext}`);
    console.log("file.path", filePath)
    await writeFile(filePath, buffer);
    return filePath
  }