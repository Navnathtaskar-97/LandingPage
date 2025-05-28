// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
// import {
//   Moon,
//   Sun,
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   Download,
//   ExternalLink,
//   GraduationCap,
//   ChevronDown,
//   Menu,
//   X,
//   Code,
//   Database,
//   Globe,
//   Star,
//   ArrowRight,
//   Zap,
//   Target,
//   Award,
//   Briefcase,
//   Coffee,
//   Heart,
//   Sparkles,
//   TrendingUp,
//   BarChart3,
//   Activity,
//   Layers,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"

// // Simple Loading Screen
// const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval)
//           setTimeout(onComplete, 200)
//           return 100
//         }
//         return prev + 10
//       })
//     }, 100)

//     return () => clearInterval(interval)
//   }, [onComplete])

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="text-center">
//         <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-white mb-4">
//           Neeta Chillore
//         </motion.h1>
//         <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
//           <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // Enhanced Interactive Skills Dashboard with Compact Design
// const SkillsDashboard = () => {
//   const [activeCategory, setActiveCategory] = useState("frontend")
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

//   const skillCategories = {
//     frontend: {
//       title: "Frontend Development",
//       icon: Globe,
//       color: "blue",
//       gradient: "from-blue-500 to-cyan-500",
//       skills: [
//         { name: "React.js", level: 95, experience: "2+ years", projects: 8, icon: "⚛️" },
//         { name: "JavaScript", level: 92, experience: "2+ years", projects: 12, icon: "🟨" },
//         { name: "TypeScript", level: 88, experience: "1+ year", projects: 6, icon: "🔷" },
//         { name: "HTML5", level: 98, experience: "2+ years", projects: 15, icon: "🌐" },
//         { name: "CSS3", level: 95, experience: "2+ years", projects: 15, icon: "🎨" },
//         { name: "Tailwind CSS", level: 92, experience: "1+ year", projects: 10, icon: "💨" },
//         { name: "Bootstrap", level: 85, experience: "1+ year", projects: 8, icon: "🅱️" },
//         { name: "Framer Motion", level: 80, experience: "6 months", projects: 4, icon: "🎭" },
//       ],
//     },
//     backend: {
//       title: "Backend & Database",
//       icon: Code,
//       color: "purple",
//       gradient: "from-purple-500 to-pink-500",
//       skills: [
//         { name: "Python", level: 65, experience: "Learning", projects: 3, icon: "🐍" },
//         { name: "MongoDB", level: 60, experience: "Learning", projects: 2, icon: "🍃" },
//         { name: "REST APIs", level: 70, experience: "6 months", projects: 4, icon: "🔗" },
//         { name: "Node.js", level: 55, experience: "Learning", projects: 2, icon: "💚" },
//       ],
//     },
//     tools: {
//       title: "Tools & Design",
//       icon: Database,
//       color: "green",
//       gradient: "from-green-500 to-emerald-500",
//       skills: [
//         { name: "Git", level: 90, experience: "2+ years", projects: 15, icon: "📚" },
//         { name: "Figma", level: 85, experience: "1+ year", projects: 8, icon: "🎯" },
//         { name: "VS Code", level: 95, experience: "2+ years", projects: 15, icon: "💻" },
//         { name: "Responsive Design", level: 95, experience: "2+ years", projects: 15, icon: "📱" },
//       ],
//     },
//   }

//   const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories]

//   return (
//     <div className="w-full">
//       {/* Category Selection with Floating Cards */}
//       <div className="flex flex-wrap justify-center gap-6 mb-16">
//         {Object.entries(skillCategories).map(([key, category]) => (
//           <motion.button
//             key={key}
//             onClick={() => setActiveCategory(key)}
//             className={`relative group overflow-hidden rounded-2xl p-6 transition-all duration-500 min-w-[200px] ${
//               activeCategory === key
//                 ? "bg-white dark:bg-gray-800 shadow-2xl scale-105"
//                 : "bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl"
//             }`}
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Gradient Background */}
//             <div
//               className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
//             />

//             <div className="relative z-10 flex flex-col items-center space-y-3">
//               <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
//                 <category.icon className="h-8 w-8" />
//               </div>
//               <div className="text-center">
//                 <h3 className="font-bold text-lg text-gray-900 dark:text-white">{category.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{category.skills.length} Skills</p>
//               </div>
//             </div>
//           </motion.button>
//         ))}
//       </div>

//       {/* Skills Grid with Uniform Height */}
//       <motion.div
//         key={activeCategory}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative"
//       >
//         {/* Skills Grid with Fixed Height Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
//           {currentSkills.skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 50, rotate: -10 }}
//               animate={{ opacity: 1, y: 0, rotate: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onHoverStart={() => setHoveredSkill(skill.name)}
//               onHoverEnd={() => setHoveredSkill(null)}
//               className="group relative h-[280px]" // Fixed height for all cards
//             >
//               {/* Compact Card with Fixed Height */}
//               <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-opacity-50 hover:border-current overflow-hidden h-full flex flex-col">
//                 {/* Animated Background */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${currentSkills.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                 />

//                 {/* Floating Particles Effect */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   {[...Array(3)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${currentSkills.gradient} rounded-full opacity-0 group-hover:opacity-60`}
//                       animate={{
//                         x: [0, 20, 0],
//                         y: [0, -15, 0],
//                         opacity: hoveredSkill === skill.name ? [0, 1, 0] : 0,
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Number.POSITIVE_INFINITY,
//                         delay: i * 0.3,
//                       }}
//                       style={{
//                         left: `${20 + i * 25}%`,
//                         top: `${30 + i * 15}%`,
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <div className="relative z-10 flex flex-col h-full">
//                   {/* Skill Icon & Name */}
//                   <div className="text-center mb-3 flex-shrink-0">
//                     <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
//                       {skill.icon}
//                     </div>
//                     <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
//                       {skill.name}
//                     </h3>
//                   </div>

//                   {/* Circular Progress */}
//                   <div className="relative w-16 h-16 mx-auto mb-3 flex-shrink-0">
//                     <svg className="w-full h-full transform -rotate-90">
//                       <circle
//                         cx="32"
//                         cy="32"
//                         r="26"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2.5"
//                         className="text-gray-200 dark:text-gray-700"
//                       />
//                       <motion.circle
//                         cx="32"
//                         cy="32"
//                         r="26"
//                         fill="none"
//                         stroke="url(#gradient)"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: skill.level / 100 }}
//                         transition={{ duration: 1.5, delay: index * 0.1 }}
//                         style={{
//                           strokeDasharray: "163.36",
//                           strokeDashoffset: `${163.36 * (1 - skill.level / 100)}`,
//                         }}
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-lg font-bold text-gray-900 dark:text-white">{skill.level}%</span>
//                     </div>

//                     {/* SVG Gradient Definition */}
//                     <svg className="absolute inset-0 w-0 h-0">
//                       <defs>
//                         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                           <stop
//                             offset="0%"
//                             stopColor={
//                               currentSkills.color === "blue"
//                                 ? "#3B82F6"
//                                 : currentSkills.color === "purple"
//                                   ? "#8B5CF6"
//                                   : "#10B981"
//                             }
//                           />
//                           <stop
//                             offset="100%"
//                             stopColor={
//                               currentSkills.color === "blue"
//                                 ? "#06B6D4"
//                                 : currentSkills.color === "purple"
//                                   ? "#EC4899"
//                                   : "#059669"
//                             }
//                           />
//                         </linearGradient>
//                       </defs>
//                     </svg>
//                   </div>

//                   {/* Skill Details - Flexible space */}
//                   <div className="space-y-2 text-xs flex-grow">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 dark:text-gray-400">Experience:</span>
//                       <span className="font-medium text-gray-900 dark:text-white text-right">{skill.experience}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 dark:text-gray-400">Projects:</span>
//                       <span className="font-medium text-gray-900 dark:text-white">{skill.projects}</span>
//                     </div>
//                   </div>

//                   {/* Proficiency Badge - Fixed at bottom */}
//                   <div className="mt-3 text-center flex-shrink-0">
//                     <span
//                       className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentSkills.gradient} text-white`}
//                     >
//                       {skill.level >= 90
//                         ? "Expert"
//                         : skill.level >= 75
//                           ? "Advanced"
//                           : skill.level >= 60
//                             ? "Intermediate"
//                             : "Learning"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Enhanced Skills Summary with Animated Counters */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="grid md:grid-cols-4 gap-6"
//         >
//           {[
//             {
//               icon: TrendingUp,
//               label: "Total Skills",
//               value: "16+",
//               color: "blue",
//               gradient: "from-blue-500 to-cyan-500",
//             },
//             {
//               icon: BarChart3,
//               label: "Frontend Expertise",
//               value: "92%",
//               color: "green",
//               gradient: "from-green-500 to-emerald-500",
//             },
//             {
//               icon: Activity,
//               label: "Years Experience",
//               value: "2+",
//               color: "purple",
//               gradient: "from-purple-500 to-pink-500",
//             },
//             {
//               icon: Layers,
//               label: "Projects Built",
//               value: "15+",
//               color: "orange",
//               gradient: "from-orange-500 to-red-500",
//             },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//               className="relative group overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Animated Background */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//               />

//               <div className="relative z-10 text-center">
//                 <motion.div
//                   className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 shadow-lg`}
//                   whileHover={{ rotate: 360, scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <stat.icon className="h-8 w-8 text-white" />
//                 </motion.div>
//                 <motion.div
//                   className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// // Simple Magnetic Button
// const MagneticButton = ({ children, className, ...props }: any) => {
//   return (
//     <motion.button className={className} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
//       {children}
//     </motion.button>
//   )
// }

// // Simple Text Reveal
// const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
//   return (
//     <motion.span
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//       viewport={{ once: true }}
//     >
//       {children}
//     </motion.span>
//   )
// }

// export default function Portfolio() {
//   const [isDark, setIsDark] = useState(true)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")
//   const [isLoading, setIsLoading] = useState(true)

//   const { scrollYProgress } = useScroll()
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   })

//   useEffect(() => {
//     document.documentElement.classList.add("dark")
//   }, [])

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }, [isDark])

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
//       const scrollPosition = window.scrollY + 100

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const offsetTop = element.offsetTop
//           const offsetHeight = element.offsetHeight

//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const experience = [
//     {
//       title: "React Developer",
//       company: "Aigutech Technology",
//       period: "NOV 2025 – Present",
//       achievements: [
//         "Developed interactive UI using React and Tailwind, reducing initial load time by 25%",
//         "Implemented Context API, React.memo, and lazy loading for performance gains",
//         "Fixed 30+ browser compatibility issues and built reusable components",
//         "Collaborated on GitHub, participated in daily standups and sprint reviews",
//         "Wrote unit tests using Jest and React Testing Library to ensure code quality and reliability",
//       ],
//       icon: Briefcase,
//       color: "blue",
//     },
//     {
//       title: "Web Developer",
//       company: "Code Cad Tech",
//       period: "Jun 2024 – Nov 2024",
//       achievements: [
//         "Built dynamic web apps with JavaScript and CSS frameworks",
//         "Resolved 25+ UI issues using Flexbox, Grid, and media queries",
//         "Refactored 2000+ lines of code for modularity and maintainability",
//         "Improved Lighthouse score by 18% through performance tuning",
//       ],
//       icon: Code,
//       color: "purple",
//     },
//   ]

//   const projects = [
//     {
//       title: "YouTube Clone",
//       description:
//         "A fully functional YouTube clone with video streaming, search functionality, and responsive design.",
//       tech: ["React", "Tailwind CSS", "YouTube API", "JavaScript"],
//       features: ["Video streaming", "Search with debounce", "Responsive video cards", "API integration"],
//       github: "#",
//       demo: "#",
//       image:
//         "http://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "Web Application",
//     },
//     {
//       title: "Resume Builder",
//       description: "Dynamic resume builder with real-time preview and PDF generation capabilities.",
//       tech: ["Next.js", "React Hook Form", "PDF Generation", "TypeScript"],
//       features: ["Dynamic form logic", "Real-time preview", "PDF export", "Template selection"],
//       github: "#",
//       demo: "#",
//       image:
//         "http://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "Productivity Tool",
//     },
//     {
//       title: "Amazon Clone",
//       description: "E-commerce platform with product listings, shopping cart, and user authentication.",
//       tech: ["React", "CSS Modules", "JavaScript", "Local Storage"],
//       features: ["Product listing", "Add to cart", "User authentication", "Responsive design"],
//       github: "#",
//       demo: "#",
//       image: "http://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "E-commerce",
//     },
//     {
//       title: "HRMS System",
//       description: "Human Resource Management System with employee management and data validation.",
//       tech: ["Java", "Database", "Validation", "Swing"],
//       features: ["Employee login", "Data entry", "Validation logic", "Report generation"],
//       github: "#",
//       demo: "#",
//       image:
//         "http://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "Enterprise Software",
//     },
//     {
//       title: "Portfolio Website",
//       description: "Personal branding website showcasing projects and professional experience.",
//       tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
//       features: ["Responsive design", "Contact form", "Project showcase", "Professional layout"],
//       github: "#",
//       demo: "#",
//       image:
//         "http://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "Portfolio",
//     },
//     {
//       title: "Recipe Hunt",
//       description: "Recipe search application with filtering capabilities and error handling.",
//       tech: ["React", "API Integration", "Error Handling", "CSS"],
//       features: ["Recipe search", "Advanced filters", "Error handling", "Responsive UI"],
//       github: "#",
//       demo: "#",
//       image: "http://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       category: "Web Application",
//     },
//   ]

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ]

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//       setActiveSection(sectionId)
//       setIsMenuOpen(false)
//     }
//   }

//   const handleContactSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert("Thank you for your message! I'll get back to you soon.")
//   }

//   if (isLoading) {
//     return (
//       <AnimatePresence>
//         <LoadingScreen onComplete={() => setIsLoading(false)} />
//       </AnimatePresence>
//     )
//   }

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
//       {/* Progress bar */}
//       <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 origin-left" style={{ scaleX }}>
//         <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
//       </motion.div>

//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"
//       >
//         <div className="mx-3">
//           <div className="flex justify-between items-center h-16">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer"
//             >
//               Neeta Chillore
//             </motion.div>

//             {/* Desktop Navigation - Increased Size */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="hidden md:flex space-x-8"
//             >
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index + 0.5, duration: 0.3 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`text-base font-semibold transition-all duration-300 relative group px-3 py-2 ${
//                     activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
//                   }`}
//                 >
//                   {item.label}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="flex items-center space-x-4"
//             >
//               <MagneticButton
//                 className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => setIsDark(!isDark)}
//               >
//                 <AnimatePresence mode="wait">
//                   {isDark ? (
//                     <motion.div
//                       key="sun"
//                       initial={{ rotate: -180, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 180, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Sun className="h-5 w-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="moon"
//                       initial={{ rotate: 180, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -180, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Moon className="h-5 w-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </MagneticButton>

//               {/* Mobile menu button */}
//               <MagneticButton
//                 className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 <AnimatePresence mode="wait">
//                   {isMenuOpen ? (
//                     <motion.div
//                       key="x"
//                       initial={{ rotate: -180, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 180, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <X className="h-5 w-5" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 180, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -180, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Menu className="h-5 w-5" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </MagneticButton>
//             </motion.div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
//             >
//               <div className="mx-3 py-4 space-y-2">
//                 {navItems.map((item) => (
//                   <motion.button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                     className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
//                   >
//                     {item.label}
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('http://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
//             filter: "brightness(0.2)",
//           }}
//         />

//         <motion.div className="relative z-10 text-center text-white mx-3">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <motion.h1
//               className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 <TextReveal delay={0.4}>Neeta</TextReveal>
//               </span>{" "}
//               <span className="inline-block">
//                 <TextReveal delay={0.8}>Chillore</TextReveal>
//               </span>
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//               className="text-xl md:text-3xl mb-8 text-gray-200"
//             >
//               <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
//                 <TextReveal delay={1.4}>Frontend Developer — React Specialist</TextReveal>
//               </span>
//             </motion.div>

//             <motion.p
//               className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.6 }}
//             >
//               <TextReveal delay={1.8}>
//                 Crafting exceptional digital experiences with cutting-edge technologies and innovative design solutions
//               </TextReveal>
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 2 }}
//             >
//              <a
//   href="/Neeta_Chillore_Resume_Frontend_Developer.pdf"
//   download="Neeta_Chillore_Resume.pdf"
//   className="inline-block"
// >
//   <MagneticButton className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl">
//     <span className="relative flex items-center">
//       <Download className="mr-3 h-5 w-5" />
//       Download Resume
//       <ArrowRight className="ml-2 h-5 w-5" />
//     </span>
//   </MagneticButton>
// </a>

//               <MagneticButton
//                 className="group relative overflow-hidden border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
//                 onClick={() => scrollToSection("projects")}
//               >
//                 <span className="relative flex items-center">
//                   <Sparkles className="mr-3 h-5 w-5" />
//                   View Projects
//                   <Star className="ml-2 h-5 w-5" />
//                 </span>
//               </MagneticButton>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 2.5 }}
//             >
//               {[
//                 { number: "2+", label: "Years Experience" },
//                 { number: "15+", label: "Projects Completed" },
//                 { number: "100%", label: "Client Satisfaction" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 2.7 + index * 0.1 }}
//                 >
//                   <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                   <div className="text-sm text-gray-300">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
//           onClick={() => scrollToSection("about")}
//         >
//           <ChevronDown className="h-8 w-8" />
//         </motion.div>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
//       >
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>About Me</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
//                 <img
//                   src="http://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
//                   alt="Neeta Chillore"
//                   className="relative rounded-3xl shadow-2xl w-full"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
//                 <TextReveal>Frontend Developer Creating Digital Excellence</TextReveal>
//               </h3>

//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 <TextReveal delay={0.4}>
//                   I'm a passionate Frontend Developer with expertise in building scalable and responsive web
//                   applications using React.js, JavaScript, and modern CSS frameworks. I have a strong understanding of
//                   UI/UX principles, performance optimization, and agile development methodologies.
//                 </TextReveal>
//               </p>

//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 <TextReveal delay={0.6}>
//                   Currently expanding my skills in backend technologies like Python and MongoDB to become a more
//                   well-rounded developer. I believe in continuous learning and staying updated with the latest
//                   technologies.
//                 </TextReveal>
//               </p>

//               <div className="grid grid-cols-2 gap-6">
//                 {[
//                   { icon: Target, text: "Goal-Oriented", color: "blue" },
//                   { icon: Zap, text: "Fast Learner", color: "purple" },
//                   { icon: Heart, text: "Passionate", color: "red" },
//                   { icon: Coffee, text: "Dedicated", color: "amber" },
//                 ].map((trait, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
//                   >
//                     <div className={`p-2 bg-${trait.color}-100 dark:bg-${trait.color}-900 rounded-lg`}>
//                       <trait.icon className={`h-5 w-5 text-${trait.color}-600 dark:text-${trait.color}-400`} />
//                     </div>
//                     <span className="font-medium text-gray-900 dark:text-white">{trait.text}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 {[
//                   { icon: Github, text: "GitHub", href: "http://github.com/Neeta005" },
//                   { icon: Linkedin, text: "LinkedIn", href: "http://linkedin.com/in/neeta-chillore-907a64337" },
//                   { icon: Mail, text: "Email", href: "mailto:neeta.chilloree@gmail.com" },
//                 ].map((social, index) => (
//                   <MagneticButton
//                     key={index}
//                     className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
//                   >
//                     <a
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-2"
//                     >
//                       <social.icon className="h-5 w-5" />
//                       <span>{social.text}</span>
//                     </a>
//                   </MagneticButton>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>Skills & Expertise</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//             <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
//               <TextReveal delay={0.5}>
//                 My technical expertise spans across frontend development with ongoing learning in backend technologies
//               </TextReveal>
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <SkillsDashboard />
//           </motion.div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section
//         id="experience"
//         className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
//       >
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>Professional Journey</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </motion.div>

//           <div className="relative max-w-6xl mx-auto">
//             {/* Timeline line */}
//             <motion.div
//               className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
//               initial={{ height: 0 }}
//               whileInView={{ height: "100%" }}
//               transition={{ duration: 1.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             />

//             <div className="space-y-16">
//               {experience.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
//                 >
//                   <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
//                     <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
//                       <CardHeader className="relative">
//                         <div className="flex items-center space-x-4">
//                           <div
//                             className={`p-3 bg-${exp.color}-100 dark:bg-${exp.color}-900 rounded-xl transition-colors`}
//                           >
//                             <exp.icon className={`h-6 w-6 text-${exp.color}-600 dark:text-${exp.color}-400`} />
//                           </div>
//                           <div>
//                             <CardTitle className="text-xl">{exp.title}</CardTitle>
//                             <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
//                               {exp.company}
//                             </CardDescription>
//                           </div>
//                         </div>
//                         <div className="absolute top-4 right-4">
//                           <Badge variant="outline">{exp.period}</Badge>
//                         </div>
//                       </CardHeader>

//                       <CardContent className="relative">
//                         <ul className="space-y-3">
//                           {exp.achievements.map((achievement, i) => (
//                             <li key={i} className="flex items-start space-x-3">
//                               <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
//                               <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Timeline dot */}
//                   <motion.div
//                     className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
//                     viewport={{ once: true }}
//                   />

//                   <div className="w-1/2" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>Featured Projects</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="h-full overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <Badge className="bg-blue-600 text-white">{project.category}</Badge>
//                     </div>
//                     <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <MagneticButton className="p-2 bg-white/90 rounded-full shadow-lg">
//                         <a href={project.github} target="_blank" rel="noopener noreferrer">
//                           <Github className="h-4 w-4 text-gray-900" />
//                         </a>
//                       </MagneticButton>
//                       <MagneticButton className="p-2 bg-white/90 rounded-full shadow-lg">
//                         <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-4 w-4 text-gray-900" />
//                         </a>
//                       </MagneticButton>
//                     </div>
//                   </div>

//                   <CardHeader>
//                     <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
//                       {project.title}
//                     </CardTitle>
//                     <CardDescription>{project.description}</CardDescription>
//                   </CardHeader>

//                   <CardContent className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tech.map((tech) => (
//                           <Badge key={tech} variant="secondary" className="text-xs">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
//                       <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
//                         {project.features.map((feature, i) => (
//                           <li key={i} className="flex items-start space-x-2">
//                             <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
//                             <span>{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section
//         id="education"
//         className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
//       >
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>Education & Certifications</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
//                 <CardHeader className="relative">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl">
//                       <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
//                     </div>
//                     <div>
//                       <CardTitle className="text-2xl">B.E. in Electronics and Telecommunication</CardTitle>
//                       <CardDescription className="text-lg">R.H. Sapat College, Nashik</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>

//                 <CardContent className="relative">
//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h4>
//                         <p className="text-gray-600 dark:text-gray-300">2021 – 2024</p>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CGPA</h4>
//                         <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.65 / 10</p>
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Certifications</h4>
//                       <div className="space-y-3">
//                         {[
//                           { title: "Full-Stack Development Course", year: "2023", icon: Award },
//                           { title: "PCB Testing SCADA Workshop", year: "2021", icon: Zap },
//                         ].map((cert, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md"
//                           >
//                             <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
//                               <cert.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
//                             </div>
//                             <div>
//                               <p className="font-medium text-gray-900 dark:text-white">{cert.title}</p>
//                               <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
//         <div className="mx-3 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               <TextReveal>Let's Connect</TextReveal>
//             </h2>
//             <motion.div
//               className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 128 }}
//               transition={{ duration: 1.2, delay: 0.3 }}
//               viewport={{ once: true }}
//             />
//             <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
//               <TextReveal delay={0.5}>
//                 Ready to bring your ideas to life? Let's discuss your next project and create something amazing
//                 together.
//               </TextReveal>
//             </p>
//           </motion.div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-12">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="space-y-8"
//               >
//                 {[
//                   {
//                     icon: Mail,
//                     title: "Email",
//                     content: "neeta.chilloree@gmail.com",
//                     color: "blue",
//                     href: "mailto:neeta.chilloree@gmail.com",
//                   },
//                   { icon: Phone, title: "Phone", content: "+91 7038808473", color: "green", href: "tel:+917038808473" },
//                   { icon: MapPin, title: "Location", content: "Nashik, Maharashtra", color: "purple", href: "#" },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="group"
//                   >
//                     <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-lg">
//                       <CardContent className="p-6">
//                         <div className="flex items-center space-x-4">
//                           <div
//                             className={`p-3 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-xl transition-colors`}
//                           >
//                             <item.icon className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`} />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-lg">{item.title}</h3>
//                             <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-lg">
//                     <CardContent className="p-6">
//                       <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect with me</h3>
//                       <div className="space-y-4">
//                         {[
//                           { icon: Github, text: "GitHub Portfolio", href: "http://github.com/Neeta005" },
//                           {
//                             icon: Linkedin,
//                             text: "LinkedIn Profile",
//                             href: "http://linkedin.com/in/neeta-chillore-907a64337",
//                           },
//                         ].map((social, index) => (
//                           <MagneticButton
//                             key={index}
//                             className="w-full group flex items-center justify-start space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900 dark:hover:to-purple-900 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
//                           >
//                             <a
//                               href={social.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center space-x-3 w-full"
//                             >
//                               <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//                                 <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
//                               </div>
//                               <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
//                                 {social.text}
//                               </span>
//                               <div className="ml-auto">
//                                 <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
//                               </div>
//                             </a>
//                           </MagneticButton>
//                         ))}

//                         <MagneticButton
//                           className="w-full group flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-300"
//                           onClick={() => {
//                             const link = document.createElement("a")
//                             link.href = "/resume/Neeta_Chillore_Resume.pdf"
//                             link.download = "Neeta_Chillore_Resume.pdf"
//                             document.body.appendChild(link)
//                             link.click()
//                             document.body.removeChild(link)
//                           }}
//                         >
//                           <Download className="h-5 w-5" />
//                           <span className="font-semibold">Download Resume</span>
//                         </MagneticButton>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
//                   <CardHeader>
//                     <CardTitle className="text-2xl">Send me a message</CardTitle>
//                     <CardDescription className="text-lg">
//                       Fill out the form below and I'll get back to you as soon as possible.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <form onSubmit={handleContactSubmit} className="space-y-6">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="firstName" className="text-sm font-medium">
//                             First Name
//                           </Label>
//                           <Input
//                             id="firstName"
//                             placeholder="John"
//                             required
//                             className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="lastName" className="text-sm font-medium">
//                             Last Name
//                           </Label>
//                           <Input
//                             id="lastName"
//                             placeholder="Doe"
//                             required
//                             className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="email" className="text-sm font-medium">
//                           Email
//                         </Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           placeholder="john@example.com"
//                           required
//                           className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="subject" className="text-sm font-medium">
//                           Subject
//                         </Label>
//                         <Input
//                           id="subject"
//                           placeholder="Project Collaboration"
//                           required
//                           className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="message" className="text-sm font-medium">
//                           Message
//                         </Label>
//                         <Textarea
//                           id="message"
//                           placeholder="Tell me about your project..."
//                           className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//                           required
//                         />
//                       </div>

//                       <MagneticButton
//                         type="submit"
//                         className="w-full group flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
//                       >
//                         <span>Send Message</span>
//                         <ArrowRight className="h-5 w-5" />
//                       </MagneticButton>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <motion.footer
//         className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <div className="mx-3 relative">
//           <div className="grid md:grid-cols-3 gap-12">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//                 Neeta Chillore
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Frontend Developer creating exceptional digital experiences with cutting-edge technologies and
//                 innovative design solutions.
//               </p>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: Github, href: "http://github.com/Neeta005" },
//                   { icon: Linkedin, href: "http://linkedin.com/in/neeta-chillore-907a64337" },
//                   { icon: Mail, href: "mailto:neeta.chilloree@gmail.com" },
//                 ].map((social, index) => (
//                   <Button
//                     key={index}
//                     variant="ghost"
//                     size="icon"
//                     className="text-gray-300 hover:text-white hover:bg-white/10"
//                     asChild
//                   >
//                     <a href={social.href} target="_blank" rel="noopener noreferrer">
//                       <social.icon className="h-5 w-5" />
//                     </a>
//                   </Button>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h4 className="text-xl font-semibold">Quick Links</h4>
//               <ul className="space-y-3">
//                 {navItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className="text-gray-300 hover:text-white cursor-pointer transition-colors"
//                     onClick={() => scrollToSection(item.id)}
//                   >
//                     {item.label}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h4 className="text-xl font-semibold">Contact Info</h4>
//               <div className="space-y-3">
//                 <p className="text-gray-300 flex items-center space-x-2">
//                   <Mail className="h-4 w-4" />
//                   <span>neeta.chilloree@gmail.com</span>
//                 </p>
//                 <p className="text-gray-300 flex items-center space-x-2">
//                   <Phone className="h-4 w-4" />
//                   <span>+91 7038808473</span>
//                 </p>
//                 <p className="text-gray-300 flex items-center space-x-2">
//                   <MapPin className="h-4 w-4" />
//                   <span>Nashik, Maharashtra</span>
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           <motion.div
//             className="border-t border-gray-700 mt-12 pt-8 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-gray-300 mb-2">© 2024 Neeta Chillore. All rights reserved.</p>
//             <p className="text-gray-400 text-sm">Built with React.js, Next.js, Tailwind CSS, and Framer Motion ✨</p>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </div>
//   )
// }
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Code,
  Database,
  Globe,
  Star,
  ArrowRight,
  Zap,
  Target,
  Award,
  Briefcase,
  Coffee,
  Heart,
  Sparkles,
  TrendingUp,
  BarChart3,
  Activity,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Simple Loading Screen
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 200)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-white mb-4">
          Neeta Chillore
        </motion.h1>
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced Interactive Skills Dashboard with Compact Design
const SkillsDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Globe,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, experience: "6 months", projects: 8, icon: "⚛️" },
        { name: "JavaScript", level: 60, experience: "6 months", projects: 12, icon: "🟨" },
        { name: "Next.js", level: 60, experience: "6 months", projects: 6, icon: "🔷" },
        { name: "HTML5", level: 98, experience: "6 months", projects: 15, icon: "🌐" },
        { name: "CSS3", level: 95, experience: "6 months", projects: 15, icon: "🎨" },
        { name: "Tailwind CSS", level: 70, experience: "6 months", projects: 10, icon: "💨" },
        { name: "Bootstrap", level: 85, experience: "6 months", projects: 8, icon: "🅱️" },
        { name: "Framer Motion", level: 60, experience: "6 months", projects: 4, icon: "🎭" },
      ],
    },
    backend: {
      title: "Backend & Database",
      icon: Code,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 65, experience: "Learning", projects: 3, icon: "🐍" },
        { name: "Flask", level: 60, experience: "Learning", projects: 2, icon: "🍃" },
        { name: "REST APIs", level: 70, experience: "6 months", projects: 4, icon: "🔗" },
        
      ],
    },
    tools: {
      title: "Tools & Design",
      icon: Database,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git", level: 90, experience: "2+ years", projects: 15, icon: "📚" },
        { name: "Figma", level: 50, experience: "1+ year", projects: 8, icon: "🎯" },
        { name: "VS Code", level: 95, experience: "2+ years", projects: 15, icon: "💻" },
        { name: "Responsive Design", level: 95, experience: "2+ years", projects: 15, icon: "📱" },
      ],
    },
  }

  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories]

  return (
    <div className="w-full">
      {/* Category Selection with Floating Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {Object.entries(skillCategories).map(([key, category]) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`relative group overflow-hidden rounded-2xl p-6 transition-all duration-500 min-w-[200px] ${
              activeCategory === key
                ? "bg-white dark:bg-gray-800 shadow-2xl scale-105"
                : "bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl"
            }`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="relative z-10 flex flex-col items-center space-y-3">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                <category.icon className="h-8 w-8" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{category.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.skills.length} Skills</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Skills Grid with Uniform Height */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Skills Grid with Fixed Height Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {currentSkills.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative h-[280px]" // Fixed height for all cards
            >
              {/* Compact Card with Fixed Height */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-opacity-50 hover:border-current overflow-hidden h-full flex flex-col">
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentSkills.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${currentSkills.gradient} rounded-full opacity-0 group-hover:opacity-60`}
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                        opacity: hoveredSkill === skill.name ? [0, 1, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 15}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Skill Icon & Name */}
                  <div className="text-center mb-3 flex-shrink-0">
                    <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 mx-auto mb-3 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <motion.circle
                        cx="32"
                        cy="32"
                        r="26"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: skill.level / 100 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        style={{
                          strokeDasharray: "163.36",
                          strokeDashoffset: `${163.36 * (1 - skill.level / 100)}`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{skill.level}%</span>
                    </div>

                    {/* SVG Gradient Definition */}
                    <svg className="absolute inset-0 w-0 h-0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop
                            offset="0%"
                            stopColor={
                              currentSkills.color === "blue"
                                ? "#3B82F6"
                                : currentSkills.color === "purple"
                                  ? "#8B5CF6"
                                  : "#10B981"
                            }
                          />
                          <stop
                            offset="100%"
                            stopColor={
                              currentSkills.color === "blue"
                                ? "#06B6D4"
                                : currentSkills.color === "purple"
                                  ? "#EC4899"
                                  : "#059669"
                            }
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Skill Details - Flexible space */}
                  <div className="space-y-2 text-xs flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                      <span className="font-medium text-gray-900 dark:text-white text-right">{skill.experience}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Projects:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{skill.projects}</span>
                    </div>
                  </div>

                  {/* Proficiency Badge - Fixed at bottom */}
                  <div className="mt-3 text-center flex-shrink-0">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${currentSkills.gradient} text-white`}
                    >
                      {skill.level >= 90
                        ? "Expert"
                        : skill.level >= 75
                          ? "Advanced"
                          : skill.level >= 60
                            ? "Intermediate"
                            : "Learning"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Skills Summary with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: TrendingUp,
              label: "Total Skills",
              value: "16+",
              color: "blue",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: BarChart3,
              label: "Frontend Expertise",
              value: "80%",
              color: "green",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: Activity,
              label: "Experience",
              value: "6+ Months",
              color: "purple",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Layers,
              label: "Projects Built",
              value: "15+",
              color: "orange",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="relative group overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Simple Magnetic Button
const MagneticButton = ({ children, className, ...props }: any) => {
  return (
    <motion.button className={className} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
      {children}
    </motion.button>
  )
}

// Simple Text Reveal
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  )
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experience = [
    {
      title: "React Developer",
      company: "Aigutech Technology",
      period: "NOV 2025 – Present",
      achievements: [
        "Developed interactive UI using React and Tailwind, reducing initial load time by 25%",
        "Implemented Context API, React.memo, and lazy loading for performance gains",
        "Fixed 30+ browser compatibility issues and built reusable components",
        "Collaborated on GitHub, participated in daily standups and sprint reviews",
        "Wrote unit tests using Jest and React Testing Library to ensure code quality and reliability",
      ],
      icon: Briefcase,
      color: "blue",
    },
    {
      title: "Web Developer",
      company: "Code Cad Tech",
      period: "Jun 2024 – Nov 2024",
      achievements: [
        "Built dynamic web apps with JavaScript and CSS frameworks",
        "Resolved 25+ UI issues using Flexbox, Grid, and media queries",
        "Refactored 2000+ lines of code for modularity and maintainability",
        "Improved Lighthouse score by 18% through performance tuning",
      ],
      icon: Code,
      color: "purple",
    },
  ]

  const projects = [
    {
      title: "YouTube Clone",
      description:
        "A fully functional YouTube clone with video streaming, search functionality, and responsive design.",
      tech: ["React", "Tailwind CSS", "YouTube API", "JavaScript"],
      features: ["Video streaming", "Search with debounce", "Responsive video cards", "API integration"],
      github: "#",
      demo: "#",
      image:
        "http://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Web Application",
    },
    {
      title: "Resume Builder",
      description: "Dynamic resume builder with real-time preview and PDF generation capabilities.",
      tech: ["Next.js", "React Hook Form", "PDF Generation", "TypeScript"],
      features: ["Dynamic form logic", "Real-time preview", "PDF export", "Template selection"],
      github: "#",
      demo: "#",
      image:
        "http://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Productivity Tool",
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform with product listings, shopping cart, and user authentication.",
      tech: ["React", "CSS Modules", "JavaScript", "Local Storage"],
      features: ["Product listing", "Add to cart", "User authentication", "Responsive design"],
      github: "#",
      demo: "#",
      image: "http://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "E-commerce",
    },
    {
      title: "HRMS System",
      description: "Human Resource Management System with employee management and data validation.",
      tech: ["Java", "Database", "Validation", "Swing"],
      features: ["Employee login", "Data entry", "Validation logic", "Report generation"],
      github: "#",
      demo: "#",
      image:
        "http://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Enterprise Software",
    },
    {
      title: "Portfolio Website",
      description: "Personal branding website showcasing projects and professional experience.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      features: ["Responsive design", "Contact form", "Project showcase", "Professional layout"],
      github: "#",
      demo: "#",
      image:
        "http://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Portfolio",
    },
    {
      title: "Recipe Hunt",
      description: "Recipe search application with filtering capabilities and error handling.",
      tech: ["React", "API Integration", "Error Handling", "CSS"],
      features: ["Recipe search", "Advanced filters", "Error handling", "Responsive UI"],
      github: "#",
      demo: "#",
      image: "http://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Web Application",
    },
  ]

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
  }

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      </AnimatePresence>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 origin-left" style={{ scaleX }}>
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="mx-3">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer"
            >
              Neeta Chillore
            </motion.div>

            {/* Desktop Navigation - Increased Size */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="hidden md:flex space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-semibold transition-all duration-300 relative group px-3 py-2 ${
                    activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <MagneticButton
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsDark(!isDark)}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </MagneticButton>

              {/* Mobile menu button */}
              <MagneticButton
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="mx-3 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('http://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            filter: "brightness(0.2)",
          }}
        />

        <motion.div className="relative z-10 text-center text-white mx-3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
           <motion.h1
  className="mt-16 text-6xl md:text-8xl font-bold mb-6 leading-tight"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
    <TextReveal delay={0.4}>Neeta</TextReveal>
  </span>{" "}
  <span className="inline-block">
    <TextReveal delay={0.8}>Chillore</TextReveal>
  </span>
</motion.h1>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-xl md:text-3xl mb-8 text-gray-200"
            >
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                <TextReveal delay={1.4}>Frontend Developer — React Specialist</TextReveal>
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <TextReveal delay={1.8}>
                Crafting exceptional digital experiences with cutting-edge technologies and innovative design solutions
              </TextReveal>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <a
                href="/Neeta_Chillore_Resume_Frontend_Developer.pdf"
                download="Neeta_Chillore_Resume_Frontend_Developer.pdf"
                className="inline-block"
              >
                <MagneticButton className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl">
                  <span className="relative flex items-center">
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </MagneticButton>
              </a>

              <MagneticButton
                className="group relative overflow-hidden border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative flex items-center">
                  <Sparkles className="mr-3 h-5 w-5" />
                  View Projects
                  <Star className="ml-2 h-5 w-5" />
                </span>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              {[
                { number: "6+", label: "Months Experience" },
                { number: "15+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.7 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>About Me</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group w-[450px] h-[600px]">
  <div className="absolute inset-0 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
  <img
    src="/IMG_20250207_220146.jpg"
    alt="Neeta Chillore"
    className="rounded-2xl w-full h-full object-cover ml-24"
  />
</div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                <TextReveal>Frontend Developer Creating Digital Excellence</TextReveal>
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <TextReveal delay={0.4}>
                  I'm a passionate Frontend Developer with expertise in building scalable and responsive web
                  applications using React.js, JavaScript, and modern CSS frameworks. I have a strong understanding of
                  UI/UX principles, performance optimization, and agile development methodologies.
                </TextReveal>
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <TextReveal delay={0.6}>
                  Currently expanding my skills in backend technologies like Python and MongoDB to become a more
                  well-rounded developer. I believe in continuous learning and staying updated with the latest
                  technologies.
                </TextReveal>
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Target, text: "Goal-Oriented", color: "blue" },
                  { icon: Zap, text: "Fast Learner", color: "purple" },
                  { icon: Heart, text: "Passionate", color: "red" },
                  { icon: Coffee, text: "Dedicated", color: "amber" },
                ].map((trait, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                  >
                    <div className={`p-2 bg-${trait.color}-100 dark:bg-${trait.color}-900 rounded-lg`}>
                      <trait.icon className={`h-5 w-5 text-${trait.color}-600 dark:text-${trait.color}-400`} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{trait.text}</span>
                  </motion.div>
                ))}
              </div>

            <div className="flex flex-wrap gap-4">
  {[
    { 
      icon: Github, 
      text: "GitHub", 
      href: "https://github.com/Neeta005",
      isExternal: true
    },
    { 
      icon: Linkedin, 
      text: "LinkedIn", 
      href: "https://linkedin.com/in/neeta-chillore-907a64337",
      isExternal: true
    },
    { 
      icon: Mail, 
      text: "Email", 
      href: "mailto:neeta.chilloree@gmail.com",
      isExternal: false
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target={social.isExternal ? "_blank" : undefined}
      rel={social.isExternal ? "noopener noreferrer" : undefined}
      className="group"
    >
      <MagneticButton className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg">
        <social.icon className="h-5 w-5" />
        <span>{social.text}</span>
      </MagneticButton>
    </a>
  ))}
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>Skills & Expertise</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              <TextReveal delay={0.5}>
                My technical expertise spans across frontend development with ongoing learning in backend technologies
              </TextReveal>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillsDashboard />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>Professional Journey</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
                      <CardHeader className="relative">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 bg-${exp.color}-100 dark:bg-${exp.color}-900 rounded-xl transition-colors`}
                          >
                            <exp.icon className={`h-6 w-6 text-${exp.color}-600 dark:text-${exp.color}-400`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="relative">
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>Featured Projects</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MagneticButton className="p-2 bg-white/90 rounded-full shadow-lg">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-gray-900" />
                        </a>
                      </MagneticButton>
                      <MagneticButton className="p-2 bg-white/90 rounded-full shadow-lg">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-gray-900" />
                        </a>
                      </MagneticButton>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>Education & Certifications</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl">
                      <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">B.E. in Electronics and Telecommunication</CardTitle>
                      <CardDescription className="text-lg">R.H. Sapat College, Nashik</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h4>
                        <p className="text-gray-600 dark:text-gray-300">2021 – 2024</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CGPA</h4>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.65 / 10</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Certifications</h4>
                      <div className="space-y-3">
                        {[
                          { title: "Full-Stack Development Course", year: "2023", icon: Award },
                          { title: "PCB Testing SCADA Workshop", year: "2021", icon: Zap },
                        ].map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                          >
                            <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
                              <cert.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{cert.title}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="mx-3 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <TextReveal>Let's Connect</TextReveal>
            </h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              <TextReveal delay={0.5}>
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing
                together.
              </TextReveal>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "neeta.chilloree@gmail.com",
                    color: "blue",
                    href: "mailto:neeta.chilloree@gmail.com",
                  },
                  { icon: Phone, title: "Phone", content: "+91 7038808473", color: "green", href: "tel:+917038808473" },
                  { icon: MapPin, title: "Location", content: "Nashik, Maharashtra", color: "purple", href: "#" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-xl transition-colors`}
                          >
                            <item.icon className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect with me</h3>
                      <div className="space-y-4">
                        {[
                          { icon: Github, text: "GitHub Portfolio", href: "http://github.com/Neeta005" },
                          {
                            icon: Linkedin,
                            text: "LinkedIn Profile",
                            href: "http://linkedin.com/in/neeta-chillore-907a64337",
                          },
                        ].map((social, index) => (
                          <MagneticButton
                            key={index}
                            className="w-full group flex items-center justify-start space-x-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900 dark:hover:to-purple-900 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 w-full"
                            >
                              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                              </div>
                              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                {social.text}
                              </span>
                              <div className="ml-auto">
                                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                              </div>
                            </a>
                          </MagneticButton>
                        ))}

                        <MagneticButton
                          className="w-full group flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-300"
                          onClick={() => {
                            try {
                              const link = document.createElement("a")
                              link.href = "/Neeta_Chillore_Resume_Frontend_Developer.pdf"
                              link.download = "Neeta_Chillore_Resume_Frontend_Developer.pdf"
                              link.target = "_blank"
                              link.rel = "noopener noreferrer"
                              document.body.appendChild(link)
                              link.click()
                              document.body.removeChild(link)
                            } catch (error) {
                              console.error("Download failed:", error)
                              // Fallback: open in new tab
                              window.open("/Neeta_Chillore_Resume_Frontend_Developer.pdf", "_blank")
                            }
                          }}
                        >
                          <Download className="h-5 w-5" />
                          <span className="font-semibold">Download Resume</span>
                        </MagneticButton>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                    <CardDescription className="text-lg">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Project Collaboration"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <MagneticButton
                        type="submit"
                        className="w-full group flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="h-5 w-5" />
                      </MagneticButton>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-3 relative">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Neeta Chillore.
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Frontend Developer creating exceptional digital experiences with cutting-edge technologies and
                innovative design solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "http://github.com/Neeta005" },
                  { icon: Linkedin, href: "http://linkedin.com/in/neeta-chillore-907a64337" },
                  { icon: Mail, href: "mailto:neeta.chilloree@gmail.com" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-300 flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>neeta.chilloree@gmail.com</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 7038808473</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nashik, Maharashtra</span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
          // jfnjskdfnslkfj
            className="border-t border-gray-700 mt-12 pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-2">© 2024 Neeta Chillore. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Built with React.js, Next.js, Tailwind CSS, and Framer Motion ✨</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}


