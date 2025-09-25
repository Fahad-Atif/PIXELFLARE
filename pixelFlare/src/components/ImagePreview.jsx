import React from "react";
import Loading from "./Loading";

function ImagePreview(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center" >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl ">
        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
            Original Image
          </h2>

          {props?.uploadImage ? (
            <img
              src={props.uploadImage}
              alt="Original"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-80 bg-gray-200">
              No Image Selected
            </div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-blue-600 text-white py-2">
            Enhanced Image
          </h2>

          {props.loading ? (
            <Loading />
          ) : props.enhancedImage ? (
            <>
              <img
                src={props.enhancedImage}
                alt="Enhanced"
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <div className="flex items-center justify-center h-80 bg-gray-200">
              No Enhanced Image
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <a href={props?.enhancedImage} download={props?.enhancedImage} >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 duration-300">Downlaod Image</button>
        </a>
      </div>
    </div>
  );
}

export default ImagePreview;
