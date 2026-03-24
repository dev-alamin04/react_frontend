import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-black">

      {/* Who I Am */}
      <section className="bg-[#F1F1F1] max-h-[350px] md:max-h-[420px] xl:max-h-[467px] text-center py-10 md:py-14 px-4 md:px-6 xl:px-6">
        <h2
          className="mb-3 text-[28px] md:text-[48px] xl:text-[62.7px] leading-[36px] md:leading-[60px] xl:leading-[77px]"
          style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '5.62%' }}
        >
          {t('who_title')}
        </h2>
        <p
          className="text-[#696969] mb-3 text-[16px] md:text-[20px] xl:text-[22px] leading-[24px] md:leading-[28px] xl:leading-[29px]"
          style={{ fontFamily: 'Montserrat', fontWeight: 500, letterSpacing: '1.76%' }}
        >
          {t('who_desc')}
        </p>

        {/* Contact Button */}
        <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
          <button
            className="w-full bg-white border border-black text-black text-sm md:text-base max-h-[70px] md:max-h-[80px] max-w-[100%] font-bold uppercase tracking-widest py-2 md:py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200"
            style={{ borderRadius: '10px', fontFamily: 'Montserrat', fontWeight: 400, fontSize: '19px', lineHeight: '24px', letterSpacing: '1.56%' }}
          >
            {t('contact')}
          </button>
        </div>
      </section>

      {/* Gumroad Section */}
      <section className="max-w-[1680px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Left - Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <p
            className="text-[#000000] mb-3 text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[34px] xl:leading-[38px]"
            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1%' }}
          >
            {t('gumroad_p1')}
          </p>
          <p
            className="text-[#000000] mb-3 text-[16px] md:text-[20px] xl:text-[24px] leading-[24px] md:leading-[34px] xl:leading-[38px]"
            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1%' }}
          >
            "{t('gumroad_p2')}"
          </p>

          <h3
            className="text-[#000000] mb-3 text-[22px] md:text-[28px] xl:text-[34px] leading-[28px] md:leading-[60px] xl:leading-[77px]"
            style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '5.62%' }}
          >
            {t('gumroad_includes')}
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            {[1, 2, 3].map((num) => (
              <p key={num}>
                <span
                  className="text-[#03BCFC] mb-3"
                  style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '18px', md: '22px', lineHeight: '30px', md: '38px', letterSpacing: '2%' }}
                >
                  {t(`gum_${num}_title`)}
                </span>
                <span
                  className="text-[#000000] mb-3"
                  style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: '18px', md: '22px', lineHeight: '30px', md: '38px', letterSpacing: '2%' }}
                >
                  {t(`gum_${num}_desc`)}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Right - Gumroad Card */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="bg-[#4F4F4F] max-w-full md:max-w-[700px] xl:max-w-[830px] max-h-[500px] md:max-h-[700px] xl:max-h-[845px] text-white flex flex-col items-center justify-center p-8 md:p-10 text-center border-4 border-[#03BCFC] flex-1 min-h-[220px] md:min-h-[280px]">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-black uppercase tracking-wider leading-tight mb-4">
              {t('gumroad_btn')}
            </h3>
            <span className="text-[#03BCFC] text-xl md:text-2xl xl:text-2xl font-black uppercase tracking-widest">
              {t('gumroad_click')}
            </span>
          </div>

          {/* Buy Button */}
          <button
            className="w-full max-w-full md:max-w-[700px] xl:max-w-[830px] max-h-[60px] md:max-h-[72px] bg-white border border-black text-black text-sm md:text-base font-bold uppercase tracking-widest mt-5 py-2 md:py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200"
            style={{ borderRadius: '10px' }}
          >
            {t('buy')}
          </button>
        </div>
      </section>

      {/* Bottom Deer Icon */}
      <div className="flex flex-col items-center text-center my-10">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="92"
            md="100"
            xl="106"
            viewBox="0 0 106 122"
            fill="none"
          >
            <path d="M65.2281 18.5081H87.6267V30.7638H69.4217L68.2478 31.9373V98.7957L56.0414 106.77V121.458H55.9995V27.7404L65.2281 18.5081Z" fill="#474747" />
            <path d="M68.2485 98.1879V112.833L56.041 120.809V106.162L68.2485 98.1879Z" fill="#474747" />
            <path d="M49.918 27.6987V106.685L37.7094 98.7518L37.6687 98.7111V31.8967L36.4936 30.763H18.3723V18.5083H40.7302L49.918 27.6987Z" fill="#474747" />
            <path d="M49.9181 106.078V120.766L37.7094 112.834L37.6687 112.793V98.1035L37.7094 98.1454L49.9181 106.078Z" fill="#474747" />
            <path d="M106 0V36.8068H93.7506V12.2556H12.2075V82.1331L37.6687 98.7102L37.7095 98.7521L49.9181 106.684V121.373L37.7095 113.442L37.6687 113.4L0 88.8069V0H106Z" fill="#474747" />
            <path d="M106 49.062V88.8064L68.2893 113.441H68.2485L56.041 121.458V106.77L68.2485 98.7957L68.2893 98.7527L93.7505 82.1337V49.062H106Z" fill="#474747" />
            <path d="M87.6703 36.8069V78.8166L75.4209 86.7917V36.8069H87.6703Z" fill="#474747" />
            <path d="M18.2932 36.8069V78.8166L30.5426 86.7917V36.8069H18.2932Z" fill="#474747" />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;