import React, { useState } from 'react';
import { FormData, FormErrors, ApiResponse } from '../types';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// ── Client-side validators ──────────────────────────────────────────────────
const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.phone.trim() || !/^[6-9]\d{9}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  return errors;
};

// ── Field component ─────────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({ label, id, type = 'text', placeholder, value, error, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-semibold text-brand-dark">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200
        ${error
          ? 'border-red-400 focus:border-red-500 bg-red-50'
          : 'border-gray-200 focus:border-brand-blue bg-white focus:ring-2 focus:ring-brand-blue/10'
        }`}
    />
    {error && (
      <p className="text-xs text-red-500 flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
);

// ── Main form ───────────────────────────────────────────────────────────────
const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the field error as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json: ApiResponse = await res.json();
      setResponse(json);

      if (json.success) {
        setFormData({ name: '', email: '', phone: '' });
        setErrors({});
      } else if (json.errors) {
        setErrors(json.errors as FormErrors);
      }
    } catch {
      setResponse({
        success: false,
        message: 'Could not connect to the server. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#EFF6FF] via-[#EDE9FE] to-[#DBEAFE]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left copy */}
        <div className="flex-1">
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Limited Seats Available
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-dark mb-4">
            Ready to launch your child's tech journey?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Fill in the form and our team will get in touch within 24 hours to confirm
            your enrollment and share the session schedule.
          </p>

          {/* Trust badges */}
          <div className="flex flex-col gap-3">
            {[
              { icon: '✅', text: 'Live, interactive sessions with expert instructors' },
              { icon: '📁', text: 'All learning materials provided digitally' },
              { icon: '🏅', text: 'Certificate of completion for every participant' },
              { icon: '🔄', text: 'Full refund if cancelled 7+ days before start' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="text-lg">{icon}</span>
                <p className="text-sm text-brand-dark font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="w-full lg:w-[440px] bg-white rounded-3xl shadow-xl p-8">
          <h3 className="font-display font-black text-xl text-brand-dark mb-1">
            Register Your Child
          </h3>
          <p className="text-brand-muted text-sm mb-6">
            AI & Robotics Summer Workshop · ₹2,999
          </p>

          {/* Success banner */}
          {response?.success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-display font-bold text-green-800 text-sm">
                  You're in!
                </p>
                <p className="text-green-700 text-sm mt-0.5">{response.message}</p>
              </div>
            </div>
          )}

          {/* Error banner */}
          {response && !response.success && !response.errors && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4">
              <p className="text-red-700 text-sm">{response.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <Field
              label="Parent / Guardian Name"
              id="name"
              placeholder="Rajesh Kumar"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <Field
              label="Email Address"
              id="email"
              type="email"
              placeholder="rajesh@example.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
            <Field
              label="Phone Number"
              id="phone"
              type="tel"
              placeholder="9876543210"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue hover:bg-brand-indigo disabled:bg-brand-blue/50 text-white font-display font-bold text-base py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow hover:shadow-lg hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                'Confirm Enrollment →'
              )}
            </button>

            <p className="text-xs text-center text-brand-muted">
              By registering, you agree to Kidrove's{' '}
              <a href="#" className="text-brand-blue hover:underline">
                Terms & Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
