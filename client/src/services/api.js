const BASE_URL = "https://localhost:5001/api";
const IMAGES_URL = BASE_URL + "/images";

export const createImage = async ({ title, file }) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("file", file);
  
  const result = await fetch(IMAGES_URL, {
    method: "POST",
    mode: "cors",
    body: formData
  });

  if (!result.ok) {
    console.log(result);
    throw new Error("Error uploading image");
  }

  return await result.json();
};

export const getImages = async () => {
  const result = await fetch(IMAGES_URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!result.ok) {
    console.log(result);
    throw new Error("Error downloading image");
  }
  return await result.json();
};
