$(document).ready(function() {
    $('#myButton').click(function(){
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=cats", function(data){
               //console.log(data);
                $('#divImages').empty();
                for( i = 0 ; i < data.items.length; i ++){
                    $('#divImages').append("<img src=" + data.items[i].media.m + "/>");
            }
        })
    })
    
    $('#myButton1').click(function(){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=puppies", function(data){
             $('#divImages').empty();
                for( i = 0 ; i < data.items.length; i ++){
                    $('#divImages').append("<img src=" + data.items[i].media.m + "/>");
                }
        })
    })
    
    $('#myButton2').click(function(){
        var x = prompt("Enter the picture you would like to look at:")
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json",{
            tags : x,
            tagmode : "any",
            format: "json"
        }, function(data){
             $('#divImages').empty();
                for( i = 0 ; i < data.items.length; i ++){
                    $('#divImages').append("<img src=" + data.items[i].media.m + "/>");
                    }
        });                     
    });
});