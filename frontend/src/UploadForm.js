import React, { useState } from 'react'; 
import axios from 'axios'; 
const UploadForm = ({ setUpdateUI }) => {
     const [file, setFile] = useState(null);
     const [title, setTitle] = useState('');
      const [description, setDescription] = useState(''); 
      const handleSubmit = async (e) => { e.preventDefault(); 
        const formData = new FormData(); 
        formData.append('photo', file); 
        formData.append('title', title); 
        formData.append('description', description);
         try { await axios.post('http://localhost:5000/api/save', formData); setUpdateUI(Date.now()); setTitle(''); setDescription(''); setFile(null); } catch (error) { console.log(error); } }; return ( <div className="upload-form"> <h2>Upload Photo</h2> <form onSubmit={handleSubmit}> <input type="file" onChange={(e) => setFile(e.target.files[0])} /> <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea> <button type="submit">Upload</button> </form> </div> ); }; export default UploadForm;