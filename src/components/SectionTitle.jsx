function SectionTitle({ id, eyebrow, title }) {
  return (
    <header id={id} className="mb-6 scroll-mt-24 md:mb-7">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
    </header>
  )
}

export default SectionTitle
