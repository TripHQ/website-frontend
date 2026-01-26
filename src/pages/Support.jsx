import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './Support.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
};

const Support = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    const faqCategories = [
        {
            category: "Account & Login",
            items: [
                { q: "How do I create an account?", a: "You can create an account by downloading the Waynix app and signing up using your email or social login options." },
                { q: "How do I delete my account?", a: "You can delete your account directly within the Waynix app settings. Navigate to Profile > Settings > Delete Account." }
            ]
        },
        {
            category: "Trip Planning",
            items: [
                { q: "How does Waynix generate recommendations?", a: "Waynix uses advanced AI algorithms to analyze your preferences, past trips, and trending travel data to suggest personalized itineraries." },
                { q: "How do I plan my day using Waynix?", a: "Once your trip is generated, you can view your day-by-day itinerary in the 'My Trips' section and customize it as needed." }
            ]
        },
        {
            category: "Recommendations",
            items: [
                { q: "Why are recommendations different for each user?", a: "Our AI tailors recommendations based on individual user profiles, ensuring that every trip plan is unique to your specific tastes and interests." }
            ]
        },
        {
            category: "Privacy & Data",
            items: [
                { q: "What data does Waynix collect?", a: "We collect data necessary to provide our services, such as your travel preferences and account information. Please refer to our Privacy Policy for more details." },
                { q: "How can I request data deletion?", a: "You can request data deletion by deleting your account in the app or by contacting our support team if you need assistance." }
            ]
        },
        {
            category: "Technical Issues",
            items: [
                { q: "What should I do if the app crashes?", a: "Please ensure you have the latest version of the app installed. If the issue persists, try restarting the app or your device." },
                { q: "How do I report a bug?", a: "You can report bugs using the contact form on this page or by emailing team@waynix.ai." }
            ]
        }
    ];

    return (
        <div className="support-page">
            <Header />
            <main className="support-content">
                <div className="support-header">
                    <h1>Support</h1>
                    <p className="support-intro">We’re here to help you plan better trips and make the most of Waynix.</p>
                </div>

                <div className="support-grid">
                    <section className="contact-section">
                        <h2>Contact Us</h2>
                        <p className="contact-info">
                            Have a question or need assistance? <br />
                            Email us at <a href="mailto:team@waynix.ai">team@waynix.ai</a> or use the form below.
                        </p>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="How can we help?"
                                    rows="5"
                                ></textarea>
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>

                        <div className="response-time">
                            <p><strong>Response Time:</strong> We aim to respond to all support requests within 2-4 business days.</p>
                        </div>
                    </section>

                    <section className="faq-section">
                        <h2>Frequently Asked Questions</h2>

                        {faqCategories.map((category, idx) => (
                            <div key={idx} className="faq-category">
                                <h4>{category.category}</h4>
                                {category.items.map((item, index) => (
                                    <FAQItem key={index} question={item.q} answer={item.a} />
                                ))}
                            </div>
                        ))}

                        <div className="account-deletion-info">
                            <h3>Account Deletion Support</h3>
                            <p>
                                Users can delete their account directly within the Waynix app.
                                if assistance is needed, users can contact support using the form above.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Support;
