
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock blog post data
const blogPosts = {
  'ai-advancements': {
    title: 'AI Advancements in Modern Surveillance',
    date: 'April 15, 2025',
    readTime: '10 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868',
    category: 'Technology',
    content: `
      <p class="lead">Artificial intelligence (AI) is not just a buzzword—it's the driving force behind a new era of smart, proactive, and highly effective surveillance. In this article, we explore how AI is revolutionizing security, the key technologies involved, and what it means for organizations and society.</p>
      
      <h2>Introduction: The Shift from Passive to Proactive Security</h2>
      <p>Traditional surveillance systems were largely passive, relying on human operators to monitor video feeds and respond to incidents after the fact. Today, AI-powered surveillance is transforming this paradigm. Modern systems can detect threats in real time, analyze complex behaviors, and even predict incidents before they occur.</p>
      
      <h2>How AI is Transforming Surveillance</h2>
      <ul>
        <li><strong>Real-Time Threat Detection:</strong> AI algorithms can instantly identify suspicious activity, such as loitering, trespassing, or abandoned objects, and trigger alerts for immediate response.</li>
        <li><strong>Automated Video Analysis:</strong> Machine learning models analyze thousands of hours of footage, flagging only relevant events and reducing operator fatigue.</li>
        <li><strong>Facial and Object Recognition:</strong> Advanced computer vision enables accurate identification of people, vehicles, and objects, even in crowded or low-light environments.</li>
        <li><strong>Behavioral Analytics:</strong> AI can learn normal patterns of movement and quickly spot anomalies, such as someone entering a restricted area or moving against the flow of a crowd.</li>
      </ul>
      
      <h2>Case Study: Zeex AI in Action</h2>
      <p>One of our clients, a large metropolitan transit authority, faced challenges with vandalism and unauthorized access in their subway system. By deploying Zeex AI’s surveillance platform, they achieved:</p>
      <ul>
        <li>40% reduction in security incidents within six months</li>
        <li>Automated alerts for after-hours intrusions, enabling rapid response</li>
        <li>Improved passenger safety and peace of mind</li>
      </ul>
      <blockquote><p>“Zeex AI’s real-time analytics have transformed our approach to security. We’re no longer reacting to problems—we’re preventing them.” — Transit Security Manager</p></blockquote>
      
      <h2>Key Technologies Powering AI Surveillance</h2>
      <h3>1. Deep Learning & Computer Vision</h3>
      <p>Deep learning models, trained on millions of images and video frames, allow AI systems to recognize faces, license plates, and even subtle gestures. This technology is the backbone of modern video analytics.</p>
      <h3>2. Edge Computing</h3>
      <p>Processing data directly on cameras or local devices (rather than in the cloud) reduces latency and bandwidth usage. Edge AI enables instant decision-making, which is critical for time-sensitive security applications.</p>
      <h3>3. Data Fusion</h3>
      <p>Combining video, audio, thermal, and environmental sensor data gives a holistic view of security events. AI can correlate these data streams to provide richer, more accurate insights.</p>
      
      <h2>Privacy and Ethics: Building Trust in AI Surveillance</h2>
      <p>With great power comes great responsibility. At Zeex AI, we prioritize privacy and ethical use of technology. Our systems include:</p>
      <ul>
        <li>Automatic face blurring for bystanders</li>
        <li>End-to-end encryption of all video and data</li>
        <li>Granular access controls and audit trails</li>
        <li>Compliance with GDPR, CCPA, and other global privacy standards</li>
      </ul>
      <p>We believe transparency and user control are essential for building trust in AI-powered security.</p>
      
      <h2>Future Directions: Predictive and Autonomous Security</h2>
      <p>The next frontier for AI surveillance is predictive analytics—using historical data to forecast potential threats and allocate resources proactively. We’re also seeing the rise of autonomous response systems, such as drones and robots, that can investigate incidents or even intervene when necessary.</p>
      
      <h2>Actionable Takeaways for Organizations</h2>
      <ul>
        <li>Invest in AI-powered surveillance to move from reactive to proactive security</li>
        <li>Choose solutions that prioritize privacy and ethical use</li>
        <li>Train staff to interpret AI-generated insights and respond effectively</li>
        <li>Continuously review and update security policies as technology evolves</li>
      </ul>
      
      <h2>Summary: The Zeex AI Advantage</h2>
      <p>AI advancements are setting a new standard for surveillance. With Zeex AI, organizations gain a partner committed to innovation, ethics, and real-world results. Our solutions empower you to protect people, assets, and reputations—today and in the future.</p>
      <div style="margin-top:2rem; padding:1.5rem; background:#f5f7ff; border-radius:0.75rem; border-left:4px solid #6366f1;">
        <strong>Want to learn more?</strong> <br />
        <a href="/contact" style="color:#3730a3; text-decoration:underline;">Contact Zeex AI for a personalized security assessment.</a>
      </div>
    `
  },
  'privacy-security': {
    title: 'Balancing Privacy with Security in AI Surveillance',
    date: 'April 8, 2025',
    readTime: '6 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1563790617029-80a94f39b35e',
    category: 'Privacy',
    content: `
      <p class="lead">How can we protect people while respecting their privacy? AI surveillance must strike the right balance.</p>
      <p>With the rise of AI-powered security, privacy concerns are more important than ever. At Zeex AI, we believe robust security and privacy can coexist through thoughtful design and transparent practices.</p>
      <h2>Privacy-by-Design</h2>
      <ul>
        <li>Data minimization: Only collect what’s necessary.</li>
        <li>Encryption: Secure all sensitive data in transit and at rest.</li>
        <li>Access controls: Limit who can view or export surveillance data.</li>
      </ul>
      <h2>Transparency and Compliance</h2>
      <p>We comply with global privacy regulations (GDPR, CCPA) and provide clear audit trails for all system interactions. Our clients can configure privacy settings to meet their unique needs.</p>
      <blockquote><p>Trust is built on transparency. Zeex AI empowers organizations to protect people and their rights.</p></blockquote>
      <h2>Conclusion</h2>
      <p>Balancing privacy and security is an ongoing journey. Zeex AI is dedicated to advancing both, ensuring safety and trust for all stakeholders.</p>
    `
  },
  'future-trends': {
    title: '5 Future Trends in AI Security for 2025',
    date: 'April 1, 2025',
    readTime: '7 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    category: 'Trends',
    content: `
      <p class="lead">AI security is evolving rapidly. Here are five trends that will shape the future of surveillance in 2025 and beyond.</p>
      <h2>1. Predictive Analytics</h2>
      <p>AI will move from reactive to predictive, identifying risks before they escalate and enabling proactive interventions.</p>
      <h2>2. Multimodal Sensing</h2>
      <p>Combining video, audio, thermal, and environmental sensors for a holistic view of security events.</p>
      <h2>3. Autonomous Response</h2>
      <p>AI-driven systems will trigger automated responses—like locking doors or alerting authorities—without human intervention.</p>
      <h2>4. Privacy-Enhancing Tech</h2>
      <p>New algorithms will anonymize data and protect identities, making AI security more privacy-friendly.</p>
      <h2>5. Edge AI</h2>
      <p>Processing data on-device for faster, more secure, and scalable surveillance solutions.</p>
      <blockquote><p>Zeex AI is at the forefront of these trends, delivering next-generation security for a safer world.</p></blockquote>
      <h2>Conclusion</h2>
      <p>The future of AI security is bright, with innovation driving both safety and privacy. Zeex AI is ready to lead the way.</p>
    `
  },
  'facial-recognition': {
    title: 'Facial Recognition: Myths and Realities',
    date: 'March 25, 2025',
    readTime: '6 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506',
    category: 'Technology',
    content: `
      <p class="lead">Facial recognition is often misunderstood. Let’s separate fact from fiction and explore how Zeex AI uses this technology responsibly.</p>
      <h2>Myth 1: Facial Recognition is Always Invasive</h2>
      <p>Reality: With privacy controls and ethical use, facial recognition can enhance security without violating rights.</p>
      <h2>Myth 2: It’s 100% Accurate</h2>
      <p>Reality: No system is perfect. Zeex AI uses advanced models and continuous learning to minimize errors and bias.</p>
      <h2>Myth 3: It’s Only for Law Enforcement</h2>
      <p>Reality: Businesses, schools, and smart cities use facial recognition for access control, attendance, and safety.</p>
      <h2>Responsible Use at Zeex AI</h2>
      <ul>
        <li>Consent-based deployment</li>
        <li>Bias mitigation and regular audits</li>
        <li>Transparency with users and stakeholders</li>
      </ul>
      <blockquote><p>Facial recognition, when used ethically, is a powerful tool for good. Zeex AI leads with responsibility and care.</p></blockquote>
      <h2>Conclusion</h2>
      <p>Understanding the realities of facial recognition helps build trust and unlocks its true potential for society.</p>
    `
  },
  'smart-home': {
    title: 'Integrating AI Security into Your Smart Home',
    date: 'March 18, 2025',
    readTime: '7 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    category: 'Residential',
    content: `
      <p class="lead">Smart homes are safer and smarter with AI-powered security. Here’s how to get started.</p>
      <h2>Why AI for Smart Homes?</h2>
      <ul>
        <li>24/7 intelligent monitoring</li>
        <li>Instant alerts for unusual activity</li>
        <li>Integration with smart locks, lights, and alarms</li>
      </ul>
      <h2>Steps to Integrate AI Security</h2>
      <ol>
        <li>Choose compatible AI cameras and sensors</li>
        <li>Set up a secure home network</li>
        <li>Configure alerts and automation rules</li>
        <li>Regularly update firmware and review access logs</li>
      </ol>
      <h2>Zeex AI’s Smart Home Solutions</h2>
      <p>Our AI platform offers seamless integration, user-friendly controls, and robust privacy features for homeowners.</p>
      <blockquote><p>Empower your home with Zeex AI—security that’s always learning and adapting to your needs.</p></blockquote>
      <h2>Conclusion</h2>
      <p>AI security is the future of smart homes. Zeex AI makes it easy, effective, and secure for every household.</p>
    `
  },
  'case-study': {
    title: 'Case Study: How ZeexAI Protected a Major Retail Chain',
    date: 'March 10, 2025',
    readTime: '8 min read',
    author: 'Sujit Laware',
    authorTitle: 'CTO, Zeex AI',
    authorImage: 'https://i.ibb.co/RkdpxWpq/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture-2.png',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    category: 'Case Study',
    content: `
      <p class="lead">Discover how Zeex AI’s surveillance platform helped a national retailer reduce theft and improve safety across hundreds of stores.</p>
      <h2>Client Background</h2>
      <p>A major retail chain faced rising losses from theft and operational inefficiencies. They needed a scalable, intelligent security solution.</p>
      <h2>Zeex AI’s Approach</h2>
      <ul>
        <li>Deployed AI-powered cameras and analytics across all locations</li>
        <li>Integrated real-time alerts with store management systems</li>
        <li>Trained staff on using AI insights for loss prevention</li>
      </ul>
      <h2>Results</h2>
      <ul>
        <li>65% reduction in theft incidents</li>
        <li>Faster response to suspicious activity</li>
        <li>Improved customer and staff safety</li>
      </ul>
      <blockquote><p>“Zeex AI’s solution paid for itself in under a year. We now have peace of mind and better control over our operations.” — Retail Client</p></blockquote>
      <h2>Conclusion</h2>
      <p>This case study shows the real-world impact of Zeex AI’s technology. We’re proud to help businesses protect assets and people with cutting-edge AI security.</p>
    `
  }
};

// NewsletterSignup component (copied from Blog.tsx)
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    try {
      const res = await fetch('https://zeex-website-backend-1.onrender.com/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Subscription failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center mt-12 justify-center">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 px-6 py-4 rounded-lg border border-blue-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow transition-colors"
      >
        Subscribe
      </button>
      {status === 'success' && (
        <span className="text-green-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
      {status === 'error' && (
        <span className="text-red-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
    </form>
  );
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts[postId as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-default py-32 text-center px-8">
          <h1 className="text-4xl font-black text-[#0F172A] mb-6 uppercase tracking-tight">Post Not Found</h1>
          <p className="text-xl text-[#475569] mb-12">The intelligence report you are looking for has been moved or archived.</p>
          <Link to="/blog" className="px-10 py-5 bg-[#1E3A8A] text-white font-bold rounded-lg uppercase tracking-widest hover:bg-[#2563EB] transition-all">
            Return to Intelligence
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showFooter={false}>
      {/* Blog Hero Section */}
      <div className="relative min-h-[40vh] md:min-h-[50vh] flex items-end bg-[#0F172A] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        <div className="container-default relative z-10 w-full pb-16 pt-32 px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-[#2563EB] font-bold uppercase tracking-widest text-xs mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Intelligence Feed
            </Link>
            <h1 className="text-white mb-8 font-black text-4xl md:text-6xl leading-tight uppercase tracking-tighter">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-white/70 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#2563EB]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#2563EB]" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#2563EB]"
                />
                <div className="text-left">
                  <p className="text-white">{post.author}</p>
                  <p className="text-white/40 text-[10px]">{post.authorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog post content */}
      <div className="bg-white py-24">
        <div className="container-default px-8">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-16 shadow-sm overflow-hidden">
              <style>{`
                .industrial-prose h1, .industrial-prose h2, .industrial-prose h3 {
                  color: #0F172A;
                  font-weight: 900;
                  text-transform: uppercase;
                  letter-spacing: -0.025em;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                }
                .industrial-prose h2 { font-size: 2rem; border-left: 4px solid #1E3A8A; padding-left: 1.5rem; }
                .industrial-prose h3 { font-size: 1.5rem; }
                .industrial-prose p.lead {
                  font-size: 1.4rem;
                  color: #1E3A8A;
                  font-weight: 700;
                  line-height: 1.6;
                  margin-bottom: 2.5rem;
                }
                .industrial-prose p {
                  font-size: 1.125rem;
                  color: #475569;
                  line-height: 1.8;
                  margin-bottom: 1.5rem;
                }
                .industrial-prose ul {
                  margin-bottom: 2rem;
                  list-style-type: none;
                }
                .industrial-prose li {
                  position: relative;
                  padding-left: 1.5rem;
                  margin-bottom: 0.75rem;
                  color: #475569;
                  font-size: 1.125rem;
                }
                .industrial-prose li::before {
                  content: "●";
                  color: #2563EB;
                  position: absolute;
                  left: 0;
                  font-size: 0.8rem;
                }
                .industrial-prose blockquote {
                  background: #F4F7FB;
                  border-radius: 1rem;
                  padding: 2.5rem;
                  margin: 3rem 0;
                  position: relative;
                }
                .industrial-prose blockquote p {
                  color: #1E3A8A;
                  font-style: italic;
                  font-size: 1.5rem;
                  font-weight: 700;
                  margin-bottom: 0;
                }
                .industrial-prose strong { color: #0F172A; }
              `}</style>
              <div className="industrial-prose">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Share section */}
              <div className="mt-20 pt-12 border-t border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h4 className="text-xs font-black text-[#0F172A] uppercase tracking-widest mb-4">Share Intelligence</h4>
                  <div className="flex gap-4">
                    <button
                      className="w-12 h-12 flex items-center justify-center bg-[#F4F7FB] text-[#1E3A8A] rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all border border-[#E2E8F0]"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(post.title);
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`,'_blank','noopener,noreferrer');
                      }}
                    >
                      <Facebook size={20} />
                    </button>
                    <button
                      className="w-12 h-12 flex items-center justify-center bg-[#F4F7FB] text-[#1E3A8A] rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all border border-[#E2E8F0]"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(post.title);
                        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`,'_blank','noopener,noreferrer');
                      }}
                    >
                      <Twitter size={20} />
                    </button>
                    <button
                      className="w-12 h-12 flex items-center justify-center bg-[#F4F7FB] text-[#1E3A8A] rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all border border-[#E2E8F0]"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const title = encodeURIComponent(post.title);
                        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,'_blank','noopener,noreferrer');
                      }}
                    >
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-[#F4F7FB] p-8 rounded-xl border border-[#E2E8F0] flex items-center gap-6 max-w-sm">
                  <img src={post.authorImage} alt={post.author} className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="text-lg font-black text-[#0F172A] uppercase tracking-tighter">{post.author}</h4>
                    <p className="text-xs font-bold text-[#1E3A8A] mb-2">{post.authorTitle}</p>
                    <p className="text-[10px] text-[#475569] leading-relaxed">Technical oversight and strategic AI architecture at Zeex AI.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Newsletter Integrated */}
            <div className="mt-16 bg-[#1E3A8A] rounded-2xl p-12 text-center text-white">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-[10px] font-black tracking-widest border border-white/20 uppercase mb-6">
                INTEL SUBSCRIPTION
              </span>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Stay Ahead of the Curve</h3>
              <p className="text-white/60 mb-10 max-w-lg mx-auto">Get notified immediately when we publish new architectural breakdowns and technical insights.</p>
              <div className="max-w-md mx-auto">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
