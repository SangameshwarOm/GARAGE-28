import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard from '../asserts/dashboard.jpg';
import speedometer from '../asserts/speedometer.jpg';
import bexz from '../asserts/bexz.jpg';
import "../Header.css/Home.css";

export default function SectionContent() {
    const { theme } = useContext(ThemeContext);

    const sectionStyle = {
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
        color: 'lightgreen',
        minHeight: '100vh',
        textAlign: 'center'
    };

    const formStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        color: 'lightgreen' // Ensure form text color is also light green
    };

    const contactStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'lightgreen' // Ensure contact text color is also light green
    };

    return (
        <div className="container">
            <div>
                <section id="home" className="mb-5" style={sectionStyle}>
                    <h2 style={{ color: 'lightgreen' }}>Home</h2>
                    <p>WELCOME TO GARAGE 28</p>
                    <hr />
                    <img src={dashboard} alt='' className='header-image'/>
                    <p>We are the top leading self driver luxury cars provider in the city</p>
                    <p>All kinds of cars at affordable prices & best service</p>
                    <p>All cars are in the best condition & well maintained</p>
                </section>
            </div>
            <section id="about" className="mb-5" style={sectionStyle}>
                <h2 style={{ color: 'lightgreen' }}>About</h2>
                <p>About GARAGE 28.</p>
                <hr />
                <img src={speedometer} alt='' className='header-image'/>
                <p>Multibranded car provider and service</p>
                <p>People who are under Government approved criteria are welcomed.</p>
                <p>Car Buying & Selling consultancy</p>
                <p>Terms and Conditions: <a href="https://termly.io/resources/templates/terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">T & C</a></p>
            </section>
            <section id="contact" className="mb-5" style={sectionStyle}>
                <img src={bexz} alt='' className='header-image'/>
                <hr />
                <h2 style={{ color: 'lightgreen' }}>Contact</h2>
                <div style={contactStyle}>
                    <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    <p><strong>Twitter:</strong> <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter Profile</a></p>
                    <p><strong>Facebook:</strong> <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook Profile</a></p>
                </div>
            </section>
            <section id="login" className="mb-5" style={sectionStyle}>
                <h2 style={{ color: 'lightgreen' }}>Login</h2>
                <form style={formStyle}>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="loginPassword" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <hr />
                <div style={{ marginTop: '20px', color: 'lightgreen' }}>
                    <h4>Our History</h4>
                    <p>GARAGE 28 was founded in 1995 with a mission to provide luxury car rental services to discerning clients. Over the years, we have expanded our fleet to include a wide range of high-end vehicles, ensuring that our customers have access to the best cars in the market. Our commitment to quality and customer satisfaction has made us the leading self-drive luxury car provider in the city.</p>
                </div>
                <hr></hr>
                <div style={{ marginTop: '20px', color: 'lightgreen' }}>
                    <h4>Our Branches</h4>
                    <p>We have multiple branches across the GLOBE to serve you better. Here are some of our locations:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>New York City, NY</li>
                        <li>Los Angeles, CA</li>
                        <li>Chicago, IL</li>
                        <li>Houston, TX</li>
                        <li>Miami, FL</li>
                    </ul>
                </div>
            </section>
            <section id="register" className="mb-5" style={sectionStyle}>
                <h2 style={{ color: 'lightgreen' }}>Register</h2>
                <form style={formStyle}>
                    <div className="mb-3">
                        <label htmlFor="registerName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="registerName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="registerEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="registerEmail" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="registerPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="registerPassword" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <hr />
                <div style={{ marginTop: '20px', color: 'lightgreen' }}>
                    <h4>OUR ACHIEVEMENTS</h4>
                    <p>Since our inception, we have achieved numerous milestones, including:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>Over 10,000 satisfied customers</li>
                        <li>Fleet expansion to over 200 luxury vehicles</li>
                        <li>Established partnerships with top car manufacturers</li>
                        <li>Awarded 'Best Luxury Car Rental Service' for three consecutive years</li>
                    </ul>
                </div>
                <hr />
                <div style={{ marginTop: '20px', color: 'lightgreen' }}>
                    <h4>Rate Us</h4>
                    <form style={formStyle}>
                        <div className="mb-3">
                            <label htmlFor="rateUs" className="form-label">Your Rating (1-5)</label>
                            <select className="form-control" id="rateUs" required>
                                <option value="">Select rating</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rateUsComments" className="form-label">Comments</label>
                            <textarea className="form-control" id="rateUsComments" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Rating</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
