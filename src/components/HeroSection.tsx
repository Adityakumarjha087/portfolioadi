import Link from "next/link";
import Image from "next/image";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-block animate-fade-in">
          <span className="greeting">Designer & Developer</span>
          <h1 className="name font-heading">
            Building Digital <br/>
            Experiences That <br/>
            Matter.
          </h1>
          <p className="bio animate-fade-in animate-delay-1">
            I craft high-performance, accessible, and beautiful web applications that seamlessly blend form and function. Welcome to my digital space.
          </p>
          <div className="actions animate-fade-in animate-delay-2">
            <Link href="#projects" className="btn">
              View My Work
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="hero-image-block animate-fade-in animate-delay-1">
          <div className="hero-image-wrapper">
             <Image 
                src="/adi1.jpeg" 
                alt="Portrait" 
                width={600} 
                height={800} 
                className="hero-img-element"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
