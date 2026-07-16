import { Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

type HeroIntroProps = {
  onCtaClick?: () => void;
};

export function HeroIntro({ onCtaClick }: HeroIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex max-w-xl flex-col items-start text-left"
    >
      <Typography
        component="h1"
        className="text-4xl! font-bold! tracking-tight! text-pink-500! md:text-5xl! mb-2!"
      >
        Hi, I&apos;m Haftamu Desta
      </Typography>

      <Typography
        component="p"
        className="text-2xl! font-bold! bg-linear-to-r from-blue-800 via-purple-500 to-red-300 bg-clip-text text-transparent"
      >
        Full-Stack Developer &amp; Electrical Engineer
      </Typography>

      <Typography
        component="p"
        className="mt-4! text-base! leading-relaxed! text-slate-600!"
      >
        I build full-stack web applications with a focus on
        performance,maintainability, and user-centered design. When I&apos;m not
        coding, I&apos;m probably learning something new or exploring a new
        place.
      </Typography>

      <Stack direction="row" spacing={2} className="mt-6!">
        <Button
          variant="contained"
          onClick={onCtaClick}
          className="rounded-full! bg-teal-600! px-6! normal-case hover:bg-teal-700!"
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          className="rounded-full! border-slate-300! px-6! normal-case! text-slate-700! hover:border-slate-400!"
        >
          Contact Me
        </Button>
      </Stack>
    </motion.div>
  );
}
