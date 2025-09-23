export default function Page() {
  return (
    <>
      <section className="bg-accent w-full py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col items-start gap-3 md:flex-row md:gap-32">
            <h3 className="text-xl font-semibold text-nowrap md:text-4xl">
              About NMTC, Kumasi
            </h3>
            <p className="text-lg md:text-3xl">
              The mission of Nursing and Midwifery Training College, Kumasi is
              to train and turn out competent nursing and midwifery
              professionals to restore, maintain and promote health.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-14 md:py-20">
        <article className="container mx-auto px-4 md:px-0">
          <h2 className="mb-8 text-xl font-semibold md:text-4xl">
            Welcome to Nursing and Midwifery Training College, Kumasi.
          </h2>
          <p className="mb-2 text-lg md:text-3xl">
            Nursing and Midwifery Training College - NMTC, Kumasi or KNMTC as
            some may call it, is a leading institution dedicated to providing a
            comprehensive and dynamic learning experience. Situated in the heart
            of Kumasi - Ghana. Our College has been nurturing aspiring nurses
            and midwives since 1955. We take pride in our commitment to
            excellence and our passion for shaping the future of healthcare
            professionals.
          </p>
          <p className="mb-5 text-lg md:text-3xl">
            We offer a unique curriculum that equips our students with the
            knowledge and skills needed to excel in their careers. Our
            state-of-the-art facilities and experienced faculty ensure that
            every student receives the highest quality education. Join us on
            this exciting journey and embark on a rewarding career in the noble
            field of nursing and midwifery.
          </p>
          <p className="text-lg font-medium italic md:text-3xl">
            Akwaaba, YƐma wo ayekoo!!
          </p>
        </article>
      </section>
      <section className="bg-accent w-full py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="mb-8 text-xl font-semibold md:text-4xl">
            The Full Story
          </h2>
          <p className="mb-4 text-lg md:text-3xl">
            The college since inception has existed as two colleges running
            nursing and midwifery programmes under two different administrations
            namely Nurse&apos;s Training College (NTC) and Midwifery Training
            School (MTS). In 2007, both institutions merged under one
            administration hence the name Nursing and Midwifery Training College
            (NMTC).
          </p>
          <p className="mb-4 text-lg md:text-3xl">
            The nursing programme was started in 11th January, 1955 with a State
            Registered Nursing (SRN) certificate program which was three year
            duration. In 1968, a two-year Enrolled Nursing (EN) programme was
            introduced which ran alongside the SRN. The SRN certificate
            programme later gave way to a 3-year Comprehensive SRN programme in
            August 1969. In 1983, the Enrolled Nursing programme was phased out.
            A Registered General Nursing (RGN) Diploma programme was introduced
            in 1999 and that is what is currently running.
          </p>
          <p className="mb-4 text-lg md:text-3xl">
            The Midwifery programme also started in 1957 with a two year and two
            and a half year duration depending on one&apos;s entry
            qualification. These continued until the early 1980s when it was
            replaced with a one year Post Basic programme after completion of
            SRN. A three year Registered Midwifery (RM) Diploma programme was
            introduced in 2003. These programmes run concurrently till 2007 when
            the certificate was phased out. Currently the college is running a
            3-year Diploma in Registered General Nursing and Registered
            Midwifery.
          </p>
          <p className="text-lg line-through md:text-3xl">
            The College also runs a Two-year Post Nurse Assistant Clinician
            /Nurse Assistant Preventive (NAC/NAP) certificate in Midwifery
            programme since September, 2016.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="w-full bg-amber-300 px-4 py-10 md:px-0">
            <div className="mx-auto flex max-w-md flex-col items-start justify-center">
              <h2 className="mb-3 text-lg font-semibold">Mission</h2>
              <p className="text-base md:text-lg">
                To train and turn out competent nursing and midwifery
                professionals to restore, maintain and promote health.
              </p>
            </div>
          </div>
          <div className="w-full bg-black px-4 py-10 text-amber-200 md:px-0">
            <div className="mx-auto flex max-w-md flex-col items-start justify-center">
              <h2 className="mb-3 text-lg font-semibold">Vision</h2>
              <p className="text-base md:text-lg">
                To become a center of excellence for the training of health
                professionals in the delivery of high-quality patient care in
                Ghana and beyond.
              </p>
            </div>
          </div>
          <div className="w-full bg-green-500 px-4 py-10 md:px-0">
            <div className="mx-auto flex max-w-md flex-col items-start justify-center">
              <h2 className="mb-3 text-lg font-semibold">Core Values</h2>
              <ul className="list-inside list-disc text-base md:text-lg">
                <li>Discipline</li>
                <li>Excellence</li>
                <li>Professional Integrity</li>
                <li>Client/Patient Centeredness</li>
                <li>Community-based Services</li>
                <li>Best Practices and Reflective Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
