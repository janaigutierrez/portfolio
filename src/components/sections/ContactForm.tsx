"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

const EASE = [0.16, 1, 0.3, 1] as const;

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
        backgroundColor: "var(--sheet)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Columna esquerra: info + procés */}
          <div
          >
            <p className="text-xs text-pencil mb-3">
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
                  <div className="w-7 h-7 rounded-full bg-pen text-sheet text-xs font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-ink text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>

            {/* Info de contacte */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-pen mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-pencil mb-0.5">Email</p>
                  <a href={`mailto:${t.contact.infoEmail}`} className="text-ink text-sm hover:text-pen transition-colors">
                    {t.contact.infoEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-pen mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-pencil mb-0.5">{t.contact.infoLocationLabel}</p>
                  <p className="text-ink text-sm">{t.contact.infoLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} strokeWidth={1.5} className="text-pen mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-pencil mb-0.5">{t.contact.infoStatus}</p>
                  <p className="text-ink text-sm">{t.contact.infoResponse}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna dreta: targeta del formulari */}
          <div
            className="bg-sheet border border-rule rounded-card p-6 sm:p-8">
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div>
                <label htmlFor="user_name" className="text-xs text-pencil block mb-1.5">
                  {t.contact.labelName}
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder={t.contact.placeholderName}
                  className={`w-full bg-paper border rounded-control px-4 py-3 text-ink placeholder-pencil text-sm outline-none focus:border-pen focus:shadow-[0_0_0_3px_rgba(43,68,176,0.15)] transition-[border-color,box-shadow] duration-200 ${errors.user_name ? "border-error" : "border-rule"}`}
                />
                {errors.user_name && <p className="text-error text-xs mt-1">{errors.user_name}</p>}
              </div>

              <div>
                <label htmlFor="user_email" className="text-xs text-pencil block mb-1.5">
                  {t.contact.labelEmail}
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="text"
                  autoComplete="email"
                  placeholder={t.contact.placeholderEmail}
                  className={`w-full bg-paper border rounded-control px-4 py-3 text-ink placeholder-pencil text-sm outline-none focus:border-pen focus:shadow-[0_0_0_3px_rgba(43,68,176,0.15)] transition-[border-color,box-shadow] duration-200 ${errors.user_email ? "border-error" : "border-rule"}`}
                />
                {errors.user_email && <p className="text-error text-xs mt-1">{errors.user_email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-pencil block mb-1.5">
                  {t.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.placeholderMessage}
                  className={`w-full bg-paper border rounded-control px-4 py-3 text-ink placeholder-pencil text-sm outline-none focus:border-pen focus:shadow-[0_0_0_3px_rgba(43,68,176,0.15)] transition-[border-color,box-shadow] duration-200 resize-none ${errors.message ? "border-error" : "border-rule"}`}
                />
                {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex items-center gap-3 text-ink bg-paper-deep rounded-control px-4 py-3"
                  >
                    <CheckCircle size={18} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="font-medium text-sm">{t.contact.successTitle}</p>
                      <p className="text-xs text-ink-soft">{t.contact.successText}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    type="submit"
                    disabled={status === "sending"}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full bg-pen text-sheet text-sm font-medium hover:bg-pen-deep transition-colors duration-200 disabled:opacity-60 self-start"
                  >
                    {status === "sending" ? t.contact.sending : t.contact.send}
                  </motion.button>
                )}
              </AnimatePresence>

              {status === "error" && (
                <p className="text-error text-sm">{t.contact.errorText}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}