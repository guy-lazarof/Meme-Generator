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

function onImgSelect(elImgSelect) {
  const imgSelectId = elImgSelect.dataset.id
  // document.querySelector('.meme-editor').hidden = false
  // document.querySelector('.image-gallery').hidden = true
  document.querySelector('.image-gallery').style.display = "none"
  document.querySelector('.meme-editor').style.display = "block"
  resizeCanvas()
  setMemeImg(imgSelectId)
  renderMeme()
}

// function renderBooks () {
//   var books = gBooks
//   var strHtmls = books.map(book => `<tr>
//   <td class='td book-id'>${book.id}</td>
//   <td class='td book-title'>${book.title}</td>
//   <td class='td book-price'>${book.price}</td>
//   <td class='td book-rate'>${book.rate}</td>
//   <td class='td actions'><button class='btn deleteBtn' data-trans='delete-btn' onclick="onDeleteBook('${book.id}')"
//   '></button>
//   <button class='btn updateBtn' data-trans='update-btn' onclick="onUpdateBook('${book.id}')"
//   '></button>
//   <button class='btn readBtn' data-trans='read-btn' onclick="onReadBook('${book.id}')"
//   '></button>
//   </td>
// </tr> 
// `)
// document.querySelector('.table-body').innerHTML = strHtmls.join('')

// }