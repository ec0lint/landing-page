import React from "react";

export default function Newsletter() {

    const [mail, setMail] = React.useState("");

    const handleSubmit = (event: any) => {
        const form = document.querySelector("form")!;
        event.preventDefault();
        const formDatab = new FormData(form);
        // address of app script code for sending data to google sheet: https://docs.google.com/spreadsheets/d/1sClNwvGnVzmXXYXQOBxCoAFvVEVKRVUSrGqv0qYc3Mw/edit#gid=0
        fetch("https://script.google.com/macros/s/AKfycbz9vBlfEdHYSVdabtBJEmujutTIwhJEnLo6NtJ42cde5ryLlKECRrAsLgUMtH1qD0Yj/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
            .then((data) => {
                console.log(data);
                showInfo(successMessage);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const hideInfo = (el: any) => {
        el.style.display = 'none';
      }

    const showInfo = (el: any) => {
        el.style.display = 'block';
    }

    let successMessage = document.getElementById('success');

    const onCahngeInput = (e: any) => {
        setMail(e.target.value);
        if (e.target.value === '') {
            hideInfo(successMessage);
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mailBox">
                <label className="mailBoxLabel">@</label>
                <input id="Mail" type="email" name="Mail" value={mail} onChange={onCahngeInput} />
                <button className="sendLabel">SEND</button>

            </div>
            <div className="formInfo">
                    <h5 style={{ display: 'none' }} id="success" className="formSubmitInformation">Your e-mail {mail} was successfully sent to our database!</h5>
                </div>

        </form>
    )
}