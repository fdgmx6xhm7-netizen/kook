"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import Script from "next/script";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const postTitles = posts.map((post) => post.title).join(", ");
  const firstImage = posts[0]?.image || "/placeholder.jpg";

  return {
    title: "Enjoy Korea | Kook",
    description: `Explore the latest posts: ${postTitles.slice(0, 150)}...`,
    openGraph: {
      title: "Enjoy Korea | Kook",
      description: `Explore the latest posts: ${postTitles.slice(0, 150)}...`,
      images: [firstImage],
    },
  };
}

const posts = [
  {
    id: 1,
    title:
      "Mga Reaksyon ng mga Koreano sa Physical: Asia Episode 1~6 (Tagalog na Salin)",
    content:
      "Buod ng mga aktwal na misyon sa Netflix Physical: Asia Episode 1~6...",
    image: "/1/philippines.png",
  },
  {
    id: 2,
    title: "ปฏิกิริยาคนเกาหลีต่อ Physical: Asia ตอน 1~6 (แปลไทย)",
    content: "สรุปภารกิจจริง Netflix Physical: Asia ตอน 1~6...",
    image: "/2/thailand.png",
  },
  {
    id: 3,
    title:
      "Reaksi Orang Korea terhadap Physical: Asia Episode 1~6 (Terjemahan Indonesia)",
    content: "Ringkasan misi asli Netflix Physical: Asia Episode 1~6...",
    image: "/3/indonesia.png",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="border-primary shadow-neon hover:shadow-secondary transition-shadow cursor-pointer"
            onClick={() => router.push(`/post/${post.id}`)}
          >
            <CardHeader>
              <CardTitle className="text-primary">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                loading="lazy"
                className="w-[300px] mb-2"
              />
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
