const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')

const loadImage = (entradas) =>{

    entradas.forEach((entrada)=>{
        if( entrada.isIntersecting ){
            entrada.target.classList.add('visible')
        }else{
            entrada.target.classList.remove('visible')
        }
    })

}

const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: 1.0
});

observer.observe(image1)
observer.observe(image2)