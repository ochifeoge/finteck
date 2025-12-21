import React, { useRef, useState } from "react";
import { logo } from "../components/details";
import Button from "../components/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    const state = Flip.getState(logoRef.current);
    /* logoRef.current.classList.remove(
      "absolute",
      "left-1/2",
      "top-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "z-50"
    );
    Flip.from(state, { duration: 3, ease: "power2.out" }); */
  }, {});

  return (
    <header className="container py-4 flex justify-between items-center border-b-[0.3px] border-gray-200">
      <a href="#" ref={logoRef} className="">
        <img src={logo} alt="logo" />
      </a>
      {window.innerWidth > 750 ? (
        <nav className="flex items-center gap-4 text-gray-500 font-semibold text-md">
          <a className="text-blue-500" href="#about">
            Home
          </a>
          <a href="#services">Pricing</a>
          <a href="#portfolio">Legal</a>
          <Button label={"login"} active={false} />
          <Button label={"sign up"} active={true} />
        </nav>
      ) : (
        <FaBars onClick={() => setMenu(true)} />
      )}

      {menu ? (
        <div className="fixed top-0 right-0 w-56 h-[100dvh] bg-blue-50">
          <nav
            ref={navRef}
            className="relative flex flex-col items-start pt-10 ps-2 gap-4 text-gray-700 font-semibold text-md">
            <a className="text-blue-500" href="#about">
              Home
            </a>
            <a href="#services">Pricing</a>
            <a href="#portfolio">Legal</a>
            <Button label={"login"} active={false} />
            <Button label={"sign up"} active={true} />

            <FaTimes
              size={20}
              className="absolute top-4 right-2"
              onClick={() => setMenu(false)}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
