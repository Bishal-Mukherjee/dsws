import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    logo: "https://tantuja.in/image/catalog/logo/TANTUJA-LOGO1-02.png",
    url: "https://tantuja.in/",
    alt: "Tantuja Logo",
  },
  {
    logo: "https://www.fabindia.com/assets/images/fabindia-logo.svg",
    url: "https://www.fabindia.com/",
    alt: "Fab India Logo",
  },
  {
    logo: "https://cdni.sashaworld.com/wp-content/uploads/2018/10/Sasha_Logo.svg",
    url: "https://sashaworld.com/",
    alt: "Sasha Logo",
  },
  {
    logo: "https://bandhancreations.com/wp-content/uploads/2024/12/bandhan-logo.jpg",
    url: "https://bandhancreations.com/",
    alt: "Bandhan Creations Logo",
  },
];

export function PartnersAndSupporters() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Our Partners & Supporters
        </h2>
        <p className="text-[#61896f] dark:text-white/60">
          We are grateful for the support of organizations that share our
          vision.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
        {partners.map((partner, index) => (
          <Link
            href={partner.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
			className="h-10"
          >
            <div className="transition-transform transform hover:scale-105 hover:opacity-100 opacity-80">
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={160}
                height={32}
                className="h-8 dark:brightness-0 dark:invert object-contain"
                unoptimized
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
