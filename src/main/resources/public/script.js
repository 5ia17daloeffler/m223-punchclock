

function onCreate() {
    var data = "{\"checkIn\":\"2014-01-01T19:28:56.782Z\",\"checkOut\":\"2014-01-01T23:28:56.782Z\"}";

    $.ajax({
        type:"POST",
        url:"http://localhost:8081/entries",
        data: data,
        dataType: "json",
        contentType: "application/json"


        /*
        success: function (response) {
            
        }
        */
    });

}

function onShow() {
    
}

function onDelete() {
    
}