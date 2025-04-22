import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-primary text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold font-heading">शिक्षण विभाग</h1>

      {/* Hamburger */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/amachyavishayi">आमच्याविषयी</Link>
        <Link to="/asthapana">स्थापना</Link>
        <Link to="/spardhapariksha">स्पर्धा परीक्षा</Link>
        <Link to="/navoday">नवोदय परीक्षा</Link>
        <Link to="/mission-arambh">मिशन आरंभ</Link>
        <Link to="/shishyavrutti">शिष्यवृत्ती</Link>
        <Link to="/mdm">MDM</Link>
        <Link to="/rte">RTE प्रवेश</Link>
        <Link to="/sarvasamaveshak">समावेशक शिक्षण</Link>
        <Link to="/upakram">उपक्रम</Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-blue-800 p-4 flex flex-col gap-4 transition-all duration-300 ease-in-out ${
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
        <Link to="/spardhapariksha" onClick={toggleMenu}>
          स्पर्धा परीक्षा
        </Link>
        <Link to="/navoday" onClick={toggleMenu}>
          नवोदय परीक्षा
        </Link>
        <Link to="/mission-arambh" onClick={toggleMenu}>
          मिशन आरंभ
        </Link>
        <Link to="/shishyavrutti" onClick={toggleMenu}>
          शिष्यवृत्ती
        </Link>
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
