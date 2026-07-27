import { motion, useReducedMotion } from 'framer-motion'

/** Fade+rise on scroll into view. Respects prefers-reduced-motion. */
export default function Reveal({ children, delay = 0, y = 26, ...rest }) {
  const reduce = useReducedMotion()
  if (reduce) return <div {...rest}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
