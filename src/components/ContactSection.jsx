import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car,
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { branches } from '../data/branches';

export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjectParam || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Your name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please enter your message (at least 8 characters)';
    }
    return errs;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const subjectText = formData.subject || 'General Enquiry';
      const text = encodeURIComponent(
        `*S MALL CONTACT ENQUIRY*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${subjectText}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/919447175232?text=${text}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-[#F5F7FA]">
      
      {/* 1. Hero Section matching screenshot: "Get in touch. We're here to help." */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center  overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-1600.webp"
            alt="S mall Concourse"
            className="w-full h-full "
          />
         
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Get in touch. <br />
              <span className="font-normal italic text-sky-400">
                We’re here to help.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
              For enquiries, assistance or feedback, our team is happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Floating Dark Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Call Us */}
          <div className="bg-[#0B2545] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-blue-900/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/20 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Call Us</span>
              <a href="tel:+919447175232" className="text-lg font-bold text-white hover:text-sky-400 transition-colors block mt-0.5">
                +91 94471 75232
              </a>
              <span className="text-xs text-slate-400 mt-1 block">10:00 AM – 10:00 PM</span>
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-[#0B2545] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-blue-900/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/20 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Email Us</span>
              <a href="mailto:smallmalledakkara@gmail.com" className="text-base sm:text-lg font-bold text-white hover:text-sky-400 transition-colors block mt-0.5 truncate">
                smallmalledakkara@gmail.com
              </a>
              <span className="text-xs text-slate-400 mt-1 block">We reply within 24 hours</span>
            </div>
          </div>

          {/* Card 3: Visit Us */}
          <div className="bg-[#0B2545] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-blue-900/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/20 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Visit Us</span>
              <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                S mall, Edakkara
              </div>
              <a 
                href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-sky-400 hover:underline mt-1 inline-flex items-center gap-1 font-semibold"
              >
                <span>View on Maps</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. "Send us a message." Form + Right Tall Mall Interior Image Card */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Form Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Send us a message.
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Your Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.name && errors.name
                          ? 'border-rose-400 bg-rose-50/20'
                          : 'border-slate-200 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.email && errors.email
                          ? 'border-rose-400 bg-rose-50/20'
                          : 'border-slate-200 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 94471 75232"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] focus:bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="Leasing Enquiry">Retail Leasing & Shop Enquiry</option>
                      <option value="Store Feedback">Customer Store Feedback</option>
                      <option value="Event Space Inquiry">Event Space / Atrium Booking</option>
                      <option value="Management General">General Management Question</option>
                    </select>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.message && errors.message
                          ? 'border-rose-400 bg-rose-50/20'
                          : 'border-slate-200 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center gap-1 text-xs text-rose-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button in Golden Yellow matching screenshot */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#F9B00C] hover:bg-[#e5a007] text-[#1F2937] px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {submitted && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Thank you! Your message has been prepared for dispatch to S mall management.</span>
                    </div>
                  )}

                </form>
              </div>

              {/* Subtext link pointing to Leasing */}
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500">
                For business enquiries related to leasing, please use our{' '}
                <Link to="/leasing" className="text-[#0E5EC8] hover:underline font-bold inline-flex items-center gap-0.5">
                  Leasing Enquiry form here <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

            {/* Right Column: Tall Architectural Image Card matching screenshot */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/images/shopping.webp"
                alt="S mall Interior Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F9B00C] block">
                  Edakkara Flagship
                </span>
                <h3 className="text-xl font-black mt-1">S mall Modern Concourse</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Welcoming thousands of shoppers and visitors daily along the Calicut-Ooty corridor.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. "Our Location." Section matching screenshot */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Location details & Opening Hours & Parking */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Our Location.
                </h2>
                <div className="mt-2 space-y-1">
                  <span className="text-sm font-bold text-slate-800 block">S mall, Edakkara</span>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                    S. Mall, Main Road Edakkara, CNG Road (Calicut Nilambur Gudalur Road / Calicut-Ooty Main Road), Malappuram, Kerala.
                  </p>
                  <a
                    href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5EC8] hover:text-blue-800 transition-colors pt-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F9B00C]" />
                  </a>
                </div>
              </div>

              {/* 2 Feature Cards: Opening Hours & Parking Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Opening Hours Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Clock className="w-4 h-4 text-[#0E5EC8]" />
                    <span>Opening Hours</span>
                  </div>
                  <div className="text-slate-700">
                    <div>Monday – Sunday:</div>
                    <div className="font-bold text-slate-900 text-sm">10:00 AM – 10:00 PM</div>
                    <div className="text-[10px] text-slate-400 mt-1">*Timings may vary for individual stores.</div>
                  </div>
                </div>

                {/* Parking Information Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Car className="w-4 h-4 text-[#0E5EC8]" />
                    <span>Parking Information</span>
                  </div>
                  <div className="text-slate-600 space-y-1 text-[11px]">
                    <div>Spacious parking for cars & two-wheelers.</div>
                    <div className="text-slate-500">• Safe and well-lit</div>
                    <div className="text-slate-500">• Accessible parking bays</div>
                    <div className="text-slate-500">• Easy highway entry & exit</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Stylized Map Card with Red S mall Pin */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
              {/* Map background illustration / Google Map styling */}
              <div className="absolute inset-0 bg-[#E8ECEF] flex items-center justify-center">
                {/* Road grid lines */}
                <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#CBD5E1" strokeWidth="18" />
                  <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#FFF" strokeWidth="12" />
                  <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#CBD5E1" strokeWidth="22" />
                  <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#FDE047" strokeWidth="14" />
                  <line x1="20%" y1="10%" x2="90%" y2="90%" stroke="#CBD5E1" strokeWidth="12" />
                  <line x1="20%" y1="10%" x2="90%" y2="90%" stroke="#FFF" strokeWidth="8" />
                </svg>
              </div>

              {/* Red Map Pin with "S mall" badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-[#0E5EC8] text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5 border border-white">
                  <span className="w-2 h-2 rounded-full bg-[#F9B00C] animate-pulse"></span>
                  <span>S mall</span>
                </div>
                <div className="w-6 h-6 text-rose-600 mt-1 drop-shadow-md">
                  <MapPin className="w-6 h-6 fill-rose-600 text-white" />
                </div>
              </div>

              {/* Bottom directions CTA overlay */}
              <a
                href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-md hover:text-[#0E5EC8] transition-colors flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F9B00C]" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
