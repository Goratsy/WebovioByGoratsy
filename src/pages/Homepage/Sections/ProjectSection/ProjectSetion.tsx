import { FunctionComponent } from "react";
import ProjectSectionHeading from "./Components/ProjectSectionHeading";
import ProjectSectionBlock1 from "./Components/ProjectSectionBlock1";
import ProjectSectionBlock2 from "./Components/ProjectSectionBlock2";
import ProjectSectionBlock3 from "./Components/ProjectSectionBlock3";


const ProjectSection: FunctionComponent = () => {
    return (
        <>
            <div className="w-full px-[11.5%]">
                <div className="w-full h-px bg-hr mx-auto"></div>
            </div>

            <section className="pt-[15rem] pb-[19rem]">
                <ProjectSectionHeading />
                <ProjectSectionBlock1 />
                <ProjectSectionBlock2 />
                <ProjectSectionBlock3 />
            </section>
        </>
    );
}

export default ProjectSection;