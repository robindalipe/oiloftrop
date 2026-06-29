import type { Meta, StoryObj } from "@storybook/react";
import { sideProjects } from "@/content/site";
import { ProjectCard } from "./project-card";

const meta = {
  title: "UI/ProjectCard",
  component: ProjectCard,
  args: {
    project: sideProjects[0],
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
