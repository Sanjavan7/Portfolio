import { motion } from "framer-motion";
import { SectionLabel, Sparkle, Cloud, Squiggle, Star } from "./CoinlyDecorations";

export const Story = () => {
  return (
    <section id="story" className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-orange)', color: '#fff' }}>
      <Sparkle className="absolute top-[8%] right-[8%] animate-wobble" color="#fff" size={40} />
      <Sparkle className="absolute bottom-[12%] left-[6%] animate-wobble" color="var(--coinly-yellow)" size={36} />
      <Sparkle className="absolute top-[30%] left-[3%]" color="var(--coinly-purple)" size={24} />
      <Cloud className="absolute top-[15%] left-[40%] animate-float-slow" color="#fff" size={70} />
      <Cloud className="absolute bottom-[20%] right-[3%]" color="var(--coinly-yellow)" size={80} />
      <Squiggle className="absolute bottom-[40%] right-[12%]" color="#fff" size={100} />
      <Star className="absolute top-[50%] right-[8%] animate-wobble" color="var(--coinly-green)" size={30} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <SectionLabel>
            <span style={{ color: '#fff' }}>04 — Origin</span>
          </SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight leading-[1.1] mt-4"
          >
            From the football <span className="highlight-yellow">field</span>
            <br />
            to the data <span className="highlight-purple highlight-right">field</span>.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
          className="mx-auto mb-12 w-fit p-3 bg-white"
          style={{
            border: '2.5px solid var(--coinly-deep-blue)',
            boxShadow: '10px 10px 0 var(--coinly-deep-blue)',
            borderRadius: '4px',
          }}
        >
          <img
            src="/origin-photo.png"
            alt="Sanjavan"
            className="block w-[240px] sm:w-[280px] md:w-[320px] h-auto object-cover"
            style={{ borderRadius: '2px' }}
          />
          <p
            className="text-center pt-3 pb-1 font-black tracking-wide"
            style={{
              color: 'var(--coinly-deep-blue)',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            ✦ that's me ✦
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-base md:text-lg font-medium leading-relaxed"
          >
            <p>
              Captain of the National Soccer Team. Six hours of daily training.
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed.
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-xl md:text-2xl font-black pt-2">
              They never did.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-base md:text-lg font-medium leading-relaxed"
          >
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training
              sessions now drives hackathon sprints.
            </p>
            <p>
              8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
              HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more.
            </p>
            <p className="text-xl md:text-2xl font-black pt-2">
              The game changed.{" "}
              <span className="highlight-yellow">The discipline didn't.</span>
            </p>
          </motion.div>
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-coinly max-w-2xl mx-auto text-center"
          style={{ background: 'var(--coinly-cream)', color: 'var(--coinly-deep-blue)' }}
        >
          <p className="section-label mb-3 justify-center flex">
            <Sparkle size={12} color="var(--coinly-orange)" />
            Education
            <Sparkle size={12} color="var(--coinly-orange)" />
          </p>
          <p className="text-2xl md:text-3xl font-black tracking-tight mb-1">
            MS in Machine Learning
          </p>
          <p className="text-base font-bold opacity-75">
            Stevens Institute of Technology · 2025 – 2027
          </p>
        </motion.div>
      </div>
    </section>
  );
};
