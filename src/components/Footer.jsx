export default function Footer() {
    return(
        <footer id="footer" className="box-border w-[100%] h-[250px] mt-12 p-8 bottom-0 left-0 backdrop-blur-md font-serif text-center ">
            <div className="flex justify-evenly flex-col gap-5 ">
                <div className="footer-links text-[var(--color-text)] flex justify-center gap-6">
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#contact">Contacto</a>
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Términos y Condiciones</a>
                </div>
                <div className="text-[0.9rem]">
                    <p className="m-[5px]" >&copy; 2024 Laguna Lodge. Todos los derechos reservados.</p>
                    <p>Desarrollado por <a href="https://offpixelco.netlify.app" target="_blank" className="text-[#ff9b00] no-underline hover:underline">Off-Pixel</a></p>
                </div>
            </div>
        </footer>
    )
}