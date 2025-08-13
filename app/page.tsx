"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, AlertTriangle, XCircle } from "lucide-react"

export default function VerificacaoIdadePage() {
  const router = useRouter()
  const [showAccessDenied, setShowAccessDenied] = useState(false)

  const handleConfirmAge = () => {
    router.push("/grupo")
  }

  const handleUnderAge = () => {
    setShowAccessDenied(true)
  }

  if (showAccessDenied) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/betting-mask.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-8 bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-red-500/20">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500">
                <XCircle className="w-10 h-10 text-red-500" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white">
              Acesso <span className="text-red-500">Negado</span>
            </h1>

            {/* Message */}
            <div className="space-y-4">
              <p className="text-xl text-gray-200">Você deve ter mais de 18 anos para acessar este conteúdo.</p>
              <p className="text-sm text-gray-400">
                Este site contém conteúdo relacionado a apostas e jogos, permitido apenas para maiores de idade conforme
                a legislação brasileira.
              </p>
            </div>

            {/* Back Button */}
            <Button
              onClick={() => setShowAccessDenied(false)}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/betting-mask.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-8 bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-orange-500/20">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center border-2 border-orange-500">
              <Calendar className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white">
            Verificação de <span className="text-orange-500">Idade</span>
          </h1>

          {/* Warning */}
          <div className="flex items-center justify-center space-x-2 text-yellow-400 bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/20">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Conteúdo restrito para maiores de 18 anos</span>
          </div>

          {/* Question */}
          <div className="space-y-4">
            <p className="text-xl text-gray-200">Você tem mais de 18 anos?</p>
            <p className="text-sm text-gray-400">
              Este site contém conteúdo relacionado a apostas e jogos, permitido apenas para maiores de idade.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleConfirmAge}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Sim, tenho mais de 18 anos
            </Button>

            <Button
              onClick={handleUnderAge}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white py-4 text-lg transition-all duration-300 bg-transparent"
            >
              Sou menor de 18 anos
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 space-y-2">
            <p>Jogue com responsabilidade. Apostas podem causar dependência.</p>
            <p>Se você tem problemas com jogos, procure ajuda profissional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
