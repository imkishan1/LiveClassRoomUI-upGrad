function currentTime(){
    var  date  =  new Date();
    var hour  = date.getHours();
    var min = date.getMinutes();
    var time = document.getElementById('time');
    var am = 'am'
    
    if(hour>=12)
    {
      if(hour==12)
      {
        hour=hour;
        am = 'pm';
      }
      else{
     hour = hour-12;
      if(hour<10)
      {
        hour = "0"+hour;
        am = 'pm'
        if(min<10){
          min = "0"+min;
        }
  
      }
      else {
        hour = hour;
        am = 'pm'
        if(min<10)
        min = "0"+min;
      }
    }
    }
    else{
      hour = hour;
      
      if(hour<10)
      {
        hour = "0"+hour;
        am = 'am'
      }
      if(min<10){
        min = "0"+min;
      }
    }
 
    var time1 = hour+":"+min+" "+am;
    time.innerText = time1;
    var t = setTimeout(function(){ currentTime() }, 1000); 
  }
currentTime()