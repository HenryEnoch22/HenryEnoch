import { useState, useRef } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import {
    projects,
    type Project
} from "../../../data/projects";

export default function ProjectsGrid() {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const getStep = () => {
        const track = trackRef.current;
        if (!track) return 0;
        const card = track.querySelector<HTMLElement>("[data-card]");
        if (!card) return 0;
        return card.offsetWidth + 16;
    };

    const scrollToSlide = (index: number) => {
        const track = trackRef.current;
        if (!track) return;

        const step = getStep();
        const maxScroll = track.scrollWidth - track.clientWidth;
        const target = Math.min(index * step, maxScroll);
        track.scrollTo({ left: target, behavior: "smooth" });
    };

    const scrollByStep = (dir: 1 | -1) => {
        const track = trackRef.current;
        if (!track) return;

        const step = getStep();
        const maxScroll = track.scrollWidth - track.clientWidth;
        const target = dir === 1
            ? Math.min(track.scrollLeft + step, maxScroll)
            : Math.max(track.scrollLeft - step, 0);
        track.scrollTo({ left: target, behavior: "smooth" });
    };

    const handleScroll = () => {
        const track = trackRef.current;
        if (!track) return;

        const cards = track.querySelectorAll<HTMLElement>("[data-card]");
        if (!cards.length) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 0) {
            setCurrentSlide(0);
            return;
        }

        const progress = track.scrollLeft / maxScroll;
        const index = Math.round(progress * (projects.length - 1));
        setCurrentSlide(Math.max(0, Math.min(index, projects.length - 1)));
    };

    return (
        <>
            <div>
                <div
                    ref={trackRef}
                    onScroll={handleScroll}
                    className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-webkit-overflow-scrolling:touch]"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            data-card
                            className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[40%] xl:w-[32%]"
                        >
                            <ProjectCard
                                project={project}
                                onOpen={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-2">
                    <button
                        onClick={() => scrollByStep(-1)}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition disabled:opacity-30 disabled:pointer-events-none"
                        disabled={currentSlide === 0}
                        aria-label="Anterior"
                    >
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>

                    <div className="flex items-center gap-2">
                        {projects.map((project, i) => (
                            <button
                                key={project.id}
                                onClick={() => scrollToSlide(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === currentSlide
                                        ? "w-6 bg-blue-600"
                                        : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                                }`}
                                aria-label={`Ir al proyecto ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scrollByStep(1)}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition disabled:opacity-30 disabled:pointer-events-none"
                        disabled={currentSlide === projects.length - 1}
                        aria-label="Siguiente"
                    >
                        <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
