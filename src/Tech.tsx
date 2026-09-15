
import type { Itech } from './techtype';

interface TechProp{
    techPromise: Promise<Itech[]>
}
const Tech = ({techPromise}: TechProp) => {
    return (
        <div>
           const tech = use(techPromise) 
        </div>
    );
};

export default Tech;