$(document).ready(function(){
  $("#form1").submit(function(event) {

    var letters = $("input#sentenceInput").val().split("");

    for (var i = 0; i < letters.length; i ++) {
      letters[i] = letters[i].replace('a' ,'-').replace('e','-').replace('i','-').replace('o', '-').replace('u','-');
    }
    var puzzle = letters.join(" ");
    $("#sentenceOutput").text(puzzle);

    event.preventDefault();
  });
});
