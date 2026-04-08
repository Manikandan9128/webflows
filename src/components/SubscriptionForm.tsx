"use client";

import { useState } from "react";

type Audience = "self" | "other";

const LANGUAGES = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Bengali",
  "Gujarati",
  "Punjabi",
];

const COUNTRIES = [
  { code: "IN", dial: "+91", flag: "🇮🇳" },
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "GB", dial: "+44", flag: "🇬🇧" },
  { code: "AE", dial: "+971", flag: "🇦🇪" },
  { code: "SG", dial: "+65", flag: "🇸🇬" },
];

const DEVICES = ["Smartphone", "Tablet", "Laptop", "Desktop"];
const MODELS_BY_DEVICE: Record<string, string[]> = {
  Smartphone: ["iPhone", "Samsung Galaxy", "OnePlus", "Xiaomi", "Other"],
  Tablet: ["iPad", "Samsung Tab", "Other"],
  Laptop: ["MacBook", "Windows Laptop", "Chromebook", "Other"],
  Desktop: ["iMac", "Windows PC", "Other"],
};

export default function SubscriptionForm() {
  const [audience, setAudience] = useState<Audience>("self");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    initial: "",
    dob: "",
    gender: "",
    email: "",
    country: "IN",
    phone: "",
    languages: ["English", "Hindi"] as string[],
    device: "",
    model: "",
    knowsZoom: "",
    knowsWhatsApp: "",
    agreeTerms: true,
    allowEmails: false,
    allowWhatsApp: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleLang = (lang: string) => {
    update(
      "languages",
      form.languages.includes(lang)
        ? form.languages.filter((l) => l !== lang)
        : [...form.languages, lang],
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    setSubmitted(true);
    console.log("Subscription form submitted:", { audience, ...form });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Selected plan banner */}
      <div className="flex items-center justify-between rounded-xl bg-purple-50 px-6 py-5">
        <div>
          <div className="font-semibold">Selected Plan</div>
          <div className="text-sm text-neutral-700">
            SS Tech Saathi - Lite Plan (Peace of Mind)
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-purple-700">₹199/month</div>
          <div className="text-sm text-neutral-700">Monthly</div>
        </div>
      </div>

      {/* Audience toggle */}
      <div className="grid gap-4 md:grid-cols-2">
        <AudienceCard
          active={audience === "self"}
          onClick={() => setAudience("self")}
          title="I'm Senior"
          subtitle="I am subscribing for myself to learn and stay safe online."
          icon="👤"
        />
        <AudienceCard
          active={audience === "other"}
          onClick={() => setAudience("other")}
          title="For Someone else"
          subtitle="I am subscribing for a parent, relative, or friend."
          icon="👥"
        />
      </div>

      {/* Name row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="First Name">
          <input
            required
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="First name"
            className={inputCls}
          />
        </Field>
        <Field label="Last Name">
          <input
            required
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Last name"
            className={inputCls}
          />
        </Field>
        <Field label="Initial">
          <input
            value={form.initial}
            onChange={(e) => update("initial", e.target.value)}
            placeholder="Initial"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Date Of Birth">
        <input
          type="date"
          required
          value={form.dob}
          onChange={(e) => update("dob", e.target.value)}
          className={inputCls}
        />
      </Field>

      <Field label="Gender">
        <select
          required
          value={form.gender}
          onChange={(e) => update("gender", e.target.value)}
          className={inputCls}
        >
          <option value="">Select</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </select>
      </Field>

      <Field label="Email (Optional)">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@company.com"
          className={inputCls}
        />
      </Field>

      <Field label="Phone number">
        <div className="flex">
          <select
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className="rounded-l-md border border-r-0 border-neutral-200 bg-white px-3 text-sm outline-none focus:border-purple-400"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code} {c.dial}
              </option>
            ))}
          </select>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 (000) 000-0000"
            className="w-full rounded-r-md border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-400"
          />
        </div>
      </Field>

      {/* Languages */}
      <Field label="Preferred Languages">
        <div className="rounded-md border border-neutral-200 px-3 py-2">
          <div className="flex flex-wrap gap-2">
            {form.languages.map((l) => (
              <span
                key={l}
                className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700"
              >
                {l}
                <button
                  type="button"
                  onClick={() => toggleLang(l)}
                  className="text-purple-500 hover:text-purple-800"
                  aria-label={`Remove ${l}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <details className="mt-2">
            <summary className="cursor-pointer text-xs text-neutral-500">
              Add language
            </summary>
            <div className="mt-2 flex flex-wrap gap-2">
              {LANGUAGES.filter((l) => !form.languages.includes(l)).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => toggleLang(l)}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs hover:bg-neutral-50"
                >
                  + {l}
                </button>
              ))}
            </div>
          </details>
        </div>
      </Field>

      <Field label="Device">
        <select
          required
          value={form.device}
          onChange={(e) => {
            update("device", e.target.value);
            update("model", "");
          }}
          className={inputCls}
        >
          <option value="">Select</option>
          {DEVICES.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </Field>

      <Field label="Model">
        <select
          value={form.model}
          onChange={(e) => update("model", e.target.value)}
          disabled={!form.device}
          className={inputCls}
        >
          <option value="">Select</option>
          {(MODELS_BY_DEVICE[form.device] ?? []).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </Field>

      <Field label="Do you know how to join a Zoom call?">
        <select
          required
          value={form.knowsZoom}
          onChange={(e) => update("knowsZoom", e.target.value)}
          className={inputCls}
        >
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
          <option>Need help</option>
        </select>
      </Field>

      <Field label="Do you know how to take calls on WhatsApp?">
        <select
          required
          value={form.knowsWhatsApp}
          onChange={(e) => update("knowsWhatsApp", e.target.value)}
          className={inputCls}
        >
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
          <option>Need help</option>
        </select>
      </Field>

      <div className="space-y-2 pt-2">
        <Check
          checked={form.agreeTerms}
          onChange={(v) => update("agreeTerms", v)}
          label="Agree to terms and conditions"
        />
        <Check
          checked={form.allowEmails}
          onChange={(v) => update("allowEmails", v)}
          label="Allow us to send periodic emails and updates"
        />
        <Check
          checked={form.allowWhatsApp}
          onChange={(v) => update("allowWhatsApp", v)}
          label="Agree to get WhatsApp messages from us"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-purple-600 py-3.5 font-medium text-white hover:bg-purple-700"
      >
        Proceed to Payment
      </button>

      {submitted && (
        <p className="text-center text-sm text-green-700">
          Form captured locally. (Payment & lead-store APIs not yet wired up.)
        </p>
      )}
    </form>
  );
}

const inputCls =
  "w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-purple-400";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 text-sm font-medium text-neutral-800">{label}</div>
      {children}
    </label>
  );
}

function AudienceCard({
  active,
  onClick,
  title,
  subtitle,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-6 py-6 text-center transition ${
        active
          ? "border-purple-300 bg-purple-50"
          : "border-neutral-200 bg-white hover:border-neutral-300"
      }`}
    >
      <div
        className={`mx-auto mb-3 grid h-10 w-10 place-items-center rounded-md text-lg ${
          active ? "bg-purple-600 text-white" : "bg-neutral-100 text-neutral-700"
        }`}
      >
        {icon}
      </div>
      <div
        className={`font-semibold ${
          active ? "text-purple-700" : "text-neutral-900"
        }`}
      >
        {title}
      </div>
      <div className="mt-1 text-sm text-neutral-600">{subtitle}</div>
    </button>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-purple-600"
      />
      {label}
    </label>
  );
}
