import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Home/Intro Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-600">Your Name</h1>
        <p className="mt-4 text-lg text-gray-700">A short summary about you.</p>
        {/* Add LinkedIn and Resume links here later */}
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        {/* Experience content goes here */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {/* Projects content goes here */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        {/* Skills content goes here */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        {/* Contact content goes here */}
      </section>
    </div>
  );
}