import SectionTitle from './SectionTitle'

const projects = [
  {
    title: 'Dashboard de KPIs de soporte / osTicket',
    description:
      'Modelo analítico en Power BI para medir tiempos de primera acción, tickets por departamento, cumplimiento SLA y evolución mensual.',
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
    title: 'PoC de IA para documentos médicos y codificación SNOMED',
    description:
      'Proyecto exploratorio de IA aplicada a consulta documental y procesamiento de texto clínico, con integración práctica de Azure OpenAI para apoyar la revisión de documentos médicos y la propuesta asistida de códigos SNOMED, sin entrenar modelos avanzados desde cero.',
    tech: ['Python', 'Flask', 'Azure OpenAI', 'Consulta documental', 'NLP básico', 'SNOMED'],
  },
]

function Projects() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="proyectos" eyebrow="Trabajo" title="Proyectos destacados" />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{project.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Tecnologías</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
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
