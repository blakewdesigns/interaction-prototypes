let $window = $(window);
let $elem = $(".cardimg")
let docViewTop = $window.scrollTop();
let docViewBottom = docViewTop + $window.height();

let elemTop = $elem.offset().top;
let elemBottom = elemTop + $elem.height();

function isScrolledIntoView() {

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
        $elem.removeClass("reset")
    }
})
$window.scroll(function(){
    if ($window.scrollTop() === 0) {
        $elem.addClass("reset")
    }
})