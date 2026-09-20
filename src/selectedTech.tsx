import React from 'react';


import type { Itech } from "./techtype";
import { toast } from 'react-toastify';

interface SelectedTechProps {
    isAdded: Itech[];
    setIsAdded: React.Dispatch<React.SetStateAction<Itech[]>>;
}

const SelectedTech = ({
    isAdded,
    setIsAdded
}: SelectedTechProps) => {

    return (
        <div className="card bg-base-100 w-50 px-5">
            <div className="card-body pr-0 pl-0">

                <h2 className="card-title">
                    Your Stack
                </h2>

                {isAdded.length === 0 ? (
                    <p className="text-gray-500">
                        No technologies added yet.
                    </p>
                ) : (
                    <div>
                        {isAdded.map((tech) => (
                            <div
                                key={tech.id}
                                className="flex items-center gap-3 border rounded-lg p-2"
                            >

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-8 h-5"
                                />

                                <div className="flex flex-col">
       
        <h3 className="text-sm font-bold">
            {tech.name}
        </h3> 
        <p className="text-xs text-gray-500">
            {tech.category}
        </p> 
    </div>
                                
                              

                                <button
    className="btn btn-xs btn-circle btn-ghost pr-0"
    onClick={() => {
        setIsAdded(
            isAdded.filter(
                item => item.id !== tech.id
            )
        );
        toast.info(`${tech.name} removed from your stack!`);
    }}
>
    ✕
</button>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default SelectedTech;



