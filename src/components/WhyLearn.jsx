import React from "react";
import { useTranslation } from "react-i18next";

function WhyLearn() {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-black">
            <section className="max-w-[1680px] mx-auto px-6 pb-10">
                <h2 className="text-2xl font-bold mb-6">{t('why_title')}</h2>

                <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                        <span className="text-[#00aaff] font-semibold">{t('why_1_title')}</span>
                        {t('why_1_desc')}
                    </p>
                    <p>
                        <span className="text-[#00aaff] font-semibold">{t('why_2_title')}</span>
                        {t('why_2_desc')}
                    </p>
                    <p>
                        <span className="text-[#00aaff] font-semibold">{t('why_3_title')}</span>
                        {t('why_3_desc')}
                    </p>
                    <p>
                        <span className="text-[#00aaff] font-semibold">{t('why_4_title')}</span>
                        {t('why_4_desc')}
                    </p>
                </div>
            </section>
        </div>
    );
}

export default WhyLearn;