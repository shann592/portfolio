import Tag from './Tag'

const Card = ({ project }) => {
  const { demoLink, projectName, projectImg, techStackUsed } = project
  return (
    <a
      href={demoLink}
      target="_blank"
      className="md:w-80 w-60 min-h-24 rounded-md overflow-hidden border-2 border-black dark:border-stone-300 shadow-lg"
    >
      <figure>
        <img className="w-full h-28 md:h-52" src={projectImg} alt="project" />
      </figure>
      <div className="p-3">
        <h2 className="text-lg font-semibold">{projectName}</h2>
        <div className="flex items-center gap-2 flex-wrap my-1">
          {techStackUsed.length > 0 &&
            techStackUsed.map((t, idx) => <Tag text={t} key={idx} />)}
        </div>
      </div>
    </a>
  )
}
export default Card
