import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <section className="bg-background h-[90svh] w-full px-4 md:px-0">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="font-bricolage mb-8 text-2xl font-bold md:mb-10 md:text-5xl">
          Maps and Contact Information
        </h1>
        <div className="space-y-5 text-center">
          <div className="space-y-6 text-lg md:text-2xl">
            <div>
              <h3 className="font-bold">Digital Address</h3>
              <p>AK-034-2671</p>
            </div>
            <div>
              <h3 className="font-bold">Mailing Address</h3>
              <p>
                P. O. Box KS 110 <br />
                Adum - Kumasi, Ghana
              </p>
            </div>
            <div>
              <h3 className="font-bold">Email Address</h3>
              <a
                className="block font-light text-emerald-600 underline underline-offset-4"
                href="mailto:administration@nmtckumasi.edu.gh"
              >
                administration@nmtckumasi.edu.gh
              </a>
              <a
                className="block font-light text-emerald-600 underline underline-offset-4"
                href="mailto:admissions@nmtckumasi.edu.gh"
              >
                admissions@nmtckumasi.edu.gh
              </a>
              <a
                className="block font-light text-emerald-600 underline underline-offset-4"
                href="mailto:info@nmtckumasi.edu.gh"
              >
                info@nmtckumasi.edu.gh
              </a>
              <a
                className="block font-light text-emerald-600 underline underline-offset-4"
                href="mailto:transcripts@nmtckumasi.edu.gh"
              >
                transcripts@nmtckumasi.edu.gh
              </a>
            </div>
            <div>
              <h3 className="font-bold">Map</h3>
              <a
                href=""
                target="_blank"
                className="text-primary inline-flex items-center gap-1"
              >
                Directions via Google Maps{" "}
                <ArrowRight className="size-4 md:size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
