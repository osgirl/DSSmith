$(document).ready(function(){
    $('#menu-icon').on('click', function(){
        $(this).toggleClass('close');
        $(".header").toggleClass('mobile-header-expanded');
    });
    $('#searchToggle').on('click', function(){
        $('#floating-search-wrapper').toggleClass('hidden');
    });
});