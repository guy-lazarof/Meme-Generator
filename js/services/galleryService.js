'use-strict'
var gGallery = getGallery()

function getGallery() {
  const srcImgs = [];
  for (let i = 1; i < 19; i++){
    srcImgs.push(`../../img/${i}.jpg`);
  }
  return srcImgs;
}