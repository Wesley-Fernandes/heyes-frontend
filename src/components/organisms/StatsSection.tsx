import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "70+", label: "Condomínios" },
  { value: "1700+", label: "Câmeras" },
  { value: "100+", label: "DVRs" },
  { value: "130+", label: "Análises/Mês" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-space-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-space-accent/5 pointer-events-none" />
      
      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-space-accent transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
