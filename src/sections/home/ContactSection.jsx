export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-12 bg-primary/10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary">Contacto</h2>
        <p className="mt-2 text-muted">¿Tienes una idea o proyecto? Hablemos.</p>
        <a
          href="mailto:dema05_@hotmail.com"
          className="mt-6 inline-block rounded-xl bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-primary"
        >
          Escribirme
        </a>
      </div>
    </section>


  );
}
