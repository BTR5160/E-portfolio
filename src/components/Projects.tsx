import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "LLMOps Pipeline",
      description: "End-to-end MLOps pipeline with CrewAI, MLflow, DVC, and QLoRA for large language model operations and deployment.",
      tools: ["CrewAI", "MLflow", "DVC", "QLoRA", "Python"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Automated QR Check-in System",
      description: "Smart event management system using Google Apps Script, Gmail API, and Google Sheets for seamless attendee tracking.",
      tools: ["Apps Script", "Gmail API", "Google Sheets", "JavaScript"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "PwC TAC Dashboard",
      description: "Comprehensive task and incident tracking dashboard for PwC Tunisia Advisory Center with real-time analytics.",
      tools: ["Power BI", "SQL", "Excel", "DAX"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Collaborative Kanban Platform",
      description: "Modern board management system with integrated AI chatbot for enhanced team collaboration and productivity.",
      tools: ["React", "Node.js", "MongoDB", "OpenAI"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <div className="w-24 h-1 bg-[#294149] mx-auto mb-6"></div>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Each project represents a strategic move in my tech journey
          </p>
        </div>

        {/* Chessboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 transform hover:scale-105 ${
                index % 2 === 0 
                  ? (darkMode ? 'bg-gray-800' : 'bg-white') 
                  : (darkMode ? 'bg-gray-700' : 'bg-gray-50')
              } rounded-xl p-8 shadow-xl hover:shadow-2xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}
            >
              {/* Gradient Overlay */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color} rounded-t-xl`}></div>
              
              <div className="pt-4">
                <h3 className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-base leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        darkMode 
                          ? 'bg-gray-600 text-gray-200' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}>
                    <ExternalLink size={16} />
                    Demo
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'border-gray-500 text-gray-300 hover:bg-gray-600' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}>
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;