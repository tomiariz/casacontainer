export default function Contact() {
    return (
        <section id="contact" className="w-[100%] font-family-poppins pt-[65px] px-10 pb-20 bg-text text-center">
            <div className="max-w[800px] mx-auto p-4">
                <h2 className="font-family-poppins text-[35px] mb-[1.5rem] font-bold ">Contacto</h2>
                <p className="font-family-lora text-[20px] mb-[30px] text-[var(--color-accent)] ">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
                
                <form action="https://formspree.io/f/movqnvyk" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input className="input-base" type="text" id="name" name="name" required placeholder="Tu nombre" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input className="input-base" type="email" id="email" name="email" required placeholder="Tu correo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea className="input-base" id="message" name="message" rows="5" required placeholder="Tu mensaje"></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}