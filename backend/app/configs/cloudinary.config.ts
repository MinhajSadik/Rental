const multer = require ('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
   
const imageStorage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
    folder: 'images',
    allowedFormats: ['jpg', 'jpeg', 'png'],
    // transformation: [{ width: 500, height: 500, crop: 'limit' }]
}
});

const videoStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'videos',
      resource_type: 'video',
      allowedFormats: ['mp4', 'webm'] // Specify allowed video formats
    }
});

const uploadImages = multer({ storage: imageStorage });
const uploadVideo = multer({ storage: videoStorage });

export const upload = {
    uploadImages,
    uploadVideo
}