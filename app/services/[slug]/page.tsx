import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/src/components/ServiceDetail";
import { getService, serviceSlugs } from "@/src/data/service-catalog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.title,
    description: service.meta,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!getService(slug)) notFound();
  return <ServiceDetail slug={slug} />;
}
