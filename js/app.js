let napis = document.getElementsByClassName('iconBar');
let info = document.querySelectorAll('.iconinfo');
console.log(info);
    for (const it of info) {
        it.style.display = 'none';
    }


for (let mouse of napis) {
    mouse.addEventListener('mouseover', function(){
        let sused = mouse.nextElementSibling;
        sused.style.display = 'inline-flex';
    });
    mouse.addEventListener('mouseout', function(){
        let sused = mouse.nextElementSibling;
        sused.style.display = 'none';
    });
}