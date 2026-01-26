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

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Spoon, we believe in making sustainability accessible to everyone. Our mission is to provide high-quality, eco-friendly products that help individuals and families reduce their environmental footprint without compromising on convenience or style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We carefully curate each product in our catalog, ensuring they meet our strict standards for environmental impact, quality, and usability. Every purchase you make helps support our mission to create a more sustainable future.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We prioritize products that have a minimal environmental impact and are made from sustainable, renewable materials.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-700">
                  All our products undergo rigorous quality testing to ensure they meet the highest standards of durability and performance.
                </p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-700">
                  We believe in complete transparency about our products, sourcing, and business practices. You deserve to know what you're buying.
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  Sustainable living shouldn't be a luxury. We work to make eco-friendly products affordable and accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spoon was founded with a simple vision: to make it easier for people to make sustainable choices in their everyday lives. We started as a small team passionate about environmental conservation and have grown into a trusted source for eco-friendly products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Today, we work with suppliers who share our values and are committed to creating products that benefit both people and the planet. We're constantly expanding our catalog and improving our offerings based on customer feedback and environmental research.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Want to learn more or get involved? We'd love to hear from you! Check out our products, reach out through our contact page, or consider making a donation to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors text-center"
              >
                Browse Products
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors text-center"
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
