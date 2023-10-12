import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };

      fetch("https://postlogin.onrender.com/image-upload", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log('File uploaded:', result);
          // Handle the server's response here, e.g., update the UI with the uploaded file details
        })
        .catch(error => {
          console.error('Error uploading the file:', error);
          // Handle any errors that occur during the POST request
        });
    }
  };

  return (
    <div>
      <div>Image Upload</div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUploadComponent;


