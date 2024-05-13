import { CertificationCard } from "../components/certification-card";
import { useTranslation } from "react-i18next";
import NodeJsCertificate from "../assets/certificado-nodejs.pdf";
import ReactJsCertificate from "../assets/certificado-reactJs.pdf";
import HtmlCssCertificate from "../assets/certificado-html-css.pdf";

export function Certifications() {
    const { t } = useTranslation();
    const certificationsData = [
        {
            id: 1,
            title: t('app.certification1_title'),
            description: t('app.certification1_description'),
            image: NodeJsCertificate,
            certificationUrl: NodeJsCertificate,
        },
        {
            id: 2,
            title: t('app.certification2_title'),
            description: t('app.certification2_description'),
            image: ReactJsCertificate,
            certificationUrl: ReactJsCertificate,
        },
        {
            id: 3,
            title: t('app.certification3_title'),
            description: t('app.certification3_description'),
            image: HtmlCssCertificate,
            certificationUrl: HtmlCssCertificate,
        },
    ];

    return (
        <section id="certifications">
            <h2 className="text-center text-4xl font-bold text-white mt-36 mb-8 md:mb-12">
                {t('app.my_certifications')}
            </h2>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {certificationsData.map((certification) => (
                    <CertificationCard
                        key={certification.id}
                        title={certification.title}
                        description={certification.description}
                        bgUrl={certification.image}
                        certificationUrl={certification.certificationUrl}
                    />
                ))}
            </ul>
        </section>
    )
}