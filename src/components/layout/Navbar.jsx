import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between relative z-50 shadow-md">
      {/* Logo / Home link */}
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
        <Link
          to="/amachyavishayi"
          className="hover:text-yellow-300 transition-colors"
        >
          आमच्याविषयी
        </Link>
        <Link
          to="/asthapana"
          className="hover:text-yellow-300 transition-colors"
        >
          आस्थापना
        </Link>

        {/* Dropdown */}
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors focus:outline-none"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute top-8 left-0 bg-blue-700 shadow-lg rounded p-2 flex flex-col gap-2 w-48 z-20 border border-blue-500">
              <Link
                to="/navoday"
                onClick={() => setDropdownOpen(false)}
                className="hover:bg-blue-600 p-2 rounded hover:text-yellow-300 transition-colors"
              >
                नवोदय परीक्षा
              </Link>
              <Link
                to="/mission-arambh"
                onClick={() => setDropdownOpen(false)}
                className="hover:bg-blue-600 p-2 rounded hover:text-yellow-300 transition-colors"
              >
                मिशन आरंभ
              </Link>
              <Link
                to="/shishyavrutti"
                onClick={() => setDropdownOpen(false)}
                className="hover:bg-blue-600 p-2 rounded hover:text-yellow-300 transition-colors"
              >
                शिष्यवृत्ती
              </Link>
            </div>
          )}
        </div>

        <Link to="/mdm" className="hover:text-yellow-300 transition-colors">
          MDM
        </Link>
        <Link to="/rte" className="hover:text-yellow-300 transition-colors">
          RTE प्रवेश
        </Link>
        <Link
          to="/sarvasamaveshak"
          className="hover:text-yellow-300 transition-colors"
        >
          सर्व समावेशक शिक्षण
        </Link>
        <Link to="/upakram" className="hover:text-yellow-300 transition-colors">
          उपक्रम
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
        <Link
          to="/amachyavishayi"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          आमच्याविषयी
        </Link>
        <Link
          to="/asthapana"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          आस्थापना
        </Link>

        {/* Mobile Dropdown Toggle */}
        <div className="flex flex-col">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors p-2 focus:outline-none text-left"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className="ml-4 mt-1 flex flex-col gap-2 border-l-2 border-blue-500 pl-2">
              <Link
                to="/navoday"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
                className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
              >
                नवोदय परीक्षा
              </Link>
              <Link
                to="/mission-arambh"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
                className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
              >
                मिशन आरंभ
              </Link>
              <Link
                to="/shishyavrutti"
                onClick={() => {
                  toggleMenu();
                  setDropdownOpen(false);
                }}
                className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
              >
                शिष्यवृत्ती
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/mdm"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          MDM
        </Link>
        <Link
          to="/rte"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          RTE प्रवेश
        </Link>
        <Link
          to="/sarvasamaveshak"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          सर्व समावेशक शिक्षण
        </Link>
        <Link
          to="/upakram"
          onClick={toggleMenu}
          className="hover:text-yellow-300 transition-colors p-2 hover:bg-blue-600 rounded"
        >
          उपक्रम
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
