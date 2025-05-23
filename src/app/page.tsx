import { Terminal } from "@/app/components/Terminal/terminal";

export default function Home() {
  return (
    <div className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <Terminal />
      </main>
    </div>
  );
}
