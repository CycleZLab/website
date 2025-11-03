import Link from 'next/link';
import { Camera, Database, Package, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              CycleZLab
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Building and connecting the FIRST Tech Challenge community in China through
              innovative tools, comprehensive archives, and open-source resources.
            </p>
            <Link
              href="/get-involved"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Join Our Community
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FTCLiveScout */}
            <Link href="/ftc-live-scout" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  FTC Live Scout
                </h3>
                <p className="text-gray-600 text-lg">
                  Real-time scouting and match analytics platform for FTC competitions.
                  Track teams, analyze performance, and make data-driven alliance selections.
                </p>
                <div className="mt-6 text-blue-600 font-semibold inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </div>
            </Link>

            {/* CompetitionArchive */}
            <Link href="/competition-archive" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                  Competition Archive
                </h3>
                <p className="text-gray-600 text-lg">
                  Comprehensive archive of FTC competition data, match footage, interviews,
                  and historical performance records from events across China.
                </p>
                <div className="mt-6 text-green-600 font-semibold inline-flex items-center">
                  Explore Archive
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </div>
            </Link>

            {/* DesignPack */}
            <Link href="/design-pack" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                  Design Pack
                </h3>
                <p className="text-gray-600 text-lg">
                  Open-source hardware designs, CAD files, and build guides for competitive
                  FTC robot mechanisms. Community-driven and freely accessible.
                </p>
                <div className="mt-6 text-purple-600 font-semibold inline-flex items-center">
                  View Designs
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </div>
            </Link>

            {/* Members */}
            <Link href="/members" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Member Teams
                </h3>
                <p className="text-gray-600 text-lg">
                  Meet the FTC teams that are part of the CycleZLab community.
                  Discover their achievements and connect with teams across China.
                </p>
                <div className="mt-6 text-orange-600 font-semibold inline-flex items-center">
                  View Teams
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
