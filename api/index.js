const {generateImage} = require('./canvas');
const {uploadImage} = require('./upload');


module.exports = async (req, res) => {
    await generateImage(req.body.followers_count)
    var reply = await uploadImage();
    res.json(reply);   
};