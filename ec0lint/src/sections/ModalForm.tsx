import React from "react";

const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function ModalForm() {

    const [formData, setFormData] = React.useReducer(formReducer, {});

    const handleChange = (event: any) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`You have submitted the form ${formData.name}, ${formData.mail}, ${formData.phone}`)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <label>Enter your name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your e-mail:
                    <input
                        type="email"
                        name="mail"
                        value={formData.mail || ''}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                    />
                </label>
                <button className="blueSectionButton">Submit</button>
            </form>
        </div>

    )

}
{/* <div className="modal"></div>
<div className="modal-content">
<div className="modal-main-content">
        <div className="modal-main-text">
        <div className="modal-title">tytuł</div>
                        <div className="modal-text"><ModalForm /></div> */}