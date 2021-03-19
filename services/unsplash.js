import axios from "axios";

// const accessKey = "zwIGZ28bc2vDdUvvR5K-zo94zhLrw-W7vigla90c7Mk";

// const apiEndpoint = "https://api.unsplash.com/";

export async function getMotorcyclePhotos() {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=motorcyle`,
    {
      params: {
        client_id: "zwIGZ28bc2vDdUvvR5K-zo94zhLrw-W7vigla90c7Mk",
        count: 1
      }
    }
  );
  console.log(res);
  return res;
}
