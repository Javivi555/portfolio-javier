import SectionTitle from './SectionTitle'

function About() {
  return (
    <section className="mb-16 border-t border-white/10 pt-12 md:mb-20 md:pt-16">
      <SectionTitle id="sobre-mi" eyebrow="Perfil" title="Sobre mí" />
      <div className="glass-panel rounded-2xl p-6 md:p-8">
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
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
      </div>
    </section>
  )
}

export default About
