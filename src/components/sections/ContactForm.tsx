"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    const name = (form.elements.namedItem("user_name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("user_email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhone = /^[\d\s\+\-\(\)]{7,}$/.test(email);
    if (!name || name.length < 2) errs.user_name = t.contact.errorName;
    if (!email || (!isEmail && !isPhone)) errs.user_email = t.contact.errorEmail;
    if (!message || message.length < 10) errs.message = t.contact.errorMessage;
    return errs;
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!formRef.current) return;

    const honeypot = (formRef.current.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    const errs = validate(formRef.current);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");
    setErrors({});

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const steps = [t.contact.step1, t.contact.step2, t.contact.step3];

  return (
    <section
      id="contacte"
      style={{
        backgroundColor: "var(--paper)",
        backgroundImage: "radial-gradient(circle, var(--line) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Columna esquerra: info + procés */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-stone mb-3">
              {t.contact.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              {t.contact.title}
            </h2>
            <p className="text-ink-soft leading-relaxed mb-10">
              {t.contact.subtitle}
            </p>

            {/* Passos */}
            <div className="flex flex-col gap-4 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber text-paper font-mono text-xs font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 ? (
                    <ArrowRight size={14} className="text-stone shrink-0 hidden" aria-hidden="true" />
                  ) : null}
                  <p className="text-ink text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>

            {/* Info de contacte */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-0.5">Email</p>
                  <a href={`mailto:${t.contact.infoEmail}`} className="text-ink text-sm hover:text-amber transition-colors">
                    {t.contact.infoEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-0.5">{t.contact.infoLocationLabel}</p>
                  <p className="text-ink text-sm">{t.contact.infoLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-0.5">{t.contact.infoStatus}</p>
                  <p className="text-ink text-sm">{t.contact.infoResponse}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna dreta: targeta del formulari */}
          <div className="bg-bg-card border border-line rounded-2xl p-6 sm:p-8 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div>
                <label htmlFor="user_name" className="font-mono text-[10px] uppercase tracking-widest text-stone block mb-1.5">
                  {t.contact.labelName}
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder={t.contact.placeholderName}
                  className={`w-full bg-bg border rounded-xl px-4 py-3 text-ink placeholder-stone text-sm outline-none focus:border-amber transition-colors ${errors.user_name ? "border-red-400" : "border-line"}`}
                />
                {errors.user_name && <p className="text-red-400 text-xs mt-1">{errors.user_name}</p>}
              </div>

              <div>
                <label htmlFor="user_email" className="font-mono text-[10px] uppercase tracking-widest text-stone block mb-1.5">
                  {t.contact.labelEmail}
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder={t.contact.placeholderEmail}
                  className={`w-full bg-bg border rounded-xl px-4 py-3 text-ink placeholder-stone text-sm outline-none focus:border-amber transition-colors ${errors.user_email ? "border-red-400" : "border-line"}`}
                />
                {errors.user_email && <p className="text-red-400 text-xs mt-1">{errors.user_email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-stone block mb-1.5">
                  {t.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.placeholderMessage}
                  className={`w-full bg-bg border rounded-xl px-4 py-3 text-ink placeholder-stone text-sm outline-none focus:border-amber transition-colors resize-none ${errors.message ? "border-red-400" : "border-line"}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === "success" ? (
                <div className="flex items-center gap-3 text-olive bg-olive-soft rounded-xl px-4 py-3">
                  <CheckCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="font-medium text-sm">{t.contact.successTitle}</p>
                    <p className="text-xs text-ink-soft">{t.contact.successText}</p>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 rounded-full bg-amber text-paper text-sm font-medium hover:bg-amber-deep transition-colors duration-200 disabled:opacity-60 self-start"
                >
                  {status === "sending" ? t.contact.sending : t.contact.send}
                </button>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">{t.contact.errorText}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}