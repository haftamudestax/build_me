import { Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

type ProfileCardProps = {
  imageSrc?: string;
  alt?: string;
};

export function ProfileCard({
  imageSrc = "/images/haftamu_d.jpg",
  alt = "Portrait photo of Hafta",
}: ProfileCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-56 sm:w-64"
    >
      <Card
        elevation={0}
        className="relative! overflow-hidden! rounded-3xl! border! border-slate-200! shadow-lg! shadow-slate-900/10!"
      >
        <div className="relative">
          <CardMedia
            component="img"
            image={imageSrc}
            alt={alt}
            className="aspect-square! object-cover!"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4">
            <Typography
              component="p"
              className="bg-linear-to-r! from-cyan-400! to-teal-500! bg-clip-text! text-sm! font-semibold! leading-tight! text-transparent!"
            >
              Full-Stack Developer
            </Typography>
            <Typography
              component="p"
              className="bg-linear-to-r! from-amber-300! to-orange-500! bg-clip-text! text-sm! font-semibold! leading-tight! text-transparent!"
            >
              &amp; Electrical Engineer
            </Typography>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
