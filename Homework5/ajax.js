function ajaxGet(path, timeFare){
    var motcData=[];
    $.ajax({ 
        type: 'GET',
        url: path,
        dataType: 'json',
        success: res =>{
            $.each(res, function(i, item) {
                if(timeFare=="time"){
                    for(ii=0; ii<item.TravelTimes.length; ii++){
                        motcData.push({
                            "routeID":item.RouteID,
                            "fromStation" : item.TravelTimes[ii].FromStationName.Zh_tw,
                            "toStation" : item.TravelTimes[ii].ToStationName.Zh_tw,
                            "Time" : item.TravelTimes[ii].RunTime+item.TravelTimes[ii].StopTime,
                        })
                    }
                }
                else if (timeFare=="fare"){
                    motcData.push({
                        "originStationName" : item.OriginStationName.Zh_tw,
                        "destinationStationName" : item.DestinationStationName.Zh_tw,
                        "fares" : [item.Fares[0].Price, item.Fares[1].Price]
                    })
                }
            })
            

            if(timeFare=="time"){
                var list=[];
                for(i=0; i<motcData.length; i++){
                    list.push(motcData[i].routeID);
                }
                var result = list.filter(function(element, index, arr){
                    return arr.indexOf(element) === index;
                });
                for(i=0; i<result.length; i++){
                    $("#rowTime").append("<h2>"+result[i]+"</h2><div id="+result[i] +" class='row'></div>");
                }






                for(i=0; i<motcData.length; i++){
                    var strRouteID = "#"+motcData[i].routeID;
                    $(strRouteID).append("<div class='col-1 text-center bg-dark border rounded border-0 border-dark overflow-hidden text-white align-self-center'>"+ motcData[i].fromStation +"</div><div class='col-1 text-center'>-><br>"+motcData[i].Time+"s</div></div>");
                    if(i!=motcData.length-1){
                        if(motcData[i].routeID != motcData[i+1].routeID){
                            $(strRouteID).append("<div class='col-1 text-center bg-dark border rounded border-0 border-dark overflow-hidden text-white align-self-center'>"+ motcData[i].toStation +"</div>");
                        }
                    }
                }
            }
            else if (timeFare=="fare"){
                var list=[];
                for(i=0; i<motcData.length; i++){
                    list.push(motcData[i].originStationName);
                }
                var result = list.filter(function(element, index, arr){
                    return arr.indexOf(element) === index;
                });
                for(i=0; i<result.length; i++){
                    $("#ulOriginFare").append("<li><p class='dropdown-item'>"+ result[i] +"</p></li>");
                    $("#ulDestinationFare").append("<li><p class='dropdown-item'>"+ result[i] +"</p></li>");
                    $("#ulOriginTime").append("<li><p class='dropdown-item'>"+ result[i] +"</p></li>");
                    $("#ulDestinationTime").append("<li><p class='dropdown-item'>"+ result[i] +"</p></li>");
                }
    
                $("#ulOriginFare .dropdown-item").on("click", function(){
                    $("#dropdown1 button").html($(this).html());
                })
                
                $("#ulDestinationFare .dropdown-item").on("click", function(){
                    $("#dropdown2 button").html($(this).html());
                })
                    $("#ulOriginTime .dropdown-item").on("click", function(){
                    $("#dropdown3 button").html($(this).html());
                 })
                    $("#ulDestinationTime .dropdown-item").on("click", function(){
                    $("#dropdown4 button").html($(this).html());
                 })




                $("#btFare").on("click", function(){
                    var result1 = motcData.filter(function(element, index, arr){
                        return element.originStationName == $("#dropdown1 button").text() && element.destinationStationName == $("#dropdown2 button").text()
                    });
                    $("#price1").text(result1[0].fares[0]);
                    $("#price2").text(result1[0].fares[1]);
                })
            }
            console.log(res);
        },
        error: res =>{
            console.log("err");
        }
    });
    return motcData;
}


function GetAuthorizationHeader() {
    var AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    var AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';

    var GMTString = new Date().toGMTString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString };
}


$(document).ready(function(){
    $("#btDownload").click(function(){
        farePath="https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/"+ $("#selectMRT button").text()+"?%24format=JSON";
        timePath="https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/"+$("#selectMRT button").text()+"?%24format=JSON";
        ajaxGet(farePath, "fare");
        ajaxGet(timePath, "time");
        console.log (ajaxGet(farePath, "fare"));
    })
    $("#BtCheckJobNum").click(function () {
        var dataJSON = $("#inputCheckJobNum").val()
        read(dataJSON);
        $("#show").show();
    });
    $("#selectMRT .dropdown-item").on("click", function(){
        
        $("#selectMRT button").html($(this).html());
    })
    $("#selectMRT button").on("click", function(){
        $("#rowTime").html("");
        $("#ulOriginFare").html("");
        $("#ulDestinationFare").html("");
        
    })
});