var game, score=0;
$(document ).ready(function(){
    $("#gameStart").click(function(){
        game = setInterval(auto,5000); 
        $("#gameOver").html("");
    });
    $("#gameStop").click(function(){
        $("#raceTrack1 p").remove();
        $("#raceTrack2 p").remove();
        $("#raceTrack3 p").remove();
        $("#raceTrack4 p").remove();
        $("#raceTrack5 p").remove();
        $("#raceTrack6 p").remove();
        clearInterval(game);
        score=0
    });
    $("body").keydown(function(event){
        if(event.which==changeKeycode($("#raceTrack1 p:last").html())){
            $("#raceTrack1 p:last").remove();
            score++;
            $("#scores").html(score);
        }
        if(event.which==changeKeycode($("#raceTrack2 p:last").html())){
            $("#raceTrack2 p:last").remove();
            score++;
            $("#scores").html(score);
        }
        if(event.which==changeKeycode($("#raceTrack3 p:last").html())){
            $("#raceTrack3 p:last").remove();
            score++;
            $("#scores").html(score);
        }
        if(event.which==changeKeycode($("#raceTrack4 p:last").html())){
            $("#raceTrack4 p:last").remove();
            score++;
            $("#scores").html(score);
        }
        if(event.which==changeKeycode($("#raceTrack5 p:last").html())){
            $("#raceTrack5 p:last").remove();
            score++;
            $("#scores").html(score);
        }
        if(event.which==changeKeycode($("#raceTrack6 p:last").html())){
            $("#raceTrack6 p:last").remove();
            score++;
            $("#scores").html(score);
        }
    });
    
});
function changeKeycode(iconHtml){
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    for(i=0; i<26; i++){
        if(iconHtml==="<i class=\"fa-solid fa-"+arr[i]+"\"></i>"){
            return i+65;
        }
    }
    return 0;
}
//隨機亂數 0~max
function random(max){
    return Math.random() * max;
}
function myAlert(min){ 
    var str = "", range = min
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    // 隨機產生 
    for(var i=0; i<range; i++){ 
        pos = Math.round(Math.random() * (arr.length-1)); 
        str += arr[pos]; 
    }
    result="<i class='fa-solid fa-"+str+"'></i>";
    return result;
}
function auto(){
    // var autoText = document.getElementById('log');
    // autoText.innerHTML= myAlert(1)+autoText.innerHTML;
    $("#raceTrack1 h4").prepend("<p style='top:80px;'>" + myAlert(1) + "</p>");
    $("#raceTrack2 h4").prepend("<p style='top:120px;'>" + myAlert(1) + "</p>");
    $("#raceTrack3 h4").prepend("<p style='top:160px;'>" + myAlert(1) + "</p>");
    $("#raceTrack4 h4").prepend("<p style='top:200px;'>" + myAlert(1) + "</p>");
    $("#raceTrack5 h4").prepend("<p style='top:240px;'>" + myAlert(1) + "</p>");
    $("#raceTrack6 h4").prepend("<p style='top:280px;'>" + myAlert(1) + "</p>");

    $("#raceTrack1 p").animate({left:'250px'}, 5000, function() {
        str=$("#raceTrack1 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game);
            score=0;
        }
    });
    $("#raceTrack2 p").animate({left:'250px'}, 7000, function() {
        str=$("#raceTrack2 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game); 
            score=0;
        }
    });
    $("#raceTrack3 p").animate({left:'250px'}, 6000, function() {
        str=$("#raceTrack3 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game); 
            score=0;
        }
    });
    $("#raceTrack4 p").animate({left:'250px'}, 8000, function() {
        str=$("#raceTrack4 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game); 
            score=0;
        }
    });
    $("#raceTrack5 p").animate({left:'250px'}, 4000, function() {
        str=$("#raceTrack5 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game); 
            score=0;
        }
    });
    $("#raceTrack6 p").animate({left:'250px'}, 5000, function() {
        str=$("#raceTrack6 p:last").attr("style");  
        if(str.indexOf("250")>0){
            $("#gameOver").html("Game over");
            $("#raceTrack1 p").remove();
            $("#raceTrack2 p").remove();
            $("#raceTrack3 p").remove();
            $("#raceTrack4 p").remove();
            $("#raceTrack5 p").remove();
            $("#raceTrack6 p").remove();
            clearInterval(game); 
            score=0;
        }
    });
}


// function randomWord(randomFlag, min, max){ 
//     var str = "", range = min
//     arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
//     // 隨機產生 
//     if(randomFlag){ 
//         range = Math.round(Math.random() * (max-min)) + min; 
//     } 
//     for(var i=0; i<range; i++){ 
//         pos = Math.round(Math.random() * (arr.length-1)); 
//         str += arr[pos]; 
//     } 
//     return str; 
// }
// console.log(randomWord(true,2, 5));