import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-black">

            {/* Top Hero */}
            <section className="bg-[#F1F1F1] text-center py-8 px-4 md:py-10 md:px-10 lg:px-20 xl:px-40">
                <h1
                    className="text-[#000000]  text-[28px] leading-[36px] md:text-[40px] md:leading-[50px] xl:text-[62.7px] xl:leading-[77px] mb-4 xl:mb-10"
                    style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '5.62%', }}
                >
                    {t('hero_title')}
                </h1>

                <p
                    className="text-[#696969] mx-auto mt-[40px] flex justify-center items-center w-full md:w-[90%] xl:w-[1100px] text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] xl:text-[22px] xl:leading-[29px] mb-4 xl:mb-[22px]"
                    style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.76%', }}
                >
                    {t('hero_sub')}
                </p>

                <p
                    className="text-[#494949] mb-4 text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] xl:text-[20px] xl:leading-[25px]"
                    style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '4.2%' }}
                >
                    {t('hero_quote')}
                </p>
            </section>

            {/* Video + Welcome */}
            <section className="max-w-[1680px] mt-[80px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-[20px]">

                {/* YouTube Video */}
                <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-black">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Intro Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Welcome Text */}
                <div className="w-full md:w-1/2">
                    <h2
                        className="text-[#03BCFC] mb-4 text-[24px] leading-[30px] md:text-[32px] md:leading-[38px] xl:text-[40px] xl:leading-[46px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '4.2%' }}
                    >
                        {t('welcome_title')}
                    </h2>

                    <p
                        className="text-[#000000]  text-[16px] mt-[20px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '2.34%' }}
                    >
                        {t('welcome_p1')}
                    </p>

                    <p
                        className="text-[#000000]  text-[16px] mt-[20px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.76%' }}
                    >
                        {t('welcome_p2')}
                    </p>

                    <p
                        className="text-[#000000]  text-[16px]  mt-[20px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.76%' }}
                    >
                        {t('welcome_p3')}
                    </p>

                    <p
                        className="text-[#03BCFC] mt-[20px] text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] xl:text-[24px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '2.93%' }}
                    >
                        {t('welcome_link')}
                    </p>

                    <p
                        className="text-[#000000] mt-[20px] text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.81%' }}
                    >
                        {t('welcome_p4')}
                    </p>

                    <button
                        className="w-full bg-white border mt-[40px] border-black text-black text-xs md:text-sm font-bold uppercase tracking-widest py-2 md:py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200"
                        style={{ borderRadius: '10px', fontFamily: 'Montserrat', fontWeight: 400, fontSize: '19.3px', lineHeight: '24px', letterSpacing: '1.56%' }}
                    >
                        {t('subscribe')}
                    </button>
                </div>
            </section>

        </div>
    );
}

export default Hero;