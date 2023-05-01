export default function SearchInput() {
    return (
      <form>
        <div className="input-group mb-1">
          <input
            type="text"
            placeholder="Search"
            className="form-control border border-solid rounded-lg text-center"
          />
          <button type="submit" className="btn btn-light border border-solid">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    );
  }
  