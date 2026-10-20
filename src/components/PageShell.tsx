import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { SiteEffects } from "@/src/components/SiteEffects";
import { BodyAttrs } from "@/src/components/BodyAttrs";

type PageShellProps = {
  page: string;
  inner?: boolean;
  currentServiceSlug?: string;
  children: React.ReactNode;
};

export function PageShell({
  page,
  inner = false,
  currentServiceSlug,
  children,
}: PageShellProps) {
  return (
    <>
      <BodyAttrs page={page} inner={inner} />
      <div className="page-noise" />
      <div className="cursor-orb" id="cursorOrb" />
      <Header currentServiceSlug={currentServiceSlug} />
      <main id="top">{children}</main>
      <Footer />
      <SiteEffects />
    </>
  );
}
