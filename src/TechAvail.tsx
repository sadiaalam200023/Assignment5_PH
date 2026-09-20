
import type { Itech } from "./techtype";
import TechCard from "./TechCard";

const Techavail = ({ tech }: { tech: Itech[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4 px-10 mt-2 mb-2 justify-items-center">
            
            {tech.map((tech: Itech, ind: number) => {
                return <TechCard key={ind} tech={tech} />;
            })}
        </div>
    );
};

export default Techavail;