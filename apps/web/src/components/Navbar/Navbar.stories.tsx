import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within, userEvent } from "@storybook/test";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <main>
          <section id="home" style={{ height: "100vh" }} />
          <section id="about" style={{ height: "100vh" }} />
          <section id="projects" style={{ height: "100vh" }} />
          <section id="contact" style={{ height: "100vh" }} />
        </main>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const MobileMenuOpens: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    await expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggleButton);
    await expect(toggleButton).toHaveAttribute("aria-expanded", "true");
  },
};

export const NavLinkClickClosesMobileMenu: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole("button", {
      name: /toggle navigation menu/i,
    });

    await userEvent.click(toggleButton);
    await expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    const aboutLinks = canvas.getAllByText("About");
    await userEvent.click(aboutLinks[aboutLinks.length - 1]);

    await expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  },
};
