import Image from "next/image";

export default function Divider({className}: {className?: string}) {
  return (
    <Image
      src="/img/middle.svg"
      alt="divider"
      width={100}
      height={100}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
