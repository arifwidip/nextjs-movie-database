import Link from "next/link";
import { Suspense } from "react";
import { FilmIcon } from "@heroicons/react/24/outline";
import SearchForm from "@/components/ui/searchForm";

export default function PageHeader() {
  return (
    <header className="border-b border-slate-200 py-3 bg-slate-50">
      <div className="container">
        <div className="flex items-center">
          <Link href="/" className="mr-5">
            <FilmIcon className="w-6 h-6" />
          </Link>

          <Suspense>
            <SearchForm />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
