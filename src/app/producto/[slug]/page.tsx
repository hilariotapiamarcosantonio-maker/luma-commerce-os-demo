"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  Star,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { ProductVisual } from "@/components/store/ProductVisual";
import { buildProductWhatsappMessage } from "@/lib/whatsapp";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  // Product not found state
  if (!product) {
    return (
      <>
        <StoreHeader />
        <main className="min-h-screen bg-[#f2eee9] flex items-center justify-center py-16 px-4">
          <div className="max-w-md w-full bg-[#faf8f5] border border-[#f2eee9] rounded-3xl p-8 text-center space-y-6 shadow-sm">
            <div className="mx-auto h-16 w-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
              <AlertCircle className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Demo Comercial</span>
              <h1 className="text-xl font-extrabold text-[#3d2b1f]">Producto Demo No Encontrado</h1>
              <p className="text-xs text-[#3d2b1f]/70 leading-relaxed">
                El producto con el enlace solicitado no forma parte de la simulación comercial activa de Nexa Store.
              </p>
            </div>
            <div className="pt-2 border-t border-[#f2eee9]">
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#c5a059] hover:bg-[#B5914A] text-white py-3.5 font-bold text-xs shadow-md transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Explorar Productos Activos
              </Link>
            </div>
          </div>
        </main>
        <StoreFooter />
      </>
    );
  }

  const whatsappMessageUrl = buildProductWhatsappMessage(product);

  return (
    <>
      <StoreHeader />
      <main className="min-h-screen bg-[#f2eee9] py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#3d2b1f]/75 hover:text-[#c5a059] mb-8 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Regresar al Catálogo
          </Link>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 bg-[#faf8f5] border border-[#f2eee9] rounded-3xl p-6 md:p-10 shadow-sm items-start">
            
            {/* Visual Column */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#f2eee9]/40 border border-[#f2eee9] rounded-2xl py-12 px-6 relative overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#faf8f5]/95 backdrop-blur-sm border border-[#f2eee9] text-[#c5a059] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm z-10">
                  {product.badge}
                </span>
              )}
              <ProductVisual
                imageGradient={product.image}
                name={product.name}
                category={product.category}
                sku={product.sku}
                size="lg"
                className="relative z-10"
              />
              <div className="mt-8 flex items-center justify-center gap-1.5 text-[10px] text-[#3d2b1f]/60">
                <Sparkles className="h-3.5 w-3.5 text-[#c5a059]" />
                <span>Representación visual interactiva</span>
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-7 space-y-6">
              {/* Category & Badge */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c5a059] block">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3d2b1f] tracking-tight">
                  {product.name}
                </h1>
                <div className="text-[10px] font-mono text-[#3d2b1f]/50 mt-1">
                  SKU: {product.sku}
                </div>
              </div>

              {/* Star Rating Simulator */}
              <div className="flex items-center gap-1 text-[#c5a059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="text-[10px] text-[#3d2b1f]/60 font-semibold ml-2">
                  5.0 (Valoraciones Demo)
                </span>
              </div>

              {/* Price */}
              <div className="py-2 border-y border-[#f2eee9] flex items-baseline gap-3">
                {product.priceBefore && (
                  <span className="text-sm text-[#3d2b1f]/50 line-through">
                    RD$ {product.priceBefore.toLocaleString()}
                  </span>
                )}
                <span className="text-xl sm:text-2xl font-black text-[#c5a059]">
                  RD$ {product.price.toLocaleString()}
                </span>
                <span className="text-[10px] font-semibold text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded-md border border-[#a5d6a7] ml-2">
                  Demo Disponible
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xs text-[#3d2b1f]/80 leading-relaxed">
                {product.description}
              </p>

              {/* Benefits Section */}
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#3d2b1f]/75 block">
                  Beneficios Clave:
                </span>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-[#3d2b1f]/80">
                      <Check className="h-4 w-4 text-[#2e7d32] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions Section */}
              <div className="pt-6 border-t border-[#f2eee9] space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  {/* Quantity selector */}
                  <div className="flex items-center justify-between border border-[#f2eee9] rounded-full bg-[#f2eee9] px-2 py-1 w-full sm:w-auto min-w-[120px]">
                    <button
                      onClick={handleDecrease}
                      className="p-1 rounded-full text-[#3d2b1f]/70 hover:text-[#c5a059] active:scale-90 transition-transform"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-[#3d2b1f] select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrease}
                      className="p-1 rounded-full text-[#3d2b1f]/70 hover:text-[#c5a059] active:scale-90 transition-transform"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Add to cart button */}
                  <button
                    onClick={handleAddToCart}
                    className={`w-full sm:flex-1 py-3 px-6 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 ${
                      added
                        ? "bg-[#2e7d32] text-white hover:bg-[#2e7d32]"
                        : "bg-[#c5a059] hover:bg-[#b38f48] text-white"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="h-4 w-4" />
                        ¡Agregado con éxito!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        Agregar al Carrito
                      </>
                    )}
                  </button>
                </div>

                {/* Second Row Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={whatsappMessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white py-3 font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-current" />
                    Consultar por WhatsApp
                  </a>

                  <Link
                    href="/checkout"
                    className="flex items-center justify-center gap-2 rounded-full border border-[#c5a059] hover:bg-[#f2eee9]/30 text-[#3d2b1f] py-3 font-bold text-xs transition-colors"
                  >
                    Ir directo al Checkout
                  </Link>
                </div>
              </div>

              {/* Safe Demo Notice */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f2eee9]/40 border border-[#f2eee9]/80 text-[#3d2b1f]/70 text-[10px] leading-relaxed">
                <ShieldCheck className="h-4 w-4 text-[#2e7d32] shrink-0" />
                <span>
                  <strong>Demo Comercial</strong>: Los datos de esta página son ficticios. El checkout registrará tu pedido de simulación en el panel de administración local.
                </span>
              </div>

            </div>
          </div>
        </div>
      </main>
      <StoreFooter />
    </>
  );
}
