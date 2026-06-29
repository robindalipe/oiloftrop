import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="pb-6 pt-10 md:pb-10 md:pt-16">
      <Container>
        <SectionHeading title={title} description={description} />
      </Container>
    </section>
  );
}
