const {generateImage} = require('./canvas');
const {uploadImage} = require('./upload');

console.log();

generateImage(96).then(()=>{
    uploadImage();
})
