var preload = document.getElementById('preload');
var body = document.querySelector('.body');

// HERO CHILDS ANIMATE WHEN THE PRE LOADER ENDS 
var hero_container_box_1_text = document.querySelector('.hero_container_box_1_text');
let hero_container_box_1_icons_container = document.querySelector('.hero_container_box_1_icons_container');


function preload_function() {

    preload.classList.add('preload-js');
    body.style.overflowY = 'scroll';

    if (preload.classList.contains('preload-js')) {

        hero_container_box_1_text.classList.add('hero_container_box_1_text_SCRIPT');
        hero_container_box_1_icons_container.classList.add('hero_container_box_1_icons_container_SCRIPT')
    }

};