'use-strict'
// var display = 
function onInit() {
  onInitMemeController()
  onInitGalleryController()
}

function onGalleryBtn() {
  toggleImgGallerySectionDisplay()
  toggleMemeEditorSectionDisplay()
}

function onImgSelect(elImgSelect) {
  const imgSelectId = elImgSelect.dataset.id
  // document.querySelector('.meme-editor').hidden = false
  // document.querySelector('.img-gallery').hidden = true
  toggleImgGallerySectionDisplay()
  toggleMemeEditorSectionDisplay()
  resizeCanvas()
  setMemeImg(imgSelectId)
  renderMeme()
}