import { useState, useEffect } from "react";
import { init, sendForm } from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const timeField = document.createElement("input");
    timeField.type = "hidden";
    timeField.name = "time";
    timeField.value = new Date().toLocaleString();
    e.target.appendChild(timeField);

    try {
      const response = await sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      );
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (err) {
      console.error("EmailJS Error Details:", err);
      setError(err.text || "Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
      e.target.removeChild(timeField);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
      <RevealOnScroll>
        <div className="w-full max-w-xl px-4 md:px-0 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {isSuccess && (
            <div className="mb-4 p-3 bg-green-500/10 text-green-400 rounded text-center">
              ✅ Message sent successfully!
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 text-red-400 rounded text-center">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 rounded-xl shadow-md backdrop-blur">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
