import React, { useState } from "react";
import GitHubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import { useTranslation } from 'react-i18next';
import { AppButton } from "../components/app-button";

export function EmailSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email: e.currentTarget.email.value,
            subject: e.currentTarget.subject.value,
            message: e.currentTarget.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "https://formspree.io/f/mkndeoyw"
    
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
    
        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
                {t('app.lets_connect')}
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
            {t('app.email_text')}
            </p>
            <div className="socials flex flex-row gap-2">
            <a href="https://github.com/biinhaz">
                <img src={GitHubIcon} alt="Git Hub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/ana-beatriz-miranda-oliveira/">
            <img src={LinkedinIcon} alt="Linkedin Icon"/>
            </a>
            </div>
        </div>
        <div>
            {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
            </p>
            ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    {t('app.your_email')}
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="joaomaria@gmail.com"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    {t('app.subject')}
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder={t('app.subject_holder')}
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    {t('app.message')}
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder={t('app.message_holder')}
                />
                </div>
                <AppButton type="submit" className="w-full">{t('app.send_message')}</AppButton>
            </form>
            )}
        </div>
        </section>
    )
}