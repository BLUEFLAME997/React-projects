import React from 'react';
import Navbar from './components/Navbar'
import illustration1 from './assets/illustration-intro.png';
import illustration2 from './assets/illustration-stay-productive.png';
import img1 from './assets/icon-access-anywhere.svg';
import img2 from './assets/icon-security.svg';
import img3 from './assets/icon-collaboration.svg';
import img4 from './assets/icon-any-file.svg';
import Features_element from './components/Features_element';
import arrow from './assets/icon-arrow.svg';
import profile1 from './assets/profile-1.jpg';
import profile2 from './assets/profile-2.jpg';
import profile3 from './assets/profile-3.jpg';
import Review from './components/Review';
import bgQuote from './assets/bg-quotes.png';
import logoImage from './assets/logo.svg';
import location from './assets/icon-location.svg';
import phone from './assets/icon-phone.svg';
import email from './assets/icon-email.svg';
import Footer_contents from './components/Footer_contents';
import bgCurvyMobile from './assets/bg-curvy-mobile.svg';

const App = () => {
  const features = [
    {
      image: img1,
      header: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      image: img2,
      header: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      image: img3,
      header: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      image: img4,
      header: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ];

  const testimonials = [
    {
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImage: profile1,
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
    },
    {
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImage: profile2,
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
    },
    {
      review:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImage: profile3,
      name: "Iva Boyd",
      role: "Founder & CEO, Huddle",
    },
  ];

  const FooterValue1 = ["About Us", "Jobs", "Press", "Blog"];
  const FooterValue2 = ["Contact Us", "Terms", "Privacy"];

  return (
    <div className='app'>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="content-image">
          <img src={illustration1} alt="" />
        </div>
        <div className="top-text-content">
          <h1>All your files in one secure location, accessible anywhere</h1>
          <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          <button>Get Started</button>
        </div>
        <div className="features-elements">
          {features.map((elem, indx) => {
            return <Features_element key={indx} data={elem} />
          })}
        </div>
        <div className="content-image2">
          <div className="content-image2-img">
            <img src={illustration2} alt="" />
          </div>
          <div className="content-image2-contents">
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <a href="#">See how Fylo works <img src={arrow} alt="" /></a>
          </div>
        </div>
        <div className="review-section">
          <div className="quote-image">
            <img src={bgQuote} alt="reload" />
          </div>
          {testimonials.map((elem, idx) => {
            return <Review key={idx} obj={elem} />
          })}
        </div>
      </main>
      <footer>
        <div className="access-card">
          <h1>Get early access today</h1>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          <div className="access-card-buttons">
            <input type="email" placeholder='email@example.com' />
            <button>Get started for fee</button>
          </div>
        </div>
        <div className="footer-contents-section">
          <div className="footer-image">
            <img src={logoImage} alt="" />
          </div>
          <div className="footer-contents">
            <div className="footer-upper-content">
              <div className="location">
                <div className="location-icon">
                  <img src={location} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veritatis aperiam sit asperiores ad animi modi dolorum? Expedita, est illo.</p>
              </div>
              <div className="contact">
                <div className="phone">
                  <div className="phone-image">
                    <img src={phone} alt="" />
                  </div>
                  <p>+1-543-123-4567</p>
                </div>
                <div className="email">
                  <div className="email-image">
                    <img src={email} alt="" />
                  </div>
                  <p>example@fylo.com</p>
                </div>
              </div>
            </div>
            <div className="links-container">
              <div className="links1">
                {FooterValue1.map((elem, idx) => {
                  return <Footer_contents key={idx} value={elem} />
                })}
              </div>
              <div className="links2">
                {FooterValue2.map((elem, idx) => {
                  return <Footer_contents key={idx} value={elem} />
                })}
              </div>
            </div>
            <div className="icons-container">
              <i className="ri-facebook-circle-line"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-instagram-line"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
