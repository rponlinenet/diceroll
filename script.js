let image=document.getElementById("gif")
let roll_btn=document.getElementsByClassName("roll-btn")[0]

let dice=[1,2,3,4,5,6]
let comp=dice[Math.floor(Math.random()*6)]






function rolldice(){
    console.log(comp)
    image.src="https://i.pinimg.com/originals/a7/60/f5/a760f5b77dbafdf85c209b642af08b6e.gif"
    if(comp==1){
   setTimeout(()=>{
    image.src="https://t3.ftcdn.net/jpg/01/97/16/30/360_F_197163001_H2gm3LqIrVTm7Fne6kclwRDfMcfm57BC.jpg"
     
   },1000) 
   }else if(comp==2){
    setTimeout(()=>{
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHCgZTdveUb-HlPA01nb-oSWu9V0Xbt4DxWNwqjDywhixgqlEOIqG7Glh6-2AYcTQHT4&usqp=CAU"
         
       },1000)
   }else if(comp==3){
    setTimeout(()=>{
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjBNJpAQbSv9br2MgADeJcgYeQqKbsT7JJjsi44xCH-AJ16FV1QRRdyeeMUfO0ubQwns&usqp=CAU"
         
       },1000)
   }else if(comp==4){
    setTimeout(()=>{
        image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTqcdNb9IKY0mFzNLT_DT6byC0SbxZ93uL7xD4ZXwK3kXSJr71BBPwrtcxcWTrAx2Za4&usqp=CAU"
         
       },1000)
   }else if(comp==5){
    setTimeout(()=>{
        image.src="https://i.ytimg.com/vi/esL11G4fYKo/hq2.jpg?sqp=-oaymwEYCOgCEOgCSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLC1d7e1rI7X2-LnggBdzgQ-23jVIA"
    },1000)
   }else if(comp==6){
    setTimeout(()=>{
        image.src="https://www.pngitem.com/pimgs/m/614-6141042_library-of-6-dice-number-clip-royalty-free.png"
        image.style.width="290px"
    },1000)
   }





    }
    
    roll_btn.addEventListener("click",rolldice)
    