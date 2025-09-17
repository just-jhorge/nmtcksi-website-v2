import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative h-[64.5svh] w-full bg-gray-50 md:h-[calc(100svh-4rem)]">
        <div className="absolute z-20 h-full w-full bg-gradient-to-t from-neutral-900 from-5% to-transparent" />
        <div className="absolute bottom-7 z-30 flex w-full flex-col items-center gap-4 text-white md:bottom-10">
          <h3 className="text-2xl md:text-6xl">
            Enter to Learn, Go Out to Serve
          </h3>
          <ChevronDown className="size-6 md:size-12" />
        </div>
      </section>
      <section className="grid w-full grid-cols-1 md:grid-cols-5">
        <div className="bg-background col-span-3 flex items-center justify-center p-8 md:p-0">
          <p className="text-muted-foreground max-w-2xl text-justify text-sm md:text-left md:text-xl">
            Choosing Nursing and Midwifery Training College in Kumasi offers a
            distinctive and enriching educational experience that sets it apart.
            The institution is renowned for its commitment to excellence in
            healthcare education, providing a comprehensive curriculum that
            integrates theoretical knowledge with hands-on practical training.
            The college boasts state-of-the-art facilities and a dedicated
            faculty of experienced healthcare professionals, ensuring that
            students receive the highest quality education. Additionally, the
            college's strong emphasis on ethical and compassionate care fosters
            a culture of empathy, preparing students to serve with integrity and
            professionalism. Overall, Nursing and Midwifery Training College,
            Kumasi, stands out as a premier institution that not only imparts
            top-notch education but also instills values crucial for making a
            positive impact in the healthcare sector.
          </p>
        </div>
        <div className="col-span-2 *:flex *:flex-col *:justify-center *:px-6 *:text-white *:md:px-12">
          <div className="h-28 bg-yellow-500 md:h-48">
            <p className="mb-0 text-xl md:mb-1">01.</p>
            <h2 className="text-2xl font-bold md:text-5xl">
              QUALITY EDUCATION
            </h2>
          </div>
          <div className="h-28 bg-black md:h-48">
            <p className="mb-0 text-xl md:mb-1">02.</p>
            <h2 className="text-2xl font-bold md:text-5xl">
              EXPERIENCED STAFF
            </h2>
          </div>
          <div className="h-28 bg-green-500 md:h-48">
            <p className="mb-0 text-xl md:mb-1">03.</p>
            <h2 className="text-2xl font-bold md:text-5xl">
              CLINICAL EXCELLENCE
            </h2>
          </div>
        </div>
      </section>
      <section className="flex h-auto w-full items-center bg-gray-50/50 py-10">
        <div className="container mx-auto grid grid-cols-1 gap-5 px-4 md:grid-cols-3 md:gap-10 md:px-0">
          <div>
            <h3 className="text-primary text-7xl font-bold">40+</h3>
            <p></p>
          </div>
          <div>
            <h3 className="text-primary text-7xl font-bold">65+</h3>
            <p></p>
          </div>
          <div>
            <h3 className="text-primary text-7xl font-bold">40k+</h3>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
}
