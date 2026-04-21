import { useState } from "react";
import { academicContent, allTags, type ContentTag } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { ContentCard } from "../display/ContentCard";
import { ContentGrid, ContentGridItem } from "../display/ContentGrid";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export function CryptoSection() {
  const [activeTag, setActiveTag] = useState<ContentTag | "Todos">("Todos");

  const filteredContent =
    activeTag === "Todos"
      ? academicContent
      : academicContent.filter((item) => item.tags.includes(activeTag as ContentTag));

  return (
    <SectionContainer
      id="academic"
      title="Material Académico"
      subtitle="Prácticas, investigaciones y contenido de criptografía"
    >
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge
          active={activeTag === "Todos"}
          onClick={() => setActiveTag("Todos")}
        >
          Todos
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Content Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ContentGrid columns={3}>
            {filteredContent.map((content) => (
              <ContentGridItem key={content.id}>
                <ContentCard content={content} />
              </ContentGridItem>
            ))}
          </ContentGrid>

          {filteredContent.length === 0 && (
            <p className="text-center text-sm text-text-secondary py-12">
              No hay contenido para esta categoría.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
}
