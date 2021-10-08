$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('body').on('click', '#faq .header', function (e) {
  const target = e.target;
  $(target).next().slideToggle();
  $(target).parent().toggleClass('open');
})