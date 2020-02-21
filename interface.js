
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
     $('#temperature').attr('class', thermostat.energyUsage());
  }
$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function(){// event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  });
  $('#temperature-down').click(function(){// alternative to .on(click)
    thermostat.down(); // update model
    updateTemperature(); // update view
  });
  $('#temperature-reset').click(function(){// listener
    thermostat.resetTemperature(); // update model
    updateTemperature(); // update view
  });

  $('#powersaving-on').click(function(){// listener
    thermostat.isPowerSavingModeOn(); // update modle
    $('#power-saving-status').text('on')
    updateTemperature(); //update view
  })

  $('#powersaving-off').click(function(){// listener
    thermostat.switchPowerSavingModeOff(); // update model
    $('#power-saving-status').text('off')
    updateTemperature(); // update view
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    // $('#temperature').attr('class', thermostat.energyUsage());
  }
  $(document).ready(function() { 
  
    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#current-temperature1').text(data.main.temp);
      })
    })
  
    // function displayWeather(city) {
    //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    //   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    //   var units = '&units=metric';
    //   $.get(url + token + units, function(data) {
    //     $('#current-temperature1').text(data.main.temp);
    //   })
    
    // }
//     displayWeather('London');

// $('#select-city').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   displayWeather(city);
// })
  });
});