

import type { Itech } from './techtype';
interface TechavailProps {
    tech: Itech;
    isAdded: Itech[];
    setIsAdded: React.Dispatch<React.SetStateAction<Itech[]>>;
}
const TechCard = ({
     tech,
    isAdded,
    setIsAdded
}: TechavailProps) => {

     const alreadyAdded = isAdded.some(item => item.id === tech.id);
    return (
        <div className="card w-65 bg-base-100">
    <div className="card-body">

        
        <div className="flex items-start gap-10">

            <div>
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-10"
                />

                <h2 className="text-2xl font-bold mt-3">
                    {tech.name}
                </h2>
            </div>

            <span className="badge badge-soft badge-success">
                {tech.badge}
            </span>

        </div>

       
        <p className="text-gray-500 mt-3">
            {tech.description}
        </p>

        
        <div className="flex justify-between items-center mt-4">

            <span className="text-sm">
                {tech.category}
            </span>
             <span className="text-sm">
                {tech.difficulty}
            </span>

            <span className='text-sm'>
                ⭐ {tech.rating}
            </span>

           

        </div>

       
       <div className="flex justify-center mt-6">
    <button
        onClick={() => {
            if (alreadyAdded) {
                alert("This technology is already in your stack!");
                return;
            }

            setIsAdded([...isAdded, tech]);
        }}
        className="btn btn-neutral w-full"
    >
        {alreadyAdded? "✓ Added to Stack" : "Add to Stack"}
    </button>
</div>
      </div>
    </div>
  );
};

export default TechCard;