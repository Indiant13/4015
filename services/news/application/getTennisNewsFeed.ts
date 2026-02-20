import type { NewsArticle } from "../../../entities/news/types/news";

const MOCK_TENNIS_NEWS: NewsArticle[] = [
  {
    id: "news-001",
    title: "Clay Season Momentum Builds Across Europe",
    imageUrl: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-15T10:30:00Z",
    source: "40:15 Editorial",
  },
  {
    id: "news-002",
    title: "Barcelona Community Courts Report Record Participation",
    imageUrl: "https://images.unsplash.com/photo-1530915365347-e35b749a0381?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-14T08:00:00Z",
    source: "Catalonia Sports Wire",
  },
  {
    id: "news-003",
    title: "New Youth Tennis Programs Launch in Valencia",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-02-12T13:20:00Z",
    source: "Iberia Tennis News",
  }
];

export async function getTennisNewsFeed(): Promise<NewsArticle[]> {
  return MOCK_TENNIS_NEWS;
}
