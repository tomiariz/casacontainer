export default function About() {
    return (
        <section id="about" className="relative w-[100%] h-[100vh] p-0 flex justify-center items-center flex-col text-center overflow-hidden ">
            <div className="relative flex justify-center items-center flex-col h-[100vh] p-[30px] text-[var(--color-text)] ">
                <div className="absolute top-0 left-0 object-cover w-[100%] h-[100%] filter brightness-75 -z-10 ">
                    <img
                    src="/img/container-30M2-1024x1024.jpg"
                    alt="Imagen sobre nuestras casas container"
                    />
                </div>

                <h1 className="font-family-poppins text-[35px] text-shadow  ">Acerca de Nosotros</h1>
                <p className="font-family-lora text-[20px] text-shadow italic ">
                    Descubre cómo nuestras casas-container ofrecen una experiencia única en Bariloche, combinando confort,
                    modernidad y naturaleza en el corazón de la Patagonia.
                </p>
            </div>
        </section>
    );
}