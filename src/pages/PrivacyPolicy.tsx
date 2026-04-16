
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Shield, Eye, Lock, Users, FileText, Mail, MapPin, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout showFooter={false}>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: October 2025"
      />

      <div className="bg-white py-24">
        <div className="container-default px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <div className="bg-[#F4F7FB] rounded-2xl p-12 mb-16 border border-[#E2E8F0]">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">Enterprise Privacy Architecture</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    At Zeex AI, data integrity and privacy are mission-critical. This protocol outlines how we manage, encrypt, and secure intelligence collected through our industrial AI services.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-white rounded-xl p-10 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-lg flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Intelligence Collection</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 uppercase tracking-wider">Organizational Data</h3>
                    <p className="text-[#475569] leading-relaxed">
                      We collect necessary enterprise credentials, including administrative contact information and operational metadata required for secure system deployment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 uppercase tracking-wider">Technical Metadata</h3>
                    <p className="text-[#475569] leading-relaxed">
                      Our infrastructure automatically logs technical parameters: encryption handshakes, node identifiers, network handshake protocols, and system health telemetry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-xl p-10 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-lg flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Data Utilization</h2>
                </div>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <ul className="grid md:grid-cols-2 gap-4 text-[#475569] font-medium">
                    <li className="flex items-start gap-3 p-4 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                      <span className="text-[#2563EB] mt-1">●</span>
                      <span>Infrastructure optimization and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                      <span className="text-[#2563EB] mt-1">●</span>
                      <span>Technical support and system updates</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                      <span className="text-[#2563EB] mt-1">●</span>
                      <span>Security threat detection and automated response</span>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-[#F4F7FB] rounded-lg border border-[#E2E8F0]">
                      <span className="text-[#2563EB] mt-1">●</span>
                      <span>Regulatory and industrial compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-xl p-10 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-lg flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Secure Disclosure</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-[#475569] leading-relaxed">
                    Zeex AI operates on a strictly need-to-know basis. Data is only shared with authorized secondary processors under rigorous NDA protocols for mission-essential operations.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-[#0F172A] rounded-2xl p-12 border border-[#E2E8F0] text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">Registry Oversight</h2>
                </div>
                
                <p className="text-white/60 mb-10 text-lg">
                  Direct all privacy inquiries to our compliance registry:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                      <div className="text-sm font-bold uppercase tracking-widest">
                        <p className="text-white">Zeex AI HQ</p>
                        <p className="text-white/40">IIT Madras Research Park, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#2563EB]" />
                    <a href="mailto:compliance@zeexai.com" className="text-white hover:text-[#2563EB] transition-colors font-black uppercase tracking-widest">
                      compliance@zeexai.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
