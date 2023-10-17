const uploadfile = require("../middleware/upload");
const fs = require("fs");

//Upload file
const upload = async (req, res) => {
  try {
    await uploadfile(req, res);
    if (req.file == undefined) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    res
      .status(200)
      .send({
        message: "uploaded the file succesfully gap:" + req.file.orifinalname,
      });
  } catch (err) {
    //catch error for filesize
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size canot be larger than 2mb gap",
      });
    }
    res.status(500).send({
      message: `Could not upload the file": $(req.fille.orifinalname). $(err)`,
    });
  }
};

//get list of all files

const getlistFile = (req, res) => {
  const directoryPath = __basedir + "/resources/data/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files gap",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: directoryPath + file,
      });
    });
    res.status(200).send(fileInfos);
})

}
