
var textNode = document.createTextNode("hello cgu!");
$(document).ready(function(){
    txt = "<li>Nice click<3</li>";
    $("#myList").click(function(){
        $("#myList").append(txt);
        console.log($("ul li:last").text());
    });
});
