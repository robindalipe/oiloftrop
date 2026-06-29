import type { Meta, StoryObj } from "@storybook/react";
import { blogPosts } from "@/content/site";
import { PostCard } from "./post-card";

const meta = {
  title: "UI/PostCard",
  component: PostCard,
  args: {
    post: blogPosts[0],
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
