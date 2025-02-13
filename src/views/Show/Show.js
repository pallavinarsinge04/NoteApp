import React, { useState, useEffect } from "react";
import "./Show.css";
import HomeButton from "./../../components/HomeButton/HomeButton";

function Show() {
   const [notes, setNotes] = useState([]);

   useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      console.log("Loaded Notes:", savedNotes);  // Debugging line
      setNotes(savedNotes);
   }, []);

   return (
      <div>
         <h1 className="text-center text-primary">Show Notes</h1>
         
         {notes.length === 0 ? (
            <p className="text-center">No notes available.</p>
         ) : (
            notes.map((note,index) => (
               <div key={index} className="note-card">
                  <p>  Emoji:    📝 </p>
                   <p>  Title:   Test Note</p>
                  <p>Category:General</p>
                  <p>Description:This is a test</p>
               </div>
            ))
         )}
   
         <HomeButton />
      </div>
   );
}   

export default Show;
