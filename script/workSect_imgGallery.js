//[1] click on copyLink icon in workSect imgs to show text Link copied 
//[2] click on images in workSect to show img gallery
//[3] click outside on images in img gallery to hide img gallery 
//[4] scroll Top in img gallery to hide img gallery 
// 
// 

//[1] click on copyLink icon in workSect imgs to show text Link copied 
$(".work-box-proj-link").click(function() {
    $(this).addClass("work-box-proj-link_SCRIPT_active");
    $(".work-box-proj-link").mouseout(function() {
        setTimeout(function() {
            $(".work-box-proj-link").removeClass("work-box-proj-link_SCRIPT_active");
        }, 1600);
    });
})


//[2] click on images in workSect to show img gallery
$(document).on('click', function(eshow) {
    if ($(eshow.target).is('.work-section-inner-overlay') || $(eshow.target).is('.plus-i-w-s') || $(eshow.target).is('.work-box-text-h5') || $(eshow.target).is('.work-box-text-p') && !$(eshow.target).is('.work-box-proj-link')) {
        $(".work_img_gallery").addClass("work_img_gallery_SCRIPT");
    }
});


//[3] click outside on images in img gallery to hide img gallery 
$('.work_img_gallery').on('click', function(ehide) {
    if ((!$(ehide.target).is('.work_img_gallery_img_box_imgs')) &&
        (!$(ehide.target).is('.work_img_gallery_text_h3')) && (!$(ehide.target).is('.work_img_gallery_text_p'))) {
        $(".work_img_gallery").removeClass("work_img_gallery_SCRIPT");
    }
});


//[4] scroll Top in img gallery to hide img gallery 
$(window).scroll(function() {
    $(".work_img_gallery").removeClass("work_img_gallery_SCRIPT");
});