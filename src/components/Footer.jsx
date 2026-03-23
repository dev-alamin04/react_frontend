import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const socials = [
    { icon: 'fa-patreon', label: 'Patreon' },
    { icon: 'fa-instagram', label: 'Instagram' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fa-youtube', label: 'YouTube' },
    { icon: 'fa-discord', label: 'Discord' },
    { icon: 'fa-x-twitter', label: 'Twitter' },
    { icon: 'fa-vimeo-v', label: 'Vimeo' },
    { icon: 'fa-facebook-f', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#111] text-white px-8 py-4">
      <div className="max-w-[1680px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left - Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-left">
          <p>2024 Carlos Toledano. Todos los derechos reservados.</p>
          <p>
            <span className="cursor-pointer hover:text-white transition-colors">Aviso Legal</span>
            {' · '}
            <span className="cursor-pointer hover:text-white transition-colors">Política de privacidad</span>
          </p>
        </div>

        {/* Center - Contact */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <i className="fa-regular fa-envelope-open text-white text-base group-hover:text-[#00aaff] transition-colors" />
          <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#00aaff] transition-colors">
            {t('contact')}
          </span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {socials.map((s, i) => (
            <div
              key={i}
              title={s.label}
              className="w-8 h-8 rounded-full border border-[#00aaff] flex items-center justify-center cursor-pointer bg-transparent hover:bg-[#00aaff] transition-all duration-500 ease-in-out group"
            >
              <i className={`fa-brands ${s.icon} text-[#00aaff] group-hover:text-white text-xs transition-colors duration-500 ease-in-out`} />
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;