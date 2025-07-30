import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: "Intern – PwC TAC (Tunis)",
      company: "PwC Technology & Analytics Consulting",
      period: "July 2025",
      location: "Tunis, Tunisia",
      description: "Built a real-time Power BI dashboard for tracking tasks and incidents. Enhanced reporting and visibility for internal operations.",
      type: "internship"
    },
    {
      title: "Vice President",
      company: "ESEN Ambassadors Club",
      period: "2024 – 2025",
      location: "Manouba, Tunisia",
      description: "Organized key events like JPO and ESENet, introduced livestreaming and screen projection, and collaborated with administration on planning.",
      type: "leadership"
    },
    {
      title: "Intern – PwC TAC (Tunis)",
      company: "PwC Technology & Analytics Consulting",
      period: "June 2024",
      location: "Tunis, Tunisia",
      description: "Designed and developed a dashboard for task and incident management using Power BI, transforming raw data into actionable insights.",
      type: "internship"
    },
    {
      title: "Digital Media Coordinator",
      company: "ESEN Elite Council Entourage",
      period: "2023 – 2024",
      location: "Manouba, Tunisia",
      description: "Managed digital branding and content strategy for the council. Promoted campaigns and ensured visual consistency across channels.",
      type: "leadership"
    },
    {
      title: "President",
      company: "Interact Club Ariana Tines",
      period: "2021 – 2022",
      location: "Ariana, Tunisia",
      description: "Led the club’s vision, organized community impact projects, and managed internal coordination among members and partners.",
      type: "leadership"
    },
    {
      title: "Vice President",
      company: "Interact Club Ariana Tines",
      period: "2020 – 2021",
      location: "Ariana, Tunisia",
      description: "Assisted in managing projects and supported the club president in planning and execution of local events.",
      type: "leadership"
    },
    {
      title: "Media Leader",
      company: "Interact Club Ariana Tines",
      period: "2020 – 2021",
      location: "Ariana, Tunisia",
      description: "Managed the club’s media and communication efforts, including social media and promotional materials.",
      type: "leadership"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500 to-cyan-500';
      case 'leadership':
        return 'from-purple-500 to-pink-500';
      case 'ambassador':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-[#294149] mx-auto mb-6"></div>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Building expertise through strategic moves
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${
            darkMode ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                  darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
                } z-10`}>
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${getTypeColor(exp.type)}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>

                    <div className={`w-full h-1 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full mb-4`}></div>

                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>

                    <h4 className={`text-lg font-semibold mb-3 text-[#294149]`}>
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className={`flex items-center gap-1 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className={`flex items-center gap-1 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <p className={`text-base leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
