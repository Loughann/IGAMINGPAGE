"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, TrendingUp, Users, Shield } from "lucide-react"

export default function GrupoPage() {
  const whatsappLink = "https://chat.whatsapp.com/JgKO4VDSoep698uYQiTktn?mode=ac_t"

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/betting-mask.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full border-2 border-orange-500 mb-4">
              <TrendingUp className="w-10 h-10 text-orange-500" />
            </div>

            <h1 className="text-4xl font-bold text-white leading-tight">
              BANCAS 100% <span className="text-orange-500">GRÁTIS</span>
            </h1>

            <p className="text-xl text-gray-300">Apostas com Reembolso Garantido</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Shield className="w-5 h-5 text-orange-500" />
              <span>Bancas 100% Gratuitas</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Users className="w-5 h-5 text-orange-500" />
              <span>Casas Indicadas Confiáveis</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Reembolso 100% Garantido</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
            <p className="text-gray-300 leading-relaxed">
              Entre no nosso grupo exclusivo e receba indicações das melhores casas de apostas do mercado. Se você
              perder seguindo nossas regras, devolvemos todo o dinheiro apostado. Sem enrolação, sem perda - apenas as
              melhores casas e reembolso garantido.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Entrar no Grupo WhatsApp</span>
              </a>
            </Button>

            <p className="text-sm text-gray-400">Clique no botão acima para ser redirecionado ao GRUPO VIP</p>
          </div>

          {/* Warning */}
          <div className="text-xs text-gray-500 bg-black/30 rounded-lg p-3 border border-gray-700">
            <p>
              ⚠️ Você terá 100% de volta o seu dinheiro perdido. Garantimos sua diversão com Reembolso do seu depósito
              caso perca.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
