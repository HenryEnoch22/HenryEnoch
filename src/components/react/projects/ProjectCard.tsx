import type { Project } from "../../../data/projects";
import { useLanguage } from "../../../i18n/store";

interface ProjectCardProps {
    project: Project;
    onOpen: (project: Project) => void;
}

export default function ProjectCard({
    project,
    onOpen
}: ProjectCardProps) {
    const { t } = useLanguage();
    const p = (t.projects as any)[project.translationKey];
    return (
        <button
            onClick={() => onOpen(project)}
            className="
                bg-white dark:bg-gray-800/80
                rounded-2xl
                p-4
                shadow-sm hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
                text-left
                cursor-pointer
                border border-gray-100 dark:border-gray-700
                h-full
                group
            "
        >

            <div className="flex items-center gap-4 mb-3">

                <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="
                        w-12 h-12
                        rounded-xl
                        object-contain
                        border border-gray-200 dark:border-gray-600
                        bg-white dark:bg-white
                        p-2
                        group-hover:scale-105 transition-transform
                    "
                />

                <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">
                        {p?.name ?? project.name}
                    </h3>

                    <p className="text-sm text-gray-400 dark:text-gray-500">
                        {p?.role ?? project.role}
                    </p>
                </div>

            </div>

            <p className="text-gray-500 dark:text-gray-400 mb-3 text-justify leading-relaxed line-clamp-3">
                {p?.shortDescription ?? project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">

                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            px-3 py-1
                            bg-blue-50 dark:bg-blue-900/30
                            text-blue-600 dark:text-blue-400
                            rounded-full
                            text-sm
                            font-medium
                        "
                    >
                        {tech}
                    </span>
                ))}

            </div>
        </button>
    );
}
