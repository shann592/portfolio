import TimelineItem from '../components/TimelineItem'
import { timelines } from '../data/data'
const Timeline = () => {
  return (
    <section className="md:w-[600px] mt-20">
      <header className="md:text-2xl text-xl underline font-bold underline-offset-8 mb-1">
        Timeline
      </header>
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {timelines.map((timeline, index) => (
          <TimelineItem timeline={timeline} key={index} />
        ))}
      </ul>
    </section>
  )
}
export default Timeline
