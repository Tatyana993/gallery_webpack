export function drawGalleryItem(item) {
  const itemElement = document.createElement("div");
  itemElement.className = "gallery-item";

  const resourseWrapElement = document.createElement("div");
  resourseWrapElement.className = "gallery-item_resourse";

if (item.type ==="image") {
  const imageElement = document.createElement("img");
  imageElement.className = "gallery-item_image";
  imageElement.src = item.resourse;

  resourseWrapElement.appendChild(imageElement);

} else if (item.type === "audio") {
  const audioElement = document.createElement("audio");
  audioElement.className = "gallery-item_audio";
  audioElement.src = item.resourse;
  audioElement.controls = true;

  resourseWrapElement.appendChild(audioElement);
} else if (item.type === "video") {
  const videoElement = document.createElement("video");
  videoElement.className = "gallery-item_video";
  videoElement.src = item.resourse;
  videoElement.controls = true;
  resourseWrapElement.appendChild(videoElement);

}
  const titleElement = document.createElement("span");
  titleElement.className = "gallery-item_title";
  titleElement.textContent = item.title;

  itemElement.appendChild(resourseWrapElement);
  itemElement.appendChild(titleElement);

  return itemElement;
}