"use client";
import { useState, useRef } from "react";
import { ProjectCard } from "../components/project-card";
import { ProjectTag } from "../components/project-tag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import PassInWeb from '../assets/pass_in_web.png';
import PassInDoc from '../assets/pass_in_doc.png';
import LinkTreeBia from '../assets/bia_links.png';
import MeuPortfolio from "../assets/meu-portfolio.png";
import SofiaResolve from "../assets/sofiaresolve.png";
import SofiaResolveDashboard from "../assets/sofia-dashboard.png";
import ArenaXpApp from "../assets/arena-xp.jpeg";
import PlannerAPI from "../assets/plannerAPI.png";
import MySchoolApp from "../assets/myschool-app.png"

export function Projects() {
    const { t } = useTranslation();
    const projectsData = [
        {
            id: 1,
            title: t('app.project1_title'),
            description: t('app.project1_description'),
            image: PassInDoc,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/biinhaz/server-node",
        },
        {
            id: 2,
            title: t('app.project2_title'),
            description: t('app.project2_description'),
            image: PassInWeb,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/biinhaz/pass-in-web",
        },
        {
            id: 3,
            title: t('app.project3_title'),
            description: t('app.project3_description'),
            image: LinkTreeBia,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/biinhaz/linkTreeBia",
        },
        {
            id: 4,
            title: t('app.project4_title'),
            description: t('app.project4_description'),
            image: MeuPortfolio,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/biinhaz/bia-portfolio",
            previewUrl: "https://biamiranda.online",
        },
        {
            id: 5,
            title: t('app.project5_title'),
            description: t('app.project5_description'),
            image: SofiaResolve,
            tag: [t('app.tag_contributions')],
            previewUrl: "https://app.sofiaresolve.com.br",
        },
        {
            id: 6,
            title: t('app.project6_title'),
            description: t('app.project6_description'),
            image: SofiaResolveDashboard,
            tag: [t('app.tag_contributions')],
        },
        {
            id: 7,
            title: t('app.project7_title'),
            description: t('app.project7_description'),
            image: ArenaXpApp,
            tag: [t('app.tag_contributions')],
            previewUrl: "https://play.google.com/store/apps/details?id=br.com.pipetech.arenaconference&hl=pt_BR&gl=US",
        },
        {
            id: 8,
            title: t('app.project8_title'),
            description: t('app.project8_description'),
            image: PlannerAPI,
            tag: [t('app.tag_projects')],
            gitUrl: "https://github.com/biinhaz/plann.er-backend",
        },
        {
            id: 9,
            title: t('app.project9_title'),
            description: t('app.project9_description'),
            image: MySchoolApp,
            tag: [t('app.tag_contributions')],
        },
        ]
    const [tag, setTag] = useState(t('app.tag_projects'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
            {t('app.my_projects')}
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name={t('app.tag_projects')}
            isSelected={tag === "Meus projetos"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name={t('app.tag_contributions')}
            isSelected={tag === "Minhas contribuições"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
            >
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
            </motion.li>
            ))}
        </ul>
        </section>
    )
}