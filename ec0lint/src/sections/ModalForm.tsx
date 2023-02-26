
// import React from "react";


// const formReducer = (state: any, event: any) => {
//     return {
//         ...state,
//         [event.name]: event.value
//     }
// }

// export default function ModalForm() {

//     const [formData, setFormData] = React.useReducer(formReducer, {});

//     const handleChange = (event: any) => {
//         setFormData({
//             name: event.target.name,
//             value: event.target.value,
//         });
//     }

//     const handleSubmit = (event: any) => {
//         const formD = new FormData(formData);

//         fetch(
//             "http://docs.google.com/spreadsheets/d/1wz0LVEJQ5djucXjMcVCRhPKlIlrMeUUSkv7M6CaE1pA/edit#gid=0",
//             {
//                 method: 'POST',
//                 body: formD
//             }
//         )
//             .then((res) => res.json())
//             .then((data: any) => {
//                 console.log(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });

//         // event.preventDefault();
//         // alert(`You have submitted the form ${formData.name}, ${formData.mail}, ${formData.phone}`)
//     }

//     return (
//         <div className="modal-main-text">
//         <div className="modal-title">Use Case</div>
//         <div className="modal-text">If you want to remodel your site in an eco-friendly manner, please leave your contact details.</div>
//             <form onSubmit={handleSubmit} className="modal-text">
//                 <div className="use-case-form">
//                 <label className="flex-item-left">Your name: </label>
//                     <input
//                         id="Name"
//                         type="text"
//                         name="Name"
//                         value={formData.Name || ''}
//                         onChange={handleChange}
//                         className="flex-item-right"
//                     />
//                 </div>
//                 <div className="use-case-form">
//                 <label className="flex-item-left">Your e-mail: </label>
//                     <input
//                         id="Mail"
//                         type="email"
//                         name="Mail"
//                         value={formData.Mail || ''}
//                         onChange={handleChange}
//                         className="flex-item-right"
//                     /></div>
//                 <div className="use-case-form">
//                 <label className="flex-item-left">Your phone: </label>
//                     <input
//                         id="Phone"
//                         type="tel"
//                         name="Phone"
//                         value={formData.Phone || ''}
//                         onChange={handleChange}
//                         className="flex-item-right"
//                     /></div>
//                 <div className="use-case-form">
//                 <label className="flex-item-left">Your message: </label>
//                     <textarea
//                         id="Message"
//                         name="Message"
//                         value={formData.Message || ''}
//                         onChange={handleChange}
//                         className="flex-item-right"
//                     ></textarea></div>
//                 <button className="formButton">Submit</button>
//             </form>
//             </div>

//     )

// }