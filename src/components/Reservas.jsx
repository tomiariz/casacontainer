export default function Reservas() {
    return (
        <section id="reservas" className="w-[100%] font-family-poppins pt-[65px] px-10 pb-20 bg-text text-center">
            <div className="max-w-[800px] mx-auto p-4">
                <h2 className="font-family-poppins text-[35px] mb-[1.5rem] font-bold">Reserva tu estadía</h2>
                <form action="https://formspree.io/f/xzzbazyv" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            placeholder="Ingresa tu nombre" 
                            className="input-base"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="Ingresa tu correo" 
                            className="input-base"
                                
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="checkin">Fecha de entrada</label>
                        <input 
                            type="date" 
                            id="checkin" 
                            name="checkin" 
                            required 
                            className="input-base"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="checkout">Fecha de salida</label>
                        <input 
                            type="date" 
                            id="checkout" 
                            name="checkout" 
                            required 
                            className="input-base"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">Cantidad de personas</label>
                        <input 
                            type="number" 
                            id="guests" 
                            name="guests" 
                            required 
                            min="1" 
                            placeholder="Número de personas" 
                            className="input-base"    
                        />
                    </div>

                    <button type="submit">Reservar ahora</button>
                </form>
            </div>
        </section>
    );
}
