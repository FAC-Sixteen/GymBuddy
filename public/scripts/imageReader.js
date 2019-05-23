const upload = document.getElementById("upload-image");

const handleSelectedImage = e => {
  const image = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (image => {
    return e => {
      document.getElementById("preview-image").src = e.target.result;
    };
  })(image);

  reader.readAsDataURL(image);
};

if (window.FileReader) {
  upload.addEventListener("change", handleSelectedImage);
} else {
  alert("This browser does not support FileReader");
}
