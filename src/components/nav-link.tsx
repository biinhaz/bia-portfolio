interface NavLinkProps {
    href: string,
    title: string,
}

export function NavLink({ href, title }: NavLinkProps) {

    return (
        <a
            href={href}
            className="block py-2 pl-3 pr-4 text-lg text-[#ADB7BE] rounded md:p-0 hover:text-white">
            {title}
        </a>
    )
}