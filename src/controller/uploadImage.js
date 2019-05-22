const config = require("./../../");
const multer = require("multer");
const multerS3 = require("multer");
const aws = require("aws-sdk");

const accessKey = config.Access_Key_ID;
const secretKey = config.Secret_Access_Key;

aws.config.update({
  secretAccessKey: secretKey,
  accessKeyId: accessKey,
  region: "us-east-1"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "gymbuddy11",
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
