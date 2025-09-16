import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ChevronRight, MenuIcon, SearchIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";

const navigationLinks = [
  {
    id: 1,
    title: "About",
    links: [
      { label: "About NMTC, Kumasi", href: "/about" },
      { label: "History", href: "/history" },
      { label: "Governance", href: "/governance" },
      { label: "Our Campus", href: "/campus" },
      { label: "Job Openings", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Academics",
    links: [
      { label: "Programs of Study", href: "/programmes" },
      { label: "Course Catalog", href: "/courses" },
      { label: "Faulty & Staff", href: "/faculty" },
      { label: "Academic Calendar", href: "/academic" },
      { label: "Support & Advice", href: "/support" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
  {
    id: 3,
    title: "Admissions",
    links: [
      { label: "Why NMTC, Kumasi", href: "/why-us" },
      { label: "How to Apply", href: "/how-to-apply" },
      { label: "Entry Requirement", href: "/entry-requirement" },
      { label: "Check Admission Status", href: "/check-status" },
    ],
  },
  {
    id: 4,
    title: "Library",
    links: [
      { label: "D. Anane-Darko Library", href: "/library" },
      { label: "Library Guide", href: "/library-guide" },
      { label: "Institutional Repository", href: "/institutional-repository" },
      { label: "E-Library", href: "/e-library" },
    ],
  },
  {
    id: 5,
    title: "Students & Alumini",
    links: [
      { label: "Student Council", href: "/student-council" },
      { label: "Clubs & Activities", href: "/clubs-activities" },
      { label: "Coaching & Counseling", href: "/counseling" },
    ],
  },
  {
    id: 6,
    title: "News",
    links: [
      { label: "Stories", href: "/stories" },
      { label: "Insights", href: "/insights" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="bg-background sticky top-0 h-16 w-full">
      <div className="flex-between container mx-auto h-full px-4 md:px-0">
        <div>logo</div>
        <div className="hidden md:block">
          <NavigationLinks />
        </div>
        <div className="inline-flex items-center gap-5">
          <SearchIcon className="size-6" />
          <MobileMenuSheet />
        </div>
      </div>
    </div>
  );
}

function NavigationLinks() {
  return (
    <NavigationMenu viewport={false} className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">NMTC, Kumasi</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">History</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Governance</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Our Campus</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Job Openings</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Contact Us</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Programs of Study</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Course Catalog</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Faculty &amp; Staff</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Academic Calendar</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Support &amp; Advicing</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Transcripts &amp; Certificates</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Why NMTC, Kumasi</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">How to Apply</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Entry Requirements</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Check Admission Status</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Library</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">D. Anane-Darko Library</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Library Guide</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Institutional Repository</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">E-Library</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Student &amp; Alumini</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Student Council</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Clubs &amp; Activities</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Coaching & Counseling</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>News</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[230px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Stories</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Insights</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="size-6 md:hidden" />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 px-4">
          {navigationLinks.map((navigation) => (
            <div key={navigation.id}>
              <h4 className="mb-1 font-bold">{navigation.title}</h4>
              <Separator className="mb-3" />
              <ul className="flex flex-col space-y-2">
                {navigation.links.map((link) => (
                  <li
                    key={link.href}
                    className="inline-flex items-center gap-1 text-sm"
                  >
                    <ChevronRight className="text-muted-foreground size-3" />
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
