import { motion } from "motion/react";
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  PenTool, 
  LineChart, 
  FileText,
  ChevronRight,
  Github
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/nasimkamali", icon: <Linkedin size={20} /> },
    { platform: "YouTube", url: "https://youtube.com/@developerssquad532", icon: <Youtube size={20} /> },
    { platform: "Business Instagram", url: "https://www.instagram.com/developerssquad", icon: <Instagram size={20} /> },
    { platform: "Business Facebook", url: "https://www.facebook.com/share/1CCSfPUhfR/", icon: <Facebook size={20} /> },
    { platform: "Personal Instagram", url: "https://www.instagram.com/nasimkamali532", icon: <Instagram size={18} className="opacity-70" /> },
  ];

  const skills = [
    { name: "Web Development", percentage: 81, icon: <Code2 /> },
    { name: "Photoshop", percentage: 95, icon: <PenTool /> },
    { name: "Illustrator", percentage: 70, icon: <PenTool /> },
    { name: "MS Excel/Word", percentage: 91, icon: <LineChart /> },
    { name: "AutoCAD", percentage: 86, icon: <Briefcase /> },
    { name: "Python", percentage: 74, icon: <Code2 /> },
    { name: "PHP/CSS/MySQL", percentage: 61, icon: <Code2 /> },
    { name: "ArchiCAD", percentage: 72, icon: <Briefcase /> },
  ];

  const education = [
    {
      degree: "M.Sc. in Engineering Geology",
      institution: "University of Portsmouth, UK",
      year: "2021 - 2022",
      details: ["Award: Level 7", "Thesis: Rainfall patterns and groundwater level fluctuations in NW Bangladesh"]
    },
    {
      degree: "B.Sc. in Civil Engineering",
      institution: "Leading University, Sylhet, Bangladesh",
      year: "2017 - 2020",
      details: ["Focus: Structural design and climate Alteration analysis"]
    }
  ];

  const fieldwork = [
    {
      title: "Ground Model & Investigation Design",
      location: "Collier's Knap, UK",
      description: "Broadway, Worcestershire"
    },
    {
      title: "Stratigraphy & Lithology Mapping",
      location: "Isle of Wight, UK",
      description: "Whitecliff Bay field research"
    },
    {
      title: "Rock Tunnel & Slope Assessment",
      location: "Castellane, France",
      description: "Design of rock cut slopes for D955 realignment"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full border border-cyan-500/50 flex items-center justify-center">
              <span className="text-cyan-400 font-display font-bold text-sm">NK</span>
            </div>
            <span className="font-display font-medium tracking-tighter text-lg uppercase hidden sm:block">
              Nasim <span className="text-cyan-400">Kamali</span>
            </span>
          </motion.div>
          
          <div className="flex gap-8 text-[10px] font-display uppercase tracking-widest font-bold">
            {["Services", "Education", "Work", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-3 py-1 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] uppercase tracking-widest font-bold"
            >
              Available for design & engineering
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, It's <span className="text-cyan-400 text-glow-cyan text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nasim</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
              M.Sc. Engineering Geologist & <br/> B.Sc. Civil Engineer based in London.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-3 bg-cyan-500 text-black font-display font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan-400 transition-all glow-cyan">
                Hire Me
              </button>
              <button className="px-8 py-3 border border-zinc-800 text-white font-display font-bold uppercase tracking-widest text-xs rounded-full hover:bg-zinc-900 transition-all">
                Contact
              </button>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-cyan-400 transition-colors flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-900 bg-zinc-950/50 hover:border-cyan-500/50 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-cyan-400/20" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border border-dashed border-cyan-500/40 rounded-full"
              />
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-cyan-500 p-2 shadow-[0_0_50px_rgba(0,255,255,0.3)]">
                <img 
                  src="/src/assets/images/regenerated_image_1777847865289.jpg" 
                  alt="Nasim Kamali"
                  className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 -z-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-cyan-400 text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">What I Do</span>
              <h2 className="text-4xl font-display font-bold uppercase tracking-tight">Services & Expertise</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "UI/UX Design", desc: "Crafting beautiful digital experiences with Illustrator & Photoshop.", icon: <PenTool className="text-cyan-400" /> },
              { title: "Web Development", desc: "Modern web architecture using React, PHP, and MySQL.", icon: <Code2 className="text-cyan-400" /> },
              { title: "Civil Engineering", desc: "Structural analysis and design with AutoCAD & ArchiCAD.", icon: <Briefcase className="text-cyan-400" /> },
              { title: "Data Analysis", desc: "Scientific research and visualization using Python & GIS.", icon: <LineChart className="text-cyan-400" /> },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-lg font-display font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-cyan-400 text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">My Toolkit</span>
              <h2 className="text-4xl font-display font-bold uppercase mb-12">Skills Proficiency</h2>
              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-display uppercase tracking-wider font-bold">{skill.name}</span>
                      <span className="text-[10px] text-cyan-400 font-mono font-bold tracking-tighter">{skill.percentage}%</span>
                    </div>
                    <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <Briefcase className="text-cyan-400" /> Expert Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["ArcGIS", "QGis", "MS Excel", "Etabs", "SketchUp", "Revit", "Bluebeam"].map((tool) => (
                    <div key={tool} className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-950 text-[10px] uppercase font-bold tracking-widest">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <GraduationCap className="text-cyan-400" /> Education
                </h3>
                <div className="space-y-8 border-l border-cyan-500/20 pl-6 ml-1">
                  {education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border-2 border-cyan-500 bg-black shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                      <span className="text-[10px] text-cyan-500 font-display font-bold uppercase tracking-widest block mb-1">{edu.year}</span>
                      <h4 className="text-lg font-display font-bold uppercase tracking-tighter mb-1 leading-tight">{edu.degree}</h4>
                      <p className="text-zinc-500 text-xs mb-3 font-medium uppercase tracking-wider">{edu.institution}</p>
                      <div className="space-y-1.5">
                        {edu.details?.map((detail, idx) => (
                          <p key={idx} className="text-zinc-400 text-xs flex items-center gap-2">
                            <ChevronRight size={10} className="text-cyan-500" /> {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fieldwork Section */}
      <section id="work" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-cyan-400 text-xs font-display font-bold uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
            <h2 className="text-4xl font-display font-bold uppercase mb-4 tracking-tight">Fieldwork & Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fieldwork.map((field, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <img 
                  src={`https://picsum.photos/seed/${field.location}/800/1200`} 
                  alt={field.title}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 p-8 z-20">
                  <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[9px] font-display font-bold uppercase tracking-[0.2em] border border-cyan-500/20">
                    {field.location}
                  </span>
                  <h3 className="text-2xl font-display font-bold uppercase leading-none mt-4 tracking-tighter">{field.title}</h3>
                  <p className="text-zinc-400 text-xs mt-4 pb-4 border-b border-zinc-800/50">{field.description}</p>
                  <button className="mt-4 flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-cyan-400 group-hover:gap-3 transition-all">
                    View Details <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Business Section */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-cyan-400 text-[10px] font-display font-bold uppercase tracking-[0.2em]">Developers' Squad</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 max-w-3xl leading-none tracking-tighter">
            Building Digital Experiences <br/> & Engineering Solutions
          </h2>
          <p className="text-zinc-500 max-w-xl mb-12 text-sm leading-relaxed">
            Stay updated with my technical journeys. From civil engineering insights to cutting-edge web design tutorials, I share everything on my blog and YouTube channel.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://youtube.com/@developerssquad532" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-10 py-5 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all font-display font-bold uppercase tracking-widest text-[11px] shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              <Youtube size={18} /> Watch YouTube
            </a>
            <button 
              className="group flex items-center gap-4 px-10 py-5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500 text-white transition-all font-display font-bold uppercase tracking-widest text-[11px]"
            >
              <FileText size={18} className="group-hover:text-cyan-400 transition-colors" /> Read My Blog
            </button>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -z-10" />
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
                Let's <br/> <span className="text-cyan-400 text-glow-cyan">Connect</span>
              </h2>
              <div className="space-y-6 text-zinc-400 font-medium">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                    <Mail className="text-cyan-400" size={18} />
                  </div>
                  <span className="hover:text-white transition-colors">nasimkamali532@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-xs italic text-zinc-500">
                  <span className="px-3 py-1 rounded-lg border border-zinc-900 bg-zinc-950/50">Contact via Email for WhatsApp inquiries</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={18} />
                  </div>
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-12">
              <div>
                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">Social Media</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                  <a href="https://github.com" className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">Business Hub</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.instagram.com/developerssquad" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-2xl uppercase tracking-tighter hover:text-cyan-400 transition-colors leading-none">Developers' Squad</a>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold">Design & Civil Engineering Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500">NK</div>
              <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
                &copy; {new Date().getFullYear()} Md Nasim Uddin Kamali
              </p>
            </div>
            <div className="flex gap-8 text-[9px] font-display uppercase tracking-widest font-bold text-zinc-600">
              <a href="#" className="hover:text-cyan-400">Back to Top</a>
              <a href="#" className="hover:text-cyan-400">Blogger Template Info</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
