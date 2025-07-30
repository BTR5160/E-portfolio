import React from 'react';
import { Medal, Trophy, Award, Star } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: Trophy,
      title: "Second in Class",
      year: "2024–2025",
      description: "Ranked 2nd in Business Intelligence specialization at ESEN with a 16.46 average.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Medal,
      title: "First in Class",
      year: "2023–2024",
      description: "Achieved top rank during the common core year in Business Computing.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Star,
      title: "Hackathon Finalist – AI for Climate",
      year: "2025",
      description: "Selected among top 6 of 30 teams for an AI-based climate prediction solution.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Hackathon Winner – Safety Challenge",
      year: "2025",
      description: "Won 1st place by designing a safety-focused tech solution.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Most Active Student Recognition",
      year: "2025",
      description: "Honored by ESEN for exceptional involvement in academic and extracurricular activities.",
      color: "from-rose-500 to-red-600"
    }
  ];

  return (
    <section
      id="achievements"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Achievements
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? 'bg-[#577B87]' : 'bg-[#294149]'}`}></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Victory through strategic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-xl hover:shadow-2xl border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              {/* Top Border */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${achievement.color} rounded-t-xl`}></div>

              {/* Icon & Title */}
              <div className="flex items-start space-x-6">
                <div className={`flex-shrink-0 p-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}>
                  <achievement.icon size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {achievement.title}
                    </h3>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                      {achievement.year}
                    </span>
                  </div>
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className={`mt-20 p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
        >
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              "Life is Like Chess"
            </h3>
            <blockquote className={`text-xl italic leading-relaxed max-w-4xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "Every decision I make is guided by strategic thinking — much like planning a few moves ahead on the chessboard. 
              In tech, as in chess, I value anticipation, clarity, and impact. Each achievement represents a calculated move 
              toward a greater strategic vision."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
