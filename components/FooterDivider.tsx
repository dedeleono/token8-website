import Image from "next/image";

interface FooterDividerProps {
  className?: string;
}

export default function FooterDivider({ className }: FooterDividerProps) {
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <Image
        src="/img/middle.svg"
        alt="footer divider"
        width={1920}
        height={474}
        className="w-full h-auto object-cover"
        style={{
          clipPath: 'inset(0 0 50% 0)', // Shows only the bottom 50% of the SVG
          transform: 'translateY(50%)', // Move up by 50% to align with footer top
        }}
      />
    </div>
  );
}