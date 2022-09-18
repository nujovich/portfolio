export function Contact() {
    return (
        <section id="contact">
            <h2 className="title">Contacto</h2>
            <div className="buttons-container">
                <button type='button' className="contact-button" onClick={() =>window.location = 'https://wa.me/3413553238'}>
                <span className='button-text'>WhatsApp</span>
                    <span className='button-icon'>
                    <iconify-icon icon="logos:whatsapp-icon"></iconify-icon>
                    </span>
                </button>
                <button type='button' className="contact-button" onClick={() => window.location = 'mailto:nujovich@gmail.com'}>
                <span className='button-text'>E-Mail</span>
                    <span className='button-icon'>
                    <iconify-icon icon="bx:envelope"></iconify-icon>
                    </span>
                </button>
            </div>
        </section>
    )
}