import Chicago from "./Chicago";
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section>
      <h1>Little Lemon</h1>
      <Chicago />
      <Link to="/booking">
        <button class="button">Reserve a Table</button>
      </Link>
    </section>
  );
}

export default CallToAction;