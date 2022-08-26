export function Contact() {
    return (
        <section id="contact">
            <form className="form" action="https://formspree.io/f/xnqrndee" method="POST">
            <div className="form-container">
                <h2 className="form-title">Contacto</h2>
                <input type="text" className="form-input" placeholder="Nombre:" name="name" required/>
                <input type="email" className="form-input" placeholder="Email:" name="email" required/>
                <textarea className="form-input form-input--message" placeholder="Mensaje:" name="message" required></textarea>
                <input type="submit" className="form-button"/>
            </div>
            </form>
        </section>
    )
}