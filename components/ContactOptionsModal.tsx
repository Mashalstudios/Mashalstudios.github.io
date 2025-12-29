import React, { useEffect } from 'react';
import { X, MessageCircle, Video, ShoppingCart, Mail, ExternalLink, Sparkles, Instagram, Linkedin, Facebook } from 'lucide-react';

interface ContactOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactOptionsModal: React.FC<ContactOptionsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const contactOptions = [
    {
      name: "WhatsApp Instant",
      description: "Chat directly for quick questions.",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/923045571667",
      color: "hover:bg-green-500 hover:text-white hover:border-green-500",
      iconBg: "bg-green-50 text-green-600",
      label: "Instant response"
    },
    {
      name: "Zoom Strategy Call",
      description: "Book a deep-dive strategy session.",
      icon: <Video className="w-6 h-6" />,
      href: "mailto:contact.mashal.studios@gmail.com?subject=Zoom%20Strategy%20Call%20Request",
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
      iconBg: "bg-blue-50 text-blue-600",
      label: "Best for scaling"
    },
    {
      name: "Order on Fiverr",
      description: "Official, secure project management.",
      icon: <ShoppingCart className="w-6 h-6" />,
      href: "https://www.fiverr.com/s/5rZpYav",
      color: "hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-600",
      label: "Payment protection"
    },
    {
      name: "Direct Email",
      description: "For formal inquiries & custom quotes.",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:contact.mashal.studios@gmail.com",
      color: "hover:bg-zinc-900 hover:text-white hover:border-zinc-900",
      iconBg: "bg-zinc-50 text-zinc-900",
      label: "Custom estimates"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/mashal.studios/", color: "hover:text-pink-600", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mashal-studios-3845703a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk5c0JeYwQ1K5EVX1L1F7%2Fg%3D%3D", color: "hover:text-blue-600", name: "LinkedIn" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/mashal.studios", color: "hover:text-blue-700", name: "Facebook" }
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-900/70 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 overflow-hidden">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Premium Partnership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-none">Let's build <br/>your brand.</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-4">
            {contactOptions.map((option, idx) => (
              <a
                key={idx}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-5 rounded-[2rem] border border-zinc-100 bg-white transition-all duration-300 ${option.color} hover:shadow-2xl hover:shadow-current/10`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${option.iconBg} group-hover:bg-white/20 group-hover:text-white`}>
                  {option.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-sm uppercase tracking-tight">{option.name}</h4>
                    <span className="text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-white/20 group-hover:text-white border border-transparent">
                      {option.label}
                    </span>
                  </div>
                  <p className="text-xs font-medium opacity-60 group-hover:opacity-90">{option.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </a>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="mt-10 pt-8 border-t border-zinc-100">
            <div className="text-center mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Or follow the work</p>
            </div>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 text-zinc-400 transition-all ${social.color} group`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptionsModal;