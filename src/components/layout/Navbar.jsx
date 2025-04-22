import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-blue-500 text-white p-4 flex items-center justify-between relative z-20">
      {/* Logo / Home link */}
      <Link to="/" className="text-xl font-bold font-heading">
        शिक्षण विभाग
      </Link>

      {/* Hamburger */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/amachyavishayi">आमच्याविषयी</Link>
        <Link to="/asthapana">स्थापना</Link>

        {/* Dropdown */}
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 focus:outline-none"
          >
            स्पर्धा परीक्षा <ChevronDown size={18} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-8 left-0 bg-blue-600 shadow-lg rounded p-2 flex flex-col gap-2 w-48 z-20">
              <Link to="/navoday" onClick={() => setDropdownOpen(false)}>
                नवोदय परीक्षा
              </Link>
              <Link to="/mission-arambh" onClick={() => setDropdownOpen(false)}>
                मिशन आरंभ
              </Link>
              <Link to="/shishyavrutti" onClick={() => setDropdownOpen(false)}>
                शिष्यवृत्ती
              </Link>
            </div>
          )}
        </div>

        <Link to="/mdm">MDM</Link>
        <Link to="/rte">RTE प्रवेश</Link>
        <Link to="/sarvasamaveshak">समावेशक शिक्षण</Link>
        <Link to="/upakram">उपक्रम</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-400 p-4 flex flex-col gap-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <Link to="/amachyavishayi" onClick={toggleMenu}>
          आमच्याविषयी
        </Link>
        <Link to="/asthapana" onClick={toggleMenu}>
          स्थापना
        </Link>

        {/* Mobile Dropdown Toggle */}
        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 focus:outline-none"
          >
            स्पर्धा परीक्षा <ChevronDown size={18} />
          </button>
          {dropdownOpen && (
            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link
                to="/navoday"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                नवोदय परीक्षा
              </Link>
              <Link
                to="/mission-arambh"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                मिशन आरंभ
              </Link>
              <Link
                to="/shishyavrutti"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
              >
                शिष्यवृत्ती
              </Link>
            </div>
          )}
        </div>

        <Link to="/mdm" onClick={toggleMenu}>
          MDM
        </Link>
        <Link to="/rte" onClick={toggleMenu}>
          RTE प्रवेश
        </Link>
        <Link to="/sarvasamaveshak" onClick={toggleMenu}>
          समावेशक शिक्षण
        </Link>
        <Link to="/upakram" onClick={toggleMenu}>
          उपक्रम
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
