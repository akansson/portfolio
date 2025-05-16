import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { projects, setProjects, skills, setSkills } = usePortfolio();

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tech: "",
    link: "",
  });

  const [newSkill, setNewSkill] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Incorrect username or password.");
    }
  }

  function addProject(e) {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "", tech: "", link: "" });
  }

  function deleteProject(index) {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  }

  function addSkill(e) {
    e.preventDefault();
    setSkills([...skills, newSkill]);
    setNewSkill("");
  }

  function deleteSkill(index) {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  }

  if (!loggedIn) {
    return (
      <div className="p-10 max-w-4xl mx-auto bg-white min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-3 mb-4 rounded w-full max-w-md text-gray-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-3 mb-4 rounded w-full max-w-md text-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded w-full max-w-md transition-colors"
        >
          Log in
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Admin Panel</h1>

      {/* ADd project*/}
      <form onSubmit={addProject} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Add project
        </h2>
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 p-3 mb-4 rounded w-full text-gray-500"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          className="border border-gray-300 p-3 mb-4 rounded w-full text-gray-500"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tech"
          className="border border-gray-300 p-3 mb-4 rounded w-full text-gray-500"
          value={newProject.tech}
          onChange={(e) =>
            setNewProject({ ...newProject, tech: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Link (optional)"
          className="border border-gray-300 p-3 mb-6 rounded w-full text-gray-500"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded transition-colors"
        >
          Add project
        </button>
      </form>

      {/* List project */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Your projects
        </h3>
        {projects.length === 0 && (
          <p className="text-gray-600 italic">No project added yet.</p>
        )}
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 mb-4 rounded flex justify-between items-center"
          >
            <div>
              <strong className="text-blue-700">{project.title}</strong> –{" "}
              <span className="text-gray-700">{project.description}</span>
            </div>
            <button
              onClick={() => deleteProject(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* add skills */}
      <form onSubmit={addSkill} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Add skills
        </h2>
        <input
          type="text"
          placeholder="Example: JavaScript"
          className="border border-gray-300 p-3 mb-4 rounded w-full max-w-md text-gray-500"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded transition-colors"
        >
          Add skill
        </button>
      </form>

      {/* List skillss */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Your skills
        </h3>
        {skills.length === 0 && (
          <p className="text-gray-600 italic">No skills added yet.</p>
        )}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300 p-3 mb-3 rounded flex justify-between items-center"
          >
            <span className="text-gray-800">{skill}</span>
            <button
              onClick={() => deleteSkill(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
