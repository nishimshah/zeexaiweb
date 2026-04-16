
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { FileText, Shield, Users, Scale, AlertTriangle, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <Layout showFooter={false}>
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: October 2025"
      />

      <div className="bg-white py-24">
        <div className="container-default px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <div className="bg-[#F4F7FB] rounded-2xl p-12 mb-16 border border-[#E2E8F0]">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tight">System Access Protocols</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    By accessing Zeex AI infrastructure, you agree to comply with our enterprise operational standards. These terms define the legal framework for our partnership.
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
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Agreement Execution</h2>
                </div>
                
                <p className="text-[#475569] text-lg leading-relaxed">
                  Usage of Zeex AI services constitutes a formal execution of this agreement. Unauthorized attempts to bypass system security or reverse-engineer AI models are strictly prohibited and subject to legal intervention.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-xl p-10 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-lg flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">License & Attribution</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-[#475569] leading-relaxed">
                    Zeex AI grants a mission-specific, non-transferable license to utilize our surveillance intelligence. All proprietary models, neural architectures, and industrial designs remain the intellectual property of Zeex AI.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-xl p-10 border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-lg flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Operational Liability</h2>
                </div>
                
                <p className="text-[#475569] leading-relaxed">
                  While our AI systems provide high-precision intelligence, Zeex AI shall not be liable for secondary operational decisions made based on system alerts. Organizations retain full responsibility for their field response protocols.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-[#0F172A] rounded-2xl p-12 border border-[#E2E8F0] text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">Legal Oversight</h2>
                </div>
                
                <p className="text-white/60 mb-10 text-lg">
                  For formal legal communications or arbitration:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                      <div className="text-sm font-bold uppercase tracking-widest">
                        <p className="text-white">Zeex AI Legal Dept.</p>
                        <p className="text-white/40">IIT Madras Research Park, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#2563EB]" />
                    <a href="mailto:legal@zeexai.com" className="text-white hover:text-[#2563EB] transition-colors font-black uppercase tracking-widest">
                      legal@zeexai.com
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

export default TermsOfService;
