import { useTranslation } from "react-i18next";
import avatarImage from "../assets/avatar-image.png";

export function AboutMe() {
    const { t } = useTranslation();
    return (
        <section id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img src={avatarImage} alt="Avatar da Bia" width={400} height={400} />
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-ful">
            <h2 className="text-4xl font-bold text-white mb-4">{t('app.about_me')}</h2>
            <p className="text-base lg:text-lg">
            {t('app.about_me_text')}
            </p>
            </div>
        </div>
        </section>
    );
}
