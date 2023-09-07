$( document ).ready(function() {
  var points = 0;
  
  $('#meme').click(
    function() {
      console.log("CLICK");
      points += 2;
      updatePoints();
    });
  
  $('#meme').draggable({
    start:function() {
      console.log("DRAG");
      console.log($('#meme').offset().left);
      
      if ($('#meme').offset().left < 200) {
        points += 5;
      } else if (200 < $('#meme').offset().left < 600) {
        points += 7;
      } else {
        points += 9;
      }
      updatePoints();
    }
  });
  
  function updatePoints() {
    $('#points-display').text("Wow Points: " + points);
  }
  
  
});