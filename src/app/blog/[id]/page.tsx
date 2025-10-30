type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  return {
    title: `ブログID: ${id}のページ`,
    description: `ブログID: ${id}の詳細ページです。`,
  };
}

export default async function page({ params }: Params) {
  //   console.log(params);
  const { id } = await params;
  return <div>ブログID: {id}</div>;
}
