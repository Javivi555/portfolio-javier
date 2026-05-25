import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="sobre-mi" eyebrow="Perfil" title="Sobre mí" />
      <p className="max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
        Soy matemático especializado en Big Data y Visual Analytics, con experiencia en análisis de datos, desarrollo
        de soluciones en Power BI, SQL y automatización con Microsoft 365. En programación e IA cuento con nivel
        básico funcional: construyo prototipos, conecto APIs y aplico modelos de lenguaje en flujos concretos, con
        foco en seguir creciendo técnicamente.
      </p>
    </section>
  )
}

export default About
