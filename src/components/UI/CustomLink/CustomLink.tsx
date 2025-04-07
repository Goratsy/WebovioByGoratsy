'use client'

import { FunctionComponent, use, useEffect } from "react";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    id: string;
    className?: string;
}
 
const CustomLink: FunctionComponent<CustomLinkProps> = ({children, id, className}) => {
    useEffect(() => {
        const link = document.getElementById(id) as HTMLAnchorElement;
        const before = document.getElementById(`before_${id}`) as HTMLDivElement;

        function handleMouseOver() {
            before.style.transform = 'scaleX(100%)';
        }

        function handleMouseOut() {
            before.style.transform = 'scaleX(0)';
  
        }

        if (link && before) {
            link.addEventListener('mouseover', handleMouseOver);
            link.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            if (link && before) {
                link.removeEventListener('mouseover', handleMouseOver);
                link.removeEventListener('mouseout', handleMouseOut);
            }
        };

    }, []);


    return ( 
        <a id={id} className={`${className} relative text-[1.6rem] font-bold text-link hover:text-link-hover active:text-link-active visited:text-link-visited selection:bg-link-selection selection:text-white cursor-pointer duration-500 ease-out-cubic hover:translate-x-5 
                        before:absolute before:top-1/2 before:-left-5 before:rounded-full before:origin-center before:w-0 before:h-0 hover:before:w-2 hover:before:h-2 before:bg-link-hover before:content-[''] before:ease-in-out before:duration-[250ms] before:-translate-y-1/2`}>
            {children}
            <div id={`before_${id}`} className="before absolute bottom-0 h-[2px] w-full bg-link-hover duration-500 ease-out-cubic" style={{transform: 'scale(0)', transformOrigin: 'left', left: '0', right: 'auto'}}></div>
        </a>
     );
}
 
export default CustomLink;