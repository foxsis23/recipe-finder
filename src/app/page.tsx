import { SearchForm } from "@/components/home-page/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full h-screen justify-center items-center p-4 sm:p-0x">
      <h1
        className="text-6xl font-bold text-white"
        style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)" }}
      >
        Recipe Finder
      </h1>
      <SearchForm />
    </div>
  );
}
