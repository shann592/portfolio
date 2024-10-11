import Card from '../components/Card'
import { projects } from '../data/data'
const Project = () => {
  return (
    <section className="gap-4 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 mt-7">
      {projects.map((p, idx) => (
        <Card key={idx} project={p} />
      ))}
    </section>
  )
}
export default Project
