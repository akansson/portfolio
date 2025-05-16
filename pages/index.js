import { usePortfolio } from "@/context/PortfolioContext";
import Image from "next/image";

export default function HomePage() {
  const { projects, skills } = usePortfolio();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="p-10 max-w-4xl mx-auto">
        {/* Admin button to the right*/}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => (window.location.href = "/admin")}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition"
          >
            Admin
          </button>
        </div>

        {/* Hero */}
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-700 leading-tight">
              Akan Ahmet
            </h1>
            <p className="text-gray-700 leading-relaxed text-lg max-w-prose">
              Highly skilled and experienced professional with a strong
              background in marketing, retail management, and project
              leadership. With several years of experience driving sales growth,
              managing client relationships, and leading teams across the Nordic
              region, I bring a strategic mindset and hands-on approach to every
              project. My expertise lies in combining data-driven insights with
              effective communication to deliver impactful results. I have
              successfully led field marketing teams, managed large-scale
              projects, and coached high-performing teams to exceed KPI targets.
              Currently, I am expanding my skill set by building this portfolio
              with React and Next.js, combining my marketing experience with web
              development to create engaging digital experiences.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/11.jpg"
              alt="Akan Ahmet"
              width={400}
              height={400}
              className="rounded-lg shadow-lg opacity-0 animate-fadeIn"
            />
          </div>
        </section>

        {/* Skills section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Skills</h2>
          {skills.length === 0 && <p>No tech skills added.</p>}
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* project section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">
            My Projects
          </h2>
          {projects.length === 0 && <p>No projects added.</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Tech:</strong> {project.tech}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Visa projekt
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* contact */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Contact</h2>
          <p>
            📧{" "}
            <a
              href="mailto:akan_ahmet@outlook.com"
              className="text-blue-600 hover:underline font-medium"
            >
              akan_ahmet@outlook.com
            </a>
          </p>
          <p>📍 Stockholm, Sweden</p>
        </section>
      </div>
    </div>
  );
}
