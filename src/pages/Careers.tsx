import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useToast } from '../hooks/use-toast';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in digital marketing campaigns, social media management, and brand outreach for Zeex AI.',
    requirements: [
      'Interest in marketing, communications, or business',
      'Familiarity with social media platforms',
      'Good written and verbal communication skills',
      'Creative mindset and willingness to learn'
    ],
    benefits: [
      'Mentorship from marketing professionals',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '2',
    title: 'Video Editing Intern',
    department: 'Media',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the creation and editing of promotional, training, and product videos for Zeex AI.',
    requirements: [
      'Basic experience with video editing software (e.g., Premiere Pro, Final Cut, DaVinci)',
      'Creativity and attention to detail',
      'Portfolio or sample work (if available)',
      'Ability to work with deadlines'
    ],
    benefits: [
      'Mentorship from creative team',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '3',
    title: 'Computer Vision Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Work on computer vision projects, data collection, and model evaluation for Zeex AI’s products.',
    requirements: [
      'Basic knowledge of Python and OpenCV',
      'Interest in AI, ML, or computer vision',
      'Analytical and problem-solving skills',
      'Eagerness to learn and experiment'
    ],
    benefits: [
      'Mentorship from AI engineers',
      'Access to latest AI tools and resources',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '4',
    title: 'Data Annotation/Analytics Intern',
    department: 'Data',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in annotating, cleaning, and analyzing data for AI model training and validation.',
    requirements: [
      'Attention to detail and patience',
      'Basic understanding of data and spreadsheets',
      'Interest in AI and data science',
      'Ability to follow instructions and meet deadlines'
    ],
    benefits: [
      'Mentorship from data science team',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '5',
    title: 'Business Development Intern',
    department: 'Business',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the business team in lead generation, market research, and client outreach.',
    requirements: [
      'Interest in business, sales, or entrepreneurship',
      'Good communication and research skills',
      'Self-motivated and proactive attitude',
      'Ability to work independently and in a team'
    ],
    benefits: [
      'Mentorship from business leaders',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '6',
    title: 'AI Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Contribute to AI model development, testing, and deployment for Zeex AI’s core products.',
    requirements: [
      'Basic knowledge of Python and machine learning libraries',
      'Interest in AI/ML research and applications',
      'Strong analytical and problem-solving skills',
      'Eagerness to learn and collaborate'
    ],
    benefits: [
      'Mentorship from senior AI engineers',
      'Access to real-world AI projects',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '7',
    title: 'Backend Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in building and maintaining scalable backend services and APIs for Zeex AI’s platform.',
    requirements: [
      'Basic knowledge of Node.js, Python, or similar backend languages',
      'Understanding of REST APIs and databases',
      'Problem-solving mindset',
      'Ability to work in a team'
    ],
    benefits: [
      'Mentorship from backend engineers',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '8',
    title: 'Frontend Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Work on user interface development using React and modern web technologies.',
    requirements: [
      'Basic knowledge of React, JavaScript/TypeScript, and CSS',
      'Interest in UI/UX design',
      'Attention to detail',
      'Willingness to learn new frameworks'
    ],
    benefits: [
      'Mentorship from frontend developers',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '9',
    title: 'Full Stack Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Gain hands-on experience in both frontend and backend development for Zeex AI’s products.',
    requirements: [
      'Basic knowledge of web development (React, Node.js, etc.)',
      'Understanding of databases and REST APIs',
      'Problem-solving and communication skills',
      'Eagerness to work across the stack'
    ],
    benefits: [
      'Mentorship from full stack engineers',
      'Exposure to end-to-end product development',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '10',
    title: 'Cloud Engineering Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the deployment and management of cloud infrastructure for Zeex AI’s scalable solutions.',
    requirements: [
      'Interest in cloud platforms (AWS, GCP, Azure)',
      'Basic understanding of DevOps or cloud tools',
      'Willingness to learn about CI/CD and automation',
      'Team player attitude'
    ],
    benefits: [
      'Mentorship from cloud engineers',
      'Hands-on experience with cloud technologies',
      'Certificate and letter of recommendation'
    ]
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('coverLetter', formData.coverLetter);
      if (formData.resume) formDataToSend.append('resume', formData.resume);

      const response = await fetch('https://zeex-website-backend-1.onrender.com/api/career-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        toast({ title: "Application Submitted!" });
        setFormData({ name: '', email: '', phone: '', position: '', experience: '', coverLetter: '', resume: null });
        setShowApplicationForm(false);
      } else {
        toast({ title: "Error", description: result.error, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Submission failed.", variant: "destructive" });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-32 pb-24 text-center">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="container-default relative z-10 px-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#2563EB] backdrop-blur-sm mb-8 border border-white/10"
            >
              JOIN THE AI REVOLUTION
            </motion.div>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] uppercase tracking-tighter px-2">
              BUILD THE FUTURE OF <br className="hidden sm:block" /><span className="text-[#2563EB]">AI SECURITY</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We're building mission-critical intelligence. Join a team of visionaries dedicated to industrial-grade AI excellence.
            </p>
            <button 
              onClick={() => {
                const el = document.getElementById('openings');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-6 bg-[#2563EB] text-white font-black rounded-2xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
            >
              See Openings
            </button>
          </div>
        </section>

        <div className="container-default px-8 py-32">
          {/* Culture Section */}
          <div className="mb-40">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-8">
                OUR VALUES
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-none">
                INDUSTRIAL <br /><span className="text-[#2563EB]">INTENSITY</span>
              </h2>
              <p className="text-xl text-[#475569] font-medium leading-relaxed">Our culture is built on technical precision, aggressive innovation, and enterprise reliability.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: '🚀', title: 'Innovation First', desc: 'Work on cutting-edge AI technologies and be part of groundbreaking industrial innovations.' },
                { icon: '🌍', title: 'Global Impact', desc: 'Your engineering will protect thousands of businesses and critical infrastructures worldwide.' },
                { icon: '👥', title: 'Top 1% Talent', desc: 'Join a team of elite AI designers and engineers who are defining the next era of tech.' }
              ].map((v, i) => (
                <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-[#E2E8F0] shadow-xl hover:border-[#2563EB] transition-all group">
                  <div className="w-20 h-20 bg-[#F4F7FB] text-4xl rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">{v.icon}</div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">{v.title}</h3>
                  <p className="text-[#475569] font-medium leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div id="openings" className="mb-40 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-8">
                  OPPORTUNITIES
                </span>
                <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] uppercase tracking-tighter leading-none">OPEN <br /><span className="text-[#2563EB]">POSITIONS</span></h2>
              </div>
              <p className="text-xl text-[#475569] max-w-md font-medium">Filter by department or location to find your perfect fit in our growing AI ecosystem.</p>
            </div>
            
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white rounded-[2.5rem] border border-[#E2E8F0] hover:border-[#2563EB] p-10 shadow-xl hover:shadow-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] uppercase tracking-tight group-hover:text-[#2563EB] transition-colors">{job.title}</h3>
                      <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-[#475569]">
                      <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2563EB]" /> {job.department}</span>
                      <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2563EB]" /> {job.location}</span>
                      <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2563EB]" /> {job.experience}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData({ ...formData, position: job.title });
                      setShowApplicationForm(true);
                    }}
                    className="px-10 py-5 bg-[#0a0e1a] text-white font-black rounded-2xl hover:bg-[#2563EB] transition-all uppercase tracking-widest text-xs"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-24 bg-[#0a0e1a] rounded-[4rem] text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2"></div>
             <div className="container-default px-12 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-24">
                <span className="inline-block px-4 py-2 bg-white/5 text-[#2563EB] rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-8">
                  PERKS & BENEFITS
                </span>
                <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">DESIGNED FOR <br /><span className="text-[#2563EB]">PERFORMANCE</span></h2>
                <p className="text-xl text-white/60 font-medium">We provide the environment and resources for you to do the best work of your life.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: '🎓', title: 'Campus Access', desc: 'Get access to IIT Madras campus during working hours' },
                  { icon: '🤝', title: 'Elite Network', desc: 'Build a strong network with AI industry leaders' },
                  { icon: '📜', title: 'Certification', desc: 'Receive authoritative certificates of employment' },
                  { icon: '💼', title: 'Industrial Skills', desc: 'Gain experience with real-world enterprise infra' }
                ].map((b, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:border-[#2563EB] transition-all text-center">
                    <div className="text-4xl mb-6">{b.icon}</div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-4">{b.title}</h3>
                    <p className="text-sm text-white/50 font-medium leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
             </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-[#0a0e1a]/90 backdrop-blur-xl flex items-center justify-center p-4 z-[9999]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="p-16 lg:p-20">
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h2 className="text-4xl font-black text-[#0F172A] uppercase tracking-tighter">Application</h2>
                    <p className="text-xl text-[#2563EB] font-black uppercase tracking-widest mt-2">{selectedJob?.title || 'General Entry'}</p>
                  </div>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl hover:bg-red-50 text-[#0F172A] hover:text-red-500 transition-all border border-[#E2E8F0]"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">FULL IDENTITY</Label>
                      <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-16 rounded-2xl bg-[#F4F7FB] border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">SECURE EMAIL</Label>
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-16 rounded-2xl bg-[#F4F7FB] border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">PHONE LINK</Label>
                      <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-16 rounded-2xl bg-[#F4F7FB] border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">OPERATIONAL YEARS</Label>
                      <Input value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} placeholder="e.g., 2+ years" className="h-16 rounded-2xl bg-[#F4F7FB] border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">MISSION STATEMENT</Label>
                    <Textarea value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} placeholder="Why should you join our core security team?..." rows={4} required className="rounded-2xl bg-[#F4F7FB] border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB] resize-none" />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest ml-1">TECHNICAL DOSSIER (RESUME)</Label>
                    <div className="relative group">
                      <Input type="file" onChange={handleFileChange} required className="h-20 rounded-2xl border-2 border-dashed border-[#E2E8F0] group-hover:border-[#2563EB] cursor-pointer flex items-center justify-center pt-6 pl-8" />
                    </div>
                     <p className="text-[10px] font-bold text-[#475569] uppercase tracking-widest mt-2 ml-1">Accepted formats: PDF, DOCX</p>
                  </div>

                  <button type="submit" className="w-full py-6 bg-[#2563EB] text-white font-black rounded-2xl hover:bg-blue-700 shadow-2xl transition-all uppercase tracking-widest text-sm">
                    SUBMIT APPLICATION
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};


export default Careers; 