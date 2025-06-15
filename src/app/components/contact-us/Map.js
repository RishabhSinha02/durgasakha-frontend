import React from 'react'

export function Map() {
    return (
        <div className="flex w-full">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120516.21346650763!2d72.8063152972656!3d19.276639400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bba7f6805b41%3A0xb9ce36427882b0a1!2sCosmos%20County%2C%20BELLA%20%26%20CASA%2C%20GB%20Road%2C%20OWALA!5e0!3m2!1sen!2sin!4v1749964347989!5m2!1sen!2sin" 
            height="450" style={{
                border: 0,
                width: "100%"
            }}
            allowFullScreen="" 
            loading="lazy"
            ></iframe>
        </div>
    )
}

