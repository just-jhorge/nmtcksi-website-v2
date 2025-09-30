import { Separator } from "@/components/ui/separator";
import StaffCardBig from "./staff-card-big";
import StaffCardSmall from "./staff-card-small";

const management = [
  {
    position: "Principal",
    name: "David Benjamin Sampson (PhD)",
    email: "principal@nmtckumasi.com",
  },
  {
    position: "Vice Principal",
    name: "Veronica Oduro-Kwarteng",
    email: "ronikwart@yahoo.com",
  },
  {
    position: "Programme Head, RGN",
    name: "Yussif Issah Sumaila",
    email: "sumailay@yahoo.com",
  },
  {
    position: "Programme Head, RM",
    name: "Dorcas Fati Asare",
    email: "dasaref9@gmail.com",
  },
  {
    position: "Head of Finance",
    name: "Collins Amankwah",
    email: "collyman20@yahoo.com",
  },
  {
    position: "Administrator",
    name: "Christ Agyei",
    email: "christagyei@gmail.com",
  },
  {
    position: "Head of Procurement",
    name: "Kennedy Nii Lamptey",
    email: "kennman@gmail.com",
  },
  {
    position: "Matron",
    name: "Grace Antwi",
    email: "grace.antwi@gmail.com",
  },
];

const staff = [
  {
    name: "Ransford Sarfo-Mensah",
    role: "Librarian",
    email: "rsarfomensah@gmail.com",
  },
  {
    name: "George Sarpong Afrifa",
    role: "I. T. Manager",
    email: "gsafrifa@gmail.com",
  },
  {
    name: "Evelyn Enuameh",
    role: "Tutor",
    email: "evelyn.enuameh@gmail.com",
  },
  {
    name: "Akua Asantewaa",
    role: "Tutor",
    email: "akua.asantewaa@gmail.com",
  },
  {
    name: "Rufai Ahmed Adams",
    role: "Tutor",
    email: "rufaiahmedadams@gmail.com",
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-accent w-full py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="font font-bricolage text-2xl font-bold md:text-5xl">
            Management &amp; Staff <br />
            Directory
          </h2>
        </div>
      </div>
      <div className="container mx-auto space-y-10 px-4 py-5 md:px-0 md:py-8">
        <section>
          <h4 className="font-bricolage mb-2 text-xl font-medium md:text-3xl">
            Management
          </h4>
          <Separator className="mb-7" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
            {management.map((person) => (
              <StaffCardBig
                key={person.email}
                rank={person.position}
                name={person.name}
                email={person.email}
              />
            ))}
          </div>
        </section>
        <section>
          <h4 className="font-bricolage mb-2 text-xl font-medium md:text-3xl">
            Staff
          </h4>
          <Separator className="mb-4" />
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {staff.map((staff) => (
              <StaffCardSmall
                key={staff.email}
                name={staff.name}
                email={staff.email}
                role={staff.role}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
