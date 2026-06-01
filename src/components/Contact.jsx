import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ theme }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("email data------------------", e.target);
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
        className={`py-20 px-6 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-gradient-to-b from-white to-gray-50"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
            <p className="max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <ContactInfo
                theme={theme}
                icon={<Mail size={24} />}
                title="Email"
                text="susan0907miller@outlook.com"
                link="mailto:susan0907miller@outlook.com"
              />
              {/* <ContactInfo
                theme={theme}
                icon={<Phone size={24} />}
                title="Phone"
                text="+1 650 450 8734"
                link="tel:+16504508734"
              /> */}
              <ContactInfo
                theme={theme}
                icon={<MapPin size={24} />}
                title="Location"
                text="Shanghai, China"
              />
            </div>

            {/* RIGHT SIDE (FORM) */}
            <motion.div
              className={`rounded-2xl p-8 border ${
                theme === "dark" ? "bg-gray-700 border-gray-600" : "bg-white border-gray-100"
              } shadow-xl`}
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-5" onSubmit={sendEmail}>
                <InputField theme={theme} label="Name" placeholder="Your name" name="visitorname" />
                <InputField theme={theme} label="Email" placeholder="Your Email" name="visitoremail" />
                <TextAreaField theme={theme} label="Message" placeholder="What do you want?" name="message" />

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center py-3 rounded-lg ${
                      status.includes("successfully")
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-rose-500/30"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`text-center py-8 ${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-900 text-gray-300"}`}>
        <p className="mb-2">
          Modified with <span className="text-rose-500">❤</span> by Susan Miller
        </p>
        <p className="text-gray-500 text-sm">© 2026 All rights reserved.</p>
      </footer>
    </>
  );
}

/* Animated Contact Card */
function ContactInfo({ theme, icon, title, text, link }) {
  const content = (
    <div className={`rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 group ${
      theme === "dark" ? "bg-gray-700" : "bg-white"
    } border ${theme === "dark" ? "border-gray-600" : "border-gray-200"} shadow-sm`}>
      <div className={`p-4 rounded-xl transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-600 text-rose-400 group-hover:bg-rose-500 group-hover:text-white" : "bg-rose-100 text-rose-500 group-hover:bg-rose-500 group-hover:text-white"
      }`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block">
        {content}
      </a>
    );
  }

  return content;
}

/* Input Components */
function InputField({ theme, label, placeholder, type = "text", name }) {
  return (
    <div>
      <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{label}</label>
      <motion.input
        type={type}
        placeholder={placeholder}
        whileFocus={{ scale: 1.02 }}
        name={name}
        className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all ${
          theme === "dark"
            ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
        }`}
      />
    </div>
  );
}

function TextAreaField({ theme, label, placeholder, name }) {
  return (
    <div>
      <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{label}</label>
      <motion.textarea
        rows="4"
        name={name}
        placeholder={placeholder}
        whileFocus={{ scale: 1.02 }}
        className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none ${
          theme === "dark"
            ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
        }`}
      />
    </div>
  );
}
