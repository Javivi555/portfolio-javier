import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="sobre-mi" eyebrow="Perfil" title="Sobre mí" />
      <p className="max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
        Soy matemático especializado en Big Data y Visual Analytics, orientado al análisis de datos, Business
        Intelligence y automatización de procesos. Mi trabajo se centra en transformar datos operativos en modelos
        claros, dashboards útiles y métricas accionables que ayuden a entender mejor el negocio y tomar mejores
        decisiones.
        <br />
        <br />
        Trabajo principalmente con Power BI, SQL, Power Query, DAX y herramientas del ecosistema Microsoft 365,
        combinando análisis técnico con una visión práctica de los procesos internos. También he participado en
        proyectos exploratorios de IA aplicada a la consulta de documentos.
      </p>
    </section>
  )
}

export default About
