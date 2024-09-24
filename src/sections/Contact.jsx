const Contact = () => {
  return (
    <section className="w-[360px] md:w-[600px] mt-14">
      <form className="form-control">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-md w-full border-2 text-lg"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-md w-full border-2 mt-4 text-lg"
        />
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered textarea-md w-full border-2 mt-4 text-lg"
          rows="4"
        ></textarea>
        <div className="mt-4">
          <button className="btn btn-primary btn-wide">Primary</button>
        </div>
      </form>
    </section>
  )
}
export default Contact
