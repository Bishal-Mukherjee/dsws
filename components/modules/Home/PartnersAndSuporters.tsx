import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    logo: "/supporters/actionaid.png",
    url: "https://www.actionaid.org",
    alt: "ActionAid",
  },
  {
    logo: "/supporters/aflatoun_international.png",
    url: "https://www.aflatoun.org",
    alt: "Aflatoun International",
  },
  {
    logo: "/supporters/azim_premji_foundation.png",
    url: "https://azimpremjifoundation.org",
    alt: "Azim Premji Foundation",
  },
  {
    logo: "/supporters/bureau_veritas.png",
    url: "https://www.bureauveritas.com",
    alt: "Bureau Veritas",
  },
  {
    logo: "/supporters/child_line.png",
    url: "https://www.childlineindia.org",
    alt: "Child Line",
  },
  {
    logo: "/supporters/children_international.png",
    url: "https://www.children.org",
    alt: "Children International",
  },
  {
    logo: "/supporters/department_of_panchayat.png",
    url: "https://panchayat.gov.in",
    alt: "Department of Panchayat",
  },
  {
    logo: "/supporters/fondazione_mondo.png",
    url: "https://www.fondazionemondo.org",
    alt: "Fondazione Mondo",
  },
  {
    logo: "/supporters/ht_parekh_foundation.png",
    url: "https://www.htparekhfoundation.org",
    alt: "HT Parekh Foundation",
  },
  {
    logo: "/supporters/save_the_children.png",
    url: "https://www.savethechildren.org",
    alt: "Save the Children",
  },
  {
    logo: "/supporters/tata_trusts.png",
    url: "https://www.tatatrusts.org",
    alt: "Tata Trusts",
  },
  {
    logo: "/supporters/the_hummingbird_foundation.png",
    url: "https://thehummingbirdfoundation.org",
    alt: "The Hummingbird Foundation",
  },
  {
    logo: "/supporters/unicef.png",
    url: "https://www.unicef.org",
    alt: "UNICEF",
  },
];

export function PartnersAndSupporters() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Our Partners & Supporters
        </h2>
        <p className="text-[#61896f] dark:text-white/60">
          We are grateful for the support of organizations that share our
          vision.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 items-center justify-center mt-12">
        {partners.map((partner, index) => (
          <Link
            href={partner.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div className="transition-transform transform hover:scale-105 hover:opacity-100 opacity-80 w-40 h-20 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}${partner.logo}`}
                alt={partner.alt}
                width={160}
                height={80}
                className="w-full h-full dark:brightness-0 dark:invert object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
