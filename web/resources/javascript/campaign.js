function pass(c){
    var i;
    
    
   for(i = 1 ; document.getElementById('campaign'+i).style.display != "block" ; i++){
   }
   document.getElementById('campaign'+i).style.display= "none";
   if(i == 1){
       if(c == 1)
           i = 3;
       else
           i++;
   }
   else if(i == 3){
       if(c == 0)
           i = 1;
       else
           i--;
   }
    
   else {
       if(c == 1)
           i--;
       else 
           i++;
   }
       
   document.getElementById('campaign'+i).style.display= "block";
}

window.onload=function pass_on(){
    i = 1;
    
   setInterval(function(){  
            
            if(i == 1)
                document.getElementById('campaign'+3).style.display= "none";
                
            else
               document.getElementById('campaign'+(i-1)).style.display= "none";
                
            document.getElementById('campaign'+i).style.display= "block";
            i++;
            if(i == 4)
                i = 1;
   }
   
   
    
    , 3000);
}
