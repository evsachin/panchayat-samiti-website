import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between relative z-50 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold font-heading hover:text-yellow-300 transition-colors"
      >
        <span className="block text-lg">शिक्षण विभाग</span>
      </Link>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-1 rounded hover:bg-blue-700 transition-colors"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/shalamahiti" className="nav-link">
          शाळा माहिती
        </Link>
        <Link to="/shikshakmahiti" className="nav-link">
          शिक्षक माहिती
        </Link>
        <Link to="/amachyavishayi" className="nav-link">
          आमच्याविषयी
        </Link>
        <Link to="/asthapana" className="nav-link">
          आस्थापना
        </Link>

        {/* Dropdown */}
        <div className="relative group" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 nav-link"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`absolute top-8 left-0 bg-blue-700 shadow-lg rounded p-2 flex flex-col gap-2 w-48 z-20 border border-blue-500 transition-all duration-300 ${
              dropdownOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              to="/navoday"
              onClick={() => setDropdownOpen(false)}
              className="dropdown-link"
            >
              नवोदय परीक्षा
            </Link>
            <Link
              to="/mission-arambh"
              onClick={() => setDropdownOpen(false)}
              className="dropdown-link"
            >
              मिशन आरंभ
            </Link>
            <Link
              to="/shishyavrutti"
              onClick={() => setDropdownOpen(false)}
              className="dropdown-link"
            >
              शिष्यवृत्ती
            </Link>
          </div>
        </div>

        <Link to="/upakram" className="nav-link">
          उपक्रम
        </Link>
        <Link to="/missionapulki" className="nav-link">
          मिशन आपुलकी
        </Link>
        <Link to="/mdm" className="nav-link">
          MDM
        </Link>
        <Link to="/rte" className="nav-link">
          RTE प्रवेश
        </Link>
        <Link to="/sarvasamaveshak" className="nav-link">
          सर्व समावेशक शिक्षण
        </Link>
        <Link to="/video" className="nav-link">
          व्हिडीओ
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-blue-700 p-4 flex flex-col gap-4 transition-all duration-300 ease-in-out shadow-lg ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <Link to="/shalamahiti" onClick={toggleMenu} className="mobile-link">
          शाळा माहिती
        </Link>
        <Link to="/shikshakmahiti" onClick={toggleMenu} className="mobile-link">
          शिक्षक माहिती
        </Link>
        <Link to="/amachyavishayi" onClick={toggleMenu} className="mobile-link">
          आमच्याविषयी
        </Link>
        <Link to="/asthapana" onClick={toggleMenu} className="mobile-link">
          आस्थापना
        </Link>

        {/* Mobile Dropdown */}
        <div className="flex flex-col">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 mobile-link text-left"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`ml-4 mt-1 flex flex-col gap-2 border-l-2 border-blue-500 pl-2 transition-all duration-300 ${
              dropdownOpen
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <Link
              to="/navoday"
              onClick={() => {
                toggleMenu();
                setDropdownOpen(false);
              }}
              className="mobile-link"
            >
              नवोदय परीक्षा
            </Link>
            <Link
              to="/mission-arambh"
              onClick={() => {
                toggleMenu();
                setDropdownOpen(false);
              }}
              className="mobile-link"
            >
              मिशन आरंभ
            </Link>
            <Link
              to="/shishyavrutti"
              onClick={() => {
                toggleMenu();
                setDropdownOpen(false);
              }}
              className="mobile-link"
            >
              शिष्यवृत्ती
            </Link>
          </div>
        </div>

        <Link to="/upakram" onClick={toggleMenu} className="mobile-link">
          उपक्रम
        </Link>
        <Link to="/missionapulki" onClick={toggleMenu} className="mobile-link">
          मिशन आपुलकी
        </Link>
        <Link to="/mdm" onClick={toggleMenu} className="mobile-link">
          MDM
        </Link>
        <Link to="/rte" onClick={toggleMenu} className="mobile-link">
          RTE प्रवेश
        </Link>
        <Link
          to="/sarvasamaveshak"
          onClick={toggleMenu}
          className="mobile-link"
        >
          सर्व समावेशक शिक्षण
        </Link>
        <Link to="/video" onClick={toggleMenu} className="mobile-link">
          व्हिडीओ
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
