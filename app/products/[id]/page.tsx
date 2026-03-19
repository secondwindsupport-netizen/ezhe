import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, products } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/products"
          className="inline-flex items-center text-[#56B7E6] hover:text-[#3A9BC8] mb-8 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 min-h-[400px]">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500">Product Image</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 lg:p-12">
              <div className="mb-4">
                <span className="text-sm font-semibold text-[#56B7E6] uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                ${product.price.toFixed(2)}
              </div>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-[#56B7E6] text-white py-4 px-6 rounded-md hover:bg-[#3A9BC8] focus:outline-none focus:ring-2 focus:ring-[#56B7E6] focus:ring-offset-2 font-medium text-lg transition-all shadow-sm hover:shadow-md">
                  Add to Cart
                </button>
                <button className="w-full bg-white text-[#56B7E6] border-2 border-[#56B7E6] py-4 px-6 rounded-md hover:bg-[#E8F4F9] focus:outline-none focus:ring-2 focus:ring-[#56B7E6] focus:ring-offset-2 font-medium text-lg transition-all">
                  Learn More
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Product Details
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#56B7E6] mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Adaptive and accessible design</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#56B7E6] mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>High quality materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#56B7E6] mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Ships worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
