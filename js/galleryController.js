'use-strict'

var gFilterBy = { memeKeywords: '', }

function onInitGalleryController() {
  renderGallery()
}

function renderGallery() {
  var gallery = getFilterImgs()
  var strHtmls = gallery.map(img => `<img data-id='${img.id}' class="img img${img.id}" src='${img.url}' onclick="onImgSelect(this)">`)
  document.querySelector('.grid-img-container').innerHTML = strHtmls.join('')
}

function toggleImgGallerySectionDisplay() {
  const elImgGallerySection = document.querySelector('.img-gallery')
  elImgGallerySection.hidden === true ? elImgGallerySection.hidden = false : elImgGallerySection.hidden = true
}

function onKeyUpSearch() {
  setTimeout(() => {
    const searchStr = document.querySelector('.search-input').value
      setMemeFilter(searchStr)
      renderGallery()
      document.querySelector('.search-input').value = searchStr
  }, 500);
}

function setMemeFilter(filterBy) {
  gFilterBy.memeKeywords = filterBy
  
}

function getFilterImgs() {
  var gImgs = getAllImgs()
  var filterImgs = gImgs.filter(img => img.keywords.find((keyword) => {
    if (keyword.includes(gFilterBy.memeKeywords)){return true}
  }))
  return filterImgs
}