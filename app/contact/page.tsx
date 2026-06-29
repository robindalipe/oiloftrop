import { contactDetails } from "@/content/site";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Robin Dalipe for product, frontend, and design system work.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Contact"
        description="If you need a frontend lead, design systems partner, or someone to bring clarity to the interface layer, let’s talk."
      />
      <Container className="grid gap-6 pb-16 md:gap-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader className="gap-3">
            <CardTitle className="type-display-2">What I can help with</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="type-body">Design systems and component library strategy</li>
              <li className="type-body">Frontend architecture for React and Next.js products</li>
              <li className="type-body">Accessibility reviews and UI quality uplift</li>
              <li className="type-body">Product collaboration across design and engineering</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="gap-3">
            <CardTitle className="type-display-2">Reach out</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {contactDetails.map((detail, index) => (
              <div key={detail.label} className="space-y-2">
                <p className="type-label text-primary">{detail.label}</p>
                {detail.href ? (
                  <a
                    className="type-body-lg inline-block text-foreground transition hover:text-primary"
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="type-body-lg text-foreground">{detail.value}</p>
                )}
                {index < contactDetails.length - 1 ? <Separator className="mt-5" /> : null}
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
