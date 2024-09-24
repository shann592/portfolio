import Tag from './Tag'

const Card = () => {
  return (
    <div className="w-80 min-h-24 rounded-md overflow-hidden border-2 border-black dark:border-stone-300 shadow-lg">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="project"
        />
      </figure>
      <div className="p-3">
        <h2 className="text-lg font-semibold">Project 1</h2>
        <div className="flex items-center gap-2 flex-wrap my-1">
          <Tag text="React" />
          <Tag text="React" />
          <Tag text="React" />
        </div>
      </div>
    </div>
  )
}
export default Card
