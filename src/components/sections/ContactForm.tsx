"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Mail } from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

const EASE = [0.16, 1, 0.3, 1] as const;
const WHATSAPP_NUMBER = "34623065244";

const channelClass =
  "size-12 rounded-full border border-rule bg-paper grid place-items-center text-ink hover:text-pen hover:border-pen transition active:scale-[0.95] duration-200";

const inputClass = (hasError: boolean) =>
  `w-full bg-paper border rounded-control px-4 py-3 text-ink placeholder-pencil text-sm outline-none focus:border-pen focus:shadow-[0_0_0_3px_rgba(43,68,176,0.15)] transition-[border-color,box-shadow] duration-200 ${
    hasError ? "border-error" : "border-rule"
  }`;

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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  const fieldError = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="text-error text-xs mt-1.5">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contacte" className="bg-sheet border-t border-rule scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">

          {/* Columna esquerra: missatge + canals directes */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">{t.contact.title}</h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-3 max-w-[44ch]">{t.contact.subtitle}</p>
            <p className="text-ink-soft leading-relaxed mb-10 max-w-[44ch]">{t.contact.process}</p>

            {/* Canals directes: dues icones germanes, WhatsApp i correu */}
            <p className="text-sm text-pencil mb-3">{t.contact.directLabel}</p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.whatsappCta}
                title={t.contact.whatsappCta}
                className={channelClass}
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                  <path d={siWhatsapp.path} />
                </svg>
              </a>
              <a
                href={`mailto:${t.contact.infoEmail}`}
                aria-label={`${t.contact.emailCta}: ${t.contact.infoEmail}`}
                title={t.contact.infoEmail}
                className={channelClass}
              >
                <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
              </a>
              <span className="font-hand text-pen text-2xl leading-none -rotate-2 ml-2">
                <span aria-hidden="true">← </span>
                {t.contact.fastNote}
              </span>
            </div>

            <p className="text-sm text-pencil mt-10 max-w-[44ch]">{t.contact.location}</p>
          </div>

          {/* Columna dreta: formulari */}
          <div className="bg-paper border border-rule rounded-card p-6 sm:p-8">
            <h3 className="font-display text-xl text-ink mb-6">{t.contact.formTitle}</h3>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div>
                <label htmlFor="user_name" className="text-sm text-ink-soft block mb-2">
                  {t.contact.labelName}
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.contact.placeholderName}
                  aria-invalid={!!errors.user_name}
                  aria-describedby={errors.user_name ? "user_name-error" : undefined}
                  className={inputClass(!!errors.user_name)}
                />
                {fieldError("user_name")}
              </div>

              <div>
                <label htmlFor="user_email" className="text-sm text-ink-soft block mb-2">
                  {t.contact.labelEmail}
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="text"
                  autoComplete="email"
                  placeholder={t.contact.placeholderEmail}
                  aria-invalid={!!errors.user_email}
                  aria-describedby={errors.user_email ? "user_email-error" : undefined}
                  className={inputClass(!!errors.user_email)}
                />
                {fieldError("user_email")}
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-ink-soft block mb-2">
                  {t.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.placeholderMessage}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClass(!!errors.message)} resize-none`}
                />
                {fieldError("message")}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    role="status"
                    className="flex items-center gap-3 text-ink bg-paper-deep rounded-control px-4 py-3"
                  >
                    <CheckCircle size={18} strokeWidth={1.75} className="text-pen shrink-0" aria-hidden="true" />
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
                    className="px-6 py-3 rounded-full bg-ink text-sheet text-sm font-medium hover:bg-ink-soft transition-colors duration-200 disabled:opacity-60 self-start"
                  >
                    {status === "sending" ? t.contact.sending : t.contact.send}
                  </motion.button>
                )}
              </AnimatePresence>

              {status === "error" && (
                <p role="alert" className="text-error text-sm">{t.contact.errorText}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
