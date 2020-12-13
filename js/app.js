(function ($) {
$('#iihome').hide();
$('#iigallery').hide();
$('#iiabout').hide();
$('#iicontact').hide();
$('#iistore').hide();


$("#ihome").on('mouseleave', function(){
$('#iihome').hide(); });
$("#ihome").on('mouseenter', function(){
$('#iihome').slideToggle(); });

$("#igallery").on('mouseleave', function(){
$('#iigallery').hide(); });
$("#igallery").on('mouseenter', function(){
$('#iigallery').slideToggle(); });

$("#iabout").on('mouseleave', function(){
$('#iiabout').hide(); });
$("#iabout").on('mouseenter', function(){
$('#iiabout').slideToggle(); });
    
$("#icontact").on('mouseleave', function(){
$('#iicontact').hide(); });
$("#icontact").on('mouseenter', function(){
$('#iicontact').slideToggle(); });
    
$("#istore").on('mouseleave', function(){
$('#iistore').hide(); });
$("#istore").on('mouseenter', function(){
$('#iistore').slideToggle(); });
    



}(jQuery));



