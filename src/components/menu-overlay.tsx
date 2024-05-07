import { AppButton } from "./app-button";
import { NavLink } from "./nav-link";

interface Link {
    title: string;
    path: string;
}

interface MenuOverlayProps {
    links: Link[];
}

export function MenuOverlay({ links }: MenuOverlayProps) {
    return (
        <ul className="flex flex-col py-4 items-center w-40 border border-[#ADB7BE] rounded-2xl">
        {links.map((link, index) => (
            <li key={index}>
            <NavLink href={link.path} title={link.title} />
            </li>
        ))}
        <AppButton className="flex items-center align-middle">Contato</AppButton>
        </ul>
    );
};
