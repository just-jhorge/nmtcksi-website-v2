import React from "react";

export default function Page() {
  return (
    <>
      <section className="w-full bg-amber-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-0">
          <h3 className="mb-3 text-lg font-semibold md:mb-6 md:text-5xl">
            Our Beautiful Campus
          </h3>
          <p className="text-sm font-light md:text-2xl">
            Located within the Komfo Anokye Teaching Hospital in Bantama,
            Kumasi, our campus offers a unique blend of academic excellence and
            real-world clinical experience. With modern classrooms, skills labs,
            and college-managed hostels, NMTC Kumasi provides a supportive
            environment where students live, learn, and train at the heart of
            one of Ghana&apos;s leading healthcare institutions.
          </p>
        </div>
      </section>
      <section className="aspect-video w-full bg-black md:aspect-auto md:h-[calc(100svh-4rem)]">
        <iframe
          // width="560"
          // height="315"
          className="h-full w-full"
          src="https://www.youtube.com/embed/ths9XdWJmo0?si=rtBmQ_N2cilUg8sS&amp;controls=1&amp;start=11"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
      <section className="w-full bg-white">
        <div className="grid grid-cols-5 py-12 md:py-20">
          <div className="col-span-5 mx-auto h-full max-w-4xl space-y-4 px-4 text-sm font-light md:col-span-3 md:px-0 md:text-xl">
            <p>
              Located in Bantama, Kumasi, within the premises of the Komfo
              Anokye Teaching Hospital (KATH), the Nursing and Midwifery
              Training College, Kumasi (NMTC Kumasi) offers students a unique
              opportunity to study in one of Ghana&apos;s premier healthcare
              environments. Just a 25-minute drive from Prempeh I International
              Airport and 5 minutes from Kejetia Market, our campus combines
              accessibility with direct access to advanced clinical training.
            </p>
            <p>
              NMTC Kumasi provides a hands-on, practice-focused learning
              experience where students engage with real-world healthcare from
              the very beginning. Our small class sizes encourage close
              interaction between students and faculty, while modern lecture
              halls, skills labs, and simulation rooms support active,
              experiential learning. Being situated within a major teaching
              hospital gives our students a significant advantage in clinical
              exposure and professional development.
            </p>
            <p>
              All students are housed in college-managed hostels, ensuring a
              safe, supportive, and closely connected residential experience.
              The campus also offers spaces for quiet study, personal
              reflection, and light recreation, helping students maintain a
              healthy academic-life balance. Whether in the classroom, in the
              lab, or on the wards, NMTC Kumasi equips students with the skills,
              confidence, and compassion to excel in Ghana&apos;s healthcare
              system and beyond.
            </p>
          </div>
          <div className="col-span-2 mr-24 hidden h-full bg-neutral-200 md:block">
            image
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
        </div>
      </section>
      <section className="bg-accent w-full py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="mb-4 text-xl font-semibold md:mb-8 md:text-5xl">
            Housing, Recreation &amp; Dining
          </h1>
          <div className="space-y-4 text-sm md:text-2xl">
            <p>
              All students at NMTC Kumasi are accommodated in college-managed
              hostels, located within close proximity to lecture halls, clinical
              training areas, and other key campus facilities. The hostels are
              designed to provide a safe, comfortable, and supportive living
              environment, with essential amenities such as study areas, common
              rooms, and access to campus security. Living on campus fosters a
              strong sense of community and makes it easier for students to stay
              engaged with academic and extracurricular activities.
            </p>
            <p>
              Outside the classroom, students have access to recreational spaces
              for relaxation, reflection, and light physical activity. Whether
              it&apos;s spending time with peers in shaded courtyards or
              participating in informal sporting events, the campus offers room
              for balance and well-being. On-campus dining facilities provide
              nutritious, affordable meals prepared to meet diverse dietary
              needs, helping ensure that students remain energized and focused
              throughout their training.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
          <div className="aspect-square w-full bg-neutral-200">image</div>
        </div>
      </section>
    </>
  );
}
