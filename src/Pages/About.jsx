import {
  FaTasks,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaNetworkWired,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTasks className="text-PRIMARY text-3xl" />,
    title: "Kanban Boards",
    description:
      "Organize and prioritize tasks visually with drag-and-drop boards.",
  },
  {
    icon: <FaUsers className="text-PRIMARY text-3xl" />,
    title: "Team Collaboration",
    description: "Communicate and share updates with real-time team chat.",
  },
  {
    icon: <FaProjectDiagram className="text-PRIMARY text-3xl" />,
    title: "Role-based Access",
    description:
      "Secure your workflow with custom permissions for each member.",
  },
  {
    icon: <FaClock className="text-PRIMARY text-3xl" />,
    title: "Subtasks & Deadlines",
    description: "Break work down into subtasks and track due dates easily.",
  },
  {
    icon: <FaNetworkWired className="text-PRIMARY text-3xl" />,
    title: "Scalable Architecture",
    description:
      "Perfect for startups to enterprise teams with remote support.",
  },
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-PRIMARY mb-6">
        About <span className="text-black">ProjectBuild</span>
      </h1>
      <p className="text-gray-700 mb-8">
        ProjectBuild is a powerful, intuitive platform designed to help teams
        plan, manage, and deliver projects efficiently. Whether you're a startup
        or a large enterprise, we provide everything you need to organize work,
        collaborate, and achieve goals.
      </p>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="mt-10 text-gray-700">
        <p>
          At <strong>ProjectBuild</strong>, our mission is to simplify team
          collaboration and make project management seamless. We believe in
          building software that enhances productivity — without adding
          complexity.
        </p>
      </div>
    </div>
  );
};

export default About;
