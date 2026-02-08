import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/atoms/Button"
import { ArrowRight, Play, Shield, Globe, MonitorSmartphone } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-space-accent/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-space-accent text-sm font-medium mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-space-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-space-accent"></span>
            </span>
            Nova Versão v1.5.0 Disponível
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Gestão Avançada de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-accent to-blue-500">
              CCTV e Segurança
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            O Heyes simplifica a organização de segurança com visualização ao vivo, gestão de DVRs, relatórios e mapas interativos para condomínios e instituições.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              Começar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Play className="w-4 h-4 fill-current" />
              Ver Demonstração
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-gray-500">
             <div className="flex items-center gap-2">
               <Shield className="w-5 h-5 text-space-accent" />
               <span className="text-sm font-medium">Seguro</span>
             </div>
             <div className="flex items-center gap-2">
               <MonitorSmartphone className="w-5 h-5 text-space-accent" />
               <span className="text-sm font-medium">Multiplataforma</span>
             </div>
             <div className="flex items-center gap-2">
               <Globe className="w-5 h-5 text-space-accent" />
               <span className="text-sm font-medium">Acesso Web</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          <motion.div
            style={{ y: y1 }}
            className="relative z-20 w-full max-w-md aspect-video bg-space-800/80 rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group"
            initial={{ opacity: 0, rotateY: 30, x: 50 }}
            animate={{ opacity: 1, rotateY: -10, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ rotateY: 0, scale: 1.02 }}
          >
             {/* Mock UI */}
             <div className="absolute top-0 inset-x-0 h-8 bg-space-900/50 border-b border-white/5 flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             <div className="p-8 mt-4 grid grid-cols-2 gap-4 opacity-80">
                <div className="bg-white/5 rounded-lg h-24 animate-pulse delay-75" />
                <div className="bg-white/5 rounded-lg h-24 animate-pulse delay-150" />
                <div className="bg-white/5 rounded-lg h-24 animate-pulse delay-300" />
                <div className="bg-white/5 rounded-lg h-24 animate-pulse" />
             </div>
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-tr from-space-accent/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Element Behind */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -right-12 top-20 w-64 h-80 bg-space-900/90 rounded-lg border border-white/10 backdrop-blur-md shadow-2xl z-10 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
             <div className="h-full border border-white/5 rounded flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-space-accent" />
                </div>
                <div className="text-center">
                  <div className="h-2 w-24 bg-white/20 rounded mx-auto mb-2" />
                  <div className="h-2 w-16 bg-white/10 rounded mx-auto" />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
