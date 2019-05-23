// require("env2")("./config.env");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const aws = require("aws-sdk");

// // const config = new aws.Config({
// //   accessKeyId: process.env.ACCESS_KEY_ID,
// //   secretAccessKey: process.env.SECRET_ACCESS_KEY,
// //   region: "eu-west-2"
// // });

// aws.config.update({
//   secretAccessKey: process.env.SECRET_ACCESS_KEY,
//   accessKeyId: process.env.ACCESS_KEY_ID,
//   region: "eu-west-2"
// });

// const s3 = new aws.S3();

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "gymbuddystore",
//     acl: "public-read",
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString());
//     }
//   })
// });

// module.exports = upload;
