import React from "react"
import "./NoteCard.css"
function NoteCategory({category}){
   
    return(
        <span className="note-card-category">{category}</span>
    )
}
function NoteCard({title ,description ,category , emoji}){
    return(
        
        <div className="note-card">
            <div className="note-card-emoji">{emoji}</div>
            <div>
                <h3 className="note-card-title">{title}</h3>
                <p className="note-card-description">{description}</p>
                <NoteCategory category={category}/>
            </div>
        </div>
    )
}
export default NoteCard