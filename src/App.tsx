import "./App.css";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <h1>Bienvdenido al sistema</h1>}
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>This's</strong> my store
            </p>
          </div>
        </div>

        <div className="level-right">
          <p className="level-item">
            <Link to={"/"}>
              <strong>Home</strong>
            </Link>
          </p>

          <p className="level-item">
            <Link to={"/people"}>
              <strong>People</strong>
            </Link>
          </p>

          <p className="level-item">
            <strong>Orders</strong>
          </p>

          <p className="level-item">
            <strong>Providers</strong>
          </p>
        </div>

        <div className="level-right">
          <p className="level-item">
            <button type="button" className="button is-link is-outlined">
              Login
            </button>
          </p>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
