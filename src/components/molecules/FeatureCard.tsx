import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl bg-space-800/50 border border-white/5 hover:border-space-accent/30 overflow-hidden transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-space-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 text-space-accent group-hover:bg-space-accent group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-space-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
