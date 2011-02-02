$(document).ready(function(){
    var appendZero = function( t ){ return (t < 10 ? '0' : '') + t};
    
    //refresh the cam
    var camRefresh = function(){
        var imageUrl = "http://homepages.uc.edu/~nashdb/images/webcam/ccam.jpg";
        var formattedImageUrl = "url('" + imageUrl + "?"+ (new Date()).getTime() + "')";
        $("body").css("background-image", formattedImageUrl);
    };
    
    //clock routine
    (function clockUpdate(){
        var ct = new Date();
        $('#clock').html( appendZero(ct.getHours()  ) + ':' + 
                          appendZero(ct.getMinutes()) + ':' + 
                          appendZero(ct.getSeconds()) );
        ct.setHours( ct.getHours >= 23 ? 0 : ct.getHours + 1 );
        ct.setMinutes( ct.getMinutes >= 59 ? 0 : ct.getMinutes + 1);
        ct.setSeconds( ct.getSeconds >= 59 ? 0 : ct.getSeconds + 1);
        ct.setMilliseconds(0);
        window.setTimeout( clockUpdate , (ct.getTime() - (new Date())) );
    })();
    
    //set the alarm for the trigger event
    (function alarmFunc(){
        /*
        var td = new Date();
        var hour = td.getHours();
        var minute = td.getMinutes();
        
        //alarm condition: Every hour
        hour = hour + ( minute < 15 ? 0 : 1);
        
        td.setHours(hour);
        td.setMinutes(15);
        td.setSeconds(0);
        td.setMilliseconds(0);
        
        var timeTilAlarm = function(){ return ( td.getTime() - (new Date()) ) };
        */
        var timeTilAlarm = 15*60*1000;
        //set alarm event
        window.setTimeout(function(){
            //alarm event
            camRefresh();
            //set next alarm
            alarmFunc();            
        }, timeTilAlarm );
        
    })();
    
    $('body').click(camRefresh);
});