import React from "react";

export default function Sidemenu({ isMenuOpen }) {
    const menuItems = [
        { href: "index.html", text: "Inicio" },
        { href: "#about", text: "Sobre Nosotros" },
        { href: "#reservas", text: "Reservas" },
        { href: "#contact", text: "Contactanos" },
        { href: "#ubicacion", text: "Ubicación" },
        { href: "", text: "Servicios" },
        { href: "", text: "Blog" },
        { href: "./actividades.html", text: "Actividades" },
    ];

    return (
        <nav
        className={`fixed top-0 right-0 w-[250px] h-[100vh] backdrop-blur-xl transition-transform duration-300 ease-in-out z-[10] pt-20 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="menu-container"
        >
        <ul className="list-none ml-[45px] p-0 text-left">
            {menuItems.map((item, index) => (
            <li
                key={index}
                className={`mt-[30px] transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[20px]"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 0.1}s` : "0s" }}
            >
                <a
                href={item.href}
                className="menu-link m-[5px] font-family-poppins text-bg-color no-underline font-bold transition-colors duration-300 hover:text-[#c2c2c2]"
                >
                {item.text}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    );
}