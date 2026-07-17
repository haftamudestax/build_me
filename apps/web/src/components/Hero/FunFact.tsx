import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export type FunFactProps = {
  text: string;
  index?: number;
};

export function FunFact({ text, index = 0 }: FunFactProps) {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      >
        <Paper
          elevation={0}
          className="flex! items-center! gap-3! rounded-xl! border! border-slate-200! bg-white! px-4! py-3! transition-colo!rs hover:border-teal-300!"
        >
          <Typography
            component="span"
            className="text-sm! font-medium! text-slate-700!"
          >
            {text}
          </Typography>
        </Paper>
      </motion.div>
    </main>
  );
}
