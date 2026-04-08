import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Impact", href: "/impact" },
      { label: "Programs", href: "/programs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      //   { label: "Donate", href: "#" },
      { label: "Volunteer", href: "/get-involved" },
      //   { label: "Partner With Us", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-background-dark border-t border-[#dbe6df] dark:border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description - Takes 2 columns on desktop */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/dsws_brand_logo.png"
                alt="DSWS Logo"
                width={40}
                height={40}
              />
              <h2 className="text-black/80 dark:text-white text-lg font-bold">
                DSWS
              </h2>
            </div>
            <p className="mt-4 text-sm text-[#61896f] dark:text-white/60">
              Dhagagia Social Welfare Society is committed to creating a better
              future through community-driven initiatives in education, health,
              and sustainable development.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-black/80 dark:text-white font-bold text-sm">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      className="text-[#61896f] dark:text-white/60 hover:text-primary transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-[#dbe6df] dark:border-white/10 pt-8 flex flex-col gap-4 md:flex-row items-center justify-between">
          <p className="text-sm text-[#61896f] dark:text-white/60">
            © {new Date().getFullYear()} Dhagagia Social Welfare Society. All
            rights reserved.
          </p>

          {/* Habitat Lens Credit */}
          <div className="flex gap-2 items-center justify-end">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/habitat.lens.assets/habitat-logo-client.png"
              alt="Habitat Lens Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <a
              href="https://habitatlens.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-500 leading-relaxed"
            >
              Developed and maintained by the{" "}
              <span className="font-medium text-yellow-500 hover:underline transition-colors underline-offset-4">
                Habitat Lens Pvt. Ltd.
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
