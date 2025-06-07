import { Metadata } from "next";
import ClientRedirect from "../../../../components/ClientRedirect";
type Props = Promise<{
  score: string;
  total: string;
}>;
// Dynamic OG Metadata
export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const { score, total } = await params;
  const title = `🏆 I scored ${score}/${total} on Know[ledge]!`;
  const description =
    "Can you beat my score? Discover untold histories and test your knowledge!";
  const imageUrl = `https://knowledge-landing-v2.vercel.app/share-images/badge-${score}.png`; // Optional

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://knowledge-landing-v2.vercel.app/share/${score}/${total}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// ✅ Only runs in client, not SSR

export default async function ScoreSharePage({ params }: { params: Props }) {
  const { score, total } = await params;

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#242B7A] text-white text-center">
      <ClientRedirect />
      <h1 className="text-4xl font-bold">
        You scored {score}/{total}
      </h1>
      <p className="mt-4 text-lg">
        Redirecting to home... This page is optimized for sharing.
      </p>
    </main>
  );
}
