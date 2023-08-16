import Link from "next/link";
import { FilmIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

export default function PageHeader() {
  return (
    <header className="border-b border-slate-200 py-3 bg-slate-50">
      <div className="container">
        <div className="flex items-center">
          <Link href="/" className="mr-5">
            <FilmIcon className="w-6 h-6" />
          </Link>

          <form className="w-1/2">
            <Input type="text" className="h-8" placeholder="Search movie" />
          </form>
        </div>
      </div>
    </header>
  );
}
