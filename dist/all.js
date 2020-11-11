function openDesc(event) {
  let child = $(event.target).children('.card__description-block');
  let css_display = $(child).css('display');

  if (css_display == 'none') {
    $(child).fadeIn('slow', 'linear');
    $(event.target).removeClass('card_desc-close');
    $(event.target).addClass('card_desc-open');
  } else {
    $(child).fadeOut('slow', 'linear');
    $(event.target).removeClass('card_desc-open');
    $(event.target).addClass('card_desc-close');
  }
}

var on_event = 'mouseover';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  on_event = 'click';
}

$('.card').on(on_event, openDesc);

if (on_event == 'mouseover') {
  $('.card').on('mouseout', openDesc);
}
//# sourceMappingURL=all.js.map
