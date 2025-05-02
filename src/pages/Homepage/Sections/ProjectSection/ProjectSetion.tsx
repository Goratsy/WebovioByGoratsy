import { FunctionComponent } from "react";
import ProjectSectionHeading from "./Components/ProjectSectionHeading";
import ProjectSectionBlock1 from "./Components/ProjectSectionBlock1";
import ProjectSectionBlock2 from "./Components/ProjectSectionBlock2";
import ProjectSectionBlock3 from "./Components/ProjectSectionBlock3";
import HR from "@/components/UI/HR/HR";


const ProjectSection: FunctionComponent = () => {
    return (
        <>
           <HR className="px-[11.5%] max-tablet:px-[5%]"/>

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