import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import {enhancedImageAPI}  from "../utils/enhacedAPI";

function Home() {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState(false);

  const handleImageUpload = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    // Simulate image enhancement process API Call

    try {
      const enhanceImage = await enhancedImageAPI(file)
      setEnhancedImage(enhanceImage)
      setLoading(false)
    } catch (error) {
      window.alert(error.meesage)
    }

  }

  return (
    <>
      <ImageUpload handleImageUpload={handleImageUpload} />
      <ImagePreview  uploadImage={uploadImage} enhancedImage={enhancedImage} loading={loading} />
    </>
  );
}

export default Home;
