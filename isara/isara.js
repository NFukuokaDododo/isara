$(function() {
    $('.question').hover(
        function(){
            $(this).css('text-decoration', 'underline');
        },
        function(){
            $(this).css('text-decoration', 'none');
        }
    )
    $('.question-and-answer').click(function() {
        var $answer = $(this).find('.qa-answer');
        if($answer.hasClass('open')) { 
          $answer.removeClass('open');
          // slideUpメソッドを用いて、$answerを隠してください
          $answer.slideUp();
          
        } else {
          $answer.addClass('open'); 
          // slideDownメソッドを用いて、$answerを表示してください
          $answer.slideDown();
          
        }
      });
});