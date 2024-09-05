import { SearchIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const GlobalSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
  if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }


  return (
    <motion.form
      className="relative hidden w-full max-w-md md:flex"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </div>
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-md pl-8"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </motion.form>
  );
};

export default GlobalSearch;
