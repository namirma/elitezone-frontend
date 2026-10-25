import React, { useState } from "react";
import { useToast } from "./Toast";

const MailerLiteForm = () => {
    const [email, setEmail] = useState(""); // State for the email input

    const {showToastSuccess, showToastError} = useToast();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior

        // Send the form data to MailerLite
        const formData = new FormData();
        formData.append("fields[email]", email);
        formData.append("ml-submit", "1");

        fetch("https://assets.mailerlite.com/jsonp/118772/forms/140970617767724070/subscribe", {
            method: "POST",
            body: formData,
            mode: "no-cors", // Prevent CORS issues
        })
            .then(() => {
                setEmail(""); // Clear the input field
                showToastSuccess('ایمیل با موفقیت ثبت شد')
            })
            .catch((err) => {
                showToastError('خطا در ثبت ایمیل')
            });
    };

    return (
        <div id="mlb2-20858305" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-20858305" style={{ width: '100%' }}>
            <div className="ml-form-align-center" style={{ width: '100%' }}>
                <div className="ml-form-embedWrapper embedForm" style={{ width: '100%' }}>
                    <form className="ml-block-form" onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <div className="ml-form-formContent horozintalForm" style={{ width: '100%' }}>
                            <div className="ml-form-horizontalRow" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <div className="ml-input-horizontal" style={{ width: '100%' }}>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="fields[email]"
                                        placeholder="ایمیل"
                                        value={email} // Bind input to state
                                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                        required
                                        style={{
                                            width: "100%",
                                            height: '100%',
                                        }}
                                    />
                                </div>
                                <div className="ml-button-horizontal" style={{display:'flex' }}>
                                    <button
                                        type="submit"
                                        style={{
                                            boxSizing: 'border-box',
                                            marginRight: '8px',
                                            width: "60px",
                                            height:'40px',
                                            backgroundColor: "#d60a69",
                                            color: "#fff",
                                            outline:'none',
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            fontFamily: 'YekanBakh-regular',
                                            fontSize: '16px'
                                        }}
                                    >
                                        ثبت
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MailerLiteForm;
