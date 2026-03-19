"use client";

import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend/API
    console.log("Form submitted:", data);
    alert("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#56B7E6] focus:border-[#56B7E6] bg-white"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#56B7E6] focus:border-[#56B7E6] bg-white"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#56B7E6] focus:border-[#56B7E6] bg-white"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#56B7E6] focus:border-[#56B7E6] bg-white"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#56B7E6] text-white py-3 px-6 rounded-md hover:bg-[#3A9BC8] focus:outline-none focus:ring-2 focus:ring-[#56B7E6] focus:ring-offset-2 font-medium transition-all shadow-sm hover:shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
