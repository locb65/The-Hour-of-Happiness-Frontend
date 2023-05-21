import React, {useState} from 'react';
import axios from 'axios';
import './profileHeader.css'

export const ProfileHeader = ({ sessionUser }) => {
    return (
        <div className="profile-header">
            <div className="profile-img-container">
                <img src="" alt=""/>
            </div>
            <h1>{sessionUser?.name}</h1>
        </div>
    )
}

// export const ProfileHeader = ({ sessionUser }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [newName, setNewName] = useState(sessionUser?.name)

//     const handleEditClick = () => {
//         setIsEditing(true);
//     }

//     const HandleNameChange = (e) => {
//         setNewName(e.target.value);
//     }

//     const handleSaveClick = async () => {
//         try {
//             const id = sessionUser?._id
//             const endpoint_URL = `http://localhost:4000/accounts/update-owner/${id}`
//             const payload = { name: newName };
            
//             await axios.put(endpoint_URL, payload);
//             setIsEditing(false);
//         }catch(err) {
//             console.log(err)

//         }
//     }
//     return (
//         <div className="profile-header">
//             <div className="profile-img-container">
//                 <img src="" alt=""/>
//                 {isEditing ? (
//                     <div>
//                         <input 
//                             type="text" 
//                             value={newName} 
//                             onChange={HandleNameChange}
//                         />
//                         <button onClick={handleSaveClick}> Save </button>
//                     </div>
//                 ) : (
//                     <div>
//                          <h1>{newName}</h1>
//                          <button onClick={handleEditClick}> Edit </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
