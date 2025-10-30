import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is blog page",
};

// dummy
const articles = [
  { id: 1, title: "記事1" },
  { id: 2, title: "記事2" },
  { id: 3, title: "記事3" },
];

//3
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("エラーが発生");
  return articles;
}

export default async function BlogPage() {
  const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>title: {article.title}</li>
        ))}
      </ul>
      Bpage
    </div>
  );
}
