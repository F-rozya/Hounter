

window.addEventListener('scroll' , ()=>{
    document.body.style.cssText += `--paralax:${window.scrollY}px; --paralax-color:${window.scrollY};` 
})

const houseSlider = document.querySelector('.houses-slider')
const houseSliderButtonLeft = document.querySelector('.houses-head-navigate-sliderbuttons-buttonleft')
const houseSliderButtonRight = document.querySelector('.houses-head-navigate-sliderbuttons-buttonright')
let dd = houseSlider.scrollWidth / 2

houseSliderButtonLeft.addEventListener('click' , ()=>{
    if (houseSliderButtonLeft.className == 'houses-head-navigate-sliderbuttons-button houses-head-navigate-sliderbuttons-buttonleft active'){
        houseSlider.scrollLeft -= dd
    }
    setTimeout(() => {
        if (houseSlider.scrollLeft >= 0) {
            houseSliderButtonRight.classList.add('active')
        }
        if (houseSlider.scrollLeft <= 0) {
            houseSliderButtonLeft.classList.remove('active')
        }
    }, 500);
})
houseSliderButtonRight.addEventListener('click' , ()=>{
    if (houseSliderButtonRight.className == 'houses-head-navigate-sliderbuttons-button houses-head-navigate-sliderbuttons-buttonright active'){
        houseSlider.scrollLeft += dd
    }
    setTimeout(() => {
        if (houseSlider.scrollLeft > 0) {
            houseSliderButtonLeft.classList.add('active')
        }
        if (houseSlider.scrollLeft + houseSlider.clientWidth >= houseSlider.scrollWidth){
            houseSliderButtonRight.classList.remove('active')
        }
    }, 500);
})

const rewivesSlider = document.querySelector('.rewives-slider')
const rewivesSliderButtons = document.querySelectorAll('.rewives-sliderbuttons-button')
rewivesSlider.scrollLeft = rewivesSlider.scrollWidth / 4
let rewSldBtnRemove = ()=>{
    for (const item of rewivesSliderButtons) {
        item.classList.remove('active')
    }
}
rewivesSliderButtons.forEach((btn ,i)=>{
    btn.name = i
    btn.addEventListener('click' , ()=>{
        if (btn.name == 1) {
            rewivesSlider.scrollLeft = rewivesSlider.scrollWidth / 4
            rewSldBtnRemove()
            btn.classList.add('active')
        }
        if (btn.name == 0){
            rewivesSlider.scrollLeft = 0
            rewSldBtnRemove()
            btn.classList.add('active')
        }
        if (btn.name == 2){
            rewivesSlider.scrollLeft = rewivesSlider.scrollWidth
            rewSldBtnRemove()
            btn.classList.add('active')
        }
    })
})






function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('trigger-visible');
      } 
      window.addEventListener('scroll' , ()=>{
        if (window.scrollY <= 0) {
            change.target.classList.remove('trigger-visible')
        }
      })
    });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.trigger-act');
  
  setTimeout(()=>{
    for (let elm of elements) {
      observer.observe(elm);
    }
  
  } , 500)