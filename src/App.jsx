import "./App.css";
import {
  Header,
  About,
  Skills,
  Project,
  Work,
  Testimonials,
  Footer,
} from "./components";

import { Navbar } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
