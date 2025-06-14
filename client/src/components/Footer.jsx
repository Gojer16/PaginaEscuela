import { Link } from 'react-router-dom';
import {  Phone, Mail, Facebook,  Instagram } from 'lucide-react';
import logo from '/1.jpg';
import { FaXTwitter } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-secondary via-[#1a0275] to-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Information */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 group">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">E.T.M.F.F.</h3>
            </div>
            <p className="text-gray-300 mt-4 mb-4">
              Escuela Técnica Mariano Fernández Fortiquez
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-primary transform hover:scale-125 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/Gojer27" target="_blank" rel="noreferrer" className="hover:text-primary transform hover:scale-125 transition-all duration-300">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/lilgojer" target="_blank" rel="noreferrer" className="hover:text-primary transform hover:scale-125 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/programas" className="text-gray-300 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 group">
                <FaMapPin className="w-5 h-5 mt-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Carretera Nacional Villa de Cura, cruce con calle Sabana Larga, Cagua, Estado Aragua, Venezuela.
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +58 412-8449-024
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  operation927@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300 group">
            © {currentYear} Escuela Técnica Mariano Fernández Fortiquez. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
            © {currentYear} Build with ❤️ by Gojer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;