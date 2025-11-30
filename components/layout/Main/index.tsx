export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-start justify-between pt-2 px-4 sm:px-34 bg-zinc-50 dark:bg-black sm:items-start">
      {children}
    </main>
  );
};
