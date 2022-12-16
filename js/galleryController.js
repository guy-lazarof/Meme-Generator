'use-strict'

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
  changeSearchInputIcon()
  setTimeout(() => {
    const searchStr = document.querySelector('.search-input').value
      setGalleryFilter(searchStr.toLowerCase())
      renderGallery()
      document.querySelector('.search-input').value = searchStr
  }, 500);
}
function changeSearchInputIcon() {
  const content = document.querySelector('.search-input')
  const searchIcon = document.querySelector('.search-button')
  if (content.value !== '') {
    searchIcon.innerText = '✖️'
  }
}


function onDeleteSearchBarContent() {
  const content = document.querySelector('.search-input')
  const searchIcon = document.querySelector('.search-button')
  content.value = ''
  searchIcon.innerText = '🔎'
  setGalleryFilter('')
  renderGallery()
}