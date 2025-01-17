// import React from "react";
// import upload from '../Booking/Vector.png';
// const DragAndDrop = ({ onDrop, onDragOver, onDragLeave, label, error, image }) => {
//     const fileInputRef = React.useRef(null);

//     const handleClick = () => {
//         if (fileInputRef.current) {
//             fileInputRef.current.click();
//         }
//     };

//     const handleChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 onDrop({ dataTransfer: { files: [file] } }, reader.result);
//             };
//             reader.readAsDataURL(file); // Read file as a data URL
//         }
//     };

//     return (
//         <div 
//             className="drag-and-drop" 
//             onDrop={onDrop} 
//             onDragOver={onDragOver} 
//             onDragLeave={onDragLeave}
//             onClick={handleClick}
//             style={{
//                 border: '2px dashed #ccc',
//                 borderRadius: '5px',
//                 padding: '20px',
//                 textAlign: 'center',
//                 cursor: 'pointer'
//             }}
//         >
//             <p>{label}</p>
//             {error && <div className='error-message'>{error}</div>}
//             {image && <img src={upload} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />}
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }} // Hide the input
//                 onChange={handleChange} // Handle file selection
//             />
//         </div>
//     );
// };

// export default DragAndDrop;
