import {
  FileText,
  Lock,
  Code,
  Shield,
  PenTool,
  Play,
  ExternalLink,
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import type { AcademicContent } from "../../lib/data";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={20} />,
  Lock: <Lock size={20} />,
  Code: <Code size={20} />,
  Shield: <Shield size={20} />,
  PenTool: <PenTool size={20} />,
  Play: <Play size={20} />,
};

interface ContentCardProps {
  content: AcademicContent;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <Card className="flex flex-col h-full">
      {/* Icon */}
      <div className="w-10 h-10 rounded-md bg-bg-secondary flex items-center justify-center text-text-primary mb-4">
        {iconMap[content.icon] || <FileText size={20} />}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm text-text-primary mb-2">{content.title}</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {content.tags.map((tag) => (
          <Badge key={tag} className="text-[10px] px-2 py-0.5 pointer-events-none">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <p className="text-xs text-text-secondary leading-relaxed flex-1">
        {content.description}
      </p>

      {/* Link */}
      {content.link && (
        <a
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:underline"
        >
          Ver más <ExternalLink size={12} />
        </a>
      )}
    </Card>
  );
}
