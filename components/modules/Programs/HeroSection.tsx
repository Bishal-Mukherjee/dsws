export function HeroSection() {
  return (
    <section>
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUMoZpf4SvXD7Uu5wsU9fbqmzr9MDKh12hQPCiAVb5Gz9F6HQBiEryzCTxxT_wAPPf3oqa1M5cmJYPLuklm7wxVOokS1aqIbOm3jofR6Sjl88nsYm0wx6iLYNLxkv40OFQvAwsr3YdKyREnDCoVh8JV7D1JvUF-p1Do-Q3jy0beoiq5dyEzx5MlvrkYVoq4vEFNXnBf3ecp53dTJ68_5xL4W0cD5TTigW5fwnKNVDn9xMAPND82MCUmSUUQxeeigdlpF7R52_PQYiU')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Our Programs
          </h1>
          <h2 className="text-white/90 text-sm max-w-2xl sm:text-base">
            Creating lasting change through our dedicated initiatives in
            education, empowerment, and community development.
          </h2>
        </div>
      </div>
    </section>
  );
}
