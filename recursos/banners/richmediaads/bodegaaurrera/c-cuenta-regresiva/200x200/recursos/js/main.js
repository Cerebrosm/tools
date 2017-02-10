$(document).ready(function(){

  CountDownTimer('12/27/2016 6:0 PM', 'clock');

  function CountDownTimer(dt, id)
  {
      var end = new Date(dt);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      function showRemaining() {
          var now = new Date();
          var distance = end - now;
          if (distance < 0) {

              clearInterval(timer);
              document.getElementById("alerta").innerHTML = 'SE TERMINÓ!';
              document.getElementById("alerta").className = 'alerta';
              var timerList = document.getElementsByClassName("timer");
              for(var i = 0; i<timerList.length;i++){
                document.getElementsByClassName("timer")[i].className = "timer hidden";
              }

              return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          //document.getElementById('lbl-dia').innerHTML = days + '';
          document.getElementById('lbl-hora').innerHTML = hours + '';
          document.getElementById('lbl-min').innerHTML = minutes + '';
          document.getElementById('lbl-seg').innerHTML = seconds + '';
      }

      timer = setInterval(showRemaining, 1000);
  }

});
