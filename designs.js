var button = $("#sizePicker").find("input").last();
button.on("click", makeGrid);

var color = 0;
$("#colorPicker").on("change", function(e){ color = e.target.value; });

function makeColumns() {
    for (var height = 0; height < $("#input_height").prop("value"); height++) {
        $("#pixel_canvas").append('<tr class="row'+height+'"></tr>');
    }
}

function makeGrid(e) {
    e.preventDefault();
    $("#pixel_canvas").text("");
    makeColumns();
    $("#pixel_canvas").find("tr").each(function(i){
        for (var width = 0; width < $("#input_width").prop("value"); width++) {
              $(this).append('<td class="col'+width+'"></td>');
        }
    });
}

$("#pixel_canvas").on("click", "td", function (e){
    $(this).css("background-color", color);
});
