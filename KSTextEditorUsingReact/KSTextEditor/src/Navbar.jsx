export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KS Text Editor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input mt-2"
                type="checkbox"
                role="switch"
                id="switchCheckChecked"
                defaultChecked=""
              />
              <label
                style={{ color: "white" }}
                className="form-check-label mt-1"
                htmlFor="switchCheckChecked"
              >
                Change Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
