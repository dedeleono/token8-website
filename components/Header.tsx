import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="p-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/img/token8-black.svg"
          alt="TOKEN8"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="relative group">
          <Button
            disabled={true}
            variant="outline"
            className="border-[#9D4F3B] disabled:opacity-50 w-full lg:w-auto bg-transparent font-anantason font-black border-2 text-[#9D4F3B] hover:bg-[#9D4F3B] hover:text-white px-6 lg:px-8 py-3 rounded-md text-sm lg:text-base cursor-pointer"
            size="sm"
          >
            Launch App
          </Button>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Coming Soon
          </div>
        </div>
      </div>
    </header>
  );
}
