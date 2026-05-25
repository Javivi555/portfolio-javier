import SectionTitle from './SectionTitle'

function Experience() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="experiencia" eyebrow="Trayectoria" title="Experiencia" />
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Experiencia orientada a Data Analyst</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
          Desarrollo de cuadros de mando e indicadores para seguimiento operativo, análisis de datos en entornos
          relacionales y automatización de procesos internos con Microsoft 365. Además, participo en iniciativas de
          programación e IA desde una base técnica inicial, desarrollando pruebas de concepto orientadas a eficiencia
          y soporte en la toma de decisiones.
        </p>
      </article>
    </section>
  )
}

export default Experience
