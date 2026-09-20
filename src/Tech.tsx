
import { use, useState } from "react";
import type { Itech } from "./techtype";
import Techavail from "./TechAvail";
import SelectedTech from "./selectedTech";



interface TechProp {
    techPromise: Promise<Itech[]>;
}

const Tech = ({ techPromise }: TechProp) => {
    

    const tech = use(techPromise);
    const [isAdded, setIsAdded] = useState<Itech[]>([]);;
    return (
        // <div>
        //    <h2 className="px-10 mb-2"><span className="text-black font-bold text-3xl">Explore </span><span className="font-bold text-3xl text-red-500">Technologies</span></h2>
        //    <p className="px-10">Pick one technology per stack to build your ideal stack</p>
        //    <Techavail tech = {tech} isAdded={isAdded} setIsAdded={setIsAdded}/>
        // </div>
        <div>
            <h2 className="px-10 mb-2">
                <span className="text-black font-bold text-3xl">
                    Explore{" "}
                </span>

                <span className="font-bold text-3xl text-red-500">
                    Technologies
                </span>
            </h2>

            <p className="px-10">
                Pick one technology per stack to build your ideal stack
            </p>

         
            <div className="flex gap-4  ">

                
                <div className="flex-1 min-w-0 pl-10">
                    <Techavail
                        tech={tech}
                        isAdded={isAdded}
                        setIsAdded={setIsAdded}
                    />
                </div>

               
                <div className="w-60 shrink">
                    <SelectedTech
                     isAdded={isAdded}
        setIsAdded={setIsAdded}
                    />
                </div>

            </div>

        </div>
    );
};

export default Tech;
