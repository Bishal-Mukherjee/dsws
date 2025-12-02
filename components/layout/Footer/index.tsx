import Image from "next/image";

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
      { label: "About Us", href: "#" },
      { label: "Our Work", href: "#" },
      { label: "Stories", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Partner With Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-background-dark border-t border-[#dbe6df] dark:border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-10 lg:px-20">
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
                    <a
                      className="text-[#61896f] dark:text-white/60 hover:text-primary transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-[#dbe6df] dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-[#61896f] dark:text-white/60">
            © {new Date().getFullYear()} Dhagagia Social Welfare Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
