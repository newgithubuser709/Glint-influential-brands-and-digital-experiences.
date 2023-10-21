/*  
    Functions are listed in line numbers which you can find easily 
    ____________________________________________________________________ .
*/

// 01 DOCUMENT ON SCROLL FUNCTION                               [1]
// 02 COUNTER ON SCROLL FUNCTION                                [2]
// 03 BACK TO TOP BUTTON SHOW ON SCROLL , ANIMATE ON MouseOver  [3]
// 04 ON SCROLL TOGGLER BTN BG CHANGE [START]                   [4]
// 05 CLICK  TOGGLER BTN TO toggle NAV BOX                      [5]
// 06 HIDE NAV from  Hide_nav_box()                             [6]
// 07 TRASITION SCROLL TO ELEMENTs FUNCTION                     [7]


// 
// ______________DOCUMENT ON SCROLL FUNCTION SCRIPT [START]_____________________________________[1]

var counted = 0;
window.onscroll = function() {


    // ______________COUNTER ON SCROLL FUNCTION SCRIPT [START]_____________________________________[2]

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() >= oTop) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    };

    // _________BACK TO TOP BUTTON SHOW ON SCROLL FUNCTION SCRIPT [START]_____________________________[3]

    let Back_To_Top = document.querySelector('.Back_To_Top');

    if ($(window).scrollTop() >= $('.hero_container_button_section').offset().top) {

        Back_To_Top.classList.add('Back_To_Top_SCRIPT');
    } else {

        Back_To_Top.classList.remove('Back_To_Top_SCRIPT');
    };


    let Back_To_Top_hover = document.querySelector('.Back_To_Top_hover');
    Back_To_Top_hover.addEventListener('mouseover', () => {

        Back_To_Top_hover.classList.add('Back_To_Top_hover_SCRIPT')
    })
    Back_To_Top_hover.addEventListener('mouseout', () => {

        Back_To_Top_hover.classList.remove('Back_To_Top_hover_SCRIPT')
    })



    // ___________ON SCROLL TOGGLER BTN BG CHANGE [START]____________________________________[4]


    let toggler_button_bg_change = document.querySelector('.toggler_button_bg_change');


    if ($(window).scrollTop() >= $('.hero_container_box_1_text').offset().top) {

        toggler_button_bg_change.classList.add('toggler_button_bg_change_SCRIPT');
    } else {

        toggler_button_bg_change.classList.remove('toggler_button_bg_change_SCRIPT');
    }

}


// ___________CLICK TOGGLER BUTTON TO toggle NAV BOX SCRIPT [START]____________________________________[5]


// toggler button hide for nav show  and click event
let toggler_button = document.querySelector('.toggler_button');
// nav box show
let navigation_box = document.querySelector('.navigation_box');
let navigation_box_inner = document.querySelector('.navigation_box_inner');
// click outside to close nav 
let navigation_box_closer = document.querySelector('.navigation_box_closer');


toggler_button.addEventListener('click', () => {
    // nav box show 
    navigation_box.classList.toggle('navigation_box_SCRIPT');
    navigation_box_inner.classList.toggle('navigation_box_inner_SCRIPT');
    // toggler button hide for nav show 
    toggler_button.classList.add('toggler_button_for-hide_SCRIPT');
    // click outside to close nav 
    navigation_box_closer.style.display = 'block';
})


// _________HIDE NAV BOX FROM HTML Hide_nav_box() FUNC SCRIPT [START]_____________________________[6]


function Hide_nav_box() {

    // nav box show 
    navigation_box.classList.remove('navigation_box_SCRIPT');
    navigation_box_inner.classList.remove('navigation_box_inner_SCRIPT');
    // toggler button hide for nav show 
    toggler_button.classList.remove('toggler_button_for-hide_SCRIPT');
    // click outside to close nav 
    navigation_box_closer.style.display = 'none';

}



// ______________TRASITION SCROLL TO ELEMENT FUNCTION SCRIPT [START]_____________________________________[7]


$(document).ready(function() {

    $('a').smoothScroll({

        offset: 0,

        // one of 'top' or 'left'
        direction: 'top',

        // only use if you want to override default behavior or if using $.smoothScroll
        scrollTarget: null,

        // automatically focus the target element after scrolling to it
        // (see https://github.com/kswedberg/jquery-smooth-scroll#focus-element-after-scrolling-to-it for details)
        autoFocus: false,

        // string to use as selector for event delegation
        delegateSelector: null,

        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll: function() {},

        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll: function() {},

        // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
        // from jQuery UI or elsewhere
        easing: 'easeInOutQuint',

        // speed can be a number or 'auto'
        // if 'auto', the speed will be calculated based on the formula:
        // (current scroll position - target scroll position) / autoCoefficient
        speed: 1700,

        // autoCoefficent: Only used when speed set to "auto".
        // The higher this number, the faster the scroll speed
        autoCoefficient: 2,

        // $.fn.smoothScroll only: whether to prevent the default click action
        preventDefault: true
    });

});



// jQuery Easing plugin install ...

// CommonJS

const jQuery = require('jquery');
require('jquery.easing')(jQuery);

// AMD
// define(['jquery', 'jquery.easing'], function(jQuery, easing) {
// easing(jQuery);
// });