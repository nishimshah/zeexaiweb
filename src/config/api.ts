// API Configuration
// Use environment variable if available, otherwise detect based on hostname
const getApiBaseUrl = (): string => {
  // Check for explicit environment variable
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // Check if running on localhost or local IP
  const hostname = window.location.hostname;
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('10.') || hostname.startsWith('192.168.');
  
  if (isLocal) {
    // If accessing via IP address, use the same IP for backend
    // Otherwise use localhost
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return `http://${hostname}:5000`;
    }
    // Default to local backend on port 5000 (Flask default)
    return 'http://localhost:5000';
  }
  
  // Production backend URL
  return 'https://zeex-website-backend-1.onrender.com';
};

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  CAREER_APPLICATION: `${API_BASE_URL}/api/career-application`,
  NEWSLETTER: `${API_BASE_URL}/api/newsletter`,
  CHAT: `${API_BASE_URL}/chat`,
};

