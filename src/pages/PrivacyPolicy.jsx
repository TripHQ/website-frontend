import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy-page">
            <Header />
            <main className="privacy-content-container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Waynix</p>

                <section>
                    <h2>Introduction</h2>
                    <p>
                        Waynix (“we”, “our”, “us”) operates the Waynix mobile application and website. This Privacy Policy explains how we collect, use, and protect information when users use our app and website.
                    </p>
                </section>

                <section>
                    <h2>Information We Collect</h2>
                    <h3>1. Information you provide:</h3>
                    <ul>
                        <li>Name (if applicable)</li>
                        <li>Email address (if applicable)</li>
                        <li>Account details (if applicable)</li>
                        <li>Travel preferences, saved trips, and plans</li>
                        <li>Any information users voluntarily submit within the app</li>
                    </ul>

                    <h3>2. Information collected automatically:</h3>
                    <ul>
                        <li>Device type and operating system</li>
                        <li>App usage data and interactions</li>
                        <li>Approximate location (only if permission is granted)</li>
                        <li>Performance and crash diagnostics</li>
                        <li>Analytics data</li>
                    </ul>
                </section>

                <section>
                    <h2>How We Use Information</h2>
                    <ul>
                        <li>To provide and improve personalized travel recommendations</li>
                        <li>To generate itineraries and day plans</li>
                        <li>To improve product experience and performance</li>
                        <li>To provide customer support</li>
                        <li>To maintain security and prevent misuse</li>
                    </ul>
                </section>

                <section>
                    <h2>Data Sharing</h2>
                    <p>We do not sell personal data.</p>
                    <p>We may share limited data with trusted third-party service providers for:</p>
                    <ul>
                        <li>Hosting and infrastructure</li>
                        <li>Analytics and performance monitoring</li>
                        <li>Crash reporting</li>
                    </ul>
                    <p>All third parties are required to follow strict data protection standards.</p>
                </section>

                <section>
                    <h2>Data Storage and Security</h2>
                    <p>
                        We use industry-standard security measures to protect user data, including encryption and access controls.
                        Data is stored on secure servers operated by our infrastructure providers.
                    </p>
                </section>

                <section>
                    <h2>User Rights</h2>
                    <p>Users have the right to:</p>
                    <ul>
                        <li>Access their personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of their data</li>
                        <li>Withdraw consent where applicable</li>
                    </ul>
                </section>

                <section>
                    <h2>Account Deletion</h2>
                    <p>
                        Users can delete their Waynix account directly within the mobile app.
                        Once deletion is initiated, personal data is permanently removed within 30 days.
                    </p>
                </section>

                <section>
                    <h2>Children’s Privacy</h2>
                    <p>
                        Waynix is not intended for children under the age of 13.
                        We do not knowingly collect personal data from children.
                    </p>
                </section>

                <section>
                    <h2>Policy Updates</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be reflected on this page.
                    </p>
                </section>

                <section>
                    <h2>Contact</h2>
                    <p>
                        For privacy-related questions, contact us at:<br />
                        <a href="mailto:team@waynix.ai">team@waynix.ai</a>
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
