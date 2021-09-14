import ("./main.css")

import {drawGalleryItem} from "./imag";
import images from "./images"

const galleryRootElement = document.getElementById("galleryRoot");

images.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))