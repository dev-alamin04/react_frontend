import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dear1Svg, Dear2Svg, Dear3Svg, Dear4Svg, Dear5Svg } from '../components/svg';

function PremiumVideos() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black">

      {/* Premium Header */}
      <section className="bg-[#03BCFC] min-h-[350px] md:min-h-[450px] p-[80px] mb-[80px] xl:min-h-[476px] text-white text-center py-10 md:py-14 px-4 md:px-6 xl:px-6">
        <h2
          className="text-[#FFFFFF] mb-[40px] text-[28px] leading-[36px]  md:text-[40px] md:leading-[50px] xl:text-[53.8px] xl:leading-[66px]"
          style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '2.34%' }}
        >
          {t('premium_title')}
        </h2>
        <p
          className="text-[#FFFFFF] mb-3 text-[18px] leading-[26px] md:text-[24px] md:leading-[34px] xl:text-[28px] xl:leading-[38px]"
          style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '2.44%' }}
        >
          {t('premium_p1')}
        </p>
        <p
          className="text-[#FFFFFF] mb-3 text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] xl:text-[22px] xl:leading-[38px]"
          style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '6.15%' }}
        >
          {t('premium_p2')}
        </p>
      </section>

      {/* Patreon + FAQ */}
      <section className="max-w-[1680px] mx-auto px-4 md:px-6  md:py-12 flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Left - Patreon Card */}
        <div className="w-full md:w-2/5 flex flex-col">
          <div className="bg-[#4F4F4F] max-h-[500px] md:max-h-[600px] xl:max-h-[629px] max-w-full text-white flex flex-col items-center justify-center p-8 md:p-10 text-center border-4 border-[#03BCFC] flex-1">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="108" viewBox="0 0 122 131" fill="none" className="md:w-[110px] md:h-[120px] xl:w-[122px] xl:h-[131px]">
                <path d="M30.7228 130.882C30.7228 130.882 7.7339 135.516 1.3238 86.7495C-5.08729 37.9824 12.1547 9.738 45.0913 2.45648C73.7026 -3.86919 100.574 1.79454 116.489 22.0955C131.837 41.6713 113.03 76.3979 85.9019 79.0507C82.7632 79.3576 79.6656 80.0276 76.7891 81.3184C71.645 83.6293 64.5446 88.1657 60.9517 96.4582C53.4184 113.843 47.7437 130.882 30.7228 130.882Z" fill="white" />
              </svg>
            </div>
            <h3 className="text-[#FCFCFC] mb-3 mt-[56px] text-[30px] leading-[40px] xl:text-[55px] xl:leading-[70px] 2xl:text-[68px] 2xl:leading-[86px]" style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '3.32%' }}>
              PROFESSIONAL<br />GUIDE
            </h3>
            <h3 className="text-[#03BCFC] mb-3 text-[30px] leading-[40px] xl:text-[55px] xl:leading-[70px] 2xl:text-[68px] 2xl:leading-[86px]" style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '3.32%' }}>
              FOR ARTISTS
            </h3>
          </div>

          <button className="w-full bg-white mt-[40px] border border-black text-black text-xs md:text-sm font-bold uppercase tracking-widest mt-3 py-2 md:py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200" style={{ borderRadius: '10px', fontFamily: 'Montserrat', fontWeight: 400, fontSize: '19.3px', lineHeight: '24px', letterSpacing: '1.56%' }}>
            {t('join_btn')}
          </button>
        </div>

        {/* Right - FAQ + Discord */}
        <div className="w-full md:w-3/5 space-y-6">
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <h3 className="text-[#000000] mb-[30px] text-[20px] leading-[28px] md:text-[28px] md:leading-[40px] xl:text-[34px] xl:leading-[45px]" style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '3.32%' }}>
                {t(`faq_${num}_title`)}
              </h3>
              <p className="text-[#000000] mb-[40px] text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] xl:text-[23.4px] xl:leading-[38px]" style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '2.5%' }}>
                {t(`faq_${num}_desc`)}
              </p>
            </div>
          ))}
          <div>
            <h3 className="text-[#000000] mt-[40px] mb-[30px] text-[22px] leading-[30px] md:text-[28px] md:leading-[40px] xl:text-[36.7px] xl:leading-[45px]" style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '2.93%' }}>
              {t('discord_title')}
            </h3>
            <p className="text-[#000000] mb-3 text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] xl:text-[23.4px] xl:leading-[38px]" style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '2.29%' }}>
              {t('discord_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Deer Images Row */}
      <section className="max-w-[1677px] max-h-[300px] md:max-h-[340px] xl:max-h-[380px] mx-auto px-4 md:px-6 pb-12">
        <div className="flex justify-around items-end gap-2">
          {[Dear1Svg, Dear2Svg, Dear3Svg, Dear4Svg, Dear5Svg].map((Svg, idx) => (
            <div key={idx} className="flex items-end w-[15%] max-w-[80px] md:max-w-[90px] xl:max-w-[100px]">
              <Svg />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default PremiumVideos;