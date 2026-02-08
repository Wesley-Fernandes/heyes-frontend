import { FeatureCard } from "@/components/molecules/FeatureCard"
import { Eye, Server, FileBarChart, Globe, Map, PlayCircle } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Monitoramento Ao Vivo",
    description: "Visualize câmeras em tempo real diretamente pelo aplicativo com baixa latência."
  },
  {
    icon: Server,
    title: "Gestão de DVRs",
    description: "Registre e edite DVRs facilmente. Centralize todos os seus dispositivos em um local seguro."
  },
  {
    icon: FileBarChart,
    title: "Relatórios Detalhados",
    description: "Gere relatórios completos sobre status, conectividade e tempo de atividade das câmeras."
  },
  {
    icon: Globe,
    title: "Acesso Web",
    description: "Acesse seus DVRs e câmeras via qualquer navegador moderno com um único clique."
  },
  {
    icon: Map,
    title: "Mapas Interativos",
    description: "Visualize mapas de condomínios com a localização precisa das câmeras. (Novo na v1.5.0!)"
  },
  {
    icon: PlayCircle,
    title: "Verifique Gravações",
    description: "Selecione um local no mapa/lista para reproduzir instantaneamente as gravações de câmeras próximas."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-space-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-space-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Recursos Poderosos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tudo o que você precisa para gerenciar sistemas de segurança com eficiência, em uma interface moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
