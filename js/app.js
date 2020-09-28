document.addEventListener("DOMContentLoaded", function() {
	$(".collapse-item__title").click(function () {

		$header = $(this);
		$parent = $header.parent();
		//getting the next element
		$content = $header.next();
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$content.slideToggle(300, () => {
			if (!$content.is(":visible")) {
				$parent.removeClass('is-opened')
			} else {
				$parent.addClass('is-opened')
			}
		});
	});
});
