import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="sobre-mi" eyebrow="Perfil" title="Sobre mí" />
      <p className="max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
        Soy matemático especializado en Big Data y Visual Analytics, con experiencia en análisis de datos, desarrollo
        de soluciones en Power BI, trabajo con SQL, automatización con Microsoft 365 y proyectos de IA aplicada para
        optimizar procesos de negocio.
      </p>
    </section>
  )
}

export default About
