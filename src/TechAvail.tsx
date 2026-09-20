
import type { Itech } from "./techtype";
import TechCard from "./TechCard";
interface TechavailProps {
    tech: Itech[];
    isAdded: Itech[];
    setIsAdded: React.Dispatch<React.SetStateAction<Itech[]>>;
}
const Techavail = ({
    tech,
    isAdded,
    setIsAdded
}: TechavailProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 gap-y-8 px-10 mt-2 mb-2 justify-items-center">
            
            {tech.map((tech: Itech, ind: number) => {
                return <TechCard
    key={tech.id}
    tech={tech}
    isAdded={isAdded}
    setIsAdded={setIsAdded}
/>;
            })}
        </div>
    );
};

export default Techavail;