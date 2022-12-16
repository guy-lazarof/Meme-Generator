'use-strict'

function onInitGalleryController() {
  renderGallery()
}

function renderGallery() {
  var gallery = getAllImgs()
  var strHtmls = gallery.map(img => `<img data-id='${img.id}' class="img img${img.id}" src='${img.url}' onclick="onImgSelect(this)">`)
  document.querySelector('.grid-img-container').innerHTML = strHtmls.join('')
  console.log(strHtmls);
}

function toggleImgGallerySectionDisplay() {
  const elImgGallerySection = document.querySelector('.img-gallery')
  elImgGallerySection.hidden === true ? elImgGallerySection.hidden = false : elImgGallerySection.hidden = true
}
