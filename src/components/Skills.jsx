import SectionTitle from './SectionTitle'

const skillGroups = [
  {
    title: 'Data & BI',
    items: ['Power BI', 'DAX', 'Power Query', 'Excel avanzado', 'Modelado de datos', 'KPIs', 'Reporting'],
  },
  {
    title: 'Bases de datos',
    items: ['SQL', 'MySQL/MariaDB', 'DBeaver', 'ODBC', 'Conectores de datos'],
  },
  {
    title: 'Automatización',
    items: ['Power Automate', 'Microsoft Forms', 'Microsoft Lists', 'SharePoint', 'Planner', 'Teams'],
  },
  {
    title: 'Programación e IA aplicada',
    items: ['Python', 'R', 'Consulta documental', 'Prompting'],
  },
]

function Skills() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="skills" eyebrow="Capacidades" title="Skills" />
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-panel motion-card rounded-2xl p-5 transition hover:border-sky-300/20 hover:bg-slate-900/70">
            <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="motion-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">
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

export default Skills
