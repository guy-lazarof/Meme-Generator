'use-strict'

function onInitGalleryController() {
  renderGallery()
}

function renderGallery() {
  var gallery = gGallery
  var strHtmls = gallery.map((img, idx) => `<div class="img img${idx}"><img src='${img}' style="width:100%"></div>`)
  document.querySelector('.grid-img-container').innerHTML = strHtmls.join('')
  console.log(strHtmls);
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