let img = ['imgs/1.png', 'imgs/2.png', 'imgs/3.png']
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let images = document.getElementById('img_id');
images.src = img[0]
prev.disabled = true
let count = 0;
prev.addEventListener('click', () => {
    console.log(count)
    console.log('prev clicked')

    count -= 1
    images.src = img[count]

    if(count===0){
        prev.disabled = true

    }
    if ( count <= img.length - 1) {
        next.disabled = false
    }

})
next.addEventListener('click', () => {
    console.log(count)
    console.log('next clicked')
    count += 1
    images.src = img[count]
    if(count){
        prev.disabled = false
    }
    if ( count === img.length - 1) {
        next.disabled = true
        prev.disabled = false
    }
})
