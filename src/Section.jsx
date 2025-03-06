import './Section.css';
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext"; // Adjust path if needed


function Section() {
  const {isAuthenticated } = useContext(GlobalContext); // Ensure GlobalContext is available

  return (
      <section className="section">
          <div className="row">
            <div className="col-6">
              <h2>Section part 1</h2>
            </div>
            <div className="col-6">
              <h2>Section part 2</h2>
            </div>

            Is Authenticated: {isAuthenticated ? "Yes" : "No"}
          </div>
      </section>
  );
}

export default Section;
