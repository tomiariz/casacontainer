export default function Ubicacion() {
    return (
    <section id="ubicacion" className="w-[100%] p-10 ">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.493793555146!2d-71.1859630240782!3d-41.080056471340605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a875b7f97c52d%3A0xa766db1a0c86d94b!2sLos%20Pehuenes%20330%2C%20R8400%20Dina%20Huapi%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1732394506102!5m2!1ses!2sar" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación en Google Maps"
        ></iframe>
    </section>
    )
}