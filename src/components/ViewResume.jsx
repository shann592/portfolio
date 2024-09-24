const ViewResume = () => {
  return (
    <dialog
      id="my_modal_5"
      className="modal w-full h-screen bg-black bg-opacity-50 z-50"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
export default ViewResume
