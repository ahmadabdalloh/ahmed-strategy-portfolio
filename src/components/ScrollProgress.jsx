import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/** Thin accent reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })
  const reduce = useReducedMotion()
  if (reduce) return null
  return <motion.div className="progress" style={{ scaleX }} aria-hidden="true" />
}
