import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DATA } from '../../constants';
import {
  ShieldAlert,
  Cloud,
  CodeXml,
  Activity,
  Monitor,
  Users,
  Building2,
  Presentation,
  Video,
  Home,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Calendar,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import GoogleMap from '../GoogleMap';
import logo from '../../assets/logo.png';
import heroVideo from '../../assets/hero-video.mp4';
import aboutUsImage from '../../assets/about-us.jpg';

const iconMap: Record<string, any> = {
  Cloud,
  ShieldAlert,
  CodeXml,
  Activity
};

// Mocking additional services to match the corporate image look
const CORPORATE_SERVICES = [
  { 
    title: "Executive Meeting Room", 
    desc: "High-end boardroom systems with seamless integration for flawless communication.", 
    longDescription: "Our Executive Meeting Room solutions are the pinnacle of corporate communication technology. We integrate high-definition 4K displays, crystal-clear audio conferencing, and intuitive touch-panel controls into a seamless ecosystem. Each system is custom-engineered to ensure absolute reliability during critical board meetings, with features like automated lighting, shade control, and high-security wireless presentation systems.",
    icon: Users 
  },
  { 
    title: "S-M Meeting Room", 
    desc: "Scalable AV solutions for huddle spaces and medium-sized collaboration zones.", 
    longDescription: "Designed for agility, our Small to Medium Meeting Room solutions bring professional-grade collaboration to any space. We focus on 'plug-and-play' simplicity, allowing teams to start meetings instantly with their preferred platforms like Zoom, Teams, or Webex. Our systems include intelligent camera tracking and beamforming microphones to ensure every participant is seen and heard clearly.",
    icon: Users 
  },
  { 
    title: "Auditorium", 
    desc: "Professional audio systems and large-format displays for impactful presentations.", 
    longDescription: "For large-scale venues, we deliver powerful AV infrastructures that command attention. Our auditorium solutions include cinema-grade projection or large LED walls, sophisticated line-array audio systems for uniform sound distribution, and professional lighting control. We also provide integrated streaming and recording capabilities for hybrid events and town hall meetings.",
    icon: Building2 
  },
  { 
    title: "Command Center", 
    desc: "Mission-critical visualization and control systems for 24/7 operations monitoring.", 
    longDescription: "Adamas Tekno specializes in mission-critical Command and Control Centers (NOC/SOC). Our solutions feature high-availability video walls with multi-window processing, allowing operators to visualize complex data streams simultaneously. We prioritize ergonomic design and 24/7 reliability, ensuring that your monitoring team has the tools they need for rapid decision-making in high-pressure environments.",
    icon: Monitor 
  },
  { 
    title: "Hybrid Classroom", 
    desc: "Bridging the gap between physical and remote learning with interactive tech.", 
    longDescription: "Our Hybrid Classroom solutions are transforming the educational experience. We combine interactive flat panels with AI-driven cameras that follow the instructor, creating an immersive environment for both in-person and remote students. Integrated lecture capture systems allow for easy content review, while professional audio ensures that remote learners feel just as connected as those in the room.",
    icon: Presentation 
  },
  { 
    title: "Indoor/Outdoor LED", 
    desc: "Vibrant high-resolution LED walls for dynamic digital signage and branding.", 
    longDescription: "We provide state-of-the-art LED display solutions for both indoor branding and outdoor advertising. Our high-refresh-rate panels offer stunning clarity even in direct sunlight. From curved lobby displays that create a 'wow' factor to massive outdoor billboards, we handle the entire project from structural engineering and panel installation to content management system setup.",
    icon: Monitor 
  },
  { title: "CCTV", desc: "Advanced surveillance and security network systems for total infrastructure protection.", icon: Video },
  { title: "Home Theater", desc: "Immersive cinematic experiences for luxury residential properties.", icon: Home },
];

export default function CorporateTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<any>(null);

  return (
    <div className="font-sans text-slate-300 bg-transparent selection:bg-blue-900 selection:text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Adamas Tekno Prosolusi" className="h-14 w-auto object-contain brightness-0 invert" />
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#news" className="hover:text-white transition-colors">News</a>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-900 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-blue-800 transition-all shadow-md shadow-blue-900/10"
          >
            Get a Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-50"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 inline-block px-4 py-1.5 rounded bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-xs font-bold uppercase tracking-widest"
          >
            Excellence in AV & IT
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-3xl"
          >
            Engineering Future-Proof <br />
            Corporate Ecosystems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-50/80 max-w-2xl mb-12"
          >
            Specializing in high-end Executive Meeting Rooms and mission-critical Command Centers with absolute reliability.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions" className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 text-center">
              Explore Solutions
            </a>
            <a href="#projects" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-bold hover:bg-white/20 transition-all text-center">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
            Our Specialized Solutions
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-600" />
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            We deliver integrated technology infrastructures tailored to the specific needs of modern corporate, education, and public sectors.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORPORATE_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/50 backdrop-blur-sm transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div 
                  onClick={() => setSelectedDetail(service)}
                  className="flex items-center text-blue-400 font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform"
                >
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="bg-blue-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl shadow-blue-900/20">
                <img src={aboutUsImage} className="absolute inset-0 opacity-40 object-cover w-full h-full mix-blend-overlay" alt="Boardroom" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="relative z-10">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block mb-6">About Adamas Tekno</span>
                  <h2 className="text-4xl font-bold text-white mb-8 leading-tight">Leading with Integrity, Delivering with Precision</h2>
                  <p className="text-blue-100/70 mb-10 leading-relaxed text-lg">
                    {COMPANY_DATA.about}
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      { title: "Trustworthy", desc: "Consistent delivery that exceeds technical requirements and client expectations." },
                      { title: "Integrity", desc: "Honesty in our engineering approach and transparency in our business relations." },
                      { title: "Committed", desc: "Dedicated to long-term success and continuous support for all our installations." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1"><CheckCircle2 className="text-blue-400" size={20} /></div>
                        <div>
                          <h4 className="font-bold text-white text-sm uppercase tracking-wide">{item.title}</h4>
                          <p className="text-blue-100/50 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedDetail((COMPANY_DATA as any).story)}
                    className="bg-white text-blue-900 px-8 py-3.5 rounded font-bold hover:bg-blue-50 transition-all"
                  >
                    Read Our Story
                  </button>
                </div>
                <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-blue-200 mt-1">Years of Integrity</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-8">Our Strategic Mission</h2>
              <p className="text-slate-300 mb-12 leading-relaxed">
                {COMPANY_DATA.mission}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Globe size={18} /> Vision
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{COMPANY_DATA.vision}</p>
                </div>
                <div className="p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <MapPin size={18} /> Location
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{COMPANY_DATA.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gradient-to-tr from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
              <p className="text-slate-400">See how we transform spaces through technology.</p>
            </div>
            <a href="#" className="flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-sm">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_DATA.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-3xl overflow-hidden"
              >
                <img src={project.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setSelectedDetail(project)}
                    className="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    Read More <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Latest News & Insights</h2>
              <p className="text-slate-400">Stay updated with our latest projects and industry thoughts.</p>
            </div>
            <button className="hidden md:flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-sm">
              Read All Articles <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {(COMPANY_DATA as any).news.map((item: any, i: number) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <div 
                  onClick={() => setSelectedDetail(item)}
                  className="mt-auto flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  Read More <ArrowRight size={14} className="ml-2" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-900 fill-current">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-slate-300 mb-12 text-lg">
            Connect with our consultants to design a tailored solution that aligns with your organization's vision.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-12 py-5 rounded font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-slate-400 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <img src={logo} alt="Adamas Tekno Logo" className="h-16 w-auto object-contain mb-8 brightness-0 invert" />
            <p className="text-sm leading-relaxed mb-8">
              Empowering business growth through integrated technical excellence.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-900 hover:border-blue-900 transition-all cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-900 hover:border-blue-900 transition-all cursor-pointer">
                <Users size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Latest Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News & Insights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-blue-500"><MapPin size={20} /></div>
                <div className="text-sm">
                  {COMPANY_DATA.address}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500"><Phone size={20} /></div>
                <div className="text-sm">+6281210000820</div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500"><Mail size={20} /></div>
                <div className="text-sm">info@adamastechno.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
          <span>&copy; 2024 PT Adamas Tekno Prosolusi. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/id.svg" className="w-5" alt="Indonesia" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Left Side: Info */}
              <div className="lg:w-2/5 bg-slate-800/50 p-8 lg:p-12 text-white flex flex-col justify-between border-r border-white/5">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Start Schedule</h2>
                  <p className="text-blue-100/70 mb-12">
                    Our professional and friendly customer officers are ready to help you.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-blue-400 text-xs uppercase tracking-widest mb-2">Company</h4>
                      <p className="text-lg font-semibold">{COMPANY_DATA.name}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-400 text-xs uppercase tracking-widest mb-2">Address</h4>
                      <p className="text-sm text-blue-100/80 leading-relaxed">{COMPANY_DATA.address}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-400 text-xs uppercase tracking-widest mb-2">Contact</h4>
                      <p className="text-sm text-blue-100/80 leading-relaxed">
                        Phone: +6281210000820<br />
                        Email: info@adamastechno.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all"><Instagram size={20} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all"><Facebook size={20} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all"><Linkedin size={20} /></a>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-white" placeholder="" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-white" placeholder="" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-white" placeholder="" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-white" placeholder="" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm resize-none text-white" placeholder=""></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 mt-4">
                    Send Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDetail(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedDetail(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto max-h-[85vh]">
                {selectedDetail.image && (
                  <div className="h-64 sm:h-80 relative">
                    <img src={selectedDetail.image} className="w-full h-full object-cover" alt={selectedDetail.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                )}
                
                <div className={`p-8 sm:p-12 ${!selectedDetail.image ? 'pt-16' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    {selectedDetail.category && (
                      <span className="px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                        {selectedDetail.category}
                      </span>
                    )}
                    {selectedDetail.date && (
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <Calendar size={12} />
                        {selectedDetail.date}
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
                    {selectedDetail.title}
                  </h2>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-300 leading-relaxed mb-8 font-medium">
                      {selectedDetail.description || selectedDetail.excerpt || selectedDetail.desc}
                    </p>
                    <div className="h-px bg-white/10 w-full mb-8" />
                    <p className="text-slate-400 leading-relaxed text-base whitespace-pre-line">
                      {selectedDetail.longDescription}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-4">
                    <button 
                      onClick={() => {
                        setSelectedDetail(null);
                        setIsModalOpen(true);
                      }}
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                    >
                      Inquire About This
                    </button>
                    <button 
                      onClick={() => setSelectedDetail(null)}
                      className="px-8 py-4 rounded-xl font-bold border border-white/20 text-slate-300 hover:bg-white/10 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
