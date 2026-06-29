import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main id="main-content" className="pb-16 pt-16 md:pb-20 md:pt-20">
      <Container className="max-w-3xl">
        <div className="surface-card rounded-[2rem] p-8 text-center md:p-10">
          <p className="type-label text-primary">404</p>
          <h1 className="type-display-1 mt-4">That page isn&apos;t here.</h1>
          <p className="type-body mx-auto mt-4 max-w-2xl">
            The route may have moved during the Gatsby to Next.js rebuild.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
