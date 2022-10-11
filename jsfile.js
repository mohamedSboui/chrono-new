var startBtn = document.querySelector("#startBtn"),
 stopBtn = document.querySelector("#stopBtn"),
 resetBtn = document.querySelector("#resetBtn");






 var    ms = "00",
        hr = "00",
        min = "00",
        sec = "00",
        startTimer;


function start(){
    startTimer=setInterval(function (){ms++;
                                       ms=ms<10? "0"+ms:ms;
                                       if(ms==100){
                                           sec++;
                                           sec=sec<10? "0"+sec:sec;
                                           ms="00"}
                                       if(sec==60){
                                           min++;
                                           min=min<10? "0"+min:min;
                                           sec="00"}
                                       if(min==60){
                                           hr++;
                                           hr=hr<10? "0"+hr:hr;
                                           sec="00"};
                                           
                        
                                       
                                       
                           document.querySelector("#hr").innerText=hr;
                           document.querySelector("#min").innerText=min;
                           document.querySelector("#sec").innerText=sec;
                           document.querySelector("#ms").innerText=ms;}

                           
                           
                           ,10)
    
}
function stop() {
    
    clearInterval(startTimer);
  }

  function reset() {
    clearInterval(startTimer);
    hr = min = sec = ms = "00";
    document.querySelector("#hr").innerText=hr;
    document.querySelector("#min").innerText=min;
    document.querySelector("#sec").innerText=sec;
    document.querySelector("#ms").innerText=ms;}


/*window.onload=function (){
    document.getElementById("audio").play()
}*/
  
function rand(){
    var a=parseInt(document.getElementById("min").value)
    var b=parseInt(document.getElementById("max").value)
    
       
    document.getElementById("theRand").innerHTML=(a+Math.floor(Math.random()*(b-a+1)))}

   


    function startTeamer(hr,min,sec){
        var sec=parseInt(document.getElementById("sec").value)
        var min=parseInt(document.getElementById("min").value)
        var hr=parseInt(document.getElementById("hr").value)
   document.querySelector("#hrT").innerText=hr;
   document.querySelector("#minT").innerText=min;
   document.querySelector("#secT").innerText=sec;
        startTimer=setInterval(
            function (){
                console.log(sec)                                      
                                           
                                           if(sec!=00){
                                               sec--;
                                               sec=sec<10? '0'+sec:sec;
                                               }
                                           if(sec==00){
                                               if(min!=0){min--;
                                               min=min<10? '0'+min:min;
                                               sec=59
                                           }
                                               if(min==0&&hr!=0){hr--;
                                               hr=hr<10? '0'+hr:hr;
                                               sec=59;
                                                min=59;
                                                                 
                                           }
                                           }
                                          
                                           if(hr==0&&min==0&&sec==0){
                                    
                                               clearInterval(startTimer)}
                                           console.log(hr+" "+min+ " " + sec);
                                           document.querySelector("#hrT").innerText=hr;
                                           document.querySelector("#minT").innerText=min;
                                           document.querySelector("#secT").innerText=sec;
                                               
                                               
                                
                                           
                                          
                                          
                                          
                                          
                                          },1000)
    }
    

    var darkCheck = false
    function darkTheme(){
        darkCheck = !darkCheck
        console.log(darkCheck);
        document.body.classList.toggle("dark-mode")
        if(darkCheck){

            document.getElementById("darkTheme").src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
        }
        else{
            document.getElementById("darkTheme").src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
        }
       // document.body.style.backgroundImage="none"
       
    }


  
 
 

