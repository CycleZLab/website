import Link from 'next/link';
import { Camera, BookOpen, Package, Users, Video, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              CycleZLab: Building and Connecting the FIRST Community in China
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Inspired by the FunRobotics Network, we create content, resources,
              and experiences for FTC participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/initiatives"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                See Our Initiatives
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/get-involved"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white/30 inline-flex items-center justify-center"
              >
                Join the Community
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            What We Do
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Supporting the FTC community through comprehensive coverage, education, and resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Competition Coverage */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Camera className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Competition Coverage</h3>
              <p className="text-gray-600">
                In-depth team interviews and high-quality live broadcasts bringing competitions to life.
              </p>
            </div>

            {/* Educational Series */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Educational Series</h3>
              <p className="text-gray-600">
                Demystifying the math and physics behind robotics through our "Into The Sleep" series.
              </p>
            </div>

            {/* Open-Source Kits */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Package className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Open-Source Kits</h3>
              <p className="text-gray-600">
                Designing and documenting competitive, easy-to-build robot kits for the community.
              </p>
            </div>

            {/* Community Hub */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Hub</h3>
              <p className="text-gray-600">
                Connecting teams and sharing resources through our Discord server and WeChat group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Content
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Educational Video */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Video size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Into The Sleep Series</h3>
                <p className="text-gray-600 mb-4">
                  Latest episode: The Principles of OPR & OPRm - Understanding ranking systems in FTC competitions.
                </p>
                <Link
                  href="/initiatives#educational"
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                >
                  Watch Now
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Competition Highlight */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Camera size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Competition Broadcasts</h3>
                <p className="text-gray-600 mb-4">
                  Watch our multi-camera coverage and team interviews from the latest FTC events.
                </p>
                <Link
                  href="/initiatives#coverage"
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                >
                  View Highlights
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <Users size={48} className="mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              A Community, By The Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              CycleZLab belongs to all of its contributors. We're an open and collaborative
              project built by FTC students, coaches, and alumni who believe in sharing knowledge
              and supporting each other.
            </p>
            <Link
              href="/get-involved"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Become a Contributor
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
