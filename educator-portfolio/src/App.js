import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Code, Mail, User, Briefcase, PenTool, Github, Linkedin, Twitter } from 'lucide-react';
import profilePic from "./assets/profile.jpg";
import otherPic0 from "./assets/blur0.jpg";
import otherPic1 from "./assets/blur1.jpg";
import otherPic2 from "./assets/blur2.jpg";
import otherPic4 from "./assets/blur4.jpg";
import gavlpic from "./assets/gavl.jpg";
import bookDesignPic from "./assets/bookdesign.jpg";

export default function EducatorPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  const aboutImages = [
  profilePic,           // your existing import
  otherPic0, otherPic1, otherPic2, otherPic4,         // import these like profilePic
];

const [currentIndex, setCurrentIndex] = useState(0);
const intervalMs = 3000; // 3 seconds, change if you want

useEffect(() => {
  const id = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  }, intervalMs);

  return () => clearInterval(id); // cleanup on unmount or when dependencies change
}, [aboutImages.length, intervalMs]);


const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
};

const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? aboutImages.length - 1 : prev - 1
  );
};

  const apps = [
    {
      title: "Developed GAVL platform",
      description: "Gavl is a web platform that streamlines judge evaluations for green tech startups (used by Innovation 4 Nature I4N, summer of 2024), connecting remote panelists to score contestants efficiently using predefined criteria.",
      image: gavlpic,
      tags: ["React", "Education", "SaaS"],
      videoUrl: "https://drive.google.com/file/d/1eWOyRpU1nIq5SEC8yXpGfqpRDd1j4dj-/view?usp=sharing",

    },
    {
      title: "Kid Finance Club",
      description: "Literacy tool that helps students improve and understand how to manage finances through a digital classroom bank account.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
      tags: ["Django", "Literacy", "Finance"]
    },
    {
      title: "Project-Based Learning",
      description: "Students design and publish a book using Canva, blending art with STEM concepts for engaging, hands-on digital and physical creation—perfect for inspiring creativity and tech skills in your classroom.",
      image: bookDesignPic,
      tags: ["Canva", "STEAM", "Art"]
    }
  ];

  const blogPosts = [
    {
      title: "Why I Started Building Educational Apps",
      date: "Dec 15, 2024",
      excerpt: "After 10 years in the classroom, I realized technology could help me reach more students...",
      readTime: "5 min read"
    },
    {
      title: "5 Principles for Effective EdTech",
      date: "Dec 8, 2024",
      excerpt: "What I've learned about creating educational technology that actually helps students learn...",
      readTime: "7 min read"
    },
    {
      title: "From Teacher to Developer: My Journey",
      date: "Nov 30, 2024",
      excerpt: "How I learned to code while teaching full-time and built my first educational app...",
      readTime: "6 min read"
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Maestre Digital</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'services', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'portfolio', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Education
            <span className="block text-blue-600 mt-2">Through Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Teacher, developer, and educational innovator creating tools that make learning engaging and accessible for every student. 
            <br></br>
            Providing practical solutions to real classroom challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <User className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">About</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
  {/* Image Carousel */}
    <div className="relative">
  <img
    src={aboutImages[currentIndex]}
    alt="Profile"
    className="rounded-sm shadow-lg w-full h-80 object-cover mx-auto"
  />

  {/* Prev button */}
  <button
    onClick={prevImage}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full px-3 py-1 text-sm shadow"
  >
    ‹
  </button>

  {/* Next button */}
  <button
    onClick={nextImage}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full px-3 py-1 text-sm shadow"
  >
    ›
  </button>

  {/* Dots */}
  <div className="flex justify-center mt-3 space-x-2">
    {aboutImages.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentIndex(i)}
        className={`h-2 w-2 rounded-full ${
          i === currentIndex ? "bg-blue-600" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>

            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 10 years of classroom experience, I've witnessed firsthand the transformative power of technology in education. My journey from traditional teaching to educational app development has been driven by one goal: making learning more engaging and effective for all students.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I combine my deep understanding of pedagogy with modern web development skills to create educational tools that truly serve students' needs. Every app I build is informed by real classroom experience and feedback from educators and learners.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">10+ Years Teaching Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Educational Technology Consultant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">My Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={app.image} alt={app.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                        {tag}
                      </span>
                    ))}
                  </div>
                   {/* ADD THIS BUTTON HERE */}
            <a 
              href={app.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mb-2"
            >
              View Demo →
            </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Practical educational technology solutions from a teacher who codes. 
              I build tools that actually work in real classrooms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Classroom Apps SOLD OUT</h3>
              <p className="text-gray-600 mb-4">
                Tailored web applications for your specific classroom needs—digital banks, scoring systems, project trackers, and more.
              </p>
              <p className="text-sm text-gray-500 mb-4">Perfect for: Teachers, small schools, education programs</p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-blue-600">From CHF 800</p>
                <p className="text-sm text-gray-500">Starting price per app</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">EdTech Consulting</h3>
              <p className="text-gray-600 mb-4">
                Classroom technology audits, tool recommendations, and implementation support. From Canva workflows to custom React dashboards.
              </p>
              <p className="text-sm text-gray-500 mb-4">Perfect for: School districts, edtech startups, institutions</p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-purple-600">CHF 100/hour</p>
                <p className="text-sm text-gray-500">or CHF 800/day</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Project-Based Learning Workshops</h3>
              <p className="text-gray-600 mb-4">
                1-3 day intensive training teaching educators to run STEAM projects with digital tools and modern workflows.
              </p>
              <p className="text-sm text-gray-500 mb-4">Perfect for: Primary schools, teacher training programs</p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-green-600">From CHF 1,500</p>
                <p className="text-sm text-gray-500">Per workshop (groups of 10-20)</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Literacy Programs SOLD OUT</h3>
              <p className="text-gray-600 mb-4">
                Complete financial literacy curriculum with classroom banking apps and interactive games—Kid Finance Club style.
              </p>
              <p className="text-sm text-gray-500 mb-4">Perfect for: Schools wanting financial education programs</p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-yellow-600">CHF 2,000</p>
                <p className="text-sm text-gray-500">Per school year + ongoing support</p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Teacher Tech Consultation</h3>
              <p className="text-gray-600 mb-4">
                "Code While Teaching" courses—learn basic tech skills to build your own classroom tech tools while maintaining your teaching schedule.
              </p>
              <p className="text-sm text-gray-500 mb-4">Perfect for: Teachers wanting to boost their tech skills</p>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-red-600">CHF 50</p>
                <p className="text-sm text-gray-500">One hour tech consultation</p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Not Sure Which Service?</h3>
              <p className="mb-6">
                Book a free 15-minute consultation to discuss your classroom technology needs and find the perfect solution.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation →
              </button>
            </div>
          </div>

          {/* Why Work With Me Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Work With Me?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Real Teacher Experience</h4>
                <p className="text-gray-600">10+ years in the classroom means I understand the challenges you face daily.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Technical Expertise</h4>
                <p className="text-gray-600">Full-stack developer building production-ready apps, not just prototypes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Practical Solutions</h4>
                <p className="text-gray-600">Tools designed for real classrooms, tested with actual students and teachers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <PenTool className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Latest Posts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-blue-600 mb-2">{post.date} • {post.readTime}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Mail className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-center text-gray-600 mb-8">
              Interested in collaborating or have questions about my work? I'd love to hear from you!
            </p>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              ></textarea>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Contact form submitted! In production, this would send an email.');
                }}
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-6 h-6" />
                <span className="text-lg font-bold">Maestre Digital</span>
              </div>
              <p className="text-gray-400">Transforming education through technology</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 MaestreDigital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}