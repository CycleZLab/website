import { UserPlus, Users, Calendar, Github, MessageCircle, QrCode } from 'lucide-react';

export default function GetInvolvedPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
                        <p className="text-xl text-blue-100">
                            Join the CycleZLab community and help build the future of FTC in China
                        </p>
                    </div>
                </div>
            </section>

            {/* Become a Contributor */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <UserPlus className="text-blue-600" size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                            Become a Contributor
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                            <p className="text-xl leading-relaxed mb-6 text-center">
                                CycleZLab is built by the community, for the community. Whether you&apos;re a student,
                                coach, alumni, or FTC enthusiast, there&apos;s a place for you here. We welcome
                                contributors of all skill levels and backgrounds.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">What You Can Do</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Create educational content and tutorials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Design and document robot mechanisms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Conduct interviews and produce broadcasts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Develop software tools and libraries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Translate content and documentation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span>Help moderate and support the community</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">What We Offer</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Flexible, volunteer-based participation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Work with talented students and mentors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Build your portfolio and skills</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Make a real impact on the FTC community</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Access to collaborative tools and resources</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Recognition in all published work</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <Users className="text-purple-600" size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                            How We Work
                        </h2>

                        <div className="space-y-8">
                            {/* Workflow */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Workflow</h3>
                                <p className="text-gray-600 mb-6">
                                    We use modern collaboration tools to coordinate our volunteer-based team
                                    across different schedules and time zones.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                                            <Calendar className="text-blue-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900">Feishu for Planning</h4>
                                            <p className="text-gray-600 text-sm">
                                                We use Feishu (Lark) for project management, task tracking,
                                                and internal communications.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0">
                                            <Github className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900">GitHub for Code</h4>
                                            <p className="text-gray-600 text-sm">
                                                All code, designs, and documentation are managed on GitHub
                                                with full version control.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                                            <MessageCircle className="text-indigo-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900">Discord for Community</h4>
                                            <p className="text-gray-600 text-sm">
                                                Quick discussions, community support, and real-time
                                                collaboration happen on Discord.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                                            <Users className="text-green-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900">Monthly Brainstorms</h4>
                                            <p className="text-gray-600 text-sm">
                                                Regular video meetings to discuss new ideas, review progress,
                                                and plan upcoming projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Task Assignment */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Participation</h3>
                                <p className="text-gray-600 mb-4">
                                    We understand that everyone has different commitments—school, competitions,
                                    work, and life. That&apos;s why CycleZLab is designed to be flexible:
                                </p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3 font-bold">1.</span>
                                        <span><strong>Choose your tasks:</strong> Pick projects that match your interests and skills</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3 font-bold">2.</span>
                                        <span><strong>Set your pace:</strong> Work on your own schedule with no mandatory deadlines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3 font-bold">3.</span>
                                        <span><strong>Take breaks:</strong> Step away when you need to, come back when you&apos;re ready</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3 font-bold">4.</span>
                                        <span><strong>Get support:</strong> Collaborate with others and ask for help when needed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join the Conversation */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <QrCode className="text-green-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Join the Conversation
                    </h2>

                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12 rounded-2xl text-center">
                        <p className="text-xl text-gray-700 mb-8">
                            Ready to get started? Scan the QR code below to join our WeChat group
                            and introduce yourself to the community!
                        </p>

                        {/* QR Code Placeholder */}
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block mb-6">
                            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <QrCode size={64} className="text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500 text-sm">WeChat Group QR Code</p>
                                    <p className="text-gray-400 text-xs mt-2">
                                        (Upload your QR code image here)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8">
                            Can&apos;t scan? You can also reach us through:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://discord.gg/cyclezlab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                            >
                                <MessageCircle className="mr-2" size={20} />
                                Join Discord
                            </a>
                            <a
                                href="mailto:contact@cyclezlab.org"
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Every Contribution Matters
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Whether you contribute code, content, ideas, or just spread the word—
                        you&apos;re helping build something meaningful for the entire FTC community in China.
                    </p>
                    <p className="text-lg text-blue-200">
                        CycleZLab belongs to all of its contributors. That includes you.
                    </p>
                </div>
            </section>
        </div>
    );
}
