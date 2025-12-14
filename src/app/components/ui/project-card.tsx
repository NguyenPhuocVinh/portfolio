import { Project } from '@/app/common/types';
import React from 'react';


interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`bg-gray-100 rounded-2xl p-8 mb-12 flex flex-col gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center transition-all hover:bg-gray-200`}>

            {/* Text Content */}
            <div className="flex-1 space-y-4">
                <h3 className="font-serif text-3xl text-gray-400 ">
                    <span className="text-sm font-sans tracking-widest mr-2 uppercase text-gray-500">{project.number}</span>
                    <span className="text-gray-900 font-bold uppercase font-mono">{project.title}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                </p>
                <div className="pt-4">
                    <a
                        href={project.link}
                        className="inline-block px-6 py-2 border border-gray-400 text-gray-700 uppercase text-xs tracking-widest font-medium hover:bg-gray-800 hover:text-white transition-colors rounded"
                    >
                        View Source
                    </a>
                </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 flex justify-center items-center w-full">
                <div className={`relative shadow-2xl rounded-lg overflow-hidden border-4 border-gray-300 bg-white ${project.imageType === 'mobile' ? 'max-w-[200px]' : 'w-full max-w-md'}`}>
                    {/* Aspect Ratio preservation */}
                    <div className={`${project.imageType === 'mobile' ? 'aspect-9/19' : 'aspect-16/10'}`}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
