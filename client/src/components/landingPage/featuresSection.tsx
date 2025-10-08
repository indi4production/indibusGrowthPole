import React from 'react'
import { MessageSquare, Brain, Target, Zap, TrendingUp, Users } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Chat Interface",
      description: "Conversational AI that understands your business needs and provides instant marketing insights",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Smart Strategy Generation",
      description: "Generate comprehensive marketing roadmaps and sales funnels tailored to your industry",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Outbound Sales Automation",
      description: "Create targeted cold email sequences and outreach campaigns that convert",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Instant Content Creation",
      description: "Generate ad copy, social media posts, and marketing materials in seconds",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Data-driven insights and performance tracking to optimize your marketing efforts",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Multi-Channel Campaigns",
      description: "Coordinate marketing efforts across email, social media, and advertising platforms",
      gradient: "from-rose-500 to-red-500"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Everything you need to dominate your market with AI-powered marketing intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`} />
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 hover:border-gray-500/70 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection