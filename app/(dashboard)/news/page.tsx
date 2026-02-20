"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TennisNewsFeedFeature } from "../../../features/tennis-news-feed";
import { getTennisNewsFeed } from "../../../services/news/application/getTennisNewsFeed";

export default function NewsDashboardPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<Awaited<ReturnType<typeof getTennisNewsFeed>>>([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedArticles = await getTennisNewsFeed();
      setArticles(loadedArticles);
    };

    void loadData();
  }, []);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-clay-700 hover:underline"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>

      <TennisNewsFeedFeature articles={articles} />
    </main>
  );
}
