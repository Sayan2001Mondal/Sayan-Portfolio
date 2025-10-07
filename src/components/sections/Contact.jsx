import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({ type: "error", message: "❌ Missing API access key!" });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      access_key: accessKey, // ✅ always included
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (data.success) {
        setStatus({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "❌ Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "❌ Network error. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-black">
      <RevealOnScroll>
        <div className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10 hover:-translate-y-1 transition-all">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Hidden access key fallback in case fetch fails */}
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Name..."
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
              transition hover:-translate-y-1 hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
              transition hover:-translate-y-1 hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 resize-none
              transition hover:-translate-y-1 hover:shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md
              transition hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
