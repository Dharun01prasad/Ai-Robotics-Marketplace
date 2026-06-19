import React, { useState } from 'react';
import { FormData, FormErrors, ApiResponse } from '../types';
import { Input } from './ui/input';
import { Highlight } from './ui/hero-highlight';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setResponse({ success: false, message: 'Could not connect to the server. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-16 sm:py-20 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: benefits / trust with highlight effect */}
        <div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-brand-dark mb-3 leading-tight">
            Ready to launch your child's{' '}
            <Highlight className="text-brand-dark dark:text-white bg-gradient-to-r from-brand-blue/40 to-brand-orange/40 dark:from-brand-blue/60 dark:to-brand-orange/60">
              tech journey
            </Highlight>
            ?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-7">
            Fill in the form and our team will get in touch within 24 hours to confirm
            enrollment and share the session schedule.
          </p>

          <div className="flex flex-col gap-3.5">
            {[
              { icon: '✓', text: 'Live, interactive sessions with expert mentors' },
              { icon: '✓', text: 'All learning materials provided digitally' },
              { icon: '✓', text: 'Certificate of completion for every participant' },
              { icon: '✓', text: 'Full refund if cancelled 7+ days before start' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="w-6 h-6 shrink-0 rounded-card bg-brand-orange/15 text-brand-orange-dark flex items-center justify-center text-xs font-bold">
                  {icon}
                </span>
                <p className="text-sm text-brand-dark font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: form card */}
        <div className="bg-white rounded-card shadow-card-hover border border-brand-border p-7 sm:p-8">
          <h3 className="font-extrabold text-xl text-brand-dark mb-1">Register Your Child</h3>
          <p className="text-brand-muted text-sm mb-6">AI & Robotics Summer Workshop · ₹2,999</p>

          {response?.success && (
            <div className="mb-5 bg-green-50 border border-green-200 rounded-card p-4">
              <p className="font-bold text-green-800 text-sm">You're in!</p>
              <p className="text-green-700 text-sm mt-0.5">{response.message}</p>
            </div>
          )}
          {response && !response.success && !response.errors && (
            <div className="mb-5 bg-red-50 border border-red-200 rounded-card p-4">
              <p className="text-red-700 text-sm">{response.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            <Input
              label="Parent / Guardian Name"
              id="name"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-card transition-colors duration-150 flex items-center justify-center gap-2 mt-1"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                'Confirm Enrollment'
              )}
            </button>

            <p className="text-xs text-center text-brand-muted -mt-2">
              By registering, you agree to gemma's{' '}
              <a href="#" className="text-brand-blue hover:underline">Terms & Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;