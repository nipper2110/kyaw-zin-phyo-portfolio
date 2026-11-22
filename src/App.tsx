import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Recognition } from "./components/Recognition";
import { Contact } from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Recognition />
        <Contact />
      </main>
      <footer className="bg-navy px-5 py-6 text-center text-sm text-paper/70">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
