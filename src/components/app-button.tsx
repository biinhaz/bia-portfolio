import { ComponentProps } from "react";

interface AppButonProps extends ComponentProps<'button'>{
    children: string
}

export function AppButton(props: AppButonProps) {
    return(
        <button 
        {...props}
        
        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-700 to-pink-500 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105">{props.children}
        </button>
    )
}