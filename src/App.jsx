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

function App() {
  return (
    <div className="App">
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
