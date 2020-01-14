const stringifiedBody = JSON.stringify({ markdown: '# test \n ## H2' })

const request = new Request('https://markdown-as-a-service.now.sh', {
  method: 'POST',
  body: stringifiedBody,
  headers: {
    'Content-type': 'application/json',
  },
})
fetch(request)
  .then(resp => {
    if (resp.status === 200) {
      return resp.json()
    } else {
      console.log('something went wrong')
    }
  })
  .then(resp => {
    const storyWrapper = document.getElementById('main')
    if (resp) storyWrapper.innerHTML = resp.html
  })
  .catch(error => {
    console.error(error)
  })
