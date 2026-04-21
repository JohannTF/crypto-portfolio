import { Play } from "lucide-react";
import { Card } from "../ui/card";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  category: string;
}

export function VideoCard({
  title,
  description,
  thumbnail,
  youtubeUrl,
}: VideoCardProps) {
  return (
    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="overflow-hidden p-0 group">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-bg-secondary overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500"
            loading="lazy"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play size={24} className="text-black ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-semibold text-sm text-text-primary mb-1">{title}</h3>
          <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
        </div>
      </Card>
    </a>
  );
}
