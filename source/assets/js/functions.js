$(document).ready(function() {
    $('select').material_select();
  });



angular.module("Ctrl",[])

.controller('timeController',['$scope', clockTime]);

function clockTime($scope) {


  $scope.change = function(){
    if($('#alarm-btn').is(":checked")){
      var alarm_counter = $( "#selector" ).val()*60000;

      var refreshIntervalId =  setInterval(function(){
        
        if(alarm_counter==0){
          try{
            $('#alarm-ring')[0].play();
          }
          catch(e){}
          alert("WAKE UP!!!!!!");
          $( "#alarm-btn" ).prop( "checked", false );
          clearInterval(refreshIntervalId);
        }else{
          alarm_counter = alarm_counter - 1000;
          console.log(alarm_counter);
        }

        $scope.$apply();
      },1000)

      
      

    }
    
  }

  $scope.items = [];



  setInterval(function(){

    var hours = new Date().getHours();
    var Minutes = new Date().getMinutes();
    var Seconds = new Date().getSeconds();
    hours = (hours+24)%24; 
    var mid='am';
    if(hours===0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }


    $scope.hora = hours;
    $scope.Minutes = Minutes;
    $scope.Seconds = Seconds;
    $scope.mid = mid;

    $scope.$apply();
  },1000)



}












