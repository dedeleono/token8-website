import Image from "next/image";

export default function Header() {
  return (
    <header className="p-8">
  <div className="flex items-center gap-2">
    <Image
      src="/img/token8-black.svg"
      alt="TOKEN8"
      width={120}
      height={36}
      className="h-9 w-auto"
    />
  </div>
    </header>
  );
}