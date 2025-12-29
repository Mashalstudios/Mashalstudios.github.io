
import React, { useEffect } from 'react';
import { X, Shield, ScrollText, Cookie } from 'lucide-react';
import { LegalType } from '../App';

interface LegalModalProps {
  isOpen: boolean;
  type: LegalType;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const content = {
    cookies: {
      title: "Cookie Policy",
      icon: <Cookie className="w-6 h-6 text-indigo-600" />,
      text: (
        <div className="space-y-4">
          <p>This website may use cookies to improve user experience and analyze website traffic.</p>
          <p>Cookies help understand how visitors use the site so it can be improved. No personal information is stored through cookies.</p>
          <p>You can disable cookies anytime from your browser settings.</p>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      text: (
        <div className="space-y-4">
          <p>I respect your privacy. When you contact me through this website, I may collect basic information such as your name, email address, or message details.</p>
          <p>This information is used only to communicate with you and provide my services. Your data is not sold, shared, or misused in any way.</p>
          <p>I take reasonable steps to keep your information secure. By using this website, you agree to this privacy policy.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      icon: <ScrollText className="w-6 h-6 text-indigo-600" />,
      text: (
        <div className="space-y-4">
          <p>By using this website, you agree to the following terms:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The content on this site is for portfolio and informational purposes only.</li>
            <li>Services, prices, and timelines are discussed after client contact.</li>
            <li>Unauthorized copying or misuse of content is not allowed.</li>
            <li>I am not responsible for any loss caused by misuse of this website.</li>
          </ul>
          <p>These terms may be updated anytime without notice.</p>
        </div>
      )
    }
  }[type];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                {content.icon}
              </div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">{content.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-zinc-600 font-medium leading-relaxed text-sm lg:text-base">
            {content.text}
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-100 flex justify-end">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all"
            >
              Understand & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
