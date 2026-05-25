import SectionTitle from './SectionTitle'

function Experience() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="experiencia" eyebrow="Trayectoria" title="Experiencia" />
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Experiencia orientada a Data Analyst</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          Desarrollo de cuadros de mando e indicadores para seguimiento operativo, análisis de datos en entornos
          relacionales, automatización de procesos internos con Microsoft 365 y participación en iniciativas de IA
          aplicada para mejorar eficiencia, control y toma de decisiones en negocio.
        </p>
      </article>
    </section>
  )
}

export default Experience
