const cloudinary = require("cloudinary").v2;

// Cấu hình tài khoản Cloudinary
cloudinary.config({
  cloud_name: "df0vzh79h",
  api_key: "272674751627917",
  api_secret: "QnlRoGDG6daXsJM9dU_EoNnvWyM",
});

async function uploadImage(file) {
  try {
    const result = await cloudinary.uploader.upload(file);
    return result.url;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function downloadImage(url) {
  const publicId = cloudinary.utils.publicId(url);
  const format = cloudinary.utils.getFileExtension(url);
  const options = {
    public_id: publicId,
    format: format,
    crop: "scale",
    width: 600,
    quality: "auto",
  };
  const transformedUrl = cloudinary.url(publicId, options);
  return transformedUrl;
}

export {uploadImage, downloadImage}