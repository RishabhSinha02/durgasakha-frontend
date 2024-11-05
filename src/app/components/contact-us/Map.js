import React from 'react'

export function Map() {
    return (
        <div className="flex w-full">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60277.401100482995!2d72.92895695268601!3d19.224114494619716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b920197ef667%3A0xbc3cd10969512264!2sShri%20Durga%20Snacks!5e0!3m2!1sen!2sin!4v1730828928466!5m2!1sen!2sin" 
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

