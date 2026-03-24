import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <div className="bg-white text-black">

            {/* Top Hero */}
            <section className="bg-[#F1F1F1] text-center py-10 px-6 md:px-20 lg:px-40">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    {t('hero_title')}
                </h1>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                    {t('hero_sub')}
                </p>
                <p className="text-xs font-bold tracking-widest text-gray-700">
                    {t('hero_quote')}
                </p>
            </section>

            {/* Video + Welcome */}
            <section className="max-w-[1680px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">

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
                    <h2 className="text-[#00aaff] text-xl font-bold mb-4">
                        {t('welcome_title')}
                    </h2>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                        {t('welcome_p1')}
                    </p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                        {t('welcome_p2')}
                    </p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                        {t('welcome_p3')}
                    </p>
                    <p className="text-[#00aaff] text-sm font-semibold mb-2">
                        {t('welcome_link')}
                    </p>
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        {t('welcome_p4')}
                    </p>

                    {/* Subscribe Button */}
                    <button className="w-full bg-white border border-black text-black text-sm font-bold uppercase tracking-widest  py-3 hover:bg-[#4F4F4F] hover:text-white hover:border-[#4F4F4F] transition-all duration-200" style={{borderRadius: '10px'}}>
                        {t('subscribe')}
                    </button>
                </div>
            </section>

        </div>
    );
}

export default Hero;