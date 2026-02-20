import { TennisNewsFeedFeature } from "../../../features/tennis-news-feed";
import { getTennisNewsFeed } from "../../../services/news/application/getTennisNewsFeed";

export default async function NewsDashboardPage() {
  const articles = await getTennisNewsFeed();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <TennisNewsFeedFeature articles={articles} />
    </main>
  );
}
