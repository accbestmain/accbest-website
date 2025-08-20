import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxretad", // EmailJS service ID
        "template_2v6k1ux", // EmailJS template ID
        formRef.current, // form element
        "u8H_C-9jo2ECb9_Up" // EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send. Please use the email link below.");
      });
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo + Name + Slogan */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="AccBest Services Logo"
              className="h-10 md:h-16 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-blue-900">
                AccBest Services
              </span>
              <span className="text-sm text-gray-500">
                We serve you at our best
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow p-4 space-y-2 text-gray-700">
            <a href="#home" className="block">
              Home
            </a>
            <a href="#about" className="block">
              About
            </a>
            <a href="#services" className="block">
              Services
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Professional Accounting, Secretarial & Tax Services
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          We help Singapore businesses stay compliant and grow with confidence.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-28 bg-gray-50 px-6 text-center scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          AccBest Services provides reliable, professional, and affordable
          corporate services including accounting, corporate secretarial, and
          taxation. We pride ourselves on accuracy and personalised service to
          help your business succeed.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-32 px-6 text-center bg-white scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop triangle layout */}
          <div className="hidden md:grid grid-cols-2 gap-16 items-center">
            {/* Top Center - Accounting */}
            <div className="md:col-span-2 flex justify-center relative z-10 mb-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition w-64 text-center">
                <h3 className="text-xl font-semibold mb-2">Accounting</h3>
                <p className="text-gray-600">
                  Timely and accurate financial statements for informed
                  decisions.
                </p>
              </div>
            </div>
            {/* Bottom Left - Corporate Secretarial */}
            <div className="flex justify-end relative z-10 pr-16">
              <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition w-64 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Corporate Secretarial
                </h3>
                <p className="text-gray-600">
                  Ensure compliance with ACRA regulations and statutory
                  requirements.
                </p>
              </div>
            </div>
            {/* Bottom Right - Taxation */}
            <div className="flex justify-start relative z-10 pl-16">
              <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition w-64 text-center">
                <h3 className="text-xl font-semibold mb-2">Taxation</h3>
                <p className="text-gray-600">
                  Corporate & personal tax filing, GST, and strategic tax
                  planning.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile vertical stack */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition text-center">
              <h3 className="text-xl font-semibold mb-2">Accounting</h3>
              <p className="text-gray-600">
                Timely and accurate financial statements for informed decisions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition text-center">
              <h3 className="text-xl font-semibold mb-2">
                Corporate Secretarial
              </h3>
              <p className="text-gray-600">
                Ensure compliance with ACRA regulations and statutory
                requirements.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition text-center">
              <h3 className="text-xl font-semibold mb-2">Taxation</h3>
              <p className="text-gray-600">
                Corporate & personal tax filing, GST, and strategic tax
                planning.
              </p>
            </div>
          </div>

          {/* Connector Lines (desktop only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="50%" y1="20%" x2="50%" y2="55%" stroke="gray" strokeWidth="2" />
            <line x1="50%" y1="55%" x2="30%" y2="85%" stroke="gray" strokeWidth="2" />
            <line x1="50%" y1="55%" x2="70%" y2="85%" stroke="gray" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-50 text-center scroll-mt-[50px] pb-16"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-md mx-auto bg-white shadow rounded-lg p-6 space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-700">
          <p>Or reach us directly:</p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:accbest.main@gmail.com"
              className="text-blue-600 hover:underline"
            >
              accbest.main@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-white text-center border-t">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Trusted by Businesses in Singapore
        </h2>

        {/* Desktop: inline list */}
        <div className="hidden md:flex justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-green-600">✅</span>
            <span>ACRA Registered</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-green-600">✅</span>
            <span>Experienced Professionals</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-green-600">✅</span>
            <span>Affordable & Transparent Pricing</span>
          </div>
        </div>

        {/* Mobile: stacked neatly */}
        <div className="flex flex-col items-center space-y-4 text-sm md:hidden">
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-green-600 text-lg">✅</span>
            <span className="mt-1">ACRA Registered</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-green-600 text-lg">✅</span>
            <span className="mt-1">Experienced Professionals</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-green-600 text-lg">✅</span>
            <span className="mt-1">Affordable & Transparent Pricing</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-300 text-center">
        <p>
          © {new Date().getFullYear()} AccBest Services Pte. Ltd. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
