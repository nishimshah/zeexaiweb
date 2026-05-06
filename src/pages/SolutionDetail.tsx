import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { 
  Home, 
  Building, 
  MapPin, 
  ShoppingCart, 
  ArrowRight, 
  Check, 
  Shield, 
  Video, 
  Bell, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Wifi,
  Banknote,
  Factory,
  TrafficCone,
  Globe,
  Calendar,
  Bus,
  Wrench,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Service details data with all 6 services
const servicesDetails = {
  'retail-wholesale-high-risk': {
    title: 'Retail,Supermarkets & High Risk Shop Security',
    description: 'Comprehensive AI-powered security solutions for retail stores, wholesale markets, and high-risk shops to prevent theft and enhance safety.',
    icon: ShoppingCart,
    image: 'https://i.postimg.cc/7ZmGf9gq/bf33befc-36ac-46cf-b7e9-aa88ad14adfb-1-1-1.png',
    headerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
    benefits: [
      'Shoplifting prevention with AI behavior analysis',
      'POS monitoring for fraud detection',
      'High-risk item protection',
      'Employee safety features',
      'Inventory protection and tracking'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Retail & High-Risk Shop Security Reinvented</h2>
      <p class="mb-6">Retail environments and high-risk shops require specialized security solutions that address both theft prevention and employee safety. Our advanced AI surveillance systems are tailored to meet these unique challenges while providing business intelligence to improve operations.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Loss Prevention</h4>
          <p>Advanced analytics detect suspicious behavior patterns that may indicate theft or fraud.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Staff Protection</h4>
          <p>Monitor for safety incidents and ensure staff security during late hours.</p>
        </div>
      </div>
    `,
    features: [
      {
        id: 'smart-camera-integration',
        title: 'Smart Camera Integration',
        description: 'Comprehensive visual coverage of all retail areas with strategically placed AI cameras.',
        image: 'https://i.postimg.cc/k5QHQVgM/67611659-15e0-4ba4-abec-7ad895e47fc5.png'
      },
      {
        id: 'ai-theft-detection',
        title: 'AI Theft Detection',
        description: 'Real-time identification of shoplifting behaviors and suspicious activities.',
        image: 'https://i.ibb.co/qFVFQfHd/Whats-App-Image-2025-05-11-at-16-34-40-55f09077-1.jpg'
      },
      {
        id: 'pos-fraud-monitoring',
        title: 'POS Fraud Monitoring',
        description: 'Automated detection of transactional anomalies and employee theft patterns.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
      },
      {
        id: 'high-risk-protection',
        title: 'High-Risk Protection',
        description: 'Specialized monitoring for high-value merchandise areas.',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
      },
      {
        id: 'inventory-tracking',
        title: 'Inventory Tracking',
        description: 'Automated monitoring of inventory movement and stock levels.',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df'
      },
      {
        id: 'customer-analytics',
        title: 'Customer Analytics',
        description: 'Behavior analysis to improve store layout and customer experience.',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
      }
    ],
    recommendedServices: [
      {
        title: 'POS Fraud Detection',
        description: 'Advanced monitoring of point-of-sale systems to prevent employee theft.',
        icon: ShoppingCart
      },
      {
        title: 'Inventory Protection',
        description: 'Real-time tracking of high-value merchandise movement.',
        icon: Shield
      },
      {
        title: 'Staff Safety',
        description: 'Emergency alert systems for employee protection.',
        icon: Bell
      },
      {
        title: 'Customer Flow',
        description: 'Analytics to optimize store layout and reduce theft opportunities.',
        icon: MapPin
      },
      {
        title: 'After-Hours',
        description: '24/7 monitoring when the store is closed.',
        icon: Lock
      },
      {
        title: 'Integration',
        description: 'Seamless connection with existing retail systems.',
        icon: Cpu
      }
    ],
    workflow: [
      {
        title: 'Site Assessment',
        description: 'Comprehensive evaluation of your retail space to identify high-risk areas and security needs.',
        icon: '🔍'
      },
      {
        title: 'System Design',
        description: 'Customized security system design tailored to your store layout and merchandise value.',
        icon: '📐'
      },
      {
        title: 'AI Camera Installation',
        description: 'Strategic placement of smart cameras with behavior analysis capabilities.',
        icon: '📷'
      },
      {
        title: 'POS Integration',
        description: 'Connection with point-of-sale systems to monitor for fraudulent transactions.',
        icon: '💳'
      },
      {
        title: 'Staff Training',
        description: 'Comprehensive training for your team on using the security system effectively.',
        icon: '👨‍🏫'
      },
      {
        title: 'Ongoing Monitoring',
        description: '24/7 surveillance with real-time alerts and periodic system optimization.',
        icon: '👁️'
      }
    ],
    stats: [
      { value: '35%', label: 'Reduction in theft' },
      { value: '90%', label: 'Detection accuracy' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  // Complete updated 'banks-atms-financial' service object to replace in servicesDetails

'banks-atms-financial': {
  title: 'Banks, ATMs & Financial Institutions CCTV Surveillance',
  description: 'Advanced AI-powered CCTV surveillance solutions specifically designed for banks, ATMs, and financial institutions with real-time threat detection and fraud prevention.',
  icon: Banknote,
  image: 'https://i.ibb.co/nqx2CHFR/bank.jpg',
  headerImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
  benefits: [
    'AI-powered threat detection and behavior analysis',
    'Advanced ATM skimming and tampering protection', 
    '24/7 real-time surveillance monitoring',
    'Facial recognition and customer verification',
    'Integrated alarm systems with instant alerts',
    'Compliance with banking security regulations'
  ],
  content: `
    <h2 class="text-3xl font-bold mb-6">Advanced CCTV Surveillance for Financial Security</h2>
    <p class="mb-6">Financial institutions face unique security challenges that require specialized surveillance solutions. Our AI-powered CCTV systems provide comprehensive protection for banks, ATMs, and financial facilities with intelligent threat detection, real-time monitoring, and advanced analytics designed specifically for the banking sector.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">ATM Surveillance & Protection</h4>
        <p>Advanced anti-skimming detection, facial recognition, and behavioral analysis to protect ATM users and prevent fraud attempts.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Branch Security Monitoring</h4>
        <p>Comprehensive surveillance coverage of banking halls, teller areas, and customer zones with real-time threat assessment.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Vault & Cash Management</h4>
        <p>High-security monitoring of vault areas, cash handling zones, and safe deposit box areas with multi-layer protection.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Perimeter & Entrance Security</h4>
        <p>Advanced surveillance of building perimeters, parking areas, and entry points with license plate recognition.</p>
      </div>
    </div>


  `,
  features: [
    {
      id: 'atm-surveillance',
      title: 'ATM Surveillance Systems',
      description: 'Comprehensive CCTV coverage of ATM locations with anti-skimming detection, facial recognition, and suspicious behavior analysis.',
      image: 'https://i.ibb.co/mrWYnQ9X/bank-3.jpg'
    },
    {
      id: 'branch-monitoring', 
      title: 'Branch Security Monitoring',
      description: 'Complete surveillance coverage of banking halls, teller counters, and customer areas with AI-powered threat detection.',
      image: 'https://i.ibb.co/FkwyXP04/bank-1.jpg'
    },
    {
      id: 'vault-protection',
      title: 'Vault & Safe Area Protection', 
      description: 'High-security CCTV systems for vault monitoring, cash handling areas, and safe deposit box zones with motion detection.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
    },
    {
      id: 'facial-recognition',
      title: 'Facial Recognition & Verification',
      description: 'Advanced facial recognition technology for customer verification, VIP identification, and blacklist monitoring.',
      image: 'https://images.unsplash.com/photo-1559137771-536eecb999ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'perimeter-security',
      title: 'Perimeter & Parking Security',
      description: 'Comprehensive surveillance of building exteriors, parking areas, and approach routes with license plate recognition.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'emergency-response',
      title: 'Emergency Response Integration', 
      description: 'Automated alarm systems with instant notifications to security teams and law enforcement agencies.',
      image: 'https://images.unsplash.com/photo-1645717339830-54a4b1bdc33b?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ],
  recommendedServices: [
    {
      title: 'ATM Protection Suite',
      description: 'Complete CCTV surveillance package specifically designed for ATM locations.',
      icon: Video
    },
    {
      title: 'Fraud Detection Analytics',
      description: 'AI-powered analysis of customer behavior to detect potential fraud attempts.',
      icon: Shield
    },
    {
      title: 'Cash Transport Security',
      description: 'Surveillance systems for secure cash transport and armored vehicle monitoring.',
      icon: Banknote
    },
    {
      title: 'Multi-Branch Monitoring',
      description: 'Centralized monitoring solution for banks with multiple branch locations.',
      icon: Building
    },
    {
      title: 'VIP Customer Protection', 
      description: 'Enhanced security measures for high-net-worth individuals and VIP banking.',
      icon: Lock
    },
    {
      title: 'Night Security Monitoring',
      description: 'Advanced night vision surveillance for after-hours security protection.',
      icon: Bell
    }
  ],
  workflow: [
    {
      title: 'Security Risk Assessment',
      description: 'Comprehensive evaluation of your banking facility\'s security vulnerabilities and regulatory compliance requirements.',
      icon: '🔍'
    },
    {
      title: 'CCTV System Design',
      description: 'Custom surveillance system design with optimal camera placement for maximum coverage and threat detection.',
      icon: '📐'
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation of high-definition CCTV cameras, recording systems, and monitoring equipment by certified technicians.',
      icon: '🔧'
    },
    {
      title: 'AI Integration & Testing',
      description: 'Implementation of AI-powered analytics, facial recognition, and behavior analysis with comprehensive system testing.',
      icon: '🤖'
    },
    {
      title: 'Staff Training & Protocols',
      description: 'Comprehensive training for bank staff on system operation, emergency procedures, and security protocols.',
      icon: '👨‍🏫'
    },
    {
      title: '24/7 Monitoring Support',
      description: 'Continuous surveillance monitoring with real-time alerts, maintenance support, and system optimization.',
      icon: '👁️'
    }
  ],
  stats: [
    { value: '99.8%', label: 'Detection accuracy' },
    { value: '<2s', label: 'Alert response time' },
    { value: '24/7', label: 'Monitoring coverage' }
  ]
},
  'industry-smart-factories': {
    title: 'Industry Safety & Smart Factories',
    description: 'Integrated security and safety solutions for industrial environments and smart factory implementations.',
    icon: Factory,
    image: 'https://i.ibb.co/hxhDTFjw/indus.jpg',
    headerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    benefits: [
      'Equipment monitoring and protection',
      'Worker safety compliance',
      'Hazard detection',
      'Access control for restricted areas',
      'Integration with industrial IoT systems'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Industrial Safety & Smart Factory Solutions</h2>
      <p class="mb-6">Modern industrial facilities require integrated security and safety systems that protect both assets and personnel while maintaining operational efficiency. Our solutions combine AI-powered monitoring with industrial IoT integration for comprehensive protection.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Equipment Monitoring</h4>
          <p>24/7 monitoring of critical machinery for operational anomalies and security threats.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Worker Safety</h4>
          <p>AI-powered detection of safety violations or hazardous situations.</p>
        </div>
      </div>
    `,
    features: [
      {
        id: 'equipment-monitoring',
        title: 'Equipment Monitoring',
        description: '24/7 monitoring of critical machinery for operational anomalies.',
        image: 'https://i.ibb.co/3GfSZnj/2i.jpg'
      },
      {
        id: 'safety-compliance',
        title: 'Safety Compliance',
        description: 'AI-powered detection of safety violations or hazardous situations.',
        image: 'https://i.ibb.co/gLBc02Bd/3i.jpg'
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: 'Facial recognition-based access for sensitive industrial areas.',
        image: 'https://i.ibb.co/FkwyXP04/bank-1.jpg'
      },
      {
        id: 'iot-integration',
        title: 'IoT Integration',
        description: 'Seamless integration with industrial IoT systems for unified monitoring.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
      },
      {
        id: 'hazard-detection',
        title: 'Hazard Detection',
        description: 'Early warning systems for chemical leaks or environmental dangers.',
        image: 'https://i.ibb.co/5WBc6XG5/6i.jpg'
      },
      {
        id: 'supply-chain',
        title: 'Supply Chain Security',
        description: 'Monitoring of goods movement and inventory security.',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df'
      }
    ],
    recommendedServices: [
      {
        title: 'Worker Safety',
        description: 'Real-time monitoring of personnel safety compliance.',
        icon: Shield
      },
      {
        title: 'Equipment Analytics',
        description: 'Predictive maintenance through equipment monitoring.',
        icon: Cpu
      },
      {
        title: 'Environmental Monitoring',
        description: 'Detection of hazardous conditions in the workplace.',
        icon: Cloud
      },
      {
        title: 'Inventory Tracking',
        description: 'Automated monitoring of raw materials and finished goods.',
        icon: Database
      },
      {
        title: 'Access Management',
        description: 'Secure control of restricted area access.',
        icon: Lock
      },
      {
        title: 'Process Optimization',
        description: 'AI-driven efficiency improvements in production lines.',
        icon: Factory
      }
    ],
    workflow: [
      {
        title: 'Safety Audit',
        description: 'Comprehensive evaluation of current safety measures and potential hazards.',
        icon: '🛠️'
      },
      {
        title: 'IoT Integration Plan',
        description: 'Design for connecting security systems with existing industrial equipment.',
        icon: '📶'
      },
      {
        title: 'Equipment Monitoring',
        description: 'Installation of sensors and cameras for machinery surveillance.',
        icon: '⚙️'
      },
      {
        title: 'Access Control',
        description: 'Implementation of restricted area protection systems.',
        icon: '🔑'
      },
      {
        title: 'Environmental Sensors',
        description: 'Deployment of hazard detection for leaks, fires, and air quality.',
        icon: '🌡️'
      },
      {
        title: 'Maintenance Integration',
        description: 'Linking security data with predictive maintenance systems.',
        icon: '🔧'
      }
    ],
    stats: [
      { value: '50%', label: 'Safety incidents reduced' },
      { value: '30%', label: 'Equipment downtime' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  'traffic-public-safety': {
    title: 'Traffic & Public Safety Management',
    description: 'AI-powered solutions for traffic monitoring, accident prevention, and overall public safety enhancement.',
    icon: TrafficCone,
    image: 'https://plus.unsplash.com/premium_photo-1690958385391-76844034f557?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headerImage: 'https://images.unsplash.com/photo-1580977251946-3f8c48548cf6',
    benefits: [
      'Traffic flow optimization',
      'Accident detection and response',
      'License plate recognition',
      'Pedestrian safety monitoring',
      'Emergency vehicle routing'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Traffic & Public Safety Solutions</h2>
      <p class="mb-6">Modern cities require intelligent traffic management systems that improve safety while reducing congestion. Our AI-powered solutions provide real-time monitoring and analysis of traffic conditions, accidents, and public safety concerns.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Traffic Optimization</h4>
          <p>AI-powered analysis of traffic patterns to reduce congestion and improve flow.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Accident Response</h4>
          <p>Immediate identification of accidents and automatic alerting of emergency services.</p>
        </div>
      </div>
    `,
    features: [
      {
        id: 'traffic-monitoring',
        title: 'Traffic Monitoring',
        description: 'Real-time analysis of traffic flow and congestion patterns.',
        image: 'https://images.unsplash.com/photo-1708807472445-d33589e6b090?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'accident-detection',
        title: 'Accident Detection',
        description: 'Immediate identification of accidents and automatic emergency alerts.',
        image: 'https://i.ibb.co/zTKcWMLf/Image-8.png'
      },
      {
        id: 'license-plate-recognition',
        title: 'License Plate Recognition',
        description: 'Automated vehicle identification for security and traffic management.',
        image: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/02/Number-Plate-Detection.png'
      },
      {
        id: 'emergency-routing',
        title: 'Emergency Routing',
        description: 'Priority routing for emergency vehicles through smart traffic light control.',
        image: 'https://i.ibb.co/0ycQR8y2/0af87d30-a2f4-4c0f-b965-f5c0fc130877.png'
      },
      {
        id: 'pedestrian-safety',
        title: 'Pedestrian Safety',
        description: 'Monitoring of crosswalks and high-traffic pedestrian areas.',
        image: 'https://images.unsplash.com/photo-1574149064818-adf57cca3b3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'public-transport',
        title: 'Public Transport',
        description: 'Optimization of bus and tram schedules based on traffic conditions.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957'
      }
    ],
    recommendedServices: [
      {
        title: 'Smart Parking',
        description: 'Automated monitoring and management of parking spaces.',
        icon: MapPin
      },
      {
        title: 'Violation Detection',
        description: 'Automated identification of traffic violations.',
        icon: TrafficCone
      },
      {
        title: 'Public Transport',
        description: 'Security and optimization for buses and trams.',
        icon: Bus
      },
      {
        title: 'Urban Planning',
        description: 'Data-driven insights for city infrastructure development.',
        icon: Globe
      },
      {
        title: 'Event Management',
        description: 'Traffic control for large public events.',
        icon: Calendar
      },
      {
        title: 'Singal Optimization',
        description: 'Monitoring of signal and reduce traffic jam.',
        icon: Cloud
      }
    ],
    workflow: [
      {
        title: 'Traffic Flow Study',
        description: 'Analysis of current traffic patterns and congestion points.',
        icon: '🚗'
      },
      {
        title: 'Camera Network Design',
        description: 'Strategic planning of surveillance camera placement.',
        icon: '🎥'
      },
      {
        title: 'AI System Installation',
        description: 'Deployment of smart detection systems for incidents and violations.',
        icon: '🤖'
      },
      {
        title: 'Signal Integration',
        description: 'Connection with traffic light systems for adaptive control.',
        icon: '🚦'
      },
      {
        title: 'Emergency Coordination',
        description: 'Integration with police, fire, and ambulance services.',
        icon: '🚔'
      },
      {
        title: 'Public Dashboard',
        description: 'Creation of real-time traffic monitoring interfaces.',
        icon: '📱'
      }
    ],
    stats: [
      { value: '40%', label: 'Faster emergency response' },
      { value: '25%', label: 'Traffic reduction' },
      { value: '30%', label: 'Accident reduction' }
    ]
  },
  'smart-cities-infrastructure': {
  title: 'Smart Cities & Government Infrastructure CCTV Surveillance',
  description: 'Comprehensive AI-powered CCTV surveillance solutions for smart city implementations, government infrastructure, and public safety management.',
  icon: Globe,
  image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
  headerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  benefits: [
    'City-wide AI surveillance network integration',
    'Critical infrastructure protection and monitoring',
    'Public space safety with privacy compliance',
    'Emergency response coordination and automation',
    'Data-driven urban planning and analytics',
    'Multi-agency coordination and communication'
  ],
  content: `
    <h2 class="text-3xl font-bold mb-6">Advanced CCTV Surveillance for Smart Cities & Government Infrastructure</h2>
    <p class="mb-6">Modern cities and government facilities require integrated surveillance solutions that protect critical infrastructure while enhancing public safety and quality of life. Our AI-powered CCTV systems provide comprehensive monitoring and management of public spaces, utilities, government buildings, and municipal facilities with advanced analytics and emergency response capabilities.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Infrastructure Protection</h4>
        <p>24/7 surveillance of critical utilities, transportation hubs, government buildings, and public facilities with AI-powered threat detection.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Public Safety Monitoring</h4>
        <p>Comprehensive surveillance of parks, plazas, transit stations, and public areas with crowd management and incident detection.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Emergency Coordination</h4>
        <p>Integrated response systems for rapid coordination between police, fire, medical, and municipal services during incidents.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Urban Analytics</h4>
        <p>Data collection and analysis for urban planning, traffic optimization, and municipal resource allocation decisions.</p>
      </div>
    </div>

  
  `,
  features: [
    {
      id: 'infrastructure-monitoring',
      title: 'Critical Infrastructure Surveillance',
      description: '24/7 CCTV monitoring of power plants, water facilities, transportation hubs, and government buildings with AI threat detection.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      id: 'public-space-security',
      title: 'Public Space Safety Monitoring',
      description: 'AI-powered surveillance of parks, plazas, transit stations, and public areas with crowd management and behavior analysis.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df'
    },
    {
      id: 'emergency-coordination',
      title: 'Emergency Response Integration',
      description: 'Integrated systems for rapid response coordination between police, fire, medical, and municipal services during incidents.',
      image: 'https://images.unsplash.com/photo-1645717339830-54a4b1bdc33b?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'traffic-management',
      title: 'Smart Traffic Surveillance',
      description: 'Intelligent traffic monitoring with license plate recognition, violation detection, and flow optimization capabilities.',
      image: 'https://images.unsplash.com/photo-1708807472445-d33589e6b090?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
      id: 'data-analytics',
      title: 'Urban Planning Analytics',
      description: 'Comprehensive data collection and analysis for urban planning, resource allocation, and municipal decision-making.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    },
    {
      id: 'border-security',
      title: 'Border & Perimeter Security',
      description: 'Advanced surveillance for city boundaries, ports, airports, and other critical perimeter areas with intrusion detection.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  recommendedServices: [
    {
      title: 'Command & Control Center',
      description: 'Centralized monitoring and coordination center for city-wide surveillance operations.',
      icon: Database
    },
    {
      title: 'Public Transport Security',
      description: 'Comprehensive surveillance and security for buses, trains, and transit stations.',
      icon: Bus
    },
    {
      title: 'Tourist Area Protection',
      description: 'Enhanced security monitoring in high-traffic tourist and commercial areas.',
      icon: MapPin
    },
    {
      title: 'Event Management',
      description: 'Specialized surveillance and crowd management for large public gatherings and events.',
      icon: Calendar
    },
    {
      title: 'Disaster Response',
      description: 'Emergency coordination systems for natural disasters and crisis management.',
      icon: Bell
    },
    {
      title: 'Smart Lighting Integration',
      description: 'Integration with smart street lighting for enhanced nighttime surveillance.',
      icon: Cloud
    }
  ],
  workflow: [
    {
      title: 'City-Wide Assessment',
      description: 'Comprehensive evaluation of current infrastructure, security needs, and municipal requirements across all city sectors.',
      icon: '🏙️'
    },
    {
      title: 'Integrated System Architecture',
      description: 'Design of comprehensive surveillance network connecting all municipal departments and emergency services.',
      icon: '📡'
    },
    {
      title: 'Phased Deployment',
      description: 'Strategic installation of CCTV cameras and sensors across critical infrastructure and public areas in phases.',
      icon: '🔧'
    },
    {
      title: 'AI Analytics Integration',
      description: 'Implementation of advanced AI systems for traffic, crowd, environmental, and security analytics.',
      icon: '🤖'
    },
    {
      title: 'Multi-Agency Training',
      description: 'Comprehensive training for police, fire, municipal staff, and emergency responders on system operation.',
      icon: '👨‍💼'
    },
    {
      title: 'Command Center Operations',
      description: 'Establishment of 24/7 monitoring center with real-time coordination and response capabilities.',
      icon: '🖥️'
    }
  ],
  stats: [
    { value: '65%', label: 'Faster emergency response' },
    { value: '40%', label: 'Crime reduction in monitored areas' },
    { value: '24/7', label: 'City-wide monitoring' }
  ]
},
  'corporate-residential': {
  title: 'Corporate Offices, Residential Complexes & Societies CCTV Surveillance',
  description: 'Advanced AI-powered CCTV surveillance solutions for corporate offices, residential buildings, and housing societies with intelligent monitoring and access control.',
  icon: Building,
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  headerImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
  benefits: [
    'AI-powered visitor management and facial recognition',
    'Comprehensive perimeter and common area surveillance',
    '24/7 real-time monitoring with instant alerts',
    'Advanced parking security with license plate recognition',
    'Integrated emergency response and evacuation systems',
    'Remote monitoring capabilities for property managers'
  ],
  content: `
    <h2 class="text-3xl font-bold mb-6">Advanced CCTV Surveillance for Corporate & Residential Security</h2>
    <p class="mb-6">Corporate offices and residential complexes require sophisticated surveillance solutions that balance security with privacy and convenience. Our AI-powered CCTV systems provide comprehensive protection for both professional and residential environments with intelligent monitoring, access control, and emergency response capabilities.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Visitor Management & Access Control</h4>
        <p>Advanced facial recognition and automated check-in systems for seamless visitor management and secure access control.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Common Area Surveillance</h4>
        <p>24/7 monitoring of lobbies, hallways, elevators, and shared spaces with AI-powered behavior analysis and threat detection.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Perimeter & Parking Security</h4>
        <p>Comprehensive surveillance of building perimeters, entry points, and parking areas with license plate recognition and intrusion detection.</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 class="font-bold text-lg mb-3">Emergency Response Integration</h4>
        <p>Integrated alarm systems with instant notifications to security teams, management, and emergency services for rapid response.</p>
      </div>
    </div>


`,
  features: [
    {
      id: 'visitor-management',
      title: 'Smart Visitor Management',
      description: 'AI-powered visitor registration with facial recognition, automated check-in, and guest tracking throughout the premises.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
    },
    {
      id: 'common-area-security',
      title: 'Common Area Surveillance',
      description: 'Comprehensive CCTV coverage of lobbies, hallways, elevators, and shared spaces with behavior analysis and crowd monitoring.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0'
    },
    {
      id: 'parking-protection',
      title: 'Parking & Vehicle Security',
      description: 'Advanced surveillance of parking areas with license plate recognition, vehicle tracking, and unauthorized access detection.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'emergency-systems',
      title: 'Emergency Response Integration',
      description: 'Automated emergency detection and response systems with instant alerts to security teams and emergency services.',
      image: 'https://images.unsplash.com/photo-1645717339830-54a4b1bdc33b?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'access-control',
      title: 'Multi-Level Access Control',
      description: 'Secure entry systems with biometric authentication, key card integration, and role-based access permissions.',
      image: 'https://images.unsplash.com/photo-1559137771-536eecb999ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'remote-monitoring',
      title: 'Remote Monitoring & Management',
      description: 'Cloud-based monitoring platform for property managers with real-time alerts, reporting, and mobile access.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    }
  ],
  recommendedServices: [
    {
      title: 'Smart Building Integration',
      description: 'Integration with building automation systems for comprehensive management.',
      icon: Building
    },
    {
      title: 'Mobile Security App',
      description: 'Dedicated mobile application for residents and security management.',
      icon: Smartphone
    },
    {
      title: 'Package Management',
      description: 'Secure handling and tracking of deliveries with CCTV monitoring.',
      icon: ShoppingCart
    },
    {
      title: 'Facility Booking System',
      description: 'Reservation systems for shared amenities with usage monitoring.',
      icon: Calendar
    },
    {
      title: 'Energy Management',
      description: 'Smart systems to optimize building energy usage with surveillance integration.',
      icon: Cloud
    },
    {
      title: 'Maintenance Tracking',
      description: 'Automated monitoring of building maintenance needs and vendor access.',
      icon: Wrench
    }
  ],
  workflow: [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of building vulnerabilities, traffic patterns, and security requirements for both residents and staff.',
      icon: '🔎'
    },
    {
      title: 'Surveillance System Design',
      description: 'Custom CCTV system design with optimal camera placement for maximum coverage while respecting privacy requirements.',
      icon: '📐'
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation of surveillance cameras, access control systems, and monitoring equipment with minimal disruption.',
      icon: '🔧'
    },
    {
      title: 'AI Integration & Testing',
      description: 'Implementation of AI-powered analytics, facial recognition, and behavior analysis with comprehensive system testing.',
      icon: '🤖'
    },
    {
      title: 'User Training & Onboarding',
      description: 'Training for security staff, property managers, and resident orientation on system features and emergency procedures.',
      icon: '👨‍🏫'
    },
    {
      title: '24/7 Monitoring Support',
      description: 'Continuous surveillance monitoring with real-time alerts, maintenance support, and regular system optimization.',
      icon: '👁️'
    }
  ],
  stats: [
    { value: '99.5%', label: 'Access control accuracy' },
    { value: '<3s', label: 'Alert response time' },
    { value: '24/7', label: 'Monitoring coverage' }
  ]
},
};
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (serviceId && servicesDetails[serviceId]) {
      setService(servicesDetails[serviceId]);
    }
    setIsLoading(false);
  }, [serviceId]);

  if (isLoading) {
    return (
      <Layout showFooter={false}>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout showFooter={false}>
        <div className="container-default py-20 text-center px-6 bg-white">
          <h1 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">Service Profile Not Found</h1>
          <p className="mb-8 text-base text-[#475569] font-medium max-w-xl mx-auto italic">The operational intelligence for this service ID could not be retrieved from the central registry.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-[#2563EB] text-white font-black rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest text-[10px]"
          >
            Return to Services Registry
          </Link>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-default relative z-10 px-6 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-white/5 text-[#2563EB] rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 mb-6 backdrop-blur-sm shadow-xl"
          >
            AI SYSTEM PROTOCOL
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
            {service.title.split(' ').slice(0, 2).join(' ')} <br /><span className="text-[#2563EB]">{service.title.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-[#2563EB] text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-2xl uppercase tracking-widest text-[10px]"
            >
              Get started now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-[#E2E8F0]">
        <div className="container-default px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-3xl font-black text-[#0a0e1a] mb-1 uppercase tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[#2563EB] font-black uppercase tracking-widest text-[9px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* Main Content & Sidebar Section */}
      <section className="py-20 bg-white">
        <div className="container-default px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-3xl shadow-xl mb-10 border border-[#E2E8F0] relative group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto object-cover aspect-video transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              <div className="prose prose-xl max-w-none industrial-prose-detail">
                <style>{`
                  .industrial-prose-detail h2 {
                    font-size: 2rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.025em;
                    color: #0F172A;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                  }
                  .industrial-prose-detail h4 {
                    font-size: 1rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    color: #2563EB;
                    margin-bottom: 0.75rem;
                  }
                  .industrial-prose-detail p {
                    font-size: 1rem;
                    color: #475569;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                  }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: service.content }} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <div className="bg-[#0a0e1a] rounded-3xl p-8 text-white border border-white/5 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <ServiceIcon className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tighter">Key Protocol</h3>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-4 h-4 text-[#2563EB]" />
                      </div>
                      <span className="text-xs font-bold text-white/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full h-12 flex items-center justify-center bg-[#2563EB] text-white font-black rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest text-[10px] shadow-lg"
                >
                  Consult Expert
                </Link>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-lg">
                <h3 className="text-lg font-black mb-6 text-[#0F172A] uppercase tracking-tighter">Related Intelligence</h3>
                <div className="space-y-4">
                  {Object.entries(servicesDetails)
                    .filter(([key]) => key !== serviceId)
                    .slice(0, 3)
                    .map(([key, otherService]) => {
                      const OtherIcon = otherService.icon;
                      return (
                        <Link 
                          key={key}
                          to={`/services/${key}`} 
                          className="flex items-center gap-3 group transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#F4F7FB] flex items-center justify-center border border-[#E2E8F0] group-hover:border-[#2563EB] transition-all">
                            <OtherIcon className="h-5 w-5 text-[#2563EB]" />
                          </div>
                          <div>
                            <h4 className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest group-hover:text-[#2563EB] transition-all leading-tight">{otherService.title}</h4>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#F4F7FB] rounded-[2.5rem] mx-6 mb-20 border border-[#E2E8F0]">
        <div className="container-default px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-white text-[#2563EB] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter">INDUSTRIAL <span className="text-[#2563EB]">FEATURES</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: any, index: number) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-all group p-8">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-[#F4F7FB]">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3 uppercase tracking-tight group-hover:text-[#2563EB] transition-colors">{feature.title}</h3>
                <p className="text-[#475569] text-xs font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflow Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-default px-6 text-center mb-12">
           <span className="inline-block px-3 py-1 bg-[#F4F7FB] text-[#2563EB] rounded-full text-[9px] font-black uppercase tracking-widest border border-[#E2E8F0] mb-6">
              MISSION EXECUTION
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter mb-6 leading-none">HOW WE <span className="text-[#2563EB]">DEPLOY</span></h2>
        </div>
        
        <div className="container-default px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.workflow.slice(0, 6).map((step: any, index: number) => (
              <div key={index} className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-[#E2E8F0] hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-[#0a0e1a] text-white flex items-center justify-center font-black text-lg rounded-xl mb-8 shadow-lg border border-white/10 transition-all">
                  {index + 1}
                </div>
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="text-lg font-black text-[#0F172A] mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-xs font-medium text-[#475569] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0e1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/10 blur-[80px] rounded-full translate-x-1/2"></div>
        <div className="container-default px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">READY TO <span className="text-[#2563EB]">UPGRADE?</span></h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            Scalable, industrial-grade {service.title} specialized for your organization's unique requirements.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-[#2563EB] text-white font-black rounded-2xl shadow-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
            >
              Get started now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;