"use client";
import { useState, useRef } from "react";
import { ProjectCard } from "../components/project-card";
import { ProjectTag } from "../components/project-tag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import PassInWeb from '../assets/pass_in_web.png';
import PassInDoc from '../assets/pass_in_doc.png';
import LinkTreeBia from '../assets/bia_links.png';

export function Projects() {
    const { t } = useTranslation();
    const projectsData = [
        {
            id: 1,
            title: t('app.project1_title'),
            description: t('app.project1_description'),
            image: PassInDoc,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/biinhaz/server-node",
            previewUrl: "/",
        },
        {
            id: 2,
            title: t('app.project2_title'),
            description: t('app.project2_description'),
            image: PassInWeb,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/biinhaz/pass-in-web",
            previewUrl: "/",
        },
        {
            id: 3,
            title: t('app.project3_title'),
            description: t('app.project3_description'),
            image: LinkTreeBia,
            tag: ["All", "Web"],
            gitUrl: "https://github.com/biinhaz/linkTreeBia",
            previewUrl: "/",
        },
        ]
    const [tag, setTag] = useState("All");
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
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            {t('app.my_projects')}
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
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