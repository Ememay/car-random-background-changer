var btn = document.querySelector('#colorchangebtn');
var svg = document.querySelector('#svgggg');
btn.addEventListener('click', function() {
    var colorarray = [],
        colorcode = '';
    for (var i = 0; i < 3; i++) {
        colorarray.push(Math.floor(Math.random() * (255 + 0) - 0));
        colorcode += colorarray[i].toString(16);
    }
    btn.innerHTML = colorcode;
    svg.style.fill = `#${colorcode}`;
})