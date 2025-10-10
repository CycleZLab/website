import { Target, Users, Heart, Share2 } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About CycleZLab</h1>
                        <p className="text-xl text-blue-100">
                            Building a supportive and knowledgeable FIRST community in China
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <Target className="text-blue-600" size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                            Our Mission
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl leading-relaxed mb-6">
                                CycleZLab is dedicated to establishing a supportive, knowledgeable, and
                                vibrant FIRST Tech Challenge community in China. Inspired by the FunRobotics
                                Network, we believe that quality content, open resources, and shared experiences
                                can elevate the entire FTC ecosystem.
                            </p>
                            <p className="text-xl leading-relaxed mb-6">
                                Our goal is to make robotics knowledge more accessible, competitions more
                                engaging, and the community more connected. We achieve this through comprehensive
                                competition coverage, educational content that demystifies complex concepts,
                                open-source hardware designs, and platforms for real-time collaboration.
                            </p>
                            <p className="text-xl leading-relaxed">
                                We envision a future where every FTC team in China has access to the resources,
                                knowledge, and support they need to succeed—not just in competition, but in
                                learning, innovation, and personal growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <Users className="text-green-600" size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                            Who We Are
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl leading-relaxed mb-6">
                                CycleZLab is a collective effort, open to all FTC students, coaches, and alumni
                                who want to contribute to the community. We are not owned by any single team or
                                organization—we belong to everyone who participates.
                            </p>
                            <p className="text-xl leading-relaxed mb-6">
                                The project was initiated by <strong>FTC 19666 Forever Knight</strong>, who
                                recognized the need for better resources and community infrastructure in China's
                                FTC scene. However, from day one, the vision has been to create something larger
                                than any single team—a true community project.
                            </p>
                            <p className="text-xl leading-relaxed mb-6">
                                Today, CycleZLab includes contributors from multiple teams across China, each
                                bringing their unique expertise, perspectives, and passion for FIRST. Whether
                                you're a seasoned programmer, a mechanical design expert, a content creator, or
                                simply someone eager to help, there's a place for you here.
                            </p>
                            <p className="text-xl leading-relaxed">
                                Our volunteer-based structure ensures that everyone can contribute at their own
                                pace, fitting CycleZLab work around school, competitions, and other commitments.
                                We organize through monthly brainstorming sessions and collaborative tools like
                                Feishu and GitHub.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Collaboration */}
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Collaboration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that the best solutions emerge when people work together.
                                CycleZLab thrives on the contributions of many, and we actively foster
                                an environment where everyone's ideas are valued and collaboration is encouraged.
                            </p>
                        </div>

                        {/* Open Source */}
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Share2 className="text-green-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Open Source</h3>
                            <p className="text-gray-600 leading-relaxed">
                                All our code, documentation, and designs are released under community-friendly
                                licenses (CC BY-SA). We believe knowledge should be freely accessible,
                                allowing others to learn, adapt, and build upon our work.
                            </p>
                        </div>

                        {/* Knowledge Sharing */}
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-purple-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Knowledge Sharing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Education is at the heart of what we do. We're committed to breaking down
                                complex robotics concepts, sharing practical insights, and ensuring that
                                knowledge flows freely throughout the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Join Us?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        CycleZLab is built by people like you. Bring your skills, passion, and ideas to help
                        grow the FTC community in China.
                    </p>
                    <a
                        href="/get-involved"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                    >
                        Get Involved
                    </a>
                </div>
            </section>
        </div>
    );
}
