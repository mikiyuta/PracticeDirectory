$(function(){
  $('.premium_tab li').click(function() {
    var index = $('.premium_tab li').index(this);
    $('.premium_tab li').removeClass('active');
    $(this).addClass('active');
    $('.premium_area ul.text').removeClass('show').eq(index).addClass('show');
  });

  $('.nitiun_tab li').click(function() {
    var index = $('.nitiun_tab li').index(this);
    $('.nitiun_area ul.text').removeClass('show').eq(index).addClass('show');
    $('.banner_area ul').removeClass('show').eq(index).addClass('show');
  });

});

$(function(){
  $('.free_tab li').click(function() {
    var index = $('.free_tab li').index(this);
    $('.free_tab li').removeClass('active');
    $(this).addClass('active');
    $('.premium_area ul.text').removeClass('show').eq(index).addClass('show');
  });

});