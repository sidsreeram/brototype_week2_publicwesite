var slide1=document.getElementById("slide1");
var btn1=document.getElementById("next1");
var btn2=document.getElementById("prev1");
 var count=0

btn1.addEventListener("click",function(){
  count++;
  if(count==1){
    slide1.src = "main2.jpg";
  }else if(count==2){
    slide1.src = "main1.jpg";
    count=0;
  }
  
})

btn2.addEventListener("click",function(){
  count++;
  if(count==1){
    slide1.src = "main1.jpg";
  }else if(count==2){
    slide1.src = "main2.jpg";
    count=0;
}
})


