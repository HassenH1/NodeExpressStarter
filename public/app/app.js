
const img = document.querySelector('img')
const div = document.querySelector("div")
for(let i = 0; i < 5; i++){
  let imgs = document.createElement('img')
  imgs.src = "/img/70sflower.png"
  div.appendChild(imgs)
}
