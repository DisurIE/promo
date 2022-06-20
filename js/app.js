    if(document.querySelector('aside')){
        const aside = document.querySelector('aside');
        const burgers = document.querySelectorAll('.menu-icon');
        if(window.screen.width > 768){
        aside.addEventListener('mouseover', e => {
            aside.classList.add('active');
        });
        aside.addEventListener('mouseout', e => {
            aside.classList.remove('active');
        });
        }
        burgers.forEach(element => {
            element.addEventListener('click', e => {
                aside.classList.toggle('active');
            });
        });
        
    }