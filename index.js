let iphones = {
    black: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-midnight?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712887881",
    silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712887888",
    blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888655",
    green: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1656712888128",
    pink: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1657641867367",
    red: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656720518797"
}





let btns = document.querySelectorAll('button')
let img = document.querySelector('.img-screen')
let span = document.querySelector('.span')
let clr1 = document.querySelector('.color1')
let clr2 = document.querySelector('.color2')
let clr3 = document.querySelector('.color3')
let clr4 = document.querySelector('.color4')
let clr5 = document.querySelector('.color5')
let clr6 = document.querySelector('.color6')
let imr = document.querySelector('.img-right')

let open_h2 = document.querySelector('.open_h2')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')

let cls_btn = document.querySelector('.close_btn')

let open_item = document.querySelectorAll('.item')

console.log(img);
btns.forEach((btn) => {
btn.onclick = () => {
    let color = btn.getAttribute('data-color')
    let imgB = iphones[color]
    
    img.style.backgroundImage = `url("${imgB} )`

    img.style.transition = '1s'
}
})

clr1.onmouseenter = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
}

clr2.onmouseenter = () => {
    span.innerHTML = 'green'
    span.style.color = 'green'
}

clr3.onmouseenter = () => {
    span.innerHTML = 'silver'
    span.style.color = 'silver'
}


clr4.onmouseenter = () => {
    span.innerHTML = 'blue'
    span.style.color = 'rgb(105, 171, 206)'
}

clr5.onmouseenter = () => {
    span.innerHTML = 'pink'
    span.style.color = 'rgb(247, 132, 152)'
}

clr6.onmouseenter = () => {
    span.innerHTML = 'red'
    span.style.color = 'red'
}

clr2.onmouseleave = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
    
}

clr3.onmouseleave = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
    
}

clr4.onmouseleave = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
    
}

clr5.onmouseleave = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
    
}

clr6.onmouseleave = () => {
    span.innerHTML = 'midnight'
    span.style.color = 'black'
    
}

imr.onmouseenter = () => {
    img.innerHTML = 'SUIIIIIIIIIII' 
}

imr.onmouseleave = () =>{
    img.innerHTML = 'i am street photographer'
}

open_h2.onclick = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(() => {
       modal_bg.style.opacity = '1'
       modal.style.opacity = '1'
       modal.style.transform = 'transform: translate(-50%, -50%) scale(1)'
    },200)
}

cls_btn.onclick = () => {
    modal.style.display = 'none'
    modal_bg.style.display = 'none'


}


open_item.forEach(item => {
    item.onclick = () =>{
        item.style.height = '150px'
        item.style.background = 'antiquewhite'
    }
})


open_item.forEach(itemTwo => {
    itemTwo.onmouseleave = () =>{
        itemTwo.style.height = '100px'
        itemTwo.style.background = '#c4c4c4'
    }
})
