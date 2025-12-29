
import React, { useState, useRef } from 'react';
import { Mail, MessageCircle, Send, ShoppingBag, ExternalLink, CheckCircle2, Linkedin, Check, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    // Add the specific Web3Forms access key provided by the user
    formData.append("access_key", "13842a11-2e4b-4787-8f73-1b7249b6b854");
    formData.append("subject", `New Inquiry from ${formData.get('name')} - Mashal Studios`);
    formData.append("from_name", "Portfolio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact.mashal.studios@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#121214] rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct Info & Social Accounts */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
              <div className="mb-10 lg:mb-12">
                <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Direct Channels</span>
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-6">
                  Ready to scale <br className="hidden sm:block"/>your brand?
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-medium max-w-sm leading-relaxed">
                  Connect with me across platforms. I typically reply within <span className="text-white font-bold">1 hour</span>.
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                {/* Fiverr Account */}
                <a 
                  href="https://www.fiverr.com/s/5rZpYav" 
                  target="_blank"
                  className="group flex items-center gap-4 sm:gap-5 transition-all"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[7px] sm:text-[8px] font-black text-zinc-500 uppercase tracking-widest">Fiverr Profile</p>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Order Securely on Fiverr</p>
                  </div>
                </a>

                {/* Email Account */}
                <button 
                  onClick={copyEmail}
                  className="group flex items-center gap-4 sm:gap-5 transition-all text-left w-full"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                    {copied ? <Check className="w-4 h-4 sm:w-6 sm:h-6" /> : <Mail className="w-4 h-4 sm:w-6 sm:h-6" />}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[7px] sm:text-[8px] font-black text-zinc-500 uppercase tracking-widest">Email Address</p>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate max-w-[180px] sm:max-w-none">
                      {copied ? 'Copied to Clipboard' : 'contact.mashal.studios@gmail.com'}
                    </p>
                  </div>
                </button>

                {/* WhatsApp Account */}
                <a 
                  href="https://wa.me/923045571667" 
                  target="_blank"
                  className="group flex items-center gap-4 sm:gap-5 transition-all"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[7px] sm:text-[8px] font-black text-zinc-500 uppercase tracking-widest">Instant WhatsApp</p>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-white group-hover:text-green-400 transition-colors">+92 304 5571667</p>
                  </div>
                </a>

                {/* LinkedIn Account */}
                <a 
                  href="https://www.linkedin.com/in/mashal-studios-3845703a2" 
                  target="_blank"
                  className="group flex items-center gap-4 sm:gap-5 transition-all"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[7px] sm:text-[8px] font-black text-zinc-500 uppercase tracking-widest">Professional Network</p>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-white group-hover:text-blue-400 transition-colors">Mashal Studios LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7 p-4 sm:p-10 lg:p-16 flex items-center">
              <div className="w-full min-h-[450px] bg-[#1a1a1d] rounded-[2rem] lg:rounded-[2.5rem] border border-white/5 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                
                {status === 'success' ? (
                  <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(79,70,229,0.3)]">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Message Received!</h3>
                    <p className="text-zinc-500 font-medium text-sm sm:text-base">Thanks! I'll reply within 1 hour.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : status === 'error' ? (
                  <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                      <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Something went wrong</h3>
                    <p className="text-zinc-500 font-medium text-sm sm:text-base">Please try again or contact via WhatsApp.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Botcheck Honeypot (Spam Prevention) */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          name="name"
                          placeholder="Your Name"
                          className="w-full bg-[#232326] border border-white/5 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          name="email"
                          placeholder="your@email.com"
                          className="w-full bg-[#232326] border border-white/5 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Service Category</label>
                      <select 
                        required
                        name="category"
                        className="w-full bg-[#232326] border border-white/5 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-zinc-400 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-bold appearance-none cursor-pointer"
                        defaultValue="Meta Ads Management"
                        id="contact-subject"
                      >
                        <option>Meta Ads Management</option>
                        <option>Shopify Development</option>
                        <option>WordPress Design</option>
                        <option>Custom Coding</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Your Message</label>
                      <textarea 
                        required 
                        name="message"
                        rows={3}
                        id="contact-message"
                        placeholder="How can I help you grow today?"
                        className="w-full bg-[#232326] border border-white/5 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full group relative flex items-center justify-center gap-4 py-4 sm:py-5 bg-[#5b4cf3] text-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#4a3ce1] transition-all active:scale-[0.98] shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          Sending...
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
