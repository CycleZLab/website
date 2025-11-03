import Link from 'next/link';
import { Package, FileText, Download, Wrench, Code, Users, ArrowRight, Github } from 'lucide-react';

export default function DesignPack() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Design Pack
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Open-source hardware designs, CAD files, and build guides for competitive
              FTC robot mechanisms. Community-driven and freely accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CAD Files */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">CAD Files</h3>
              <p className="text-gray-600">
                Complete CAD models in multiple formats. Compatible with popular
                design software including Onshape, Fusion 360, and SolidWorks.
              </p>
            </div>

            {/* Build Guides */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Build Guides</h3>
              <p className="text-gray-600">
                Step-by-step assembly instructions with detailed diagrams,
                parts lists, and build tips from experienced teams.
              </p>
            </div>

            {/* Parts Lists */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Download className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Parts Lists</h3>
              <p className="text-gray-600">
                Comprehensive bill of materials with part numbers, quantities,
                and supplier links to make sourcing easy.
              </p>
            </div>

            {/* Assembly Tips */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Assembly Tips</h3>
              <p className="text-gray-600">
                Pro tips and best practices for assembly, including common pitfalls
                to avoid and optimization suggestions.
              </p>
            </div>

            {/* Open Source */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Github className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Open Source</h3>
              <p className="text-gray-600">
                All designs released under Creative Commons license. Free to use,
                modify, and share with proper attribution.
              </p>
            </div>

            {/* Community Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Support</h3>
              <p className="text-gray-600">
                Get help from the community on our Discord server. Share your builds
                and learn from other teams' experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Available Designs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Swerve Drive */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Package size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Swerve Drive</h3>
                <p className="text-gray-600 mb-4">
                  Complete swerve drive module design with 360-degree rotation capability.
                  Optimized for FTC competition use.
                </p>
                <div className="text-purple-600 font-semibold inline-flex items-center">
                  View Design
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>

            {/* Intake System */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Package size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Intake System</h3>
                <p className="text-gray-600 mb-4">
                  Efficient game piece intake mechanism with adjustable speed control
                  and multiple configuration options.
                </p>
                <div className="text-purple-600 font-semibold inline-flex items-center">
                  View Design
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>

            {/* Scoring Mechanism */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Package size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Scoring Mechanism</h3>
                <p className="text-gray-600 mb-4">
                  Precision scoring system with consistent repeatability.
                  Designed for high-speed autonomous and teleop scoring.
                </p>
                <div className="text-purple-600 font-semibold inline-flex items-center">
                  View Design
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Github size={48} className="mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Contribute Your Designs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a great robot design to share with the community? We welcome contributions
            from teams of all experience levels. Help us build the ultimate FTC design library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/cyclezlab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
            >
              View on GitHub
              <Github className="ml-2" size={20} />
            </Link>
            <Link
              href="/get-involved"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors border-2 border-purple-600 inline-flex items-center justify-center"
            >
              Get Involved
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
