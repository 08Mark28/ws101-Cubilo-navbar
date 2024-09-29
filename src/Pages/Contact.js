import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <section className="contact-section">
                <div className='box'>
                    <h1 className='contact-details'>Contact Details</h1>
                    <p className='p'>"We'd love to hear from you! Whether you have questions, suggestions, 
                        or want to get involved in our conservation efforts, please reach out. Together, we 
                        can make a difference for our planet.".</p>
                    <div className="input-group">
                        <h1 className='name-label'>Name:</h1>
                        <input className='input-details' placeholder="Enter your name" />
                    </div>

                    <div className="input-group">
                        <h1 className='email-label'>Email:</h1>
                        <input className='input-details' type="email" placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <h1 className='message-label'>Message:</h1>
                        <textarea className='input-message' placeholder="Enter your message"></textarea>
                    </div>

                    <button className="send-button">Send Message</button>
                </div>
            </section>
        </div>
    );
}
