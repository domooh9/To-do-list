
let form = document.querySelector("form")
form.addEventListener('submit', e => {
  e.preventDefault()
 myToDo(e.target.submit_bar.value)
 form.reset()
})
function myToDo(text){
  let btn = document.createElement('button')
  btn.addEventListener('click', (e) => {
  e.target.parentNode.remove()

  })
  btn.innerText = 'x'
  let p = document.createElement('p')
  p.innerText = text
  p.appendChild(btn)
  
  document.querySelector('.my-4').appendChild(p)
}



