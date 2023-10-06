/* import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();
import streamifier from "streamifier";
 */
/* dotenv.config(); */
/* console.log("111")

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
}); */

console.log("111aaa")
/* const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.single("file");
 */


/* function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    console.log("222")
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      } 
      return resolve(result);
    });
  });
} */

/* export  async function POST(req, res) {

 const data = await req.formData();
 console.log("data", data)
 const filee = data.get("file");
 console.log("filee", filee)
  await runMiddleware(filee, res, uploadMiddleware); */
/*   const text = req.text()
  *//* console.log("333") */
  /* console.log(data.file.buffer); */
/*   const stream =  cloudinary.uploader.upload_stream(
    {
      folder: "demo",
    },
    (error, result) => {
      if (error) return console.error(error);
      res.status(200).json(result);
    }
  );

  streamifier.createReadStream(filee.file.buffer).pipe(stream);
} */

/* export const config = {
  api: {
    bodyParser: false,
  },
}; */