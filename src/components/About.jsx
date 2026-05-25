import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="sobre-mi" eyebrow="Perfil" title="Sobre mí" />
      <p className="max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
        Soy matemático especializado en Big Data y Visual Analytics. Mi núcleo profesional es el análisis de datos y
        el desarrollo de soluciones de BI con Power BI, SQL, Power Query, DAX y automatización con Microsoft 365.
        Además, he participado en proyectos exploratorios de IA aplicada, especialmente en consulta documental,
        procesamiento de texto e integración con Azure OpenAI.
      </p>
    </section>
  )
}

export default About
