import { Scale, Shield, Users, FileText } from 'lucide-react';

export default function PoliciesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Policies</h1>
                        <p className="text-xl text-blue-100">
                            Our commitment to transparency, privacy, and open collaboration
                        </p>
                    </div>
                </div>
            </section>

            {/* Open Source & Licensing */}
            <section id="licensing" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Scale className="text-blue-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Open Source & Licensing
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Our Commitment to Open Source</h3>
                        <p>
                            CycleZLab is built on the principles of open collaboration and knowledge sharing.
                            We believe that the best way to advance the FTC community is to make our work
                            freely available for everyone to use, learn from, and build upon.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">License Terms</h3>
                        <p>
                            Unless otherwise specified, all content produced by CycleZLab is licensed under:
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg my-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
                            </h4>
                            <p className="mb-4">This means you are free to:</p>
                            <ul className="space-y-2">
                                <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
                                <li><strong>Adapt</strong> — remix, transform, and build upon the material for any purpose, even commercially</li>
                            </ul>
                            <p className="mt-4">Under the following terms:</p>
                            <ul className="space-y-2">
                                <li><strong>Attribution</strong> — You must give appropriate credit to CycleZLab and indicate if changes were made</li>
                                <li><strong>ShareAlike</strong> — If you remix, transform, or build upon the material, you must distribute your contributions under the same license</li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Source Code</h3>
                        <p>
                            All software source code, including robot control code, vision systems, and web
                            applications, is available on our GitHub repository. Code is typically licensed
                            under the MIT License unless otherwise specified.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Hardware Designs</h3>
                        <p>
                            CAD files, technical drawings, bill of materials (BOM), and assembly instructions
                            for all our robot kits are released under CC BY-SA 4.0. You can use these designs
                            to build your own robots, modify them to suit your needs, or create derivative works.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Educational Content</h3>
                        <p>
                            Videos, tutorials, articles, and other educational materials are licensed under
                            CC BY-SA 4.0. We encourage educators and teams to use and adapt this content for
                            their own training and outreach programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy & Consent */}
            <section id="privacy" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Shield className="text-green-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Privacy & Consent
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Media Authorization</h3>
                        <p>
                            CycleZLab produces video content that may feature teams, students, and coaches.
                            We take privacy seriously and follow these guidelines:
                        </p>

                        <div className="bg-green-50 p-6 rounded-lg my-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Photo & Video Policy</h4>
                            <ul className="space-y-3">
                                <li>
                                    <strong>Prior Consent:</strong> We obtain explicit permission before filming
                                    interviews or featuring individuals in our content.
                                </li>
                                <li>
                                    <strong>Minors Protection:</strong> For participants under 18, we require
                                    parental or guardian consent. Forms are provided before any filming begins.
                                </li>
                                <li>
                                    <strong>Right to Decline:</strong> Anyone can decline to be filmed or
                                    photographed at any time, with no explanation required.
                                </li>
                                <li>
                                    <strong>Content Review:</strong> Interview subjects have the opportunity to
                                    review footage before publication and can request edits or removal.
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Data Collection</h3>
                        <p>
                            CycleZLab collects minimal personal data. We only gather information necessary
                            for community participation and content creation:
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg my-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">What We Collect</h4>
                            <ul className="space-y-2">
                                <li><strong>Contact Information:</strong> Email addresses and usernames for community platforms (Discord, WeChat)</li>
                                <li><strong>Team Information:</strong> Team numbers, names, and basic details for coverage and attribution</li>
                                <li><strong>Content Submissions:</strong> Materials submitted by contributors for publication</li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Data Usage & Protection</h3>
                        <ul className="space-y-3">
                            <li>
                                <strong>Purpose Limitation:</strong> We only use collected data for its stated
                                purpose (e.g., contact info is only for communication about CycleZLab activities).
                            </li>
                            <li>
                                <strong>No Third-Party Sharing:</strong> We do not sell, rent, or share personal
                                data with third parties for marketing purposes.
                            </li>
                            <li>
                                <strong>Security Measures:</strong> Data is stored securely with access limited
                                to authorized CycleZLab contributors.
                            </li>
                            <li>
                                <strong>Data Retention:</strong> We retain data only as long as necessary for
                                community operations and content attribution.
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul className="space-y-2">
                            <li>Request access to your personal data</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your data (right to be forgotten)</li>
                            <li>Withdraw consent for content featuring you</li>
                            <li>Request removal from published content</li>
                        </ul>

                        <p className="text-lg font-semibold mt-6">
                            To exercise these rights, contact us at{' '}
                            <a href="mailto:privacy@cyclezlab.org" className="text-blue-600 hover:text-blue-700">
                                privacy@cyclezlab.org
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Event Compliance */}
            <section id="events" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Users className="text-purple-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Event Compliance
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            When covering competitions and events, CycleZLab respects the rules, policies,
                            and broadcasting rights of event organizers.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900">Our Commitments</h3>

                        <div className="bg-purple-50 p-6 rounded-lg my-6">
                            <ul className="space-y-4">
                                <li>
                                    <strong>Official Permission:</strong> We coordinate with event organizers
                                    before broadcasting or producing content from competitions. If permission
                                    is not granted, we do not stream or film.
                                </li>
                                <li>
                                    <strong>Rule Adherence:</strong> All CycleZLab team members and volunteers
                                    follow venue rules, including designated filming areas, safety protocols,
                                    and volunteer coordination.
                                </li>
                                <li>
                                    <strong>Fair Coverage:</strong> We strive to provide balanced coverage and
                                    do not favor any specific team or organization in our content.
                                </li>
                                <li>
                                    <strong>FIRST Values:</strong> All activities align with FIRST&apos;s Core Values,
                                    including Gracious Professionalism and Coopertition.
                                </li>
                                <li>
                                    <strong>Attribution:</strong> We credit event organizers, sponsors, and
                                    volunteers in our broadcasts and related content.
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Broadcasting Guidelines</h3>
                        <p>
                            Our live streams and recordings adhere to the following standards:
                        </p>
                        <ul className="space-y-2">
                            <li>High-quality, professional production standards</li>
                            <li>Accurate commentary and information</li>
                            <li>Respect for all teams, referees, and volunteers</li>
                            <li>Clear distinction between official event content and CycleZLab commentary</li>
                            <li>Prompt removal of content if requested by organizers or participants</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8">Conflict Resolution</h3>
                        <p>
                            If you have concerns about our coverage of an event or believe we have not
                            followed proper procedures, please contact us immediately at{' '}
                            <a href="mailto:events@cyclezlab.org" className="text-blue-600 hover:text-blue-700">
                                events@cyclezlab.org
                            </a>
                            . We are committed to addressing issues promptly and professionally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <FileText className="text-blue-600" size={32} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Questions About Our Policies?
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            If you have questions, concerns, or feedback about any of our policies,
                            we&apos;re here to help. Transparency and accountability are core to our mission.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">General Inquiries</h3>
                                <a
                                    href="mailto:contact@cyclezlab.org"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    contact@cyclezlab.org
                                </a>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Privacy Concerns</h3>
                                <a
                                    href="mailto:privacy@cyclezlab.org"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    privacy@cyclezlab.org
                                </a>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Event-Related</h3>
                                <a
                                    href="mailto:events@cyclezlab.org"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    events@cyclezlab.org
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-600 mt-8">
                        Last updated: October 10, 2025
                    </p>
                </div>
            </section>
        </div>
    );
}
