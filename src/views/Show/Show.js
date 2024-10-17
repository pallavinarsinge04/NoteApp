import React, { useState , useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './Show.css';
import HomeButton from "./../../components/HomeButton/HomeButton";


function Show() {
   const [notes ,setNotes]=useState([]);

    useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(savedNotes);
    },[]);
   return (
      <div>
         <h1 className="text-center text-primary">Show Note</h1>
         {
            notes.map((note)=>{
               const {title ,description ,category ,emoji} = note;
               return(
                  <div >
                     {title}
                     {description}
                     {category}
                     {emoji}
                  </div>
               )
            })
         }
         

         <HomeButton />
      </div>
   );
}

export default Show;