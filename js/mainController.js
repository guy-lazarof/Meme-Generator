'use-strict'
function onInit() {
  onInitMemeController()
  onInitGalleryController()
}

function onGalleryBtn() {
  const elImgGallerySection = document.querySelector('.img-gallery')
  if (elImgGallerySection.hidden === true ) {
    toggleImgGallerySectionDisplay()
    toggleMemeEditorSectionDisplay()
  }
  else {
    return
  }
}

function onImgSelect(elImgSelect) {
  const imgSelectId = elImgSelect.dataset.id
  toggleImgGallerySectionDisplay()
  toggleMemeEditorSectionDisplay()
  createMeme(imgSelectId)
  resizeCanvas()
  renderMeme()
}