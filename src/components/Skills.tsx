import React from 'react';
import { Crown, Zap, Shield, Target, Users, Code } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Crown,
      piece: "Queen",
      title: "Versatility",
      description: "BI, MLOps, AI",
      skills: ["Power BI", "MLflow", "CrewAI", "Data Science", "Machine Learning"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Zap,
      piece: "Knight",
      title: "Creative Solutions",
      description: "Apps Script automation, QR systems",
      skills: ["Google Apps Script", "Gmail API", "Automation", "QR Systems", "JavaScript"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      piece: "Rook",
      title: "Structure & Foundation",
      description: "Data Warehousing, SQL, Power BI",
      skills: ["SQL", "Data Warehousing", "ETL", "Database Design", "Analytics"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      piece: "King",
      title: "Leadership",
      description: "Club president, event management",
      skills: ["Team Leadership", "Event Management", "Strategic Planning", "Communication"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      piece: "Bishop",
      title: "Collaboration",
      description: "Cross-functional teamwork",
      skills: ["Team Collaboration", "Stakeholder Management", "Cross-functional Work"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Code,
      piece: "Pawn",
      title: "Technical Growth",
      description: "Python, Docker, GitLab CI/CD",
      skills: ["Python", "Docker", "GitLab CI/CD", "DVC", "Version Control"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills
          </h2>
          <div className="w-24 h-1 bg-[#294149] mx-auto mb-6"></div>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Each skill is a chess piece in my strategic arsenal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl`}
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-t-xl`}></div>
              
              {/* Chess Piece Icon */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className={`text-lg font-semibold mt-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  ♛ {category.piece}
                </h3>
              </div>

              {/* Skill Category */}
              <div className="text-center mb-6">
                <h4 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h4>
                <p className={`text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    } shadow-sm`}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;