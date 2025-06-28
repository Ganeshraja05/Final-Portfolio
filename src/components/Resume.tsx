import React, { useRef } from 'react';
import { Download, Eye, Printer, Share2, FileText, Calendar, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import resume from '../Resume.pdf'; // Adjust the path as necessary
const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(resumeRef, { threshold: 0.1 });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Ganeshraja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
  const pdfWindow = window.open(resume, '_blank');
  if (pdfWindow) {
    pdfWindow.onload = () => {
      pdfWindow.focus();
      pdfWindow.print();
    };
  }
};

  const handleShare = async () => {
  // Try to share the PDF file if supported
  if (navigator.canShare && window.fetch) {
    try {
      const response = await fetch(resume);
      const blob = await response.blob();
      const file = new File([blob], 'Ganeshraja_Resume.pdf', { type: blob.type });

      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Ganeshraja R - Resume',
          text: 'Check out my professional resume',
          files: [file],
        });
        return;
      }
    } catch (e) {
      // fallback to URL sharing below
    }
  }

  // Fallback: share the PDF URL
  if (navigator.share) {
    navigator.share({
      title: 'Ganeshraja R - Resume',
      text: 'Check out my professional resume',
      url: resume,
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(resume);
    alert('Resume link copied to clipboard!');
  }
};

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={resumeRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my professional journey, skills, and achievements
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={handleDownload}
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl no-print"
            >
              <Printer size={20} className="mr-2" />
              Print
            </button>
            <button
              onClick={handleShare}
              className="flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-300 no-print"
            >
              <Share2 size={20} className="mr-2" />
              Share
            </button>
          </div>

          {/* Resume Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Ganeshraja R</h1>
                <p className="text-xl mb-6 opacity-90">Full Stack Developer</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail size={16} className="mr-2" />
                    ganeshrajar2005@gmail.com
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone size={16} className="mr-2" />
                    +91 9940082233
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    Coimbatore,Tamil Nadu, India
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Innovative and results-driven Full Stack Developer with hands-on experience in building scalable web applications using the MERN stack. Passionate about integrating AI technologies into real-world systems, with contributions to cutting-edge projects like Eliza OS, MCP (Modal Context Protocol), and autonomous AI agents. Skilled in REST API development, UI/UX optimization, and secure authentication. Adept at problem-solving, cross-functional collaboration, and leveraging modern tools to deliver impactful digital solutions. Seeking to drive innovation at the intersection of web development and AI systems engineering.
                </p>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                    <p className="text-gray-600 dark:text-gray-400">React, HTML5, CSS3, Tailwind CSS , JavaScript</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
                    <p className="text-gray-600 dark:text-gray-400">Node.js, Python, Express.js, Java</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database</h3>
                    <p className="text-gray-600 dark:text-gray-400">MongoDB,MySQL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h3>
                    <p className="text-gray-600 dark:text-gray-400">Jenkins,Service Now,Git</p>
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Research Intern</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">ChainAim</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">April 2025- May 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Worked on Eliza OS, an AI agent development operating system designed for modular, context-aware agent deployment and interaction.</li>
                      <li>Contributed to MCP (Modal Context Protocol), enabling agents to maintain contextual memory and perform dynamic multi-modal reasoning.</li>
                      <li>AI agents with adaptive behavior, real-time decision-making, and modal context awareness across varied environments.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer Intern</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Selgosys</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">May 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Developed MERN stack applications using React.js, Node.js, Express.js, and MongoDB.</li>
                      <li>Created secure RESTful APIs with JWT authentication and role-based access control.</li>
                      <li>Integrated third-party APIs and collaborated using Git/GitHub.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Education
                </h2>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science With Cognitive Systems</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Sri Krishna Arts and Science College</p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">2023 - 2026</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">CGPA: 7.7/10 •Winner of Internal Hackathons (2023 & 2024)</p>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-600 pb-2">
                  Certifications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Scrum Master Certication</h3>
                    <p className="text-gray-600 dark:text-gray-400">Coursera • 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Meta Frontend Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Coursera • 2024</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Resume Preview Notice */}
          <div className="text-center mt-8 no-print">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              This is an interactive preview. Download the PDF for the complete formatted version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;