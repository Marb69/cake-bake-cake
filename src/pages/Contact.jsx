import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#eeded8] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-heading font-semibold text-[#864e5a] hover:text-[#74593f] transition-colors"
      >
        <span className="text-base sm:text-lg">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-[#864e5a]" /> : <ChevronDown size={20} className="text-[#74593f]" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const faqs = [
    {
      question: "How far in advance should I place my order?",
      answer: "We recommend ordering at least 2 weeks in advance for celebration cakes and 1-2 months in advance for custom wedding cakes. For urgent requests, please contact us directly to check availability.",
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We offer delivery within the metropolitan area for custom and tiered cakes. Delivery fees are calculated based on the distance. Pick-up is also available at our studio.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "We offer gluten-free, eggless, and dairy-free options for select flavors. However, please note that our cakes are baked in a kitchen that handles wheat, nuts, and dairy, so trace amounts may be present.",
    },
    {
      question: "How do I store my custom cake?",
      answer: "Buttercream cakes should be kept refrigerated until 1-2 hours before serving. Cakes covered in fondant should be stored in a cool, air-conditioned room and not refrigerated, as condensation can affect the fondant.",
    },
    {
      question: "What is your deposit and cancellation policy?",
      answer: "A 50% non-refundable deposit is required to secure your booking date. Cancellations made 7 days prior to the event can be rescheduled or converted to store credit. No refunds for late cancellations.",
    },
  ];

  return (
    <div className="bg-[#FBF9F1] min-h-screen py-12 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#864e5a] mt-3">
            Contact & Support
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Have questions about flavor choices, custom designs, or ordering? Send us a message or review our FAQs below.
          </p>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-soft border border-soft space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#864e5a] mb-2">Connect With Us</h2>
              <p className="text-gray-500 text-sm">We'd love to hear from you. Visit us or reach out via email/phone.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-[#ffb7c5]/20 rounded-2xl text-[#864e5a]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">+63973998166</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-[#fed9b8]/40 rounded-2xl text-[#74593f]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">hello@kuyajonscakes.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-[#864e5a]/10 rounded-2xl text-[#864e5a]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Baking Studio</p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Prk. 1 New Casay,Braulio E. Duajli, Ddn</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-[#eeded8] pt-6">
              <h3 className="font-heading text-base font-bold text-[#74593f] mb-3">Studio Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Tuesday - Friday</span>
                  <span className="font-medium">6:00 PM - 19:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday - Monday</span>
                  <span className="font-medium">Closed (Pre-order pickups only)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-soft border border-soft">
            <h2 className="font-heading text-2xl font-bold text-[#864e5a] mb-6">Send an Inquiry</h2>

            {submitted ? (
              <div className="bg-[#ffb7c5]/20 border border-[#ffb7c5] p-8 rounded-2xl text-center space-y-3 animate-pulse">
                <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#864e5a] shadow-md">
                  <Send size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#864e5a]">Inquiry Sent Successfully!</h3>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. Kuya Jon will get back to you within 24-48 business hours with details or a custom quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm outline-none transition-all focus:border-[#ffb7c5] focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm outline-none transition-all focus:border-[#ffb7c5] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Wedding Cake Pricing, Flavors Enquiry"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm outline-none transition-all focus:border-[#ffb7c5] focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, the guest count, the date, and any ideas you have..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm outline-none transition-all focus:border-[#ffb7c5] focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full font-heading font-semibold flex items-center justify-center gap-2 rounded-xl bg-[#864e5a] text-white py-3 text-sm transition-all hover:bg-[#9e5f6e] cursor-pointer shadow-md hover:shadow-lg"
                >
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-soft border border-soft">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle size={28} className="text-[#864e5a]" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#864e5a]">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-[#eeded8]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
