import axios from "axios";

// Api key from .env

const PICKWISH_KEY = import.meta.env.VITE_PICKWISH_KEY;
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (image) => {
  try {
    // Hit API for sending image

    const taskId = await uploadImage(image);

    // Hit API for receiving enhanced image

    const enhancedImageData = await enhancedImagePolling(taskId);
    
    return enhancedImageData;

  } catch (error) {
    console.log("Something went wrong in enhancedAPI.js", error.message);
  }
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image_file", image);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": PICKWISH_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image. TaskId not found");
  }

  return data?.data?.task_id;
};

const getEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": PICKWISH_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image. TaskId not found");
  }

  return data?.data
};



// Polling concept

const enhancedImagePolling = async (taskId, retries = 0) => {
    const result = await getEnhancedImage(taskId)

    if(result?.state === 4){
        console.log("processing...")

        if(retries >= 20 ){
            throw new Error("Failed to process image. Please try again later")
        }

       await new Promise((resolve)=> setTimeout(resolve, 2000)) 
         return await enhancedImagePolling(taskId, retries + 1)
    }
    return result?.image
}