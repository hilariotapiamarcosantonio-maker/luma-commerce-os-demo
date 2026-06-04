"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Sparkles, Send } from "lucide-react";
import { StoreHeader } from "@/components/layout/StoreHeader";
import { StoreFooter } from "@/components/layout/StoreFooter";

function WhatsappDemoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const text = searchParams.get("text") || "Hola, me interesa saber más de sus productos.";

  return (
    <div className="max-w-2xl mx-auto my-8">
      {/* Mock Mobile Device / Frame */}
      <div className="bg-[#e5ddd5] rounded-3xl border border-[#d4cdc5] shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
        {/* WhatsApp Header */}
        <div className="bg-[#075e54] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.back()}
              className="hover:bg-[#128c7e]/50 p-1.5 rounded-full transition-colors"
              aria-label="Volver"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="h-10 w-10 rounded-full bg-[#128c7e] flex items-center justify-center border border-white/20">
              <MessageSquare className="h-5 w-5 text-white fill-current" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wide">Nexa Store (Demo)</h2>
              <span className="text-[10px] text-white/80 block">Asesoría Comercial en Línea</span>
            </div>
          </div>
          <span className="text-[10px] uppercase font-extrabold tracking-wider bg-white/20 px-2 py-0.5 rounded-md border border-white/10">
            Simulado
          </span>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-6 flex flex-col justify-end space-y-4">
          <div className="self-center bg-[#fcf8e3]/95 border border-[#faf2cc] text-[#8a6d3b] text-[10px] font-medium py-2 px-4 rounded-xl shadow-sm text-center max-w-md leading-relaxed">
            🔒 Las conversaciones en esta demo son locales y simuladas con fines de presentación de tecnología.
          </div>

          {/* User Message Bubble */}
          <div className="self-end bg-[#dcf8c6] border border-[#c7eba9] text-[#262626] text-xs p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] whitespace-pre-line leading-relaxed relative">
            {text}
            <div className="text-[9px] text-[#808080] text-right mt-1.5">
              Justo ahora ✓✓
            </div>
          </div>
        </div>

        {/* WhatsApp Input Bar Mock */}
        <div className="bg-[#f0f0f0] border-t border-[#e0e0e0] px-4 py-3.5 flex items-center gap-3">
          <div className="flex-1 bg-white rounded-full px-5 py-2.5 text-xs text-[#b0b0b0] border border-[#e0e0e0]">
            Simulación de chat. Mensaje enviado...
          </div>
          <div className="h-10 w-10 rounded-full bg-[#128c7e] flex items-center justify-center text-white shadow-sm shrink-0">
            <Send className="h-4.5 w-4.5 translate-x-[1px]" />
          </div>
        </div>
      </div>

      {/* Commercial OS Explanation Card */}
      <div className="mt-8 bg-white border border-[#f2eee9] rounded-3xl p-6 md:p-8 space-y-5 shadow-sm text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-[#f2eee9] text-[#c5a059] flex items-center justify-center">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold text-[#3d2b1f]">Flujo Comercial de WhatsApp Simulado</h3>
          <p className="text-xs text-[#3d2b1f]/80 leading-relaxed max-w-lg mx-auto">
            Pedido demo recibido. En una implementación real, este flujo puede conectarse a WhatsApp Business, Google Sheets, pagos, inventario o CRM según el alcance.
          </p>
        </div>

        <div className="pt-2 border-t border-[#f2eee9] flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tienda"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a059] hover:bg-[#B5914A] text-white px-8 py-3.5 font-bold text-xs shadow-md transition-colors"
          >
            Volver al Catálogo
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c5a059] text-[#c5a059] hover:bg-[#f2eee9]/40 bg-transparent px-8 py-3.5 font-bold text-xs transition-colors"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WhatsappDemoPage() {
  return (
    <>
      <StoreHeader />
      <main className="min-h-screen bg-[#faf8f5] py-12 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-12 text-xs text-[#3d2b1f]/70">Cargando simulación...</div>}>
          <WhatsappDemoContent />
        </Suspense>
      </main>
      <StoreFooter />
    </>
  );
}
