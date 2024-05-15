interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}

export function ProjectTag({ name, onClick, isSelected, ...buttonProps }: ProjectTagProps) {
    const buttonStyles = isSelected
        ? "text-white"
        : "text-[#ADB7BE] border-slate-600 hover:border-secondary-color";

    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
            {...buttonProps}
        >
            {name}
        </button>
    )
}