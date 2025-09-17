import Link from "next/link";
import schoolLogoLarge from "@/public/images/logo-large.webp";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "The College",
      links: [
        { id: 101, href: "/about", label: "About Us" },
        { id: 102, href: "/academics/faculty-staff", label: "Faculty & Staff" },
        { id: 103, href: "/contact-us", label: "Contact Us" },
      ],
    },
    {
      id: 2,
      title: "Admissions",
      links: [
        {
          id: 201,
          href: "/admissions/application-process",
          label: "Admissions",
        },
        {
          id: 202,
          href: "/docs/entry-requirements.pdf",
          label: "Entry Requirements",
        },
        { id: 203, href: "/faqs", label: "FAQs" },
      ],
    },
    {
      id: 3,
      title: "Students & Alumini",
      links: [
        {
          id: 301,
          href: "https://portal.healthtraining.gov.gh",
          label: "Student Portal",
        },
        { id: 302, href: "/library/e-library", label: "E-Library" },
        { id: 303, href: "/careers", label: "Job Openings" },
        { id: 304, href: "/students-alumini/alumini", label: "Alumini" },
      ],
    },
    {
      id: 4,
      title: "News & Events",
      links: [
        { id: 401, href: "/media/news", label: "Latest News" },
        { id: 402, href: "/media/events", label: "Upcoming Events" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="py-10 md:py-16">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-5 md:gap-20">
            <Image
              src={schoolLogoLarge}
              alt="logo"
              height={150}
              width={150}
              className="hidden -translate-y-4 md:block"
            />
            {footerLinks.map((link) => (
              <div className="" key={link.id}>
                <h3 className="mb-1 font-semibold text-neutral-400">
                  {link.title}
                </h3>
                <Separator className="mb-3 bg-neutral-600" />
                <ul className="space-y-2 *:w-full">
                  {link.links.map((link) => (
                    <li
                      key={link.id}
                      className="text-sm font-light md:text-base"
                    >
                      {link.label}
                    </li>
                    // <Link
                    //   key={link.id}
                    //   href={link.href}
                    //   className="w-full truncate hover:text-white transition-colors duration-300 text-sm"
                    // >
                    //   {link.label}
                    // </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black py-3 text-xs">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-0">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} NMTC, Ksi. All rights reserved.
            </p>
            <p className="text-muted">
              Designed &amp; built by{" "}
              <Link
                href="https://esatechgh.com"
                target="_blank"
                className="font-medium tracking-wide text-emerald-500 underline underline-offset-2"
              >
                EsaTech Inc
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
