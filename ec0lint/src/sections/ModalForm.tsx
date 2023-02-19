
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
        <div className="modal-main-text">
        <div className="modal-title">Use Case</div>
        <div className="modal-text">If you want to remodel your site in an eco-friendly manner, please leave your contact details.</div>
            <form onSubmit={handleSubmit} className="modal-text">
                <div className="use-case-form">
                <label className="flex-item-left">Your name: </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        className="flex-item-right"
                    />
                </div>
                <div className="use-case-form">
                <label className="flex-item-left">Your e-mail: </label>
                    <input
                        id="mail"
                        type="email"
                        name="mail"
                        value={formData.mail || ''}
                        onChange={handleChange}
                        className="flex-item-right"
                    /></div>
                <div className="use-case-form">
                <label className="flex-item-left">Your phone: </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        className="flex-item-right"
                    /></div>
                <div className="use-case-form">
                <label className="flex-item-left">Your message: </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message || ''}
                        onChange={handleChange}
                        className="flex-item-right"
                    ></textarea></div>
                <button className="formButton">Submit</button>
            </form>
            </div>

    )

}