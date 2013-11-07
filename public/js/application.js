$(document).ready(function(){
  $("#get_color").click(function(){
    var colors = ["red", "blue", "green","pink","yellow", "grey"]
    $('#color_me li:nth-child('+(1+(Math.floor(Math.random() * 9)))+')').addClass(colors[Math.floor(Math.random() * colors.length)])

  });
});