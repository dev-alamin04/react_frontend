import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black">

      {/* Who I Am */}
      <section className="bg-[#F1F1F1] text-center py-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('who_title')}
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('who_desc')}
        </p>

        {/* Contact Button */}
        <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
           <button className="w-full bg-white border border-black text-black text-sm font-bold uppercase tracking-widest  py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200" style={{borderRadius: '10px'}}>
            {t('contact')}
          </button>
        </div>
      </section>

      {/* Gumroad Section */}
      <section className="max-w-[1680px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">

        {/* Left - Text */}
        <div className="w-full md:w-1/2">
          <p className="text-sm text-gray-700 leading-relaxed mb-4 text-center md:text-left">
            {t('gumroad_p1')}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6 text-center md:text-left italic">
            "{t('gumroad_p2')}"
          </p>

          <h3 className="text-base font-bold mb-4">
            {t('gumroad_includes')}
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <span className="text-[#00aaff] font-semibold">{t('gum_1_title')}</span>
              {t('gum_1_desc')}
            </p>
            <p>
              <span className="text-[#00aaff] font-semibold">{t('gum_2_title')}</span>
              {t('gum_2_desc')}
            </p>
            <p>
              <span className="text-[#00aaff] font-semibold">{t('gum_3_title')}</span>
              {t('gum_3_desc')}
            </p>
          </div>
        </div>

        {/* Right - Gumroad Card */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="bg-[#4F4F4F] text-white flex flex-col items-center justify-center p-10 text-center border-4 border-[#03BCFC] flex-1 min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider leading-tight mb-4">
              {t('gumroad_btn')}
            </h3>
            <span className="text-[#03BCFC] text-2xl font-black uppercase tracking-widest">
              {t('gumroad_click')}
            </span>
          </div>

          {/* Buy Button */}
           <button className="w-full bg-white border border-black text-black text-sm font-bold uppercase tracking-widest mt-3 py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200" style={{borderRadius: '10px'}}>
            {t('buy')}
          </button>
        </div>

      </section>
    </div>
  );
}

export default AboutMe;