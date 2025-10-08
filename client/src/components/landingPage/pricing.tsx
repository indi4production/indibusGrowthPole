'use client'
import React, { useState, useEffect } from 'react'
import { Check, Zap } from 'lucide-react'

const Pricing = () => {
  const [showFreeOffer, setShowFreeOffer] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFreeOffer(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
          </h2>
          <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Free Plan */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
            <div className="text-3xl font-bold text-white mb-6">
              <span className="blur-lg">$0</span><span className="text-lg text-gray-400 blur-lg">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ████ ██ ████████████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                █████ █████████ ██████████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                █████ ███████
              </li>
            </ul>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          {/* Starter Plan */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <div className="text-3xl font-bold text-white mb-6">
              <span className="blur-lg">$9</span><span className="text-lg text-gray-400 blur-lg">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                █████████ ██ ████████████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ████████ █████████ & █████ ██████████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ████████ ███████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ██████ ████████████
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <div className="text-3xl font-bold text-white mb-6">
              <span className="blur-lg">$29</span><span className="text-lg text-gray-400 blur-lg">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ██████████ ██ ███████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ████ █████████████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                █████████ ███████ ███████
              </li>
              <li className="flex items-center gap-3 text-gray-300 blur-lg">
                <Check className="w-5 h-5 text-green-400" />
                ██████ ██ ████████
              </li>
            </ul>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Animated Free Offer */}
        {showFreeOffer && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-2xl p-8 animate-pulse">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
                <h3 className="text-2xl font-bold text-yellow-400">Limited Time Offer!</h3>
                <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
              </div>
              <p className="text-xl text-white mb-2">
                <span className="font-bold text-yellow-400">FREE</span> for the first 1000 users!
              </p>
              <p className="text-gray-300">
                Get full Starter access at no cost. Join the waitlist now!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pricing