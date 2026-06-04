"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Award, MessageSquare, Star, Sparkles, ShieldCheck, Heart, Truck, Plus, ShoppingBag } from "lucide-react";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { StoreFooter } from "@/components/layout/StoreFooter";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductVisual } from "@/components/store/ProductVisual";
import { buildGeneralAdvisorMessage, buildProductWhatsappMessage } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";

export default function StoreFrontHome() {
  const { addItem } = useCart();
  const advisorLink = buildGeneralAdvisorMessage();

  // Get 4 featured products
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      <StoreHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1e2d1a] to-[#2a3b26] py-20 lg:py-28 border-b border-[#2a3b26]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-2">
                <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full border-2 border-[#c5a059] bg-[#2a3b26] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <ShoppingBag className="h-12 w-12 md:h-16 md:w-16 text-[#c5a059]" />
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1e2d1a]/80 border border-[#c5a059]/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#c5a059]">
                <Sparkles className="h-3.5 w-3.5 text-[#c5a059]" />
                Colección Premium Nexa Store
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#faf8f5] sm:text-5xl md:text-6xl lg:leading-[1.15]">
                Tienda premium demo para presentar productos, recibir pedidos y organizar oportunidades comerciales.
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-xs sm:text-sm text-[#f2eee9]/80 leading-relaxed">
                Demo oficial de Luma Premium con catálogo, carrito, checkout simulado y panel operativo para tiendas y marcas de productos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/tienda"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#c5a059] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b38f48] hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  Ver Tienda Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={advisorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-[#c5a059] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#faf8f5] bg-transparent shadow-sm hover:bg-[#2a3b26] hover:scale-[1.01] transition-all"
                >
                  <MessageSquare className="h-4 w-4 text-[#c5a059]" />
                  Asesoría de WhatsApp
                </a>
              </div>
            </div>

            {/* Visual Assembly (3D Mockup showcase) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] h-[360px] flex items-center justify-center">
                {/* Background decorative blob */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#C7A45A]/10 to-[#F5E6CA]/30 opacity-60 blur-2xl -z-10" />
                
                {/* 3D Product Mockup Card 1 */}
                <div className="absolute w-[240px] p-6 rounded-2xl bg-[#faf8f5] border border-[#f2eee9] shadow-xl rotate-[-6deg] translate-x-[-30px] transition-all hover:rotate-0 hover:scale-105 duration-300 z-10">
                  <div className="h-48 w-full bg-[#f2eee9] flex items-center justify-center rounded-xl overflow-hidden border border-[#f2eee9]/40">
                    <ProductVisual
                      imageGradient="from-[#fbcfe8] to-[#db2777]"
                      name="Fragancia Aura Nº1"
                      category="Fragancias"
                      sku="FRAG-AUR-N1"
                      size="md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#c5a059] block">Nuestra Fórmula Insignia</span>
                    <h3 className="text-xs font-bold text-[#3d2b1f] mt-0.5">Fragancia Aura Nº1</h3>
                  </div>
                </div>

                {/* 3D Product Mockup Card 2 */}
                <div className="absolute w-[240px] p-6 rounded-2xl bg-[#faf8f5] border border-[#f2eee9] shadow-2xl rotate-[6deg] translate-x-[30px] translate-y-[30px] transition-all hover:rotate-0 hover:scale-105 duration-300 z-20">
                  <div className="h-48 w-full bg-[#f2eee9] flex items-center justify-center rounded-xl overflow-hidden border border-[#f2eee9]/40">
                    <ProductVisual
                      imageGradient="from-[#fef3c7] to-[#d97706]"
                      name="Set Regalo Premium"
                      category="Regalos"
                      sku="SET-REG-PREM"
                      size="md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#c5a059] block">Edición Especial</span>
                    <h3 className="text-xs font-bold text-[#3d2b1f] mt-0.5">Set Regalo Premium</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="bg-[#faf8f5] py-16 lg:py-24 border-b border-[#f2eee9]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Pilares de Nexa Store</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#3d2b1f] sm:text-4xl">
              ¿Por qué elegir Nexa Store?
            </h2>
            <p className="text-xs sm:text-sm text-[#3d2b1f]/70">
              Fragancias exclusivas y productos seleccionados para un estilo de vida premium. Ofrecemos una experiencia digital y operativa impecable.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {/* Pillar 1: Calidad Premium */}
            <div className="rounded-2xl border border-[#f2eee9] bg-[#f2eee9] p-6 text-center transition-all hover:shadow-md hover:border-[#c5a059]/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0284C7]">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#3d2b1f]">Calidad Premium</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed">
                Ingredientes selectos y acabados de alta gama para satisfacer los estándares más exigentes.
              </p>
            </div>

            {/* Pillar 2: Diseño Exclusivo */}
            <div className="rounded-2xl border border-[#f2eee9] bg-[#f2eee9] p-6 text-center transition-all hover:shadow-md hover:border-[#c5a059]/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#DCFCE7] text-[#15803D]">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#3d2b1f]">Diseño Exclusivo</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed">
                Línea de productos pensada para complementar ambientes modernos y sofisticados.
              </p>
            </div>

            {/* Pillar 3: Hogar y Estilo */}
            <div className="rounded-2xl border border-[#f2eee9] bg-[#f2eee9] p-6 text-center transition-all hover:shadow-md hover:border-[#c5a059]/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#3d2b1f]">Hogar y Estilo</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed">
                Velas y difusores que transforman tus espacios en santuarios de serenidad.
              </p>
            </div>

            {/* Pillar 4: Experiencia de Compra */}
            <div className="rounded-2xl border border-[#f2eee9] bg-[#f2eee9] p-6 text-center transition-all hover:shadow-md hover:border-[#c5a059]/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F3FF] text-[#7C3AED]">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#3d2b1f]">Experiencia de Compra</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed">
                Proceso digital fluido e intuitivo para explorar, seleccionar y adquirir tus productos favoritos.
              </p>
            </div>

            {/* Pillar 5: WhatsApp Concierge */}
            <div className="rounded-2xl border border-[#f2eee9] bg-[#f2eee9] p-6 text-center transition-all hover:shadow-md hover:border-[#c5a059]/20">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eee9] text-[#c5a059]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#3d2b1f]">WhatsApp Concierge</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed">
                Asesoramiento personalizado en tiempo real para guiarte en cada paso de tu selección.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section (4 Steps) */}
      <section className="bg-[#f2eee9] py-16 lg:py-24 border-b border-[#f2eee9]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Compra Fácil</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#3d2b1f]">
              Cómo comprar en 4 sencillos pasos
            </h2>
            <p className="text-xs sm:text-sm text-[#3d2b1f]/70">
              Disfruta de una experiencia de compra ágil, segura y completamente digitalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf8f5] border border-[#f2eee9] shadow-sm text-sm font-extrabold text-[#c5a059] relative z-10">
                01
              </div>
              <h3 className="text-sm font-bold text-[#3d2b1f]">Explora Productos</h3>
              <p className="text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed px-4">
                Visita nuestro catálogo y elige las fragancias, accesorios o kits ideales para ti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf8f5] border border-[#f2eee9] shadow-sm text-sm font-extrabold text-[#c5a059] relative z-10">
                02
              </div>
              <h3 className="text-sm font-bold text-[#3d2b1f]">Agrega al Carrito</h3>
              <p className="text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed px-4">
                Ve añadiendo tus favoritos y ajustando las cantidades de tu pedido de forma interactiva.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf8f5] border border-[#f2eee9] shadow-sm text-sm font-extrabold text-[#c5a059] relative z-10">
                03
              </div>
              <h3 className="text-sm font-bold text-[#3d2b1f]">Confirma tu Pedido</h3>
              <p className="text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed px-4">
                Completa tu formulario de envío. Registraremos tu pedido en línea de forma inmediata.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf8f5] border border-[#f2eee9] shadow-sm text-sm font-extrabold text-[#c5a059] relative z-10">
                04
              </div>
              <h3 className="text-sm font-bold text-[#3d2b1f]">Coordinación WhatsApp</h3>
              <p className="text-xs sm:text-sm text-[#3d2b1f]/80 leading-relaxed px-4">
                Recibimos tu pedido en línea de forma inmediata y coordinamos la entrega directamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#faf8f5] py-16 lg:py-24 border-b border-[#f2eee9]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Favoritos de Temporada</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3d2b1f] mt-1">
                Línea de Productos Premium Destacados
              </h2>
            </div>
            <Link
              href="/tienda"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#c5a059] hover:text-[#c5a059] group"
            >
              Ver todo el catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#f2eee9] bg-[#faf8f5] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#c5a059]/20 min-h-[430px]"
              >
                {/* Invisible main overlay Link */}
                <Link
                  href={`/producto/${product.slug}`}
                  className="absolute inset-0 z-0"
                  aria-label={product.name}
                />

                {/* Visual Image with ProductVisual */}
                <div className="h-56 w-full bg-[#f2eee9] flex items-center justify-center relative overflow-hidden border-b border-[#f2eee9]/40 pointer-events-none">
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
                    size="md"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 space-y-2 justify-between relative z-10 pointer-events-none">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#A8A29E]">
                      {product.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#3d2b1f] group-hover:text-[#c5a059] transition-colors line-clamp-2 h-10 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#3d2b1f]/70 line-clamp-2 leading-snug h-9">
                      {product.shortDescription}
                    </p>
                  </div>
                  
                  {/* Prices & Actions */}
                  <div className="pt-4 flex items-center justify-between border-t border-[#F5F5F4] mt-auto pointer-events-auto">
                    <div className="pointer-events-none">
                      {product.priceBefore && (
                        <span className="block text-[10px] text-[#A8A29E] line-through">
                          RD$ {product.priceBefore.toLocaleString()}
                        </span>
                      )}
                      <span className="text-xs font-bold text-[#c5a059]">
                        RD$ {product.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex gap-1.5 relative z-20">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product, 1);
                        }}
                        className="inline-flex h-8 px-3 items-center justify-center rounded-full bg-[#f2eee9] text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all text-xs font-bold gap-1"
                      >
                        <Plus className="h-3 w-3" />
                        Añadir
                      </button>
                      <a
                        href={buildProductWhatsappMessage(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] border border-[#a5d6a7] hover:bg-[#2e7d32] hover:text-white hover:border-[#2e7d32] transition-all"
                        title="Consultar por WhatsApp"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-[#f2eee9] py-16 lg:py-24 border-b border-[#f2eee9]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Nuestra Garantía</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#3d2b1f] sm:text-4xl">
                Seguridad y tranquilidad en cada orden
              </h2>
              <p className="text-sm sm:text-base text-[#3d2b1f]/80 leading-relaxed">
                Sabemos que elegir la fragancia y complementos ideales para tu hogar es personal. Por eso estructuramos un canal comercial ágil basado en tu confianza. No requerimos datos de tarjetas para simular el pedido y la entrega se coordina con total flexibilidad.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2eee9] text-[#c5a059] mt-0.5">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#3d2b1f]">Compra 100% Protegida</span>
                    <span className="block text-xs text-[#3d2b1f]/75 mt-1">Pagas de forma segura según las opciones acordadas con tu asesor.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2eee9] text-[#c5a059] mt-0.5">
                    <Truck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#3d2b1f]">Entrega Local Coordinada</span>
                    <span className="block text-xs text-[#3d2b1f]/75 mt-1">Coordinación de entregas flexibles a nivel nacional.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="bg-[#faf8f5] rounded-3xl p-8 lg:p-12 border border-[#f2eee9] text-center space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-[#c5a059]">
                ¿Quieres recibir una recomendación experta?
              </h3>
              <p className="text-xs text-[#3d2b1f]/75 leading-relaxed max-w-sm mx-auto">
                Escríbenos por WhatsApp y recibe orientación personalizada para seleccionar la fragancia o regalo corporativo ideal.
              </p>
              <div className="pt-4">
                <a
                  href={advisorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a059] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#B5914A] transition-all"
                >
                  Asesoría de WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Experiencias Reales</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#3d2b1f]">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xs sm:text-sm text-[#3d2b1f]/70">
              Opiniones de clientes que disfrutan de nuestra experiencia y línea de fragancias.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-[#f2eee9] p-8 space-y-4 bg-[#f2eee9] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-0.5 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#3d2b1f]/75 leading-relaxed italic">
                  &quot;El servicio de asesoría me ayudó a seleccionar la Fragancia Aura Nº1. Un aroma verdaderamente elegante.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#f2eee9] flex items-center justify-between mt-4">
                <div>
                  <h4 className="text-xs font-bold text-[#3d2b1f]">Laura M.</h4>
                  <span className="text-[10px] text-[#3d2b1f]/70">Santo Domingo</span>
                </div>
                <Badge variant="secondary" className="bg-[#f2eee9] text-[#c5a059] text-[9px]">Comprador Verificado</Badge>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-[#f2eee9] p-8 space-y-4 bg-[#f2eee9] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-0.5 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#3d2b1f]/75 leading-relaxed italic">
                  &quot;La compra fue rapidísima. Elegí las velas y el difusor, y en minutos coordinamos todo.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#f2eee9] flex items-center justify-between mt-4">
                <div>
                  <h4 className="text-xs font-bold text-[#3d2b1f]">Marcos T.</h4>
                  <span className="text-[10px] text-[#3d2b1f]/70">Santiago</span>
                </div>
                <Badge variant="secondary" className="bg-[#f2eee9] text-[#c5a059] text-[9px]">Comprador Verificado</Badge>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-[#f2eee9] p-8 space-y-4 bg-[#f2eee9] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-0.5 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#3d2b1f]/75 leading-relaxed italic">
                  &quot;Excelente presentación del catálogo. El Set Regalo Premium es fantástico.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#f2eee9] flex items-center justify-between mt-4">
                <div>
                  <h4 className="text-xs font-bold text-[#3d2b1f]">Camila R.</h4>
                  <span className="text-[10px] text-[#3d2b1f]/70">La Romana</span>
                </div>
                <Badge variant="secondary" className="bg-[#f2eee9] text-[#c5a059] text-[9px]">Comprador Verificado</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-t from-[#F5F2EB]/60 to-white py-16 lg:py-20 border-t border-[#f2eee9]/40">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] block">¿Listo para comenzar?</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#3d2b1f] sm:text-4xl">
            Elige la sofisticación para tu día a día
          </h2>
          <p className="text-xs sm:text-sm text-[#3d2b1f]/75 max-w-md mx-auto leading-relaxed">
            Completa tu pedido demo en línea y experimenta el flujo comercial rápido de Luma Premium.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-[#c5a059] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#B5914A] transition-all"
            >
              Explorar Catálogo Completo
            </Link>
            <a
              href={advisorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-[#c5a059] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#c5a059] bg-[#faf8f5] shadow-sm hover:bg-[#f2eee9] transition-all"
            >
              Asesoría de WhatsApp
            </a>
          </div>
        </div>
      </section>

      <StoreFooter />
    </>
  );
}
