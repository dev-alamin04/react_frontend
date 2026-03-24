import React from 'react';
import { useTranslation } from 'react-i18next';

function FreeTutorials() {
  const { t } = useTranslation();

  const tutorials = [
    { title: t('tut_1_title'), desc: t('tut_1_desc') },
    { title: t('tut_2_title'), desc: t('tut_2_desc') },
    { title: t('tut_3_title'), desc: t('tut_3_desc') },
    { title: t('tut_4_title'), desc: t('tut_4_desc') },
  ];

  return (
    <div className="max-w-[1680px] mx-auto px-6 pb-10">

      {/* Tutorial List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {t('tutorials_title')}
        </h2>
        {tutorials.map((item, i) => (
          <div key={i} className="py-2 text-sm">
            <span className="text-[#00aaff] font-semibold">{item.title} </span>
            <span className="text-gray-700">{item.desc}</span>
          </div>
        ))}
      </div>

      {/* Logo + Quote */}
      <div className="flex flex-col items-center text-center my-10">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="106" height="122" viewBox="0 0 106 122" fill="none">
            <path d="M65.2281 18.5081H87.6267V30.7638H69.4217L68.2478 31.9373V98.7957L56.0414 106.77V121.458H55.9995V27.7404L65.2281 18.5081Z" fill="#474747" />
            <path d="M68.2485 98.1879V112.833L56.041 120.809V106.162L68.2485 98.1879Z" fill="#474747" />
            <path d="M49.918 27.6987V106.685L37.7094 98.7518L37.6687 98.7111V31.8967L36.4936 30.763H18.3723V18.5083H40.7302L49.918 27.6987Z" fill="#474747" />
            <path d="M49.9181 106.078V120.766L37.7094 112.834L37.6687 112.793V98.1035L37.7094 98.1454L49.9181 106.078Z" fill="#474747" />
            <path d="M106 -9.15527e-05V36.8068H93.7506V12.2556H12.2075V82.1331L37.6687 98.7102L37.7095 98.7521L49.9181 106.684V121.373L37.7095 113.442L37.6687 113.4L0 88.8069V-9.15527e-05H106Z" fill="#474747" />
            <path d="M106 49.062V88.8064L68.2893 113.441H68.2485L56.041 121.458V106.77L68.2485 98.7957L68.2893 98.7527L93.7505 82.1337V49.062H106Z" fill="#474747" />
            <path d="M87.6703 36.8069V78.8166L75.4209 86.7917V36.8069H87.6703Z" fill="#474747" />
            <path d="M18.2932 36.8069V78.8166L30.5426 86.7917V36.8069H18.2932Z" fill="#474747" />
          </svg>
        </div>
        <p className="text-sm text-gray-600 italic">
          {t('quote')}
        </p>
      </div>

      {/* Services Button */}
      <div className="flex flex-col gap-3">
        <button className="w-full bg-white border border-black text-black text-sm font-bold uppercase tracking-widest mt-2 py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200">
          {t('services')}
        </button>
      </div>

    </div>
  );
}

export default FreeTutorials;