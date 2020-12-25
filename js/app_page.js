'use strict'

let obr = document.querySelectorAll('.prew img');

// for(let element of obr) {
//
//   element.onclick = function() {
//     for(let element of obr) {
//       element.style.transform = 'none';
//       this.style.transform = 'scale(3)';
//       console.log(this);
//       // if (element.type == 'mouseout') {
//       //   element.style.transform = 'none';
//       // }
    
//     }
//   }
// }
for(let item of obr) {
  item.onclick = function(){
    this.animate([
      {transform: 'scale(3)'}
    ], {
      duration: 1000,
      e
      easing: "cubic-bezier(0.1, 0.2, 0.98, 0.9)"
    });
  }
}


// item.addEventListener('mouseover', function(){
//   console.log(item);

//       element.style.transform = 'scale(3)';
// });