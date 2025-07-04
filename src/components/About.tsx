import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Design Focus",
      description: "Creating intuitive, beautiful user experiences"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and approaches"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating digital solutions that combine 
            technical excellence with beautiful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              full-stack applications that are both powerful and user-friendly. My journey 
              started with a curiosity about how things work, and has evolved into a career 
              focused on building meaningful digital experiences.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I believe that great software isn't just about code – it's about understanding 
              user needs, solving real problems, and crafting solutions that make people's 
              lives easier and more enjoyable.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community through 
              blogs and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;