import { motion } from "framer-motion";
import heroImg from "../../assets/hero5.png";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28 relative overflow-hidden rounded-3xl bg-gradient-to-br from-background to-secondary/10 p-8 md:p-12 shadow-soft">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="grid min-h-[56vh] grid-cols-1 items-center gap-10 md:grid-cols-12">
        {/* Texto */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:col-span-7">
          <h1 className="text-5xl font-extrabold leading-tight text-primary md:text-6xl">
            Bienvenido<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted text-justify leading-relaxed">
            Soy <b>David Muñoz</b>, estudiante de <b>Ingeniería de Sistemas</b>.
            He liderado proyectos con <b>Java</b>, <b>Python</b>, <b>React</b> y <b>PostgreSQL</b>,
            con foco en soluciones limpias y eficientes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-secondary px-5 py-3 font-semibold text-background shadow-soft transition hover:bg-primary hover:text-white">Ver proyectos</a>
            <a href="#contact" className="rounded-xl border border-secondary px-5 py-3 font-semibold text-secondary transition hover:bg-secondary hover:text-white">Contáctame</a>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.7, delay: 0.05 }} className="md:col-span-5">
          <div className="relative mx-auto max-w-lg md:max-w-xl -ml-4">
            <div className="absolute -inset-8 rounded-full bg-secondary/10 blur-3xl" />
            <img src={heroImg} alt="Workstation" className="relative w-full transform scale-110 md:scale-100" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
