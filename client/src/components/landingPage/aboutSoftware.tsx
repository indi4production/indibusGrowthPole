'use client'
import React from 'react'
import { MessageCircle, Target, TrendingUp, Zap } from 'lucide-react'

const AboutSoftware = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">INDIBUS Growthpole</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Revolutionary AI-powered chat interface designed to transform your marketing and outbound sales strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Chat-Based Interface</h3>
                <p className="text-gray-300">Intuitive conversational AI that understands your business needs and provides instant marketing insights</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Outbound Sales Strategies</h3>
                <p className="text-gray-300">Generate targeted outreach campaigns, cold email sequences, and sales funnel optimization strategies</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600/20 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Marketing Intelligence</h3>
                <p className="text-gray-300">Data-driven marketing roadmaps, content strategies, and growth hacking techniques tailored to your industry</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-600/20 rounded-full">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Results</h3>
                <p className="text-gray-300">Get actionable marketing plans, ad copy, and sales scripts in seconds through simple chat interactions</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">Chat Interface Preview</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="text-gray-300">
                  <span className="text-blue-400">You:</span> I need a marketing strategy for my SaaS product
                </div>
                <div className="text-gray-300">
                  <span className="text-green-400">AI:</span> I'll create a comprehensive marketing plan including:
                </div>
                <div className="text-gray-400 ml-4">
                  • Target audience analysis<br/>
                  • Content marketing roadmap<br/>
                  • Social media strategy<br/>
                  • Email campaign sequences<br/>
                  • Conversion optimization tactics
                </div>
                <div className="text-gray-500 text-xs mt-4">
                  <span className="text-green-400">▶</span> Generating personalized strategy...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSoftware