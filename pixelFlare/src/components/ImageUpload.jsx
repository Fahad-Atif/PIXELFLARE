import React from "react";

function ImageUpload(props) {


  const onchange = (e) => {
    e.preventDefault()

    const file = e.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      props.handleImageUpload(file)
    }
    
    
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input onChange={onchange}  type="file" id="fileInput" className="hidden" />
        <span className="text-lg font-medium text-gray-600">
          Click and drag to upload your image
        </span>
      </label>
    </div>
  );
}

export default ImageUpload;
