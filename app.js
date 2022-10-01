$(document).ready(function () {
  var songCount = 0;
  var partCount = 0;

  $("#addSong").on("click", function () {
    var newSong = $("<tr>");
    var cols = "";

    cols += '<td><input type ="text" class="form-control" name="song' + songCount + '"/></td>';
    newSong.append(cols);
    $("table.order-list").append(newSong);
    songCount++;
  })

})