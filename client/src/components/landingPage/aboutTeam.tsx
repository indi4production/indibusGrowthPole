import React from 'react'
import { Linkedin, Crown, Target, Zap, Brain } from 'lucide-react'

const AboutTeam = () => {
  const team = [
    {
      name: "Roshan Dubey",
      role: "CoFounder and CEO",
      education: "BTech",
      linkedin: "https://www.linkedin.com/in/roshandubey99/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE7blA8Xidbcg/profile-displayphoto-crop_800_800/B56Zg78U.iHkAM-/0/1753352329273?e=1762992000&v=beta&t=feVpKQ7moZB0h1QRIubTQgHtygxbsXkJE6YdtDj-Mrk",
      icon: Crown,
      gradient: "from-yellow-400 to-orange-500",
      description: "Visionary leader driving AI innovation in marketing technology"
    },
    {
      name: "Suraj Singh",
      role: "Cofounder and COO",
      education: "BTech",
      linkedin: "https://www.linkedin.com/in/surajsingh0912/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQENl6dCZg8svg/profile-displayphoto-shrink_800_800/B56ZYp8r9wHoAc-/0/1744460500074?e=1762992000&v=beta&t=wzALjQ3vmTirQt7kd6t5fBJmUv5suVdZQ6S89ktUFUo",
      icon: Target,
      gradient: "from-blue-400 to-purple-500",
      description: "Strategic operations expert scaling growth-focused solutions"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-20" />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Brain className="w-12 h-12 text-blue-400 animate-pulse" />
            <Zap className="w-10 h-10 text-yellow-400 animate-bounce" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Visionaries</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            The brilliant minds revolutionizing marketing intelligence through cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => {
            const IconComponent = member.icon
            return (
              <div key={index} className="group relative">
                {/* Glowing background effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`} />
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/50 text-center hover:border-gray-500/70 transition-all duration-500 transform group-hover:scale-105">
                  {/* Role icon */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className={`p-4 bg-gradient-to-r ${member.gradient} rounded-2xl shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Profile image with enhanced styling */}
                  <div className="mb-8 mt-8">
                    <div className="relative">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-30 animate-pulse`} />
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="relative w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl group-hover:border-white/40 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  
                  <div className={`inline-block px-6 py-2 bg-gradient-to-r ${member.gradient} rounded-full mb-3`}>
                    <p className="text-white font-bold text-lg">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-4">{member.education}</p>
                  <p className="text-gray-400 mb-8 text-base leading-relaxed">{member.description}</p>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${member.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-110 font-semibold text-lg`}
                  >
                    <Linkedin className="w-6 h-6" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom decorative element */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gray-800/50 rounded-2xl border border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            </div>
            <span className="text-gray-300 font-mono text-sm">Building the future of AI marketing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam