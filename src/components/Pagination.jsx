const Pagination = ({ handlePageChange }) => {
  return (
    <div className="join">
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="1"
        defaultChecked
        onChange={() => handlePageChange(1)}
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="2"
        onChange={() => handlePageChange(2)}
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="3"
        onChange={() => handlePageChange(3)}
      />
    </div>
  )
}
export default Pagination
