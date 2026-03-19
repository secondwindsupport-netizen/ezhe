import DonationForm from "@/components/DonationForm";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your donation helps us continue to provide adaptive tools and expand our impact on accessibility and independence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-[#56B7E6] mb-2">$25</div>
            <p className="text-gray-600">Helps support our product development</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-[#56B7E6] mb-2">$100</div>
            <p className="text-gray-600">Sponsors educational programs</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-[#56B7E6] mb-2">$500</div>
            <p className="text-gray-600">Funds new product research</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-gray-200">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Make a Donation
            </h2>
            <DonationForm />
          </div>
        </div>

        <div className="mt-12 bg-[#E8F4F9] rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-[#56B7E6] mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Research and development of new adaptive tools</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-[#56B7E6] mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Educational programs and accessibility workshops</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-[#56B7E6] mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Partnerships with accessibility organizations</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-[#56B7E6] mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Making adaptive tools more accessible and affordable</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
