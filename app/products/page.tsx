import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of adaptable, easy-to-use tools designed to make a positive impact.
          </p>
        </div>
        
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-center gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
