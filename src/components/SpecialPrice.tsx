import { products } from "@/data/products";
import { formatRupiah } from "@/lib/whatsapp";

export default function SpecialPrice() {
  return (
    <section
      aria-labelledby="special-price-title"
      className="bg-charcoal py-20 text-ivory md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <h2
            id="special-price-title"
            className="font-serif text-4xl font-medium uppercase tracking-[0.12em] sm:text-5xl"
          >
            Special Opening Price
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory/80">
            Celebrate your beginning with a special price from RiWed.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
            Harga yang tampil adalah harga pembukaan saat ini, sedangkan harga
            coret adalah harga normal.
          </p>
        </div>

        <ul className="divide-y divide-ivory/20 border-y border-ivory/20">
          {products.map((product) => (
            <li
              key={product.slug}
              className="flex items-baseline justify-between gap-4 py-5"
            >
              <span className="font-serif text-2xl">{product.name}</span>
              <span className="flex items-baseline gap-3">
                <s className="text-sm text-ivory/60">
                  <span className="sr-only">Harga normal: </span>
                  {formatRupiah(product.originalPrice)}
                </s>
                <span className="font-serif text-2xl text-champagne-soft">
                  <span className="sr-only">Harga pembukaan: </span>
                  {formatRupiah(product.price)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
