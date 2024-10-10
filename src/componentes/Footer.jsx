//import React from 'react';
import '../styles/Footer.css';
import logoTexto from '../assets/logoConTexto.svg';
import insta from '../assets/instagramLogo.svg';
import face from '../assets/facebookLogo.svg';
import whats from '../assets/whatsappLogo.svg';

export function Footer() {
    return (
        <div className="footer">
            <a className="logoFooter" href="#root"><img src={logoTexto} alt="Aroma Gourmet" /></a>
            <div className="contactanos">
                <h2>Contact us</h2>
                <p><span>Phone:</span> 61882040</p>
                <p><span>Email:</span> AromaGourmet@hotmail.com</p>
                <span>Social networks:</span>
                <div className="redes">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={face} alt="Facebook" /></a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><img src={whats} alt="WhatsApp" /></a>
                </div>
            </div>
            <div>
                <h2>Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.686154225177!2d-65.2641922543214!3d-19.048647787230976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcfa6f7023fe5%3A0xa682f4f33d5ce1b8!2sAromas%20y%20Sabores!5e0!3m2!1ses!2sbo!4v1723776203270!5m2!1ses!2sbo"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación"
                ></iframe>
            </div>
        </div>
    );
}


