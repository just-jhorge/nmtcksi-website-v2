import EventCard from "@/components/custom/event-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

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
      <section className="flex h-auto w-full items-center bg-gray-50/50 py-14 md:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-3 md:px-0">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-primary text-5xl font-bold md:text-7xl">40+</h3>
            <p className="text-xl font-medium md:text-2xl">Courses Taught</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-primary text-5xl font-bold md:text-7xl">65+</h3>
            <p className="text-xl font-medium md:text-2xl">Years Completed</p>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center md:col-span-1">
            <h3 className="text-primary text-5xl font-bold md:text-7xl">
              40k+
            </h3>
            <p className="text-xl font-medium md:text-2xl">
              Graduated Students
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background w-full py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="mb-7 text-4xl font-semibold">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[...new Array(4)].map((_, idx) => (
              <EventCard
                key={idx}
                title="Annual Research Symposium"
                date="March 15, 2024"
                time="9:00 AM - 5:00 PM"
                location="Main Auditorium"
                description="Join us for a day of groundbreaking research presentations from faculty and graduate students across all departments. Discover innovative projects and network with fellow researchers."
                category="RESEARCH"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background w-full py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="mb-7 text-4xl font-semibold">Featured Stories</h2>
          <div className="mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[...new Array(4)].map((_, idx) => (
              <div key={idx}>
                <div className="h-96 w-full bg-neutral-100"></div>
                <p className="line-clamp-3 p-2 text-xl font-medium">
                  NMTC, Kumasi hosts inaugural conference on reimagining
                  education in Africa
                </p>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:text-primary-foreground hover:bg-primary rounded-none border-2 px-10 py-6 text-lg shadow-none transition-colors duration-300"
          >
            Read more stories{" "}
            <ChevronRight className="text-primary hover:text-primary-foreground size-5" />
          </Button>
        </div>
      </section>
      <section className="w-full">
        <div className="grid h-[40rem] w-full grid-cols-2 grid-rows-12 gap-2 md:h-[30rem] md:grid-cols-6">
          <div className="bg-muted row-span-3 w-full md:row-span-4">1</div>
          <div className="bg-muted row-span-3 w-full md:row-span-4">2</div>
          <div className="bg-muted col-span-2 row-span-3 w-full md:row-span-5">
            3
          </div>
          <div className="bg-muted row-span-3 w-full md:col-span-2 md:row-span-12">
            4
          </div>
          <div className="bg-muted row-span-3 w-full md:col-span-2 md:row-span-8">
            5
          </div>
          <div className="bg-muted col-span-2 row-span-3 w-full md:row-span-7">
            6
          </div>
        </div>
      </section>
    </main>
  );
}
