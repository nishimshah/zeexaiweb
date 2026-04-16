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
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('https://zeex-website-backend-1.onrender.com/api/career-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          coverLetter: '',
          resume: null
        });
        setShowApplicationForm(false);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#1E3A8A] overflow-hidden">
        <div className="container-default relative z-10 px-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-white/20"
          >
            JOIN THE AI REVOLUTION
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Build the Future of <span className="text-[#2563EB]">AI Security</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            We're building mission-critical intelligence. Join a team of visionaries dedicated to industrial-grade AI excellence.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowApplicationForm(true)}
            className="px-12 py-6 bg-white text-[#1E3A8A] font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-all uppercase tracking-widest text-base"
          >
            See Openings
          </Button>
        </div>
      </section>

      <div className="container-default px-8 py-24">
        {/* Company Culture Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-sm font-bold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] mb-6">Industrial Intensity</h2>
            <p className="text-lg text-[#475569]">Our culture is built on technical precision, aggressive innovation, and enterprise reliability.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F4F7FB] text-[#1E3A8A] rounded-xl flex items-center justify-center mb-8 shadow-inner text-3xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Innovation First</h3>
              <p className="text-[#475569] leading-relaxed">Work on cutting-edge AI technologies and be part of groundbreaking industrial innovations.</p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F4F7FB] text-[#1E3A8A] rounded-xl flex items-center justify-center mb-8 shadow-inner text-3xl">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Global Impact</h3>
              <p className="text-[#475569] leading-relaxed">Your engineering will protect thousands of businesses and critical infrastructures worldwide.</p>
            </div>
            <div className="bg-white p-10 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F4F7FB] text-[#1E3A8A] rounded-xl flex items-center justify-center mb-8 shadow-inner text-3xl">
                👥
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Top 1% Talent</h3>
              <p className="text-[#475569] leading-relaxed">Join a team of elite AI designers and engineers who are defining the next era of tech.</p>
            </div>
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-sm font-bold mb-4">
                OPPORTUNITIES
              </span>
              <h2 className="text-4xl font-black text-[#0F172A]">Open Positions</h2>
            </div>
            <p className="text-[#475569] max-w-md">Filter by department or location to find your perfect fit in our growing AI ecosystem.</p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-6">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-white rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] p-8 shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{job.title}</h3>
                    <span className="px-3 py-1 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-widest">{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[#475569] font-medium">
                    <div className="flex items-center gap-1.5"><span className="text-[#1E3A8A]">●</span> {job.department}</div>
                    <div className="flex items-center gap-1.5"><span className="text-[#1E3A8A]">●</span> {job.location}</div>
                    <div className="flex items-center gap-1.5"><span className="text-[#1E3A8A]">●</span> {job.experience}</div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData({ ...formData, position: job.title });
                      setShowApplicationForm(true);
                    }}
                    className="px-8 py-6 bg-[#1E3A8A] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-all uppercase tracking-widest text-sm"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 bg-[#F4F7FB] text-[#1E3A8A] rounded-full text-sm font-bold mb-4">
              PERKS & BENEFITS
            </span>
            <h2 className="text-4xl font-black text-[#0F172A] mb-6">Designed for Performance</h2>
            <p className="text-lg text-[#475569]">We provide the environment and resources for you to do the best work of your life.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Campus Access', desc: 'Get access to IIT Madras campus during working hours' },
              { icon: '🤝', title: 'Elite Network', desc: 'Build a strong network with AI industry leaders and peers' },
              { icon: '📜', title: 'Certification', desc: 'Receive authoritative certificates of employment' },
              { icon: '💼', title: 'Industrial Skills', desc: 'Gain experience with real-world enterprise infrastructure' },
              { icon: '☁️', title: 'Cloud Tech', desc: 'Work directly on AWS, GCP, and proprietary AI clusters' },
              { icon: '🚀', title: 'Rapid Growth', desc: 'Aggressive career progression and technical mentorship' },
              { icon: '🏠', title: 'Remote Options', desc: 'Distributed-first policy for flexible working styles' },
              { icon: '🎉', title: 'Team Sessions', desc: 'High-intensity hackathons and social strategy events' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-[#E2E8F0] text-center shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl border border-[#E2E8F0] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tighter">Application</h2>
                  <p className="text-[#475569] font-medium mt-1">Applying for: <span className="text-[#1E3A8A]">{selectedJob?.title || 'General Application'}</span></p>
                </div>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F4F7FB] text-[#0F172A] transition-all border border-[#E2E8F0]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Phone Number</Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Position *</Label>
                    <Input id="position" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} required className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Years of Experience</Label>
                  <Input id="experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} placeholder="e.g., 3-5 years" className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Cover Letter *</Label>
                  <Textarea id="coverLetter" value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} placeholder="Explain your industrial AI vision..." rows={4} required className="border-[#E2E8F0] focus:ring-[#1E3A8A]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-[#0F172A] font-bold uppercase tracking-widest text-xs">Resume/CV *</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="border-[#E2E8F0] cursor-pointer" />
                  <p className="text-[10px] text-[#475569] mt-1 italic">Forms accepted: PDF, DOC, DOCX</p>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="flex-1 py-6 bg-[#1E3A8A] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-all uppercase tracking-widest">
                    Submit Application
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowApplicationForm(false)} className="flex-1 py-6 border-[#E2E8F0] text-[#0F172A] font-bold rounded-lg hover:bg-[#F4F7FB] uppercase tracking-widest">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers; 