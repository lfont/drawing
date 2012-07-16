/*
A simple canvas drawing library - Demo
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

jQuery(function ($) {
    var drawer = window.drawing.canvasDrawer($("#canvas")[0]),
        eventShapeDrawer = drawer.eventShapeDrawer();

    $("#kind").change(function () {
        var shape = $(this).val();
        eventShapeDrawer.draw(shape);
    }).change();
});
