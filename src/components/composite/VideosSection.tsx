import { videos } from "../../lib/data";
import { SectionContainer } from "../layout/SectionContainer";
import { VideoCard } from "../display/VideoCard";
import { ContentGrid, ContentGridItem } from "../display/ContentGrid";

export function VideosSection() {
  return (
    <SectionContainer
      id="videos"
      title="Videos"
      subtitle="Contenido audiovisual sobre mis actividades y hobbies"
    >
      <ContentGrid columns={3}>
        {videos.map((video) => (
          <ContentGridItem key={video.id}>
            <VideoCard
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              youtubeUrl={video.youtubeUrl}
              category={video.category}
            />
          </ContentGridItem>
        ))}
      </ContentGrid>
    </SectionContainer>
  );
}
