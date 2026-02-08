import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-16 w-16",
    }

    const textSizes = {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-4xl",
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2 select-none", className)}
        {...props}
      >
        <motion.img
          src="/icon.png"
          alt="HEYES Logo"
          className={cn("object-contain", sizeClasses[size])}
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ rotate: 10, scale: 1.1 }}
        />
        <motion.span
          className={cn("font-bold tracking-tighter text-white", textSizes[size])}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          HEYES
        </motion.span>
      </div>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }
