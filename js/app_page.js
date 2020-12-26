
let obr = document.querySelectorAll('.prew img');

for (let element of obr) {
  
  element.onclick = function(){
    element.classList.toggle('dole');
    anime({
      targets:obr,
      scale: {
        value: 1,
        duration: 500,
        delay: 10,
        easing: 'easeInOutQuart'
      },
      delay: 250
    });
    anime({
      targets: element,
      rotate: {
        value: 360,
        duration: 800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 500,
        delay: 10,
        easing: 'easeInOutQuart'
      },
      delay: 250
    });

 
  
   


  }
  
}
