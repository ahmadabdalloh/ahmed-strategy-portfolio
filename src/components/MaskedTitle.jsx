import { motion, useReducedMotion } from 'framer-motion'

/**
 * Editorial masked line reveal: each line rises out of an overflow-hidden
 * mask on mount. Pass an array of line contents (strings or JSX).
 */
export default function MaskedTitle({ lines, as: Tag = 'h1', ...rest }) {
  const reduce = useReducedMotion()
  return (
    <Tag {...rest}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          {reduce ? (
            <span>{line}</span>
          ) : (
            <motion.span
              initial={{ transform: 'translateY(112%)' }}
              animate={{ transform: 'translateY(0%)' }}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.09, ease: [0.23, 1, 0.32, 1] }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  )
}
