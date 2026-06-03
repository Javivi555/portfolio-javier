import SectionTitle from './SectionTitle'

const projects = [
  {
    title: 'Dashboard de soporte y tiempos de respuesta en osTicket',
    description:
      'Desarrollo de un modelo analítico en Power BI para el seguimiento operativo de tickets internos gestionados en osTicket. El proyecto permite analizar volumen de tickets, tiempos hasta primera acción, respuestas o asignaciones iniciales, cumplimiento de umbrales SLA y evolución mensual por departamento o responsable. El objetivo es facilitar el control del servicio, detectar retrasos o cuellos de botella y convertir la actividad de soporte en indicadores claros para la toma de decisiones.',
    tech: ['Power BI', 'DAX', 'SQL', 'Power Query', 'ODBC', 'osTicket'],
  },
  {
    title: 'Análisis retail de stock, ventas y oportunidades comerciales',
    description:
      'Análisis de datos retail para estudiar stock, ventas en tienda y web, comportamiento de productos y diseños, y comparación entre stock planificado, recepciones reales y disponibilidad operativa. El objetivo es detectar patrones, identificar oportunidades comerciales y apoyar decisiones de reposición, seguimiento de producto y análisis de rendimiento.',
    tech: ['SQL', 'DBeaver', 'Power BI', 'Power Query', 'Excel'],
  },
  {
    title: 'Automatización de procesos de RRHH y seguimiento contractual',
    description:
      'Automatización del proceso de gestión de movimientos contractuales y vencimientos de contratos para el departamento de RRHH, estructurando la recogida de información, el seguimiento de estados y la generación de informes de apoyo. El objetivo es reducir tareas manuales, mejorar la trazabilidad del proceso y facilitar el control operativo de contratos y acciones pendientes.',
    tech: ['Power Automate', 'Microsoft Forms', 'Microsoft Lists', 'SharePoint', 'Planner', 'Teams'],
  },
  {
    title: 'PoC de IA documental para consulta de PDFs médicos',
    description:
      'Participación en un proyecto exploratorio durante prácticas de máster, basado en una solución de IA ya iniciada para analizar prescripciones médicas y apoyar su traducción a códigos SNOMED. Mi aportación se centró en adaptar parte del código para permitir la lectura de documentos PDF con información médica y mejorar el flujo de consulta, de forma que el modelo pudiera responder preguntas apoyándose en el contenido del documento.',
    tech: ['Python', 'Azure OpenAI', 'PDFs', 'Consulta documental', 'Prompting', 'SNOMED'],
  },
]

function Projects() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="proyectos" eyebrow="Trabajo" title="Proyectos destacados" />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="glass-panel group rounded-2xl p-5 transition hover:border-sky-300/25 hover:bg-slate-900/70 md:p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              Proyecto {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{project.description}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Tecnologías</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li key={item} className="rounded-full border border-indigo-300/15 bg-indigo-300/10 px-2.5 py-1 text-xs font-medium text-indigo-100">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
