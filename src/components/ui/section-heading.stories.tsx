import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeading } from "./section-heading";

const meta = {
  title: "UI/SectionHeading",
  component: SectionHeading,
  args: {
    eyebrow: "Featured work",
    title: "Selected Side Projects",
    description: "A few projects where product thinking and frontend craft meet.",
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
