
// let obr = document.querySelectorAll('.prew img');

// for (let element of obr) {
  
//   element.onclick = function(){
//     anime({
//       targets:obr,
//       scale: {
//         value: 1,
//         duration: 300,
//         delay: 10,
//         easing: 'easeInOutQuart'
//       },
//       zIndex: {
//         value: 1,
//       }
//     });
//     anime({
//       targets: element,
//       scale: {
//         value: 3,
//         duration: 300,
//         delay: 10,
//         easing: 'easeInOutQuart'
//       },
//       zIndex: {
//         value: 18,
//       }
//     });
//   }
// }





(function($) {
let colors = [ '#3b9ae1', '#f6be00', '#e64134', '#eb70b1', '#0f1a5f', '#e97c7c', '#ffffff'];


$('.prew img')
  .css({position: 'relative'})
  .on('click', function(){
   let e = $(this),
   className = 'otvor';
   e.toggleClass(className);
  });
   
$('.prew img')
  .on('mouseenter', function(){
    if ($(this).is(':animated')) return;

    let newColor = colors[Math.floor(Math.random() * colors.length)];
    $(this).animate({backgroundColor: newColor},1000);
  });
})(jQuery);