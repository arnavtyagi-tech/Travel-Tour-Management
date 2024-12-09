import React, { useEffect, useState } from 'react';
import chatbotIcon from '../assets/images/imageLogo.png'; // Update the path as necessary

const Contact = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Toggle chatbot visibility
    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '120px' }}>
            {/* Contact Form */}
            <div
                className="visme_d"
                data-title="Contact_Form"
                data-url="8r1ddn0v-contact-form"
                data-domain="forms"
                data-full-page="false"
                data-min-height="500px"
                data-form-id="90015"
            ></div>

            {/* Chatbot Button */}
            <button
                onClick={toggleChatbot}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '30px',
                    height: '100px',
                    width: '100px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: '1000',
                }}
            >
                <img
                    src={chatbotIcon}
                    alt="Chatbot"
                    style={{ width: '100px', height: '100px' }}
                />
            </button>

            {/* Chatbot iframe */}
            {showChatbot && (
                <iframe
                    src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/17/07/20241117073438-229OFMC2.json"
                    style={{
                        position: 'fixed',
                        bottom: '90px',
                        right: '20px',
                        width: '350px',
                        height: '500px',
                        border: 'none',
                        zIndex: '1000',
                        borderRadius: '15px', /* Rounded corners */
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', /* Soft shadow for depth */
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', /* Smooth transition effects */
                    }}
                    title="Chatbot"
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)'; /* Slight zoom effect */
                        e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)'; /* Enhanced shadow on hover */
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'; /* Reset zoom */
                        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'; /* Reset shadow */
                    }}
                ></iframe>
            )}
        </div>
    );
};

export default Contact;
