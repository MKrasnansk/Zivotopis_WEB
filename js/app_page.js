
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




//animacie a farbicky
(function($) {
let colors = [ '#3b9ae1', '#f6be00', '#e64134', '#eb70b1', '#0f1a5f', '#e97c7c', '#ffffff'];


$('.prew img')

  .css({position: 'relative'})
  .on('click', function(){
    
   let e = $(this),
   className = 'otvor';
   e.toggleClass(className);
   e.siblings().removeClass(className).fadeToggle();
  });
   
$('.prew img')
  .on('mouseenter', function(){
    if ($(this).is(':animated')) return;

    let newColor = colors[Math.floor(Math.random() * colors.length)];
    $(this).animate({backgroundColor: newColor},500);
  });

  //galeria menu
 let galleries = $('.gallery-set');
 galleries.hide();

 let selected = $('.gallery-nav').find('.gal-activ'),
     selectedGallery;

function showGallery(selected){
  if (selected.length) {
    let id = selected.find('a').attr('href');
    selectedGallery =$(id);
  }
   let newGallery = selectedGallery.length ? selectedGallery : galleries.eq(0).show();

   galleries.not(newGallery).hide();
   newGallery.show().addClass(selected.data('class') || 'fadeInLeft');


} 

showGallery(selected);

$('.gallery-nav a').on('click', function(event){
  let li = $(this).parent(),
      fadeClass = 'fadeIn' + li.data('from');
      //tajne data
      li.data('class', fadeClass);
      //

    li.addClass('gal-activ')
    .siblings().removeClass('gal-activ');

    showGallery(li);

    event.preventDefault();
});


})(jQuery);