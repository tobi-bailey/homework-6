// get city weather
function searchCity (weather){ 
    var apiKey = "d89ad78e459b7e68642985f40ec4ca81"
    // key with metrics
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + weather + "&units=metric&appid=" + apiKey
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "jsonp"
    }).then(function(response){
        // current day details
        // city name
        var cityName = $(".cityName").text(response.city.name);
        // current date
        var getDate = new Date (response.list[0].dt_txt)
        var currentDate = $(".currentDate").text("(" + getDate.getDate() + "/" + getDate.getMonth() + "/" + getDate.getFullYear() + ")");
        // insert current weather icon
        var iconcode = response.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#wicon').attr('src', iconurl);
        // current temperature
        var temp = $(".temp").text("Temperature: " + response.list[0].main.temp + " C");
        // current humidity
        var humidity = $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");
        // current wind speed
        var wind = $(".wind").text("Wind Speed: " + response.list[0].wind.speed + " MPH");

       
        // day one data
        var dateOne = new Date (response.list[4].dt_txt);
        var dateOneResult = $("#date-1").text(dateOne.getDate() + "/" + dateOne.getMonth() + "/" + dateOne.getFullYear());
        // day one weather icon
        var iconcodeOne = response.list[4].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcodeOne + ".png";
        $('#wicon1').attr('src', iconurl);
        // day one temperature
        var tempOne = $("#temp-1").text("Temp: " + response.list[4].main.temp + " C");
        // day one humidity
        var humidityOne = $("#humidity-1").text("Humidity: " + response.list[4].main.humidity + "%");

        // day two data
        var dateTwo = new Date (response.list[12].dt_txt);
        var dateTwoResult = $("#date-2").text(dateTwo.getDate() + "/" + dateTwo.getMonth() + "/" + dateTwo.getFullYear());
        // day two weather icon
        var iconcodeTwo = response.list[12].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
        $('#wicon2').attr('src', iconurl);
        // day two temperature
        var tempTwo = $("#temp-2").text("Temp: " + response.list[12].main.temp + " C");
        // day two humidity
        var humidityTwo = $("#humidity-2").text("Humidity: " + response.list[12].main.humidity + "%");

        // day three data
        var dateThree = new Date (response.list[20].dt_txt);
        var dateThreeResult = $("#date-3").text(dateThree.getDate() + "/" + dateThree.getMonth() + "/" + dateThree.getFullYear());
        // day three weather icon
        var iconcodeThree = response.list[20].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
        $('#wicon3').attr('src', iconurl);
        // day three temperature
        var tempThree = $("#temp-3").text("Temp: " + response.list[20].main.temp + " C");
        // day three humidity
        var humidityThree = $("#humidity-3").text("Humidity: " + response.list[20].main.humidity + "%");

         // day four data 
         var dateFour = new Date (response.list[28].dt_txt);
         var dateFourResult = $("#date-4").text(dateFour.getDate() + "/" + dateFour.getMonth() + "/" + dateFour.getFullYear());
         // day four weather icon
         var iconcodeFour = response.list[28].weather[0].icon;
         var iconurl = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
         $('#wicon4').attr('src', iconurl);
         // day four temperature
         var tempFour = $("#temp-4").text("Temp: " + response.list[28].main.temp + " C");
         // day four humidity
         var humidityFour = $("#humidity-4").text("Humidity: " + response.list[28].main.humidity + "%");

        // day five data 
        var dateFive = new Date (response.list[35].dt_txt);
        var dateFiveResult = $("#date-5").text(dateFive.getDate() + "/" + dateFive.getMonth() + "/" + dateFive.getFullYear());
        // day five weather icon
        var iconcodeFive = response.list[35].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
        $('#wicon5').attr('src', iconurl);
        // day five temperature
        var tempFive = $("#temp-5").text("Temp: " + response.list[35].main.temp + " C");
        // day five humidity
        var humidityFive = $("#humidity-5").text("Humidity: " + response.list[35].main.humidity + "%");

        console.log(response)

        // for UV index
        var lat = response.city.coord.lat
        var lon = response.city.coord.lon

        getUV(lat, lon)
    }) 
};

// get UV index
function getUV(lat, lon){
    var apiKey = "d89ad78e459b7e68642985f40ec4ca81"
    var uvURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
    console.log(uvURL)
    $.ajax({
        url: uvURL,
        method: "GET",
        dataType: "json"
    }).then(function(data){
        // var unIndex = $(".uv").text(response.)
        console.log(data);
    })
};

// change UV color

// save to local storage
window.onload = function(){
    var searchButton = $("#searchCity");
    var inputCity = $("#inputCity").val().trim();
    inputCity.value =  localStorage.getItem("City Name"); 
  }

// append 
$("#searchCity").on("click", function(event) {
   event.preventDefault();
   var inputCity = $("#inputCity").val().trim();
   localStorage.setItem("City Name", inputCity);  
    $(".recentlySearchedCities").append(inputCity);
   searchCity(inputCity);
   console.log(inputCity)
   });


// create click function for button and call search city function 
// $("#recentlySearchedCities  or buttons").on("click", "button", function(event) {
//     event.preventDefault();
//     var previousCity = $("#button"); 
//      $(".recentlySearchedCities").append(inputCity);
//     searchCity(inputCity);
//     console.log(inputCity)
//     });



// use THIS because we have multiple buttons with same class 












   // // save city in local storage
// window.onload = function(){
//     inputCity.value =  localStorage.getItem("City Name"); 
//   }
  
  // pull from local storage
//   $(".u-full-width").click(function(event){
//       event.preventDefault();
//       localStorage.setItem("City Name", inputCity);  
//       inputCity.value = $(".recentlySearchedCities").val();
//   });
   



   
//   window.onload = function(){

//     var $saveButtons = $('.saveBtn'); 
//     var calendarInput = $(".calendarInput")[0];  
//     calendarInput.value =  localStorage.getItem("calendarInput"); 
//   }
  
  // pull from local storage
//   $(".saveBtn").click(function(event){
//       event.preventDefault();
//       var calendarInput = $(".calendarInput").val();
//       localStorage.setItem("calendarInput", calendarInput);  
//       calendarInput.value = $(".calendarInput").val();
//   });

        // current date
        // function timeConverter(){
        //     var a = new Date(response.list[0].dt_txt * 1000);
        //     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        //     var year = a.getFullYear();
        //     var month = months[a.getMonth()];
        //     var date = a.getDate();
        //     var hour = a.getHours();
        //     var time = date + '/' + month + '/' + year;
            
        //   }
        //   var currentDate = $(".currentDate").text(time); 


// var currentDate = $(".currentDate").text(time);

    
//on click function for inputted city 
// $("#searchCity").on("click", function(event) {
//  // Preventing the button from trying to submit the form
// event.preventDefault();
// searchCity(inputCity);
// });
// console.log(inputCity)


// // save city in local storage
// window.onload = function(){
//     inputCity.value =  localStorage.getItem("City Name"); 
//   }
  
//   // pull from local storage
//   $(".u-full-width").click(function(event){
//       event.preventDefault();
//       localStorage.setItem("City Name", inputCity);  
//       inputCity.value = $(".recentlySearchedCities").val();
//   });
  