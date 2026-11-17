import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

export default function Collection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="bg-beige/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="collection-title"
          eyebrow="Template"
          title="Our Collection"
          text="Find the perfect design for your special day."
        />

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
