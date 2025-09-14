import HeroSection from "./Components/Hero";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection></HeroSection>
        {/* Project Section */}
        <Projects></Projects>
    </div>
  );
}
