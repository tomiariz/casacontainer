import React from "react";

export default function Header({ toggleMenu, isMenuOpen }) {
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 w-screen h-20 z-50 flex justify-between items-center p-5 bg-transparent transition-all duration-[--duration-default] ease-in-out"
    >
      <div className="logo">
        <a className="no-underline text-[var(--color-bg)]" href="/">
          <h1 className="font-family-poppins text-2xl font-semibold text-[var(--color-bg)]">
            Laguna Lodge
          </h1>
        </a>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <button
          className="appearance-none bg-transparent border-none cursor-pointer z-50 flex flex-col justify-center items-center gap-[2px] w-10 h-10"
          onClick={toggleMenu}
          id="menuButton"
        >
          <span
            className={`w-[25px] h-[4px] z-50 bg-[var(--color-bg)] transition-all ease-in-out ${
              isMenuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[4px] bg-[var(--color-bg)] transition-all ease-in-out ${
              isMenuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[4px] bg-[var(--color-bg)] transition-all ease-in-out ${
              isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}
