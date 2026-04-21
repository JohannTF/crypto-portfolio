import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/utils";

interface ContentGridProps {
  children: React.ReactNode;
  columns?: 2 | 3;
}

export function ContentGrid({ children, columns = 3 }: ContentGridProps) {
  const gridCols = columns === 3
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid ${gridCols} gap-6`}
    >
      {children}
    </motion.div>
  );
}

export function ContentGridItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp}>
      {children}
    </motion.div>
  );
}
