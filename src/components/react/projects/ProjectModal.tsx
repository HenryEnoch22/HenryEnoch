import { createPortal } from "react-dom";
import type { Project } from "../../../data/projects";
import { useLanguage } from "../../../i18n/store";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({
    project,
    onClose
}: ProjectModalProps) {

    const { t } = useLanguage();
    const p = (t.projects as any)[project?.translationKey];

    if (!project) return null;

    return createPortal(
        <div
            className="
                fixed inset-0
                bg-black/60 dark:bg-black/80
                z-50
                flex items-center justify-center
                p-5
                backdrop-blur-sm
            "
            onClick={onClose}
        >
            <div
                className="
                    bg-white dark:bg-gray-800
                    rounded-3xl
                    max-w-4xl
                    w-full
                    max-h-[90vh]
                    flex flex-col
                    overflow-hidden
                    shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start gap-4 p-8 pb-6 shrink-0">

                    <div>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                            {p?.name ?? project.name}
                        </h2>

                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            {p?.role ?? project.role}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            w-8 h-8 flex items-center justify-center
                            rounded-lg
                            text-gray-400 dark:text-gray-500
                            hover:text-blue-600 dark:hover:text-blue-400
                            hover:bg-gray-100 dark:hover:bg-gray-700
                            transition cursor-pointer
                        "
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>

                </div>

                <div className="no-scrollbar overflow-y-auto p-8 pt-0">

                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        {t.projects.modalDescription}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line text-justify">
                        {p?.description ?? project.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-5">
                        {t.projects.technologies}
                    </h3>

                    <div className="flex flex-wrap gap-2">

                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    px-3 py-1
                                    rounded-full
                                    bg-blue-50 dark:bg-blue-900/30
                                    text-blue-600 dark:text-blue-400
                                    text-sm
                                "
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                        {t.projects.features}
                    </h3>

                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">

                        {(p?.features ?? project.features).map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                {feature}
                            </li>
                        ))}

                    </ul>
                </div>

                {project.images.length > 0 && (
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                            {t.projects.screenshots}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {project.images.map((image) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={project.name}
                                    className="
                                        rounded-xl
                                        border border-gray-200 dark:border-gray-700
                                        w-full
                                        object-cover
                                    "
                                />
                            ))}

                        </div>
                    </div>
                )}

                {project.github || project.demo ? (
                    <div className="mt-8 flex gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                        {project.github && (
                            <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition font-medium">
                                <i className="fa-brands fa-github"></i>
                                GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition text-sm font-semibold">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                Demo
                            </a>
                        )}
                    </div>
                ) : null}

                </div>
            </div>
        </div>,
        document.body
    );
}
