export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Lendo o post: {slug}</h1>
    </div>
  );
}
