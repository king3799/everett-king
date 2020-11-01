import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9w5i94u",
        "template_ctqxrt8",
        e.target,
        "9y9Pp025chXgSnt4l"
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <motion.section
        className="bg-[#f5f5f5] py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact"
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-500">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <ContactInfo
                icon={<Mail size={20} />}
                title="Email"
                text="susan0907miller@outlook.com"
              />
              <ContactInfo
                icon={<Phone size={20} />}
                title="Phone"
                text="+1 201 234 7344"
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                title="Location"
                text="Shanghai , China"
              />
            </motion.div>

            {/* RIGHT SIDE (FORM) */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-8"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-5" onSubmit={sendEmail}>

                <InputField label="Name" placeholder="Your name" name="visitorname" />
                <TextAreaField label="Message" placeholder="Send me your Email and what you want from me..." name="message" />

                {status && <p className=" text-center ">{status}</p>}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition"
                  disabled={loading}

                >
                  Send Message
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-center py-6 text-gray-300 text-sm">
        <p>
          Modified with <span className="text-rose-500">❤</span> by Susan Miller
        </p>
        <p className="mt-1 text-gray-400">
          © 2026 All rights reserved.
        </p>
      </footer>
    </>
  );
}


/* Animated Contact Card */
function ContactInfo({ icon, title, text }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4"
    >
      <div className="bg-rose-100 text-rose-500 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </motion.div>
  );
}




/* Input Components */
function InputField({ label, placeholder, type = "text", name }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <motion.input
        type={type}
        placeholder={placeholder}
        whileFocus={{ scale: 1.02 }}
        name={name}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
      />
    </div>
  );
}

function TextAreaField({ label, placeholder, name }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <motion.textarea
        rows="4"
        name={name}
        placeholder={placeholder}
        whileFocus={{ scale: 1.02 }}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
      />
    </div>
  );
}