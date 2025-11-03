import Link from 'next/link';
import { Users, MapPin, Trophy, ArrowRight } from 'lucide-react';

// Example member teams data structure
const memberTeams = [
  {
    number: '12345',
    name: 'Team Phoenix',
    location: 'Shanghai',
    logoPlaceholder: 'P',
    color: 'from-red-500 to-orange-600'
  },
  {
    number: '23456',
    name: 'Team Dragon',
    location: 'Beijing',
    logoPlaceholder: 'D',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    number: '34567',
    name: 'Team Lightning',
    location: 'Shenzhen',
    logoPlaceholder: 'L',
    color: 'from-purple-500 to-pink-600'
  },
  {
    number: '45678',
    name: 'Team Innovators',
    location: 'Guangzhou',
    logoPlaceholder: 'I',
    color: 'from-green-500 to-emerald-600'
  },
  {
    number: '56789',
    name: 'Team Pioneers',
    location: 'Hangzhou',
    logoPlaceholder: 'P',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    number: '67890',
    name: 'Team Nexus',
    location: 'Chengdu',
    logoPlaceholder: 'N',
    color: 'from-indigo-500 to-purple-600'
  },
];

export default function Members() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Member Teams
            </h1>
            <p className="text-xl md:text-2xl text-orange-100">
              Meet the FTC teams that are part of the CycleZLab community.
              Together, we're building the future of robotics in China.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Community
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These teams collaborate, share knowledge, and support each other throughout
            the FTC season and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberTeams.map((team) => (
              <div
                key={team.number}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                {/* Logo Section */}
                <div className={`aspect-square bg-gradient-to-br ${team.color} flex items-center justify-center`}>
                  <div className="text-white text-8xl font-bold">
                    {team.logoPlaceholder}
                  </div>
                </div>

                {/* Team Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {team.name}
                  </h3>
                  <p className="text-lg text-gray-600 font-semibold mb-3">
                    #{team.number}
                  </p>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{team.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-orange-600 mb-3">
                {memberTeams.length}
              </div>
              <div className="text-xl text-gray-600">
                Member Teams
              </div>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-orange-600 mb-3">
                10+
              </div>
              <div className="text-xl text-gray-600">
                Cities Represented
              </div>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-orange-600 mb-3">
                50+
              </div>
              <div className="text-xl text-gray-600">
                Competitions Attended
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy size={48} className="mx-auto mb-6 text-orange-600" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Is your team interested in becoming a CycleZLab member? Connect with us
            to learn about membership benefits and how you can get involved.
          </p>
          <Link
            href="/get-involved"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
          >
            Get Involved
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
