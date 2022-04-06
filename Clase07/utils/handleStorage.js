const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const pathStorage = `${__dirname}/../storage`
        callback(null, pathStorage)
    },
    filename: (req, file, callback) => {
        const ext = file.originalname.split(".").pop()
        const filename = `file_${Date.now()}.${ext}`;
        callback(null, filename)
    }
});

//creamos el middleware
const uploadFile = multer({ storage })
module.exports = uploadFile