import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImpactCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const ImpactCounter = ({ end, suffix = "", label }: ImpactCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-4xl font-bold text-gold tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

export default ImpactCounter;
