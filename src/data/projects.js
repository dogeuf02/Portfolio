// src/data/projects.js
import chibchaWeb from "../assets/projects/ChibchaWeb.png";
import NotFound from "../assets/projects/NotFound.png";
import simulatedMultilevel from "../assets/projects/Simulador_Multilevel_Queue_Preemptive.png";
import chibchaWebGif from "../assets/projects/ChibchaWebgif.gif";
import NotFoundGif from "../assets/projects/404NotFoundgif.gif";
import simulatedMultilevelGif from "../assets/projects/simulatedMultilevelgif.gif";
// ejemplo reutilizando tu imagen

export const projects = [
  {
    id: "ChibchaWeb",
    title: "ChibchaWeb",
    description:
      "ChibchaWeb es una aplicación desarrollada para una empresa de hospedaje de páginas web ubicada en Sugamuxi. El sistema permite gestionar clientes, empleados, distribuidores y dominios, ofreciendo planes de hosting en diferentes modalidades (Plata, Oro y Platino) y planes de pago flexibles (mensual, trimestral, semestral o anual).",
    image: chibchaWeb,
    gif: chibchaWebGif, 
    links: {
      site: "https://proyecto-chibcha-web-front-end.vercel.app/",
      github: "https://github.com/dogeuf02/ProyectoChibchaWeb-FrontEnd.git",
    },
  },
  {
    id: "404-not-found",
    title: "404-not-found",
    description:
      "404 Not Found es una app web en React + Vite que gestiona clientes, artistas y catálogos de camisetas estampadas mediante una API REST, con carruseles, generación de imágenes y diagramas interactivos.",
    image: NotFound,
    gif: NotFoundGif, 
    links: {
      site: "https://404-not-found-front-end-mu.vercel.app/",
      github: "https://github.com/dogeuf02/404-notFound-frontEnd",
    },
  },
  {
    id: "Simulador_Multilevel_Queue_Preemptive",
    title: "Simulador_Multilevel_Queue_Preemptive",
    description:
      "Simulador Multilevel Queue Preemptive es una aplicación en HTML, CSS y JavaScript que modela la planificación de procesos con colas multinivel preemptivas, soportando Prioridades, Round Robin y FCFS, además de bloqueos, envejecimiento y visualizaciones interactivas como Gantt y tablas estadísticas.",
    image: simulatedMultilevel,
    gif: simulatedMultilevelGif, 
    links: {
      site: "https://simulador-multilevel-queue-preempti.vercel.app/",
      github: "https://github.com/dogeuf02/Simulador_Multilevel_Queue_Preemptive.git",
    },
  },
];
