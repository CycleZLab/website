import { Camera, BookOpen, Package, MessageCircle, Video, Github, ExternalLink } from 'lucide-react';

export default function InitiativesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
                        <p className="text-xl text-blue-100">
                            Comprehensive programs supporting the FTC community through coverage,
                            education, and open-source resources
                        </p>
                    </div>
                </div>
            </section>

            {/* Competition Coverage */}
            <section id="coverage" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Camera className="text-blue-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Competition Coverage
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Interviews */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Pit Interviews</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our pit interview series brings you behind the scenes with FTC teams.
                                We dive deep into their engineering processes, design decisions, and the
                                stories behind their robots. These interviews serve dual purposes: sharing
                                valuable engineering insights with the broader community and adding a touch
                                of entertainment to make robotics more engaging and accessible.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold mb-2 text-gray-900">What we cover:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Design philosophy and engineering approach</li>
                                    <li>• Technical challenges and solutions</li>
                                    <li>• Team dynamics and collaboration</li>
                                    <li>• Lessons learned throughout the season</li>
                                </ul>
                            </div>
                        </div>

                        {/* Broadcasting */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Live Broadcasting</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We provide high-quality, multi-camera live streams of FTC competitions,
                                making events accessible to teams, families, and fans who can't attend in
                                person. Our professional setup includes multiple angles, real-time commentary,
                                and enhanced production quality to create an engaging viewing experience.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold mb-2 text-gray-900">Features:</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Multi-camera coverage of matches</li>
                                    <li>• Live commentary and analysis</li>
                                    <li>• Match highlights and replays</li>
                                    <li>• Archived broadcasts for later viewing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="https://space.bilibili.com/cyclezlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                        >
                            Watch Past Coverage on Bilibili
                            <ExternalLink className="ml-2" size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Educational Content */}
            <section id="educational" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <BookOpen className="text-green-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Educational Content
                    </h2>

                    <div className="max-w-4xl mx-auto mb-12">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                            "Into The Sleep" Series
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-center">
                            Our flagship educational series that demystifies the math, physics, and engineering
                            principles behind competitive robotics. Each episode breaks down complex concepts
                            into digestible, practical knowledge that teams can immediately apply.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Episode 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Video size={48} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Episode 1: OPR & OPRm</h4>
                            <p className="text-gray-600 mb-4">
                                Understanding the principles of Offensive Power Rating and how it's calculated.
                                Learn how to analyze team performance using statistical metrics.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                            >
                                Watch Episode
                                <ExternalLink className="ml-2" size={16} />
                            </a>
                        </div>

                        {/* Episode 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                                <Video size={48} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Episode 2: Projectile Physics</h4>
                            <p className="text-gray-600 mb-4">
                                Calculate artifact trajectories with precision. Master the physics of shooting
                                mechanisms and optimize your scoring systems.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                            >
                                Watch Episode
                                <ExternalLink className="ml-2" size={16} />
                            </a>
                        </div>

                        {/* Practical Tutorials */}
                        <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Practical Tutorial Library</h4>
                            <p className="text-gray-600 mb-4">
                                Step-by-step video tutorials covering kit assembly, vision system implementation,
                                autonomous programming, and more. All designed to get your robot competition-ready.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                            >
                                Browse Tutorials
                                <ExternalLink className="ml-2" size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open-Source Hardware */}
            <section id="hardware" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Package className="text-purple-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Open-Source Hardware
                    </h2>

                    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Competition-ready robot kits with complete documentation, CAD files, and build guides.
                        All designs are open-source and free to use, modify, and improve.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Swerve Drive */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                                <Package size={64} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">FTC Swerve Drive</h4>
                            <p className="text-gray-600 mb-4">
                                High-performance swerve drive system for omnidirectional movement.
                                Includes complete CAD, BOM, and assembly instructions.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Documentation
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Shooter/Sorter */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                                <Package size={64} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Shooter/Sorter Mechanism</h4>
                            <p className="text-gray-600 mb-4">
                                Efficient scoring mechanism with integrated sorting capability.
                                Optimized for speed and accuracy.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Documentation
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Vision System */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                                <Package size={64} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Vision System Kit</h4>
                            <p className="text-gray-600 mb-4">
                                Complete computer vision solution with hardware setup and software libraries.
                                TensorFlow integration included.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Documentation
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/cyclezlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg"
                        >
                            <Github className="mr-2" size={24} />
                            View All Projects on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Community Discord */}
            <section id="community" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <MessageCircle className="text-indigo-600" size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                            Community Discord Server
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Join our Discord server to connect with other FTC teams, share resources,
                            ask questions, and participate in real-time discussions during events.
                            It's the central hub for the CycleZLab community.
                        </p>

                        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">What You'll Find</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-900">📢 Announcements</h4>
                                    <p className="text-gray-600">Latest updates, new content, and event information</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-900">💬 Team Chat</h4>
                                    <p className="text-gray-600">Connect with teams across China</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-900">🔧 Technical Help</h4>
                                    <p className="text-gray-600">Get assistance with builds and programming</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-900">📚 Resource Sharing</h4>
                                    <p className="text-gray-600">Exchange documents, code, and designs</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://discord.gg/cyclezlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center text-lg"
                        >
                            <MessageCircle className="mr-2" size={24} />
                            Join Our Discord Server
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
