import React , {useState} from "react";
import './Add.css';
import HomeButton from "./../../components/HomeButton/HomeButton";
import EmojiPicker from 'emoji-picker-react';
import toast  from "react-hot-toast";
function Add(){
    const [title , setTitle] = useState("");
    const [description , setDescription] =useState("");
    const [category , setCategory] = useState("");
    const [emoji , setEmoji] = useState("");
    const [openEmojiDialog , setOpenEmojiDialog]= useState(false);
    const addNote=()=> {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const noteObject = {
        Title:title,
        Description:description,
        Category:category,
        Emoji:emoji,
      };
      notes.push(noteObject);
      localStorage.setItem("notes" , JSON.stringify(notes));
      toast.success("Note added successfully !");
     
      setTitle("");
      setDescription("");
      setCategory("");
      setEmoji("");
    };
    return(
        <div>
            <h1 className=" text-center text-primary">Add Note </h1>
             <input 
             type="Text"
              placeholder="Title" 
              value={title}
              onChange={(e)=>{
              setTitle(e.target.value);
               }}
               className="user-input"
             />

            <input 
             type="Text"
              placeholder="description" 
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value);
               }}
               className="user-input"
             />
             <select  className="user-input-select user-input" value={category} onChange={(e)=>setCategory(e.target.value)}  >
             <option value="work">Select category</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
                <option value="personal">Personal</option>
                <option value="learning">Learning</option>
                <option value="other">Other</option>
             </select>

           

           
             
            
             <EmojiPicker 
             open={openEmojiDialog}
             height={"300px"}
             width={"400px"}
             
             skinTonesDisabled={true}
             onEmojiClick={(emojiObject)=>{
              setEmoji(emojiObject.emoji)
              setOpenEmojiDialog(false)
             }}
             className="emoji-picker"/>
            <div className="user-input user-input-emoji" onClick ={()=>setOpenEmojiDialog(true)}>
            {emoji ? emoji : "Select Emoji"}
            </div>

        <button 
         className="btn  add-note-button  btn-primary"
        type="button" onClick={addNote}>
           + Add Note
        </button>

          <HomeButton/>
        </div>
        
         
    )
}

export default Add;