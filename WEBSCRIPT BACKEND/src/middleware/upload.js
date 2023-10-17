const util = require("utile")
const multer = require("multer")

const maxSize = 2 * 1024 * 1024 //max file (foto) size
let storage = multer.diskStorage({
    //destination folder on the server
    destination: function(req,file,cb) {
        cb(null, _basedir + "/resources/dara/");
    },
    filename: function(req,file,cb) {
        console.log(file.originalname);
        cb(null,file.originalname);
    }
});
let uploadfile = multer({
    storage: storage,
    //max filesize
    limits : {fileSize : maxSize}
}) .single("file");

//make sure the middleware can be used with ASYNC/AWAIT tech; 
let uploadFileMiddleware = util.promisify(uploadfile);

module.exports = uploadFileMiddleware;
