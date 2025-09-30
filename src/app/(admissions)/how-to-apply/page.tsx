import Image from "next/image";
import chair from "@/public/images/chair.webp";
import { Button } from "@/components/ui/button";

export const admissionProcessSteps = [
  {
    id: 1,
    step: "01",
    title: "Purchase a voucher",
    description:
      "The first step in your application is to purchase a voucher from M.O.H THE ADMISSIONS PORTAL. there are various payment methods including bank transfer and mobile money. The voucher contains your SERIAL NUMBER as well as your M.O.H Pin which will be used for the application.",
  },
  {
    id: 2,
    step: "02",
    title: "Fill online form",
    description:
      "The next step is to fill your online application. Log in to the M.O.H portal to fill the online form. Input the correct details and submit your application. Please make sure your application has been submitted successfully.",
  },
  {
    id: 3,
    step: "03",
    title: "Attend the interview",
    description:
      "The next and probably the most important step is to attend the interview. You shall receive your interview date and all documents needed when attending the interview. You can also check your interview date by clicking on the link below.",
  },
  {
    id: 4,
    step: "04",
    title: "Await enrolment",
    description:
      "Successful applicants will be contacted via text messages for their reporting dates, as such, please do input an active working contact detail when filling the online application. Applicants can also check their online portal to know the reporting date.",
  },
];

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 md:h-[85svh] md:grid-cols-3">
      <div className="relative h-[45svh] w-full bg-gray-100 md:h-full">
        <Image
          fill
          src={chair}
          alt="admission"
          className="absolute h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="col-span-2 flex h-full w-full items-center justify-center px-5 py-10 md:px-40">
        <div>
          <h3 className="font-bricolage mb-5 text-4xl">How to Apply</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {admissionProcessSteps.map((process) => (
              <div key={process.id} className="space-y-3">
                <h2 className="text-5xl font-extrabold text-emerald-500">
                  {process.step}.
                </h2>
                <p className="text-xl font-bold">{process.title}</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
