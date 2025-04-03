import { FunctionComponent } from "react";

interface CustomLinkProps {
    children: React.ReactNode;
}
 
const CustomLink: FunctionComponent<CustomLinkProps> = ({children}) => {
    return ( 
        <a className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
            {children}
        </a>
     );
}
 
export default CustomLink;