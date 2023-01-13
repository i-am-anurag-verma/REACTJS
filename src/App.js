import "./App.css";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Counter />
      <Home />
      <Accordion
        title="What is your return policy?"
        content="A return policy is a set of rules a retailer creates to manage how customers return and exchange unwanted merchandise they've purchased."
      />
      <Accordion
        title="What is your return policy?"
        content="A return policy is a set of rules a retailer creates to manage how customers return and exchange unwanted merchandise they've purchased."
      />
      <Accordion
        title="What is your return policy?"
        content="
        <p>A return policy is a set of rules a retailer creates to manage how customers return and exchange unwanted merchandise they've purchased.</p> <br>
        <p>A return policy is a set of rules a retailer creates to manage how customers return and exchange unwanted merchandise they've purchased.</p> <br>
        <p>A return policy is a set of rules a retailer creates to manage how customers return and exchange unwanted merchandise they've purchased.</p>"
      />
    </div>
  );
}

export default App;
