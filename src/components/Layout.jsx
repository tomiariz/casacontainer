import React from "react";
import Header from "./Header.jsx";
import Sidemenu from "./Sidemenu.jsx";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <div 
            className="min-h-screen" 
            id="layout" 
            data-menu-open={isMenuOpen ? "true" : "false"}
        >
            <Header 
                toggleMenu={toggleMenu} 
                isMenuOpen={isMenuOpen}
            />
            <Sidemenu isMenuOpen={isMenuOpen}/>
            <main className="w-[100%] h-[100vh] p-[20px] relative flex flex-col justify-center items-center box-border ">
            <h1 className="font-family-poppins text-4xl font-bold text-center text-[var(--color-text)]">Vive la magia de Bariloche desde un lugar único</h1>
            <h3 className="font-family-lora text-xl text-center mt-4 text-[var(--color-text)]">Alojamientos sustentables diseñados para tu confort en plena naturaleza.</h3>
            </main>
        </div>
    )
}