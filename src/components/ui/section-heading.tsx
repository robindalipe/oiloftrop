import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="type-label mb-3 text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="type-display-1 text-balance">{title}</h2>
      {description ? (
        <p className="type-body-lg mt-4">{description}</p>
      ) : null}
    </div>
  );
}
