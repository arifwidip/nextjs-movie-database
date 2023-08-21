"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
  const params = useSearchParams();
  const searchQuery = params.get('query') ? params.get('query')! : '';
  const [value, setValue] = useState<string>(searchQuery)
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search?query=${value}`)
  }

  return (
    <form className="w-1/2" action="/search" onSubmit={handleSubmit}>
      <Input
        type="text"
        className="h-8"
        placeholder="Search movie"
        name="query"
        value={value}
        onChange={handleInputChange}
      />
    </form>
  );
}
