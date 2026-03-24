import React from "react";
import { useTranslation } from "react-i18next";

function WhyLearn() {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-black">
            <section className="max-w-[1680px] mx-auto px-4 mt-[30px] md:px-6 pb-[30px] md:pb-[30px]">

                <h2
                    className="text-[#000000] mb-[40px] text-[22px] leading-[30px] md:text-[28px] md:leading-[36px] xl:text-[33.7px] xl:leading-[42px]"
                    style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '2.73%' }}
                >
                    {t('why_title')}
                </h2>

                <div className="space-y-4 text-sm leading-relaxed">

                    <p
                        className="mb-[20px] text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '1.46%' }}
                    >
                        <span className="text-[#03BCFC] font-semibold">
                            {t('why_1_title')}
                        </span>
                        <span
                            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.46%' }}
                        >
                            {t('why_1_desc')}
                        </span>
                    </p>

                    <p
                        className="mb-[30px] text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '1.61%' }}
                    >
                        <span className="text-[#03BCFC] font-semibold">
                            {t('why_2_title')}
                        </span>
                        <span
                            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.61%' }}
                        >
                            {t('why_2_desc')}
                        </span>
                    </p>

                    <p
                        className="mb-[30px] text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '1.51%' }}
                    >
                        <span className="text-[#03BCFC] font-semibold">
                            {t('why_3_title')}
                        </span>
                        <span
                            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.51%' }}
                        >
                            {t('why_3_desc')}
                        </span>
                    </p>

                    <p
                        className="mb-[30px] text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '1.61%' }}
                    >
                        <span className="text-[#03BCFC] font-semibold">
                            {t('why_4_title')}
                        </span>
                        <span
                            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] xl:text-[22.5px] xl:leading-[38px]"
                            style={{ fontFamily: 'Montserrat', fontWeight: 400, letterSpacing: '1.51%' }}
                        >
                            {t('why_4_desc')}
                        </span>
                    </p>

                </div>
            </section>
        </div>
    );
}

export default WhyLearn;