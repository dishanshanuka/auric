"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Bespoke Saree Commission",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-3">
            Private Atelier & Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
            Commission a loom or reserve a private drapery session.
          </h1>
          <p className="text-neutral-400 text-sm font-light mt-4 leading-relaxed">
            From bespoke bridal weaves and archival swatch consultations to bespoke wholesale bolts, our Colombo atelier curators welcome your dialogue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact & Atelier Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#141416] border border-white/10">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">
                    Flagship Atelier
                  </span>
                  <p className="text-sm font-medium text-white mt-1">
                    42 Ward Place, Cinnamon Gardens
                  </p>
                  <p className="text-xs text-neutral-400 font-light">
                    Colombo 07, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#141416] border border-white/10">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">
                    Viewing Hours (By Appointment)
                  </span>
                  <p className="text-sm font-medium text-white mt-1">
                    Tuesday – Sunday: 10:00 AM – 07:00 PM
                  </p>
                  <p className="text-xs text-neutral-400 font-light">
                    Mondays reserved for loom dye calibration
                  </p>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#141416] border border-white/10">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block">
                    Direct Liaison
                  </span>
                  <p className="text-sm font-medium text-white mt-1">
                    curator@aurictextiles.lk
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    +94 (11) 268 9400
                  </p>
                </div>
              </div>
            </div>

            {/* Guild Commitment Notice */}
            <div className="p-6 rounded-2xl bg-linear-to-b from-[#18181b] to-[#121214] border border-white/10">
              <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                Ethical Commission Note
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Every bespoke bolt or private order contributes directly to the Weaver Guild Pension Scheme across Dumbara and Galle clusters.
              </p>
            </div>
          </div>

          {/* Right Column: Appointment / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#141416] border border-white/10 relative shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 stroke-2" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                    Inquiry Lodged with the Atelier
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mt-3 leading-relaxed">
                    Thank you, {formData.name || "Patron"}. Our senior textile curator will review your request and reach out within 24 hours to coordinate your viewing.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        inquiryType: "Bespoke Saree Commission",
                        date: "",
                        message: "",
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-full border border-white/15 text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dishan Shanuka"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="dishans@.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+94 77 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-neutral-200 focus:outline-none focus:border-white/40 transition cursor-pointer"
                      >
                        <option value="Bespoke Saree Commission">
                          Bespoke Saree Commission
                        </option>
                        <option value="Private Swatch & Drapery Session">
                          Private Swatch & Drapery Session
                        </option>
                        <option value="Architectural & Interior Handloom">
                          Architectural & Interior Handloom
                        </option>
                        <option value="Global Wholesale & Atelier Export">
                          Global Wholesale & Atelier Export
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                      Preferred Date (If Requesting Atelier Visit)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-neutral-300 focus:outline-none focus:border-white/40 transition cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                      Message / Motif Specifications
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding yardage requirements, custom motifs, or specific silk varieties..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1a1d] border border-white/10 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition shadow-xl group"
                  >
                    <span>Transmit Commission Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}