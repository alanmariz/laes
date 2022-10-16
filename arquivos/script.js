const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
$(document).on('click','.flip',function(){
	let card =  $(this).closest('.card')
	if(card.hasClass('flip-it')) card.removeClass('flip-it')
	else card.addClass('flip-it')
})


$('.card').each(function(){
	let href = $(this).data('href')
	$(this).find('.image').css({
		backgroundImage:['url(',href,')'].join('')
	})
})