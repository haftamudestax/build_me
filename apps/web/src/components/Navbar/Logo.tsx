type LogoProps = {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="8" fill="white" fillOpacity="0.12" />
        <path
          d="M9 7v14M9 14h6M19 7v14"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Haftamu</span>
    </a>
  );
}
