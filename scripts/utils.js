// load header
var contentEl = document.getElementsByClassName('content')[0]

var headerAsPromise = fetch('/header.html')

headerAsPromise
  .then(function(response) {
    return response.text()
  })
  .then(function(headerHtml) {
    contentEl.insertAdjacentHTML('beforebegin', headerHtml)
  })

// load footer

var footerAsPromise = fetch('/footer.html')

footerAsPromise
  .then(function(response) {
    return response.text()
  })
  .then(function(footerHtml) {
    contentEl.insertAdjacentHTML('afterend', footerHtml)
  })
