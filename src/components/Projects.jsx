import SectionTitle from './SectionTitle'

const projects = [
  {
    title: 'Dashboard de KPIs de soporte / osTicket',
    description:
      'Modelo analítico en Power BI para medir tiempos de primera acción, tickets por departamento, cumplimiento SLA y evolución mensual.',
    tech: ['Power BI', 'DAX', 'SQL', 'Power Query', 'ODBC', 'osTicket'],
  },
  {
    title: 'Análisis retail de stock deseado vs stock recepcionado',
    description:
      'Extracción y análisis de datos desde bases relacionales para comparar stock planificado, recepciones reales, tiendas, productos y eventos logísticos.',
    tech: ['SQL', 'DBeaver', 'Power BI', 'Power Query', 'Excel'],
  },
  {
    title: 'Automatización de procesos internos con Microsoft 365',
    description:
      'Flujo con Forms, Lists, Planner y Power Automate para estructurar solicitudes internas y mejorar trazabilidad.',
    tech: ['Power Automate', 'Microsoft Forms', 'Microsoft Lists', 'Planner', 'Teams'],
  },
  {
    title: 'IA aplicada a documentos médicos y codificación SNOMED',
    description:
      'Solución basada en Azure OpenAI para responder preguntas sobre documentos PDF y analizar prescripciones médicas, asociándolas a códigos SNOMED.',
    tech: ['Python', 'Flask', 'Azure OpenAI', 'NLP', 'PDFs', 'SNOMED'],
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
