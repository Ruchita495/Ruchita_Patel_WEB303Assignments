/*
    Assignment #4
    Ruchita Patel
*/

$(function () {
    // your code here
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);

        function success(pos) {
            var lat = pos.coords.latitude;
            var lon = pos.coords.longitude;

            $("#locationhere").html("<p>Your Current Latitude is: "+ lat +"</p> <p>Your Current Longitude is:"+ lon +"</p>");

            if(localStorage) {
                var storedLat = localStorage.getItem("Latitude");
                var storedLon = localStorage.getItem("Longitude");
                var distance;

                if(storedLat && storedLon) {
                    $("#content").append("<p>Your previous Latitude is: "+ storedLat +"</p> <p>Your previous Longitude is:"+ storedLon +"</p>");

                    $("#content").append("<br><h1>Welcome back to the site...</h1>");

                    distance = calcDistanceBetweenPoints(lat, lon, storedLat, storedLon);

                    $("#content").append("<br> You traveled "+ (distance/1000).toFixed(2)+" kilometers since you last visited.");
                }
                else{
                    $("#content").append("<br><h1>Welcome to the page for the first time!</h1>");
                }
            }

            localStorage.setItem("Longitude", lon);
            localStorage.setItem("Latitude" , lat);
            
        }

        function fail() {
            $("#locationhere").html("<h1>We can not get your Location</h1>");
        }
    }
    else{
        $("#locationhere").html("<h1>Please enable location to move forward</h1>"); 
    }



    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


