import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "View my work",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Start a conversation",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "About me",
  },
};

export const LinkButton: Story = {
  render: (args) => (
    <Button {...args} asChild>
      <Link href="/side-projects">View my work</Link>
    </Button>
  ),
};
