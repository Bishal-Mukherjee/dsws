export function HeroSection() {
  return (
    <section>
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxAxDQsRJ0T71bR44BgNVGHhfb8db0Zhv4kWCi30e2B9uxTO0CiL5VQ0iwnC2rW-aLkuPTU_VZRIBF7G1sh-hOVNwnIAMAGtIeRs3ofwZv7Wa4lLk3sXuxB2nU-hra3z5wj7i0fUNW9zE27RYvJnunnP0iVp1TPQPQbQ9BrmQ0PyHdjc3e-v4w-C2hk3QSgVpgRuL29u7Tm66ht7Yon48LTnvmF5THXISkfUlVnv4XII66uMnxy6ulrPZH1iSPN3tKPj31o6r5bU-W')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-2xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            About Dhagagia Social Welfare Society
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal sm:text-base">
            A brief, inspiring sentence summarizing the organization&apos;s
            purpose. We are dedicated to empowering communities and transforming
            lives through education, healthcare, and sustainable development.
          </h2>
        </div>
      </div>
    </section>
  );
}
