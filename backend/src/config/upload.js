const path = require('path');

const Multer = require('multer');

module.exports = {
  // eslint-disable-next-line new-cap
  storage: new Multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
