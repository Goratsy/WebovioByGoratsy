'use client';

import { FunctionComponent, useRef } from "react";
import Logo from "@/SVGcomponents/Homepage/Logo/Logo";
import NameCompony from "@/SVGcomponents/Homepage/Logo/NameCompany";
import { useInView } from "framer-motion";
import HR from "@/components/UI/HR/HR";

const InformationAndLinks: FunctionComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.7, once: true });

    return (
        <>
            <div ref={ref} className={`text-nowrap mb-[5.2rem] ${isInView ? 'animate-fade-up' : 'opacity-0'}  duration-500 ease-in-out animate-delay-[100ms]`}>
                <div className="inline-block w-[18rem] mr-[7rem]">
                    <p className="mb-[0.8rem] text-footer-secondary">Phone</p>
                    <p className="text-footer-primary">+32 50 31 28 32</p>
                </div>
                <div className="inline-block text-nowrap">
                    <p className="mb-[0.8rem] text-footer-secondary">Address</p>
                    <p className="text-footer-primary">491 Merlin Crest Suite 963</p>
                </div>
            </div>
            <HR bgColor="bg-hr-secondary"/>
            <div className={`mt-[6rem] flex justify-between items-start mb-[6rem] ${isInView ? 'animate-fade-up' : 'opacity-0'}  duration-500 ease-in-out animate-delay-[200ms]`}>
                <div className="w-[54%] flex justify-between items-start gap-[10%]">
                    <div className="text-nowrap">
                        <p className="mb-[2.1rem] text-footer-primary">Services</p>
                        <p className="text-footer-secondary">
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Strategy Design</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Product Design</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Content Strategy</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Brand Strategy</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Development</a>
                        </p>
                    </div>
                    <div className="text-nowrap">
                        <p className="mb-[2.1rem] text-footer-primary">Help And Advice</p>
                        <p className="text-footer-secondary">
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">How it works</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Contact Support</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Privacy Policy</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">FAQ</a>
                        </p>
                    </div>
                    <div className="text-nowrap">
                        <p className="mb-[2.1rem] text-footer-primary">Company</p>
                        <p className="text-footer-secondary">
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">About</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Blog</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Contact</a>
                            <a href="#" className="block duration-500 ease-in-out hover:opacity-60">Jobs</a>
                        </p>
                    </div>
                </div>
                <div className="h-[210px]">
                    <div className="h-full w-px bg-hr-secondary"></div>
                </div>
                <div className={`w-[30%] ${isInView ? 'animate-fade-up' : 'opacity-0'}  duration-500 ease-in-out animate-delay-[300ms]`}>
                    <p className="mb-[2.3rem] text-footer-primary">Get in Touch</p>
                    <p className="text-footer-secondary mb-[2.3rem]">Feel free to get in touch with us vai email</p>
                    <p className="text-nowrap text-[2.4rem] font-bold leading-16 text-white mb-[2.4rem]">info.webovio@gmail.com</p>
                    <div className="flex justify-start items-center gap-[1.1rem]">
                        <a href="https://instagram" className="flex justify-center items-center p-[7px] rounded-full w-[45px] h-[45px] bg-[#444A34] fill-[#5E6648] duration-300 ease-in-out hover:fill-white hover:bg-link-hover active:bg-link-active">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"

                            >
                                <path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5Zm0 2h9.062A4.463 4.463 0 0 1 25 11.469v9.062A4.463 4.463 0 0 1 20.531 25H11.47A4.463 4.463 0 0 1 7 20.531V11.47A4.463 4.463 0 0 1 11.469 7m10.437 2.188a.9.9 0 0 0-.906.906c0 .504.402.906.906.906a.9.9 0 0 0 .907-.906.9.9 0 0 0-.907-.906M16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4"></path>
                            </svg>
                        </a>
                        <a href="https://facebook" className="flex justify-center items-center p-[7px] rounded-full w-[45px] h-[45px] bg-[#444A34] fill-[#5E6648] duration-300 ease-in-out hover:fill-white hover:bg-link-hover active:bg-link-active">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                fillRule="evenodd"
                                strokeLinejoin="round"
                                strokeMiterlimit="2"
                                clipRule="evenodd"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fillRule="nonzero"
                                    d="m374.245 285.825 14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.4 320.4 0 0 0 250.408 512a320.4 320.4 0 0 0 49.708-3.865v-222.31z"
                                ></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
            <HR bgColor="bg-hr-secondary"/>
            <div className={`mt-[2.4rem] flex justify-between items-center ${isInView ? 'animate-fade-up' : 'opacity-0'} duration-500 ease-in-out animate-delay-[400ms]`}>
                <div className="flex justify-center items-center gap-[11px] ">
                    <Logo />
                    <NameCompony className='-translate-y-2' />
                </div>
                <div className="text-footer-secondary">
                    © {new Date().getFullYear()} @webovio. All Rights Reserved.
                </div>
            </div>
        </>
    );
}

export default InformationAndLinks;