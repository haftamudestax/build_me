import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "@storybook/test";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Components/Hero/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};

export const RendersAllFourFunFacts: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByText("Full-Stack Web Development student at freeCodeCamp"),
    ).toBeInTheDocument();
    // Appears twice on the page (HeroIntro subheading + this fun fact) —
    // getByText throws on multiple matches, so use getAllByText instead.
    await expect(
      canvas.getAllByText("Full-Stack Developer & Electrical Engineer").length,
    ).toBeGreaterThanOrEqual(1);
    await expect(
      canvas.getByText("Member of Microverse Alumni"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText("Taking part in Xcelsz Accelerator Program"),
    ).toBeInTheDocument();

    await expect(
      canvas.getByRole("heading", { level: 1, name: /hi, i'm haftamu desta/i }),
    ).toBeInTheDocument();
  },
};
