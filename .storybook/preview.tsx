import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="min-h-screen w-full bg-background px-6 py-10 text-foreground">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
