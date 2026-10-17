import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";
import heroImage from "../assets/homepage/heroimage.png";
export default function ContactSection() {
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjectParam,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, subject: subjectParam }));
  }, [subjectParam]);

  const validate = (data = formData) => {
    const errs = {};

    if (!data.name.trim()) {
      errs.name = "Your name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(data.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!data.message.trim() || data.message.trim().length < 8) {
      errs.message = "Please enter your message (at least 8 characters)";
    }

    return errs;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    if (touched[name]) {
      setErrors(validate(updatedData));
    }

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    };

    setTouched(allTouched);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const subjectText = formData.subject || "General Enquiry";

    const message = [
      "*S MALL CONTACT ENQUIRY*",
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "N/A"}`,
      `Subject: ${subjectText}`,
      `Message: ${formData.message.trim()}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/919447175232?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const contactCards = [
    {
      title: "Call Us",
      icon: Phone,
      content: (
        <>
          <a
            href="tel:+919447175232"
            className="block text-lg font-bold text-white transition-colors hover:text-sky-400"
          >
            +91 94471 75232
          </a>
          <a
            href="tel:+917732001005"
            className="mt-2 block text-base font-semibold text-white transition-colors hover:text-sky-400"
          >
            +91 77320 01005
          </a>
          <span className="mt-2 block text-xs text-slate-400">
            Primary & alternate contact
          </span>
          <span className="mt-1 block text-xs text-slate-400">
            10:00 AM – 10:00 PM
          </span>
        </>
      ),
    },
    {
      title: "Email Us",
      icon: Mail,
      content: (
        <>
          <a
            href="mailto:s.mall.edakkara@gmail.com"
            className="mt-3 block break-all text-sm font-bold text-white transition-colors hover:text-sky-400"
          >
            s.mall.edakkara@gmail.com
          </a>
          <span className="mt-2 block text-xs text-slate-400">Email</span>
        </>
      ),
    },
    {
      title: "Visit Us",
      icon: MapPin,
      content: (
        <>
          <p className="mt-1 text-base font-bold text-white">
            S Mall, Edakkara
          </p>
          <a
            href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:underline"
          >
            View on Maps <ArrowRight className="h-3 w-3" />
          </a>
        </>
      ),
    },
    {
      title: "Follow Us",
      icon: Instagram,
      content: (
        <>
          <a
            href="https://www.instagram.com/s.mall_edakkara/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-lg font-bold text-white transition-colors hover:text-pink-400"
          >
            @s.mall_edakkara
          </a>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Follow us for mall updates, announcements, and experiences.
          </p>
          <a
            href="https://www.instagram.com/s.mall_edakkara/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-pink-400 hover:underline"
          >
            Visit Instagram <ExternalLink className="h-3 w-3" />
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* Hero Section */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden lg:min-h-[440px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-1600.webp"
            alt="S Mall Edakkara concourse"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F9B00C]">
              Contact S Mall
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in touch.
              <br />
              <span className="font-normal italic text-sky-400">
                We're here to help.
              </span>
            </h1>

            <p className="max-w-lg text-sm font-normal leading-relaxed text-slate-300 sm:text-base">
              For enquiries, assistance or feedback, our team is happy to help.
              Contact S Mall Edakkara using your preferred channel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {contactCards.map(({ title, icon: Icon, content }) => (
            <div
              key={title}
              className="space-y-3 rounded-2xl border border-blue-900/60 bg-[#0B2545] p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/15 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  {title}
                </span>
                <div className="mt-1">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form and Mall Image */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Contact Form */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E5EC8]">
                    We'd love to hear from you
                  </span>
                  <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                    Send us a message.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Complete the form below to prepare your enquiry in WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1 block text-xs font-bold text-slate-700"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. John Doe"
                      aria-invalid={Boolean(touched.name && errors.name)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.name && errors.name
                          ? "border-rose-400 bg-rose-50/20"
                          : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1 block text-xs font-bold text-slate-700"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="e.g. john@example.com"
                      aria-invalid={Boolean(touched.email && errors.email)}
                      className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.email && errors.email
                          ? "border-rose-400 bg-rose-50/20"
                          : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1 block text-xs font-bold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 94471 75232"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E5EC8]"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1 block text-xs font-bold text-slate-700"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E5EC8]"
                    >
                      <option value="">Select an option</option>
                      <option value="Leasing Enquiry">
                        Retail Leasing & Shop Enquiry
                      </option>
                      <option value="Store Feedback">
                        Customer Store Feedback
                      </option>
                      <option value="Event Space Inquiry">
                        Event Space / Atrium Booking
                      </option>
                      <option value="Management General">
                        General Management Question
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1 block text-xs font-bold text-slate-700"
                    >
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      placeholder="How can we help you?"
                      aria-invalid={Boolean(touched.message && errors.message)}
                      className={`w-full resize-y rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0E5EC8] ${
                        touched.message && errors.message
                          ? "border-rose-400 bg-rose-50/20"
                          : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F9B00C] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-[#1F2937] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e5a007] hover:shadow-lg active:scale-95"
                  >
                    <span>Send Message via WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {submitted && (
                    <div
                      role="status"
                      className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>
                        Your enquiry has been prepared in WhatsApp. Please
                        review and send the message in WhatsApp to contact S
                        Mall management.
                      </span>
                    </div>
                  )}
                </form>
              </div>

              {/* Leasing Link */}
              <div className="mt-6 border-t border-slate-100 pt-6 text-xs text-slate-500">
                For business enquiries related to leasing, please use our{" "}
                <Link
                  to="/leasing"
                  className="inline-flex items-center gap-0.5 font-bold text-[#0E5EC8] hover:underline"
                >
                  Leasing Enquiry form here
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Mall Interior Image */}
            <div className="group relative min-h-[400px] overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:col-span-5">
              <img
                src={heroImage}
                alt="S Mall Edakkara interior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#F9B00C]">
                  Edakkara Flagship
                </span>
                <h3 className="mt-2 text-2xl font-black">
                  S Mall Modern Concourse
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Your destination for shopping, entertainment, dining, and
                  memorable experiences in Edakkara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Facilities */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Location Details */}
            <div className="space-y-6 lg:col-span-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E5EC8]">
                  Find Us
                </span>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Our Location.
                </h2>

                <div className="mt-3 space-y-2">
                  <span className="block text-sm font-bold text-slate-800">
                    S Mall, Edakkara
                  </span>

                  <p className="max-w-md text-xs leading-relaxed text-slate-500">
                    S. Mall, Main Road, Edakkara, CNG Road (Calicut–Nilambur–
                    Gudalur Road / Calicut–Ooty Main Road), Malappuram, Kerala.
                  </p>

                  <a
                    href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-[#0E5EC8] transition-colors hover:text-blue-800"
                  >
                    Get Directions
                    <ArrowRight className="h-3.5 w-3.5 text-[#F9B00C]" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                {/* Opening Hours */}
                <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Clock className="h-4 w-4 text-[#0E5EC8]" />
                    <span>Opening Hours</span>
                  </div>

                  <div className="text-xs text-slate-600">
                    <p>Monday – Sunday</p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      10:00 AM – 10:00 PM
                    </p>
                    <p className="mt-2 text-[10px] leading-relaxed text-slate-400">
                      Timings may vary for individual stores.
                    </p>
                  </div>
                </div>

                {/* Parking */}
                <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Car className="h-4 w-4 text-[#0E5EC8]" />
                    <span>Parking Information</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed text-slate-600">
                    <p>Parking information for visitors:</p>
                    <p>• Car and two-wheeler parking</p>
                    <p>• Highway access</p>
                    <p>• Convenient visitor access</p>
                  </div>
                </div>
              </div>

              {/* Additional Contact Details */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-black text-slate-900">
                  Need additional assistance?
                </h3>

                <div className="mt-3 flex flex-col gap-3 text-sm">
                  <a
                    href="tel:+917732001005"
                    className="flex items-center gap-2 text-slate-600 transition-colors hover:text-[#0E5EC8]"
                  >
                    <Phone className="h-4 w-4 text-[#0E5EC8]" />
                    +91 77320 01005
                  </a>

                  <a
                    href="mailto:s.mall.edakkara@gmail.com"
                    className="flex items-center gap-2 break-all text-slate-600 transition-colors hover:text-[#0E5EC8]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#0E5EC8]" />
                    s.mall.edakkara@gmail.com
                  </a>

                  <a
                    href="https://www.instagram.com/s.mall_edakkara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 transition-colors hover:text-pink-600"
                  >
                    <Instagram className="h-4 w-4 text-pink-500" />
                    @s.mall_edakkara
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md lg:col-span-6">
              <iframe
                title="S Mall Edakkara location on Google Maps"
                src="https://maps.google.com/maps?q=S%20Mall%20Main%20Road%20Edakkara&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://maps.google.com/?q=S+Mall+Main+Road+Edakkara"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md transition-colors hover:text-[#0E5EC8]"
              >
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5 text-[#F9B00C]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
