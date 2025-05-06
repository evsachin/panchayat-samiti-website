import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    spardha: false,
    shala: false,
  });

  const dropdownRefs = {
    spardha: useRef(),
    shala: useRef(),
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (name) =>
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

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

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setDropdownOpen((prev) => ({ ...prev, [key]: false }));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between relative z-50 shadow-md">
      <Link
        to="/"
        onClick={toggleMenu}
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
      <div className="hidden md:flex gap-5 items-center flex-wrap">
        <Link to="/amachyavishayi" className="nav-link">
          आमच्याविषयी
        </Link>

        {/* शाळा माहिती Dropdown */}
        <div className="relative group" ref={dropdownRefs.shala}>
          <button
            onClick={() => toggleDropdown("shala")}
            className="flex items-center gap-1 nav-link"
          >
            शाळा माहिती{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen.shala ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`absolute top-8 left-0 bg-blue-700 shadow-lg rounded p-2 flex flex-col gap-2 w-48 z-20 border border-blue-500 transition-all duration-300 ${
              dropdownOpen.shala
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              to="/zp-school"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, shala: false }))
              }
              className="dropdown-link"
            >
              ZP शाळा
            </Link>
            <Link
              to="/private-school"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, shala: false }))
              }
              className="dropdown-link"
            >
              खाजगी शाळा
            </Link>
            <Link
              to="/shalapath"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, shala: false }))
              }
              className="dropdown-link"
            >
              शाळा पट
            </Link>
          </div>
        </div>

        <Link to="/shikshakmahiti" className="nav-link">
          शिक्षक माहिती
        </Link>
        <Link to="/shashannirnay" className="nav-link">
          शासन निर्णय
        </Link>
        <Link to="/asthapana" className="nav-link">
          आस्थापना
        </Link>

        {/* स्पर्धा परीक्षा Dropdown */}
        <div className="relative group" ref={dropdownRefs.spardha}>
          <button
            onClick={() => toggleDropdown("spardha")}
            className="flex items-center gap-1 nav-link"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen.spardha ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`absolute top-8 left-0 bg-blue-700 shadow-lg rounded p-2 flex flex-col gap-2 w-48 z-20 border border-blue-500 transition-all duration-300 ${
              dropdownOpen.spardha
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              to="/navoday"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, spardha: false }))
              }
              className="dropdown-link"
            >
              नवोदय परीक्षा
            </Link>
            <Link
              to="/mission-arambh"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, spardha: false }))
              }
              className="dropdown-link"
            >
              मिशन आरंभ
            </Link>
            <Link
              to="/shishyavrutti"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, spardha: false }))
              }
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

        {/* <Link to="/mdm" className="nav-link">
          MDM
        </Link> */}
        {/* New RTS Tab */}
        <Link to="/rts" className="nav-link">
          RTS
        </Link>
        <Link to="/rte" className="nav-link">
          RTE प्रवेश
        </Link>
        <Link to="/sarvasamaveshak" className="nav-link">
          समावेशीत शिक्षण
        </Link>
        <Link to="/samagraanudan" className="nav-link">
          समग्र अनुदान
        </Link>
        <Link to="/sanchmanyata" className="nav-link">
          संचमान्यता
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
        <Link to="/amachyavishayi" onClick={toggleMenu} className="mobile-link">
          आमच्याविषयी
        </Link>

        {/* शाळा माहिती Dropdown Mobile */}
        <div className="flex flex-col">
          <button
            onClick={() => toggleDropdown("shala")}
            className="flex items-center gap-1 mobile-link text-left"
          >
            शाळा माहिती{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen.shala ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`ml-4 mt-1 flex flex-col gap-2 border-l-2 border-blue-500 pl-2 transition-all duration-300 ${
              dropdownOpen.shala
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <Link
              to="/zp-school"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, shala: false }));
              }}
              className="mobile-link"
            >
              ZP शाळा
            </Link>
            <Link
              to="/private-school"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, shala: false }));
              }}
              className="mobile-link"
            >
              खाजगी शाळा
            </Link>

            <Link
              to="/shalapath"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, shala: false }));
              }}
              className="mobile-link"
            >
              शाळा पट
            </Link>
          </div>
        </div>

        <Link to="/shikshakmahiti" onClick={toggleMenu} className="mobile-link">
          शिक्षक माहिती
        </Link>
        <Link to="/asthapana" onClick={toggleMenu} className="mobile-link">
          आस्थापना
        </Link>

        {/* स्पर्धा परीक्षा Dropdown Mobile */}
        <div className="flex flex-col">
          <button
            onClick={() => toggleDropdown("spardha")}
            className="flex items-center gap-1 mobile-link text-left"
          >
            स्पर्धा परीक्षा{" "}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                dropdownOpen.spardha ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`ml-4 mt-1 flex flex-col gap-2 border-l-2 border-blue-500 pl-2 transition-all duration-300 ${
              dropdownOpen.spardha
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <Link
              to="/navoday"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, spardha: false }));
              }}
              className="mobile-link"
            >
              नवोदय परीक्षा
            </Link>
            <Link
              to="/mission-arambh"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, spardha: false }));
              }}
              className="mobile-link"
            >
              मिशन आरंभ
            </Link>
            <Link
              to="/shishyavrutti"
              onClick={() => {
                toggleMenu();
                setDropdownOpen((prev) => ({ ...prev, spardha: false }));
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
        <Link to="/shashannirnay" onClick={toggleMenu} className="mobile-link">
          शासन निर्णय
        </Link>
        {/* <Link to="/mdm" onClick={toggleMenu} className="mobile-link">
          MDM
        </Link> */}
        <Link to="/rte" onClick={toggleMenu} className="mobile-link">
          RTE प्रवेश
        </Link>
        {/* New RTS Tab Mobile */}
        <Link to="/rts" onClick={toggleMenu} className="mobile-link">
          RTS
        </Link>
        <Link
          to="/sarvasamaveshak"
          onClick={toggleMenu}
          className="mobile-link"
        >
          समावेशीत शिक्षण
        </Link>
        <Link to="/samagraanudan" onClick={toggleMenu} className="mobile-link">
          समग्र अनुदान
        </Link>
        <Link to="/sanchmanyata" onClick={toggleMenu} className="mobile-link">
          संचमान्यता
        </Link>
        <Link to="/video" onClick={toggleMenu} className="mobile-link">
          व्हिडीओ
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
