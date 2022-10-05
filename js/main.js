//backtoptop
function backToTop(){
    let btnBack=document.querySelector('.btnback')
    window.addEventListener('scroll', () =>{
        const y = window.pageYOffset
        console.log('y', y)
        if (y>document.querySelector('body').clientHeight/2){
            btnBack.classList.add('active')
        }else{
            btnBack.classList.remove('active')
        }
    })
    btnBack.addEventListener('click',(ev)=>{
        ev.preventDefault()
        window.scrollTo({
            'top':0,
            'behavior':"smooth"
        })
    })
}
backToTop()

//hidenheader

function hideHeader(){
    let header=document.querySelector('.header'),
    lastScroll=0
    document.addEventListener('scroll', ()=>{
        const scrollCurrent = window.pageYOffset
        console.log(scrollCurrent)

        if (scrollCurrent===lastScroll) return 
        if (scrollCurrent > lastScroll && scrollCurrent > header.clientHeight){
            header.classList.add('hide')
        } else if(scrollCurrent<lastScroll) {
            header.classList.remove('hide')
        }
        lastScroll=scrollCurrent
    })
}
hideHeader()
