const BASE_URL = "https://localhost:5001/api";
const IMAGES_URL = BASE_URL+"/images";

export const createImage = async (form) => {
    const result = await fetch(IMAGES_URL, 
      {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: form
      });
      
      if (!result.ok) {
        console.log(result);
        throw new Error('Error uploading image');
      }

      return await result.json();
}

export const getImages = async () => {
  const result = await fetch(IMAGES_URL, {
    method: "GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!result.ok) {
    console.log(result);
    throw new Error('Error downloading image');
  }
  return await result.json();
}


