let getPicture = async () => {
  return fetch("https://picsum.photos/v2/list?limit=30");
};

async function createImageTiles() {
  const pictureList = await getPicture().then((response) => response.json());
  const imagesContainer = document.querySelector("#images-container");
  pictureList.forEach((picture) => {
    const img = document.createElement("img");
    img.src = picture.download_url;
    imagesContainer.appendChild(img);
  });
}

createImageTiles();
