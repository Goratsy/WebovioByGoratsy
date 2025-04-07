import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { FunctionComponent } from "react";

const DeationSection: FunctionComponent = () => {
    const cards: { title: string, text: string, link: string }[] = [
        { title: "Product<br/>Design Sprint", text: 'A five-day workshop that will help you answer crucial business questions', link: '#' },
        { title: "Scoping<br/> Session", text: 'A workshop aimed at shaping your business idea, answering questions regarding project planning', link: '#' },
        { title: "UX<br/>Review", text: 'An evaluation which will help you radically improve your product.', link: '#' },
        { title: "Code<br/>Review", text: 'Do you know what one of the key secrets of success is what makes people successful in business', link: '#' },
    ];

    return (
        <>
            <div className="w-full px-[11.5%]">
                <div className="w-full h-px bg-hr mx-auto"></div>
            </div>

            <section className="pt-[15rem]">
                <div className="pl-[11.5%] mb-[10.4rem]">
                    <h2 className="h2">Deation & Evaluation - Best Way<br />to Kick off Your Product Idea</h2>
                </div>
                <div className="relative px-[11.5%] grid grid-cols-4 grid-rows-1 justify-between items-center gap-[2.7%]">
                    {cards.map((card, index) => {
                        return (
                            <div key={index} className="relative rounded-xl h-[31rem] p-[3rem] shadow-[0px_0px_0px_rgba(0,0,0,0.3)] duration-300 ease-in-out hover:-translate-2 hover:shadow-[10px_15px_50px_rgba(0,0,0,0.15)]">
                                <p dangerouslySetInnerHTML={{ __html: card.title }} className="text-card-title mb-[2rem]"></p>
                                <p className="text-card">{card.text}</p>
                                <div className="absolute bottom-[3rem] left-[3rem]">
                                    <CustomLink id={`CL_services_${index}`} href={card.link}>Read More</CustomLink>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    );
}

export default DeationSection;