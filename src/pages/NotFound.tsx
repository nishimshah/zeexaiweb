import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Protocol breakdown at route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showFooter={false}>
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-8">
        <div className="container-default text-center">
          <div className="w-32 h-32 bg-[#F4F7FB] text-[#2563EB] rounded-[2rem] flex items-center justify-center mx-auto mb-12 shadow-xl border border-[#E2E8F0]">
            <ShieldAlert size={64} />
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter">404</h1>
          <h2 className="text-2xl md:text-4xl font-black text-[#2563EB] mb-8 uppercase tracking-tight">PROTOCOL BREAKDOWN</h2>
          <p className="text-xl text-[#475569] mb-16 max-w-xl mx-auto font-medium leading-relaxed italic">
            Target coordinate <span className="text-[#0F172A] font-black not-italic px-2 py-1 bg-[#F4F7FB] rounded-lg">[{location.pathname}]</span> could not be localized within our intelligence matrix.
          </p>
          <Link to="/" className="inline-flex items-center px-12 py-6 bg-[#0a0e1a] text-white font-black rounded-2xl hover:bg-[#2563EB] transition-all uppercase tracking-widest text-sm shadow-2xl">
            Reset Coordinates
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
