import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { mandir } from '../assets/imageConstants';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'navbar.home' },
    { path: '/about', label: 'navbar.aboutUs' },
    // { path: '/bookings', label: 'navbar.bookings' },
    { path: '/gallery', label: 'navbar.gallery' },
    { path: '/contact', label: 'navbar.contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-lg max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <NavLink to="/" className="flex items-center">
              <img
                src={mandir.maa_logo}
                alt="Maa Baglamukhi Mata Mandir"
                className="mr-3 h-14 w-14 rounded-full object-cover"
              />
              <span className="text-red-600 font-bold text-lg hidden sm:block">
                माँ बगलामुखी माता मंदिर
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <LanguageToggle />
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`
                  }>
                  {t(link.label)}
                </NavLink>
              ))}              
              <div className="border-t border-gray-200 pt-4">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
