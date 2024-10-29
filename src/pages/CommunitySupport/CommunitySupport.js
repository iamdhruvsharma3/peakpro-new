import React, { useState } from 'react';
import './CommunitySupport.css';

const CommunitySupport = () => {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (message) {
            setMessagesList([...messagesList, message]);
            setMessage(''); // Clear the input field after sending
        }
    };

    return (
        <div className="community-support-container">
            <h2 className="support-title">Community Support</h2>
            <form className="support-form" onSubmit={handleSendMessage}>
                <div className="form-group">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your thoughts or ask for help"
                        required
                    />
                    <button type="submit" className="btn">Send</button>
                </div>
            </form>
            <ul className="messages-list">
                {messagesList.map((msg, index) => (
                    <li key={index} className="message-item">
                        {msg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunitySupport;
