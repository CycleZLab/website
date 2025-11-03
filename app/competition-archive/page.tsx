import Link from 'next/link';
import { Database, Video, FileText, Calendar, Search, TrendingUp, ArrowRight } from 'lucide-react';

export default function CompetitionArchive() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Database className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Competition Archive
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              Comprehensive archive of FTC competition data, match footage, team interviews,
              and historical performance records from events across China.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Contents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What's in the Archive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Match Footage */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Video className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Match Footage</h3>
              <p className="text-gray-600">
                High-quality recordings of qualification and elimination matches from
                FTC competitions. Multi-camera coverage and professional production.
              </p>
            </div>

            {/* Team Interviews */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Video className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Team Interviews</h3>
              <p className="text-gray-600">
                In-depth pit interviews with teams discussing their robot designs,
                strategies, and experiences throughout the season.
              </p>
            </div>

            {/* Match Data */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Match Data</h3>
              <p className="text-gray-600">
                Detailed score breakdowns, rankings, and statistics from every match.
                Complete competition results and team performance metrics.
              </p>
            </div>

            {/* Event Schedules */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Event Information</h3>
              <p className="text-gray-600">
                Competition schedules, venue details, and event summaries.
                Track the history of FTC events across China.
              </p>
            </div>

            {/* Historical Trends */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Historical Analysis</h3>
              <p className="text-gray-600">
                Season-by-season performance trends, team progression tracking,
                and competitive landscape analysis.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Search className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Advanced Search</h3>
              <p className="text-gray-600">
                Powerful search and filtering tools to find specific matches, teams,
                or events quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Recent Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder Event 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Video size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">FTC China Championship 2024</h3>
                <p className="text-gray-600 mb-4">
                  Complete coverage including all qualification matches, playoff rounds,
                  team interviews, and awards ceremony.
                </p>
                <div className="text-green-600 font-semibold inline-flex items-center">
                  View Event Archive
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>

            {/* Placeholder Event 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Video size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Regional Qualifier - Shanghai</h3>
                <p className="text-gray-600 mb-4">
                  Match footage, team pit interviews, and detailed performance statistics
                  from the Shanghai regional event.
                </p>
                <div className="text-green-600 font-semibold inline-flex items-center">
                  View Event Archive
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Contribute to the Archive
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have competition footage or data to share? Help us build the most comprehensive
            FTC archive in China. Contact us to contribute your content.
          </p>
          <Link
            href="/get-involved"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            Get Involved
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
