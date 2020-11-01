import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <section className="py-40 px-10 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT - Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-indigo-400 mb-8">
            Engineering Philosophy
          </p>

          <h2 className="text-4xl font-semibold text-white leading-tight mb-10">
            Great systems are not built with more code,
            <br />
            but with better decisions.
          </h2>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <p>
              I focus on clarity, modular design, and long-term scalability.
              Every architectural decision must support growth.
            </p>

            <p>
              Performance is designed, not optimized later.
              From API contracts to database schemas,
              efficiency guides every layer.
            </p>
          </div>
        </motion.div>

        {/* RIGHT - Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl space-y-6">

            <h3 className="text-indigo-400 text-sm uppercase tracking-widest">
              System Architecture
            </h3>

            <div className="space-y-4">

              <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4">
                API Layer (Node.js)
              </div>

              <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-4">
                Cache Layer (Redis)
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                Database Cluster (PostgreSQL)
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}