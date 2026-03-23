import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../components/svg';

const style = `
  @keyframes cornerTopLeft {
    from { top: 50%; left: 50%; opacity: 0; }
    to { top: -8px; left: -10px; opacity: 1; }
  }
  @keyframes cornerBottomRight {
    from { bottom: 50%; right: 50%; opacity: 0; }
    to { bottom: -8px; right: -10px; opacity: 1; }
  }
  .corner-tl {
    position: absolute;
    top: -8px;
    left: -10px;
    color: #00aaff;
    font-size: 18px;
    pointer-events: none;
    transform: rotate(45deg);
    animation: cornerTopLeft 0.25s ease forwards;
  }
  .corner-br {
    position: absolute;
    bottom: -8px;
    right: -10px;
    color: #00aaff;
    font-size: 18px;
    pointer-events: none;
    transform: rotate(45deg);
    animation: cornerBottomRight 0.25s ease forwards;
  }
`;

function Navbar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('HOME');
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1130);
  const [langDropdown, setLangDropdown] = useState(false);
  const langRef = useRef(null);

  const languages = [
    { code: 'en', label: 'ENG' },
    { code: 'es', label: 'ESP' },
  ];

  const links = [
    { key: 'HOME', label: 'HOME' },
    { key: 'PRISMAKEY', label: 'PRISMAKEY' },
    { key: 'PORTFOLIO', label: 'PORTFOLIO' },
    { key: 'TUTORIALS', label: 'TUTORIALS' },
    { key: 'SERVICES', label: t('services') },
    { key: 'ABOUT', label: 'ABOUT' },
    { key: 'CONTACT', label: t('contact') },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1130);
      if (window.innerWidth >= 1130) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <style>{style}</style>
      <nav className="flex justify-between items-center px-10 bg-[#0d0d0d] h-16 border-b border-[#1a1a1a] sticky top-0 z-50 flex-wrap">


      {/* logo */}
        <div className="flex items-center h-8 md:h-10">
          <Logo />
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <ul className="flex gap-3 items-center list-none m-0 p-0">
            {links.map((item) => (
              <li key={item.key} className="relative py-1">
                {hovered === item.key && active !== item.key && (
                  <>
                    <i className="fa-solid fa-angle-left corner-tl" />
                    <i className="fa-solid fa-angle-right corner-br" />
                  </>
                )}

                <a href={`#${item.key.toLowerCase()}`}
                  className={`
                    text-[13px] font-semibold tracking-widest uppercase px-3 py-1 
                    transition-all duration-200 inline-block
                    ${active === item.key
                      ? 'text-[#00aaff] bg-transparent'
                      : hovered === item.key
                        ? 'text-white bg-[#00aaff]'
                        : 'text-[#cccccc] bg-transparent'
                    }
                  `}
                  onClick={() => setActive(item.key)}
                  onMouseEnter={() => setHovered(item.key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Language Dropdown Desktop */}
            <li className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1 text-[13px] font-semibold tracking-widest uppercase px-3 py-1 text-[#cccccc] hover:text-white hover:bg-[#00aaff] transition-all duration-200 border-none bg-transparent cursor-pointer"
              >
                {currentLang.label}
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${langDropdown ? 'rotate-180' : ''}`} />
              </button>

              {langDropdown && (
                <ul className="absolute right-0 top-10 bg-[#1a1a1a] border border-[#333] list-none p-0 m-0 w-24 z-50">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangDropdown(false);
                        }}
                        className={`
                          w-full text-left px-4 py-2 text-[13px] font-semibold tracking-widest uppercase
                          border-none cursor-pointer transition-all duration-200
                          ${i18n.language === lang.code
                            ? 'text-[#00aaff] bg-transparent'
                            : 'text-[#cccccc] bg-transparent hover:bg-[#00aaff] hover:text-white'
                          }
                        `}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="bg-transparent border-none text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Mobile Dropdown */}
        {isMobile && menuOpen && (
          <ul className="list-none absolute top-14 w-[300px] right-2 bg-[#0d0d0d] py-2 m-0 border border-[#333]">
            {links.map((item) => (
              <li key={item.key} className="border-b border-[#1a1a1a]">

                <a href={`#${item.key.toLowerCase()}`}
                  className={`
                    block px-10 py-3 text-[13px] font-semibold 
                    tracking-widest uppercase no-underline
                    ${active === item.key ? 'text-[#00aaff]' : 'text-[#cccccc]'}
                  `}
                  onClick={() => {
                    setActive(item.key);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Language Switch Mobile */}
            {languages.map((lang) => (
              <li key={lang.code} className="border-b border-[#1a1a1a]">
                <button
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setMenuOpen(false);
                  }}
                  className={`
                    block w-full text-left px-10 py-3 text-[13px] font-semibold 
                    tracking-widest uppercase bg-transparent border-none cursor-pointer
                    ${i18n.language === lang.code ? 'text-[#00aaff]' : 'text-[#cccccc] hover:text-[#00aaff]'}
                  `}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        )}

      </nav>
    </>
  );
}

export default Navbar;