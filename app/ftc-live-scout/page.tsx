import Link from 'next/link';
import { Camera, BarChart3, Users, Trophy, Clock, Target, ArrowRight } from 'lucide-react';

export default function FTCLiveScout() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Camera className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FTC Live Scout
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Real-time scouting and match analytics platform for FTC competitions.
              Make data-driven decisions and elevate your competitive strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Data */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Live Match Data</h3>
              <p className="text-gray-600">
                Track match results and team performance in real-time during competitions.
                Stay updated with instant score updates and rankings.
              </p>
            </div>

            {/* Team Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive statistics and performance metrics for every team.
                Analyze strengths, weaknesses, and trends over multiple matches.
              </p>
            </div>

            {/* Alliance Selection */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Alliance Selection Tools</h3>
              <p className="text-gray-600">
                Make informed alliance selections with detailed team comparisons
                and compatibility analysis.
              </p>
            </div>

            {/* Match Predictions */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Match Predictions</h3>
              <p className="text-gray-600">
                AI-powered match outcome predictions based on historical performance
                and current form.
              </p>
            </div>

            {/* Competition Tracking */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Event Support</h3>
              <p className="text-gray-600">
                Scout and track teams across multiple competitions throughout the season.
                Build comprehensive team profiles.
              </p>
            </div>

            {/* Collaborative Scouting */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600">
                Share scouting data with your team members and coordinate
                strategy in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            FTC Live Scout is currently in development. Join our community to get early access
            and help shape the future of FTC scouting tools.
          </p>
          <Link
            href="/get-involved"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Involved
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
