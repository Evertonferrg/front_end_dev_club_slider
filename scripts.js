// primeiro passo e mapear quem e quem
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
 
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')
 
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')
 
// saber quando o botao foi clicado
function moveItemsOnClick(type){
    let listItens = document.querySelectorAll('.list .list-item')
    let thumItem = document.querySelectorAll('.thumb .thumb-item')
 
    if(type === 'next'){
        list.appendChild(listItens[0])
        thumb.appendChild(thumItem[0])
        container.classList.add('next')
    } else {
        list.prepend(listItens[listItens.length - 1])
        thumb.prepend(thumItem[thumItem.length - 1])
        container.classList.add('back')
    }
 
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}