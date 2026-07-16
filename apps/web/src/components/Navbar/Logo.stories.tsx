import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within, userEvent, fn } from "@storybook/test";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Navbar/Logo",
  component: Logo,
  args: {
    // Must call preventDefault, same as the real handleLinkClick in Navbar —
    // otherwise the browser actually navigates to the #home fragment when
    // clicked, which can crash Vitest's browser-mode connection mid-test.
    onClick: fn((event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
    }),
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const RendersNameAndLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByRole("link", { name: /haftamu/i });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "#home");
  },
};

export const ClickTriggersOnClick: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: /haftamu/i });

    await userEvent.click(link);

    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const IconIsDecorative: Story = {
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector("svg");
    await expect(svg).toHaveAttribute("aria-hidden", "true");
  },
};
