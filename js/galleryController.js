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
    const elSearchStr = document.querySelector('.search-input').value
      setGalleryFilter(elSearchStr.toLowerCase())
      renderGallery()
      document.querySelector('.search-input').value = elSearchStr
  }, 500);
}
function changeSearchInputIcon() {
  const elContent = document.querySelector('.search-input')
  const elSearchIcon = document.querySelector('.search-button')
  if (elContent.value !== '') {
    elSearchIcon.innerText = '✖️'
  }
}


function onDeleteSearchBarContent() {
  const elContent = document.querySelector('.search-input')
  const elSearchIcon = document.querySelector('.search-button')
  elContent.value = ''
  elSearchIcon.innerText = '🔎'
  setGalleryFilter('')
  renderGallery()
}