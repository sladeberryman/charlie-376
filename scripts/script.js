$( document ).ready(function() {
  var points = 0;

  
  $('#meme').draggable({
    start:function() {
      console.log("DRAG");
      console.log($('#meme').offset().left);
      
      if ($('#meme').offset().left < 200) {
        message = "You're warm!";
      } else if (200 < $('#meme').offset().left < 600) {
        message = "Look closer!";
      }
      updateMessage();
    },

    drag: function(event, ui) {
      var memeRect = ui.helper[0].getBoundingClientRect();
      var goblinRect = $('#goblin')[0].getBoundingClientRect();

      if (isColliding(memeRect, goblinRect)) {
        $('#message-display').text("You defeated the Goblin! Refresh to start over!");
        $('#goblin').hide();
      }
    }
    
  });
  
  function updateMessage() {
    if (!$('#goblin').is(':hidden')) {
      $('#message-display').text(message);
    }
  }

  function isColliding(rect1, rect2) {
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }


});


