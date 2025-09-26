export default function Page() {
  return (
    <>
      <section className="bg-accent w-full py-12 md:py-20">
        <div className="container mx-auto flex flex-col gap-5 px-4 md:flex-row md:gap-20 md:px-0">
          <h2 className="w-full text-2xl font-bold md:w-[35%] md:text-5xl">
            Teaching, Learning and <br /> Research
          </h2>
          <p className="flex-1 text-lg md:text-2xl">
            At NMTC Kumasi, education goes beyond the classroom — it’s a
            transformative journey that empowers students to think critically,
            lead with integrity, and innovate in healthcare delivery. With a
            renewed focus on research and strategic partnerships, the College is
            positioning itself as a hub for excellence in nursing and midwifery
            education, shaping the future of healthcare in Ghana and beyond.
          </p>
        </div>
      </section>
      <section className="bg-primary w-full">
        <div className="container mx-auto flex flex-col gap-5 md:flex-row md:gap-20">
          <div className="aspect-square w-full bg-gray-100 md:w-[35%]">
            image
          </div>
          <div className="flex-1 px-4 py-12 text-right md:px-0 md:py-20">
            <h2 className="mb-6 text-2xl font-semibold md:text-4xl">
              Registered General Nursing (RGN)
            </h2>
            <p className="text-lg md:text-2xl">
              The Registered General Nursing program at NMTC Kumasi is designed
              to equip students with the knowledge, skills, and values required
              to provide comprehensive and patient-centered care across various
              healthcare settings. Through a blend of classroom instruction,
              clinical practice, and community engagement, students are trained
              to assess, plan, implement, and evaluate nursing care for
              individuals and families. Emphasis is placed on ethical practice,
              critical thinking, and effective communication, preparing
              graduates to become professional nurses who contribute
              meaningfully to Ghana’s healthcare system and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary w-full">
        <div className="container mx-auto flex flex-col-reverse gap-5 md:flex-row md:gap-20">
          <div className="flex-1 px-4 py-12 md:px-0 md:py-20">
            <h2 className="mb-6 text-2xl font-semibold md:text-4xl">
              Registered Midwifery (RM)
            </h2>
            <p className="text-lg md:text-2xl">
              The Registered Midwifery program focuses on preparing students to
              provide skilled, respectful, and evidence-based care for women,
              newborns, and families throughout the maternity cycle. The
              curriculum integrates theoretical learning with hands-on clinical
              experience in antenatal, intrapartum, and postnatal care. Students
              gain expertise in health promotion, disease prevention, and
              reproductive health, with a strong foundation in ethical and
              culturally sensitive practices. Graduates of the program are
              well-equipped to play a vital role in improving maternal and child
              health outcomes in Ghana and across the region.
            </p>
          </div>
          <div className="aspect-square w-full bg-gray-100 md:w-[35%]">
            image
          </div>
        </div>
      </section>
    </>
  );
}
