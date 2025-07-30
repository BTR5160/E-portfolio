import React from 'react';
import { Brain, Target, Trophy } from 'lucide-react';
import myImage from '../assets/me.png';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? 'bg-[#577B87]' : 'bg-[#294149]'
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div
              className={`w-80 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              } relative overflow-hidden shadow-2xl`}
            >
              <img
                src={myImage}
                alt="Bilel Triki"
                className="object-cover w-full h-full"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode ? 'from-[#577B87]/20' : 'from-[#294149]/20'
                } to-transparent`}
              ></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Top-ranked student at ESEN Manouba with strong skills in Business Intelligence and Data Science. I’ve built practical solutions using Power BI and Google Apps Script, and I’m actively exploring MLOps and LLMOps through hands-on projects with MLflow, DVC, and CrewAI.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I believe strategy and foresight — just like in chess — are key to success in both life and technology. Every decision is guided by strategic thinking, planning several moves ahead.
            </p>

            {/* Key Strengths */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Brain
                  className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? 'text-[#577B87]' : 'text-[#294149]'
                  }`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Strategic Thinking
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Planning ahead with data-driven insights
                </p>
              </div>

              <div className="text-center">
                <Target
                  className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? 'text-[#577B87]' : 'text-[#294149]'
                  }`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Precision
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Every move calculated for maximum impact
                </p>
              </div>

              <div className="text-center">
                <Trophy
                  className={`w-12 h-12 mx-auto mb-4 ${
                    darkMode ? 'text-[#577B87]' : 'text-[#294149]'
                  }`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Excellence
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Consistently delivering top-tier results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
