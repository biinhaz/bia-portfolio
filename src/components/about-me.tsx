import avatarImage from "../assets/avatar-image.png";

export function AboutMe() {
    return (
        <section id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img src={avatarImage} alt="Avatar da Bia" width={400} height={400} />
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-ful">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
                Hi, I'm Ana Beatriz, a passionate software developer with a strong
                command of JavaScript, TypeScript, Node.js, NestJS, React, HTML, CSS
                and Flutter for mobile applications. I have an innate ability to
                learn quickly and I love facing challenges that push me to surpass
                my limits on a daily basis. With experience in team leadership, I
                found constant motivation in the inspiration of others. Always
                looking to improve, I am determined to stand out and leave a
                positive mark in everything I do.
            </p>
            </div>
        </div>
        </section>
    );
}
