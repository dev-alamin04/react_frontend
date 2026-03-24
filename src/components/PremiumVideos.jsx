import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dear1Svg, Dear2Svg, Dear3Svg, Dear4Svg, Dear5Svg } from '../components/svg';

function PremiumVideos() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black">

      {/* Premium Header */}
      <section className="bg-[#03BCFC] text-white text-center py-14 px-6">
        <h2 className="text-3xl font-black uppercase tracking-widest mb-6">
          {t('premium_title')}
        </h2>
        <p className="text-sm md:text-base font-semibold mx-auto mb-3 leading-relaxed">
          {t('premium_p1')}
        </p>
        <p className="text-xs md:text-sm max-w-2xl mx-auto leading-relaxed opacity-90">
          {t('premium_p2')}
        </p>
      </section>

      {/* Patreon + FAQ */}
      <section className="max-w-[1680px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">

        {/* Left - Patreon Card */}
        <div className="w-full md:w-2/5 flex flex-col">
          <div className="bg-[#4F4F4F] text-white flex flex-col items-center justify-center p-10 text-center border-4 border-[#03BCFC] flex-1">
            <div className="mb-6">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62c0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.97 3.22-7.21 7.18-7.21zM2 21.6h3.5V2.41H2V21.6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider leading-tight mb-2">
              PROFESSIONAL<br />GUIDE
            </h3>
            <h3 className="text-2xl font-black uppercase tracking-wider text-[#03BCFC]">
              FOR ARTISTS
            </h3>
          </div>

           <button className="w-full bg-white border border-black text-black text-sm font-bold uppercase tracking-widest mt-3 py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200" style={{borderRadius: '10px'}}>
            {t('join_btn')}
          </button>
        </div>

        {/* Right - FAQ + Discord */}
        <div className="w-full md:w-3/5 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">{t('faq_1_title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{t('faq_1_desc')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">{t('faq_2_title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{t('faq_2_desc')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">{t('faq_3_title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{t('faq_3_desc')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">{t('discord_title')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{t('discord_desc')}</p>
          </div>
        </div>
      </section>

      {/* Deer Images Row */}
      <section className="max-w-[1680px] mx-auto px-6 pb-12">
        <div className="flex justify-around items-end gap-2">
          <div className="flex items-end w-[15%] max-w-[100px]">
            <Dear1Svg />
          </div>
          <div className="flex items-end w-[15%] max-w-[100px]">
            <Dear2Svg />
          </div>
          <div className="flex items-end w-[15%] max-w-[100px]">
            <Dear3Svg />
          </div>
          <div className="flex items-end w-[15%] max-w-[100px]">
            <Dear4Svg />
          </div>
          <div className="flex items-end w-[15%] max-w-[100px]">
            <Dear5Svg />
          </div>
        </div>
      </section>

    </div>
  );
}

export default PremiumVideos;