import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-10 md:py-14">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-primary">Mis Trabajos</h2>
        <p className="mt-2 text-muted">Una colección de proyectos en los que he trabajado.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </motion.div>
    </section>
  );
}
