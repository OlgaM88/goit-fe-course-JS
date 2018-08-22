'use strict'

const galleryItems = [
    { preview: 'img/preview/beach-holiday-vacation-caribbean.jpg', fullview: 'img/fullview/beach-holiday-vacation-caribbean (1).jpg', alt: "alt text 1" },
    { preview: 'img/preview/pexels-photo-417083.jpeg', fullview: 'img/fullview/pexels-photo-417083 (1).jpeg', alt: "alt text 2" },
    { preview: 'img/preview/pexels-photo-96389.jpeg', fullview: 'img/fullview/pexels-photo-96389 (1).jpeg', alt: "alt text 3" },
    { preview: 'img/preview/sea-boot-seychelles-water.jpg', fullview: 'img/fullview/sea-boot-seychelles-water (1).jpg', alt: "alt text 4" },
    { preview: 'img/preview/pexels-photo-157398.jpeg', fullview: 'img/fullview/pexels-photo-157398 (2).jpeg', alt: "alt text 5" },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const imageGallery = document.querySelector('.js-image-gallery');

  const createFullviewImage = ({fullview, alt}) => {

  const fullviewItem = document.createElement('div');
  fullviewItem.classList.add('fullview');

  const firstItem = galleryItems[0];
  const fullviewImage = document.createElement('img');
  fullviewImage.classList.add('fullview-image');
  fullviewImage.setAttribute("src", firstItem.fullview);
  fullviewImage.setAttribute('alt', firstItem.alt);

  fullviewItem.append(fullviewImage);
  return fullviewItem;
}

const fullImage = createFullviewImage(galleryItems);
imageGallery.append(fullImage);

const createGalleryItem = ({preview, alt, fullview}) => {

    const galleryItem =  document.createElement('li');
    galleryItem.classList.add('gallery-item');

    const galleryItemImage = document.createElement('img');
    galleryItemImage.classList.add('gallery-item-image');
    galleryItemImage.setAttribute("src", preview);
    galleryItemImage.setAttribute("alt", alt);
    galleryItemImage.setAttribute("data-fullview", fullview);

    galleryItem.append(galleryItemImage);
    return galleryItem;
}


const createGalleryList = galleryItems => {
    const element = galleryItems.map(galleryItem => createGalleryItem(galleryItem));
    return element;
}

const list = document.createElement('ul');
list.classList.add('list-gallery');
const galleryList = createGalleryList(galleryItems);
list.append(...galleryList)
imageGallery.append(list); 

list.addEventListener('click', handlerClickImage);

function handlerClickImage (evt) {
    const target = evt.target;
    if(target.nodeName == 'IMG'){
      const imageFullview = document.querySelector('.fullview-image');
      const value = target.getAttribute('data-fullview');
      imageFullview.src = value;
     
    }
}

list.addEventListener('mousedown', handlerFocus);
list.addEventListener('mouseout', handlerFocusOut);

function handlerFocus({target}){
    const nodeName = target.nodeName;
    if(nodeName == 'IMG'){
         target.classList.add('active');       
     }
    }

function handlerFocusOut(evt){
    const nodeName = evt.target.nodeName;
    const itemActive = document.querySelector('.active');
    itemActive.classList.remove('active'); 
}
   }
  )