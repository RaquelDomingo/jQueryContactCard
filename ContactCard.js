$(document).ready(function(){
  $("#adduser").click(function(){
    var first = $("input[name=first]").val();
    var last = $("input[name=last]").val();
    var note = $("#note").val();
    console.log(first, last, note);
  $("#right").append("<div id = 'card'><p>" + first + " " + last + "</p><p id = 'back'> " + note +"</p></div>");
  return false;
});
$(document).on('click', '#card', function(){
  $(this).children().toggle();
});
});
