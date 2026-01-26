"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface DonationFormData {
  amount: string;
  customAmount?: string;
  name: string;
  email: string;
  message?: string;
}

const presetAmounts = ["25", "50", "100", "250", "500"];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DonationFormData>();

  const onSubmit = async (data: DonationFormData) => {
    const finalAmount = customAmount ? data.customAmount : selectedAmount;
    // Here you would typically integrate with a payment processor like Stripe
    console.log("Donation submitted:", { ...data, amount: finalAmount });
    alert(
      `Thank you for your donation of $${finalAmount}! Payment integration coming soon.`
    );
    reset();
    setSelectedAmount("");
    setCustomAmount(false);
  };

  const handlePresetClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount(false);
    setValue("amount", amount);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Donation Amount *
        </label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handlePresetClick(amount)}
              className={`py-3 px-4 rounded-md border-2 font-medium transition-colors ${
                selectedAmount === amount && !customAmount
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="customAmount"
            checked={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.checked);
              if (e.target.checked) {
                setSelectedAmount("");
              }
            }}
            className="rounded border-gray-300"
          />
          <label htmlFor="customAmount" className="text-sm text-gray-700">
            Enter custom amount
          </label>
        </div>
        {customAmount && (
          <div className="mt-3">
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter amount"
              {...register("customAmount", {
                required: customAmount ? "Please enter an amount" : false,
                min: { value: 1, message: "Minimum donation is $1" },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.customAmount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.customAmount.message}
              </p>
            )}
          </div>
        )}
        {!customAmount && !selectedAmount && (
          <p className="mt-2 text-sm text-red-600">Please select an amount</p>
        )}
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add a personal message with your donation..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}
