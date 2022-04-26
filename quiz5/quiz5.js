
var textNode = document.createTextNode("hello cgu!");
$(document).ready(function(){
    txt = "<li>hello cgu!</li>";
    $("#myList").click(function(){
        $("#myList").append(txt);
        console.log($("ul li:last").text());
    });
});