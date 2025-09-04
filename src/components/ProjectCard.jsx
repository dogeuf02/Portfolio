import { useState } from "react";
import ProjectGifModal from "./ProjectGifModal";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, description, image, gif, links } = project;
  const [showGif, setShowGif] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        className="group overflow-hidden rounded-3xl border border-secondary/20 bg-background shadow-soft"
      >
        {/* Imagen */}
        <div
          className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
          onClick={() => setShowGif(true)}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        {/* Contenido */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="mt-2 text-sm text-muted">{description}</p>

          {/* Enlaces */}
          <div className="mt-4 flex items-center gap-4">
            {links?.site && (
              <a href={links.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-secondary transition hover:text-primary">
                <FaGlobe aria-label="Web" />
              </a>
            )}
            {links?.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-secondary transition hover:text-primary">
                <FaGithub aria-label="GitHub" />
              </a>
            )}
            {links?.demo && (
              <a href={links.demo} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 rounded-lg border border-secondary/40 px-3 py-1.5 text-sm text-secondary transition hover:border-primary hover:text-primary">
                Ver más <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal GIF */}
      {showGif && <ProjectGifModal gif={gif} onClose={() => setShowGif(false)} />}
    </>
  );
}
