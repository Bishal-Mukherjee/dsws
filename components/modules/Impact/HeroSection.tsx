import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section>
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2yd_flAGDAbO8A5ida_mzL7_mOeLS-O2WI49EnQ5yfV4F-hBZbV8EHqwh9oJv-cqOe1d8mq_lfKgfRDoPQWIW3UO-_EQU889AIfxOI0P8RbW0siiM-gb3n1tQgHGGwbSlI3KFiLBWa-izTRLMZIBtADyl_BN3pou_ffq47aQ0Dz2xevJp5x6QkMOHq0Lw_pIgm33SeiL3CACTz6KBI_c26bV65VJao4qJwJpzVw4hWblcSOsspI5_NITrTTjoDK4NArnxAdTE-Po')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Creating Lasting Change, One Life at a Time.
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal sm:text-base">
            Empowering communities through dedicated work in social welfare,
            education, and rural development.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="primary">Donate Now</Button>
          <Button variant="outline" className="border-white">
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
