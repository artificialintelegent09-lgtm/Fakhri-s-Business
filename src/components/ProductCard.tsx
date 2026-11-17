import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { getProductCoverSrc } from "@/lib/assets";
import { formatRupiah, productOrderUrl } from "@/lib/whatsapp";
import ButtonLink from "./ButtonLink";
import ProductVisual from "./ProductVisual";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden bg-beige">
        <ProductVisual
          theme={product.theme}
          imageSrc={getProductCoverSrc(product.slug)}
          alt={`Pratinjau template ${product.name}`}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="font-serif text-3xl font-medium">{product.name}</h3>
        <p className="mt-2 text-muted">{product.description}</p>

        <p className="mt-6 flex items-baseline gap-3">
          <span className="font-serif text-4xl font-medium">
            <span className="sr-only">Harga pembukaan: </span>
            {formatRupiah(product.price)}
          </span>
          <s className="text-sm text-brown">
            <span className="sr-only">Harga normal: </span>
            {formatRupiah(product.originalPrice)}
          </s>
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink
            href={productOrderUrl(product)}
            external
            className="flex-1"
          >
            Order Now
          </ButtonLink>
          <ButtonLink
            href={product.demoUrl}
            external
            variant="secondary"
            className="flex-1"
          >
            Live Preview
            <ExternalLink size={15} aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
