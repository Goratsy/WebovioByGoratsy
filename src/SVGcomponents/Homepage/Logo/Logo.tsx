import { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="36"
            fill="none"
            viewBox="0 0 55 36"
        >
            <path
                fill="#FFD723"
                fillRule="evenodd"
                d="M36.65 30.484c-1.3 2.167-4.44 2.167-5.74 0L12.781.271h36.084c2.602 0 4.209 2.839 2.87 5.07z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M18.128 30.484c1.3 2.167 4.44 2.167 5.74 0L41.997.271H5.912c-2.602 0-4.209 2.839-2.87 5.07z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#F6F6F6"
                fillRule="evenodd"
                d="M12.782.271h29.214L27.39 24.617z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default Logo;