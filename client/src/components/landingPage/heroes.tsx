'use client'
import React from 'react'
import { Brain, MessageSquare, TrendingUp, Target } from 'lucide-react'

const Heroes = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping" />
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
        <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-mono opacity-50">01010101</div>
      </div>
      
      <div className="text-center text-white px-6 max-w-4xl z-10">
        {/* Marketing AI Icons */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="p-3 bg-blue-600/20 rounded-full">
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-purple-600/20 rounded-full">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-3 bg-green-600/20 rounded-full">
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
        </div>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-4">
            🚀 Coming Soon
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">INDIBUS</span> Growthpole
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Target className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-lg md:text-xl font-semibold">Dominate the market with INDIBUS Growthpole</span>
          <Target className="w-5 h-5 text-yellow-400" />
        </div>
        
        <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          AI-powered chat interface that generates comprehensive marketing roadmaps and engaging social media content to accelerate your business growth.
        </p>
        
        <div className="space-y-4">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold opacity-50 cursor-not-allowed">
            Launching Soon
          </button>
          <div className="text-sm text-gray-400 font-mono">
            <span className="text-green-400">&gt;</span> Building the future of marketing AI
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroes