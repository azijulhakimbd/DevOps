import HeroSection from "./Components/Hero";
import Projects from "./projects/page";
import Team from "./team/page";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection></HeroSection>
        {/* Project Section */}
        <Projects></Projects>
        {/* Our Team  */}
        <Team></Team>
    </div>
  );
}
