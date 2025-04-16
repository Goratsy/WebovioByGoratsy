import Image from "next/image";
import { FunctionComponent } from "react";
import image0 from '../../../../../public/homepage/project/Image0.jpg';
import image1 from '../../../../../public/homepage/project/Image1.jpg';
import image2 from '../../../../../public/homepage/project/Image2.jpg';
import oval0 from '../../../../../public/homepage/project/Oval0.png';
import oval1 from '../../../../../public/homepage/project/Oval1.png';
import oval2 from '../../../../../public/homepage/project/Oval2.png';
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { CardBody, CardContainer, CardItem } from "@/components/Effects/Card3dEffect/Card3dEffect";


const ProjectSection: FunctionComponent = () => {
    return (
        <>
            <div className="w-full px-[11.5%]">
                <div className="w-full h-px bg-hr mx-auto"></div>
            </div>

            <section className="pt-[15rem] pb-[19rem]">
                <div className="pl-[11.5%] mb-[10.4rem] flex flex-row justify-start items-center gap-[10.6%]">
                    <h2 className="h2">We Have Some<br />Awesomr Project.</h2>
                    <p className="text-paragraph w-2/5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>

                <div className="flex justify-left items-center">
                    <div className="relative w-1/2">
                        <Image src={image0} alt="image1" className="w-full" />
                        <CardContainer containerClassName="absolute translate-x-[4rem] translate-y-[6.5rem] bottom-0 right-0">
                            <CardBody>
                                <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                                    <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”</p></CardItem>
                                    <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                        <Image src={oval0} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                        <div>
                                            <p className="text-quote-title text-nowrap mb-[4px]">Genevieve Rodriquez</p>
                                            <p className="text-quote-body text-nowrap">Founder & CEO, Webovio</p>
                                        </div>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start pl-[6.25%]">
                        <p className="h2 text-nowrap mb-[2.4rem]">The wall new<br />Balenciaga.com</p>
                        <p className="text-paragraph mb-[9rem] w-[78%]">This article is floated online with an aim to help you find the best dvd printing solution.<br /><br />
                            Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.</p>
                        <CustomLink href="#">See Case Study</CustomLink>
                    </div>
                </div>

                <div className="flex justify-left items-center flex-row-reverse my-[16.5rem]">
                    <div className="relative w-1/2">
                        <Image src={image1} alt="image1" className="w-full" />
                        <CardContainer containerClassName="absolute -translate-x-[4rem] translate-y-[6.5rem] bottom-0 left-0 ">
                            <CardBody>
                                <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                                    <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.</p></CardItem>
                                    <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                        <Image src={oval1} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                        <div>
                                            <p className="text-quote-title text-nowrap mb-[4px]">Lina Hart</p>
                                            <p className="text-quote-body text-nowrap">Founder & CEO, Jico</p>
                                        </div>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start pl-[11.5%]">
                        <p className="h2 text-nowrap mb-[2.4rem]">Is this the future of<br />3D model?</p>
                        <p className="text-paragraph mb-[9rem] w-[78%]">While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space.<br /><br />It is those feelings that drive our love of astronomy and our desire to learn more and more about it. </p>
                        <CustomLink href="#">See Case Study</CustomLink>
                    </div>
                </div>


                <div className="flex justify-left items-center">
                    <div className="relative w-1/2">
                        <Image src={image2} alt="image1" className="w-full" />
                        <CardContainer containerClassName="absolute translate-x-[4rem] translate-y-[6.5rem] bottom-0 right-0">
                            <CardBody>
                                <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                                    <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”</p></CardItem>
                                    <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                        <Image src={oval2} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                        <div>
                                            <p className="text-quote-title text-nowrap mb-[4px]">Eunice Oliver</p>
                                            <p className="text-quote-body text-nowrap">Founder & CEO, Zeem</p>
                                        </div>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start pl-[6.25%]">
                        <p className="h2 text-nowrap mb-[2.4rem]"> Is this the future of<br />Online Booking</p>
                        <p className="text-paragraph mb-[9rem] w-[78%]">You should be able to find several indispensable facts about motivation in the following paragraphs.<br /><br />If there’s at least one fact you didn’t know before, imagine the difference it might make.</p>
                        <CustomLink href="#">See Case Study</CustomLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectSection;