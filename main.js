var typed  = new Typed('.text',{
    strings:["GAME OVER","Winner "],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    
    loop:true
});


document.addEventListener('DOMContentLoaded', function () {
    const pacman = document.querySelector('.pacman');
    let direction = 1;

    function movePacman() {
        const currentPosition = pacman.getBoundingClientRect();
        const maxX = window.innerWidth - pacman.offsetWidth;

        if (currentPosition.left <= 0) {
            direction = 1;
        } else if (currentPosition.left >= maxX) {
            direction = -1;
        }

        pacman.style.left = currentPosition.left + 5 * direction + 'px';
    }

    setInterval(movePacman, 50);
});