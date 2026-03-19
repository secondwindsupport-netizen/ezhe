export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Learn more about our mission and values
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8 border border-gray-200">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to create simple, versatile adaptive tools that move with the body. Through customizable design and multiple levels of support, we empower individuals to engage more freely and independently.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-[#E8F4F9] rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously develop and refine adaptive tools that meet the evolving needs of our community.
                </p>
              </div>
              <div className="p-6 bg-[#E8F4F9] rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  All our products undergo rigorous quality testing to ensure they meet the highest standards of durability and performance.
                </p>
              </div>
              <div className="p-6 bg-[#E8F4F9] rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency about our products, sourcing, and business practices. You deserve to know what you're buying.
                </p>
              </div>
              <div className="p-6 bg-[#E8F4F9] rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We work to make adaptive tools affordable and accessible to everyone, regardless of ability or background.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Spoon was founded with a simple vision: to create adaptive tools that empower individuals to engage more freely and independently. We started as a small team passionate about accessibility and have grown into a trusted source for innovative adaptive products.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Today, we work with partners who share our values and are committed to creating products that benefit individuals across all abilities. We're constantly expanding our catalog and improving our offerings based on user feedback and research.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Want to learn more or get involved? We'd love to hear from you! Check out our products, reach out through our contact page, or consider making a donation to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="bg-[#56B7E6] text-white px-6 py-3 rounded-md hover:bg-[#3A9BC8] focus:outline-none focus:ring-2 focus:ring-[#56B7E6] focus:ring-offset-2 font-medium transition-all shadow-sm hover:shadow-md text-center"
              >
                Browse Products
              </a>
              <a
                href="/contact"
                className="bg-white text-[#56B7E6] border-2 border-[#56B7E6] px-6 py-3 rounded-md hover:bg-[#E8F4F9] focus:outline-none focus:ring-2 focus:ring-[#56B7E6] focus:ring-offset-2 font-medium transition-all text-center"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
