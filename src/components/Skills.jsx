import SectionTitle from './SectionTitle'

const skillGroups = [
  {
    title: 'Data & BI',
    items: ['Power BI', 'DAX', 'Power Query', 'Excel avanzado', 'Modelado de datos'],
  },
  {
    title: 'Bases de datos',
    items: ['SQL', 'MySQL/MariaDB', 'DBeaver', 'ODBC'],
  },
  {
    title: 'Automatización',
    items: ['Power Automate', 'Microsoft Forms', 'Microsoft Lists', 'Planner', 'Teams'],
  },
  {
    title: 'Programación e IA',
    items: ['Python (básico)', 'Flask (básico)', 'APIs REST', 'Azure OpenAI', 'Prompt engineering', 'NLP básico'],
  },
]

function Skills() {
  return (
    <section className="mb-16 md:mb-20">
      <SectionTitle id="skills" eyebrow="Capacidades" title="Skills" />
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
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
