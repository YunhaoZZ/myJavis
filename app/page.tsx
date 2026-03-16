import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex max-w-2xl flex-col items-center gap-10 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          myJavis
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Chat with your assistant.
        </p>
        <Link
          href="/chat"
          className="rounded-xl bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Open Chat
        </Link>
      </main>
    </div>
  );
}
