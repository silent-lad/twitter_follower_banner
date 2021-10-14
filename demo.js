const {generateImage} = require('./lib/canvas');
const {uploadImage} = require('./lib/upload');


generateImage(2143).then(()=>{
    // uploadImage();
})
