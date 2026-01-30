import React, {useEffect, useState} from 'react'

 function Greeting(){
    const [greeting,setGreeting]=useState("");
    useEffect(()=>{
        let hours=new Date().getHours().toString().padStart(2,"0")
        let Minutes=new Date().getMinutes().toString().padStart(2,"0")
        let Seconds=new Date().getSeconds().toString().padStart(2,"0")
        if(hours<12){
            setGreeting(`Good Morning ${hours} :${Minutes}:${Seconds}`)
        }
        else if(hours>=12 && hours<=15){
            setGreeting(`Good Afternoon  ${hours} :${Minutes}:${Seconds}`)
        }
        else if(hours>=17 && hours<=18){
        setGreeting(`Good Evening  ${hours} :${Minutes}:${Seconds}`)
    }
    else{
        setGreeting(`Good night`)
    }
    })
    
    return(
        <div>
            <div style={{
             height:"100px",
             width:"200px",
             backgroundColor:'lightblue',
             marginTop:"40px",
             marginLeft:"300px",
             borderTopLeftRadius:"20px",
             borderBottomRightRadius:"20px",}}>{greeting}</div>
    </div>
    )
 }