import type { Itech } from "./techtype";

const Techavail = ({ tech }: { tech: Itech[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4 gap-y-4 px-10 mt-2 mb-2 ">
            {tech.map((tech) => (
                
               <div className="card w-80 bg-base-100">
    <div className="card-body">

        
        <div className="flex justify-between items-start">

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

            <span className="">
                {tech.category}
            </span>
             <span className="">
                {tech.difficulty}
            </span>

            <span>
                ⭐ {tech.rating}
            </span>

           

        </div>

       
        <div className="flex justify-center mt-6">
            <button className="btn btn-neutral">
                Add to Stack
            </button>
        </div>

    </div>
</div>






            ))}
        </div>
    );
};

export default Techavail;