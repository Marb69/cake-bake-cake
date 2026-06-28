import React from "react";

const masterpieceItems = [
  {
    title: "Celebration Sparkle",
    tag: "Birthday",
    image:
      "https://images.unsplash.com/photo-1559622212-6f0373ad7a8d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Everlasting Love",
    tag: "Wedding",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9a9d5c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cuddly Confection",
    tag: "Cute Cakes",
    image:
      "https://images.unsplash.com/photo-1611078489954-2adf20a4b7a6?auto=format&fit=crop&w=800&q=80",
  },
];

const pricingPlans = [
  {
    title: "Mini Treats",
    price: "Starting at $25",
    features: [
      "6-inch small cakes",
      "Classic flavor options",
      "Simple icing design",
    ],
    button: "Select Base",
    accent: "bg-[var(--color-inverted)] text-white",
    border: "border-soft",
  },
  {
    title: "Celebration Cakes",
    price: "Starting at $65",
    features: [
      "8-10 inch standard cakes",
      "Custom theme designs",
      "Premium fillings",
    ],
    button: "Choose This",
    accent: "bg-[var(--color-outline)] text-white",
    border: "border-soft",
    featured: true,
  },
  {
    title: "Custom Masterpieces",
    price: "Contact for quote",
    features: [
      "Tiered sculptural cakes",
      "Complex sugar art",
      "Special event set-up",
    ],
    button: "Inquire Now",
    accent: "bg-[var(--color-inverted)] text-white",
    border: "border-soft",
  },
];

const Home = () => {
  return (
    <div className="bg-sprinkle text-[var(--color-inverted)]">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-outline)] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--color-outline)] shadow-sm">
              Best Custom Cakes in Town
            </div>
            <div className="space-y-5">
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-[-0.04em] text-[var(--color-inverted)] sm:text-5xl lg:text-6xl">
                Sweet Cakes Made with{" "}
                <span className="text-[var(--color-outline)]">Love</span> by
                Kuya Jon
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                Custom cakes for birthdays, weddings, and special moments. Each
                creation is handcrafted to bring a smile to your face and make
                every celebration unforgettable.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#order"
                className="inline-flex w-full justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--color-primary-container)] sm:w-auto"
              >
                Order Your Cake
              </a>
              <a
                href="#gallery"
                className="inline-flex w-full justify-center rounded-full border border-[var(--color-outline)] bg-[var(--color-surface-container)] px-7 py-3 text-sm font-semibold text-[var(--color-inverted)] transition hover:bg-[var(--color-secondary-container)] sm:w-auto"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-[var(--color-primary)]/20 blur-3xl animate-float-slow" />
            <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-[var(--color-secondary-container)]/90 blur-3xl animate-float" />
            <div className="overflow-hidden rounded-[2rem] border border-soft bg-white shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1516684669134-de6f9c1df0da?auto=format&fit=crop&w=960&q=80"
                alt="Decorated cake on display"
                className="h-96 w-full object-cover sm:h-[24rem] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20"
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-outline)]">
            Our Masterpieces
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-[var(--color-inverted)] sm:text-4xl">
            Peek into our oven of creativity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            Discover a curated selection of cakes made to celebrate every sweet
            moment with color, charm, and handcrafted detail.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {masterpieceItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-soft bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full bg-[var(--color-primary-container)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-outline)]">
                  {item.tag}
                </span>
                <h3 className="font-heading text-xl font-semibold text-[var(--color-inverted)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  A beautiful signature cake topped with delicate flourishes and
                  handcrafted charm.
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-outline)]">
                  <span>★★★★★</span>
                  <span className="text-[var(--color-outline)]">5.0</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-soft bg-white/90 p-6 shadow-soft sm:p-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-end">
            <div className="lg:col-span-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-outline)]">
                Sweet Pricing
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-[var(--color-inverted)] sm:text-4xl">
                A slice of happiness for every budget
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
                Choose the perfect cake package for your celebration, from
                simple treats to handcrafted centerpieces.
              </p>
            </div>

            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-[2rem] border ${plan.border} bg-white p-6 shadow-sm transition ${plan.featured ? "scale-[1.02] border-[var(--color-outline)] shadow-soft" : "hover:-translate-y-1 hover:shadow-lg"}`}
              >
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-outline)] text-[var(--color-outline)]">
                    🎂
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--color-inverted)]">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-[var(--text-muted)]">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold ${plan.accent}`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-soft bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1521302080110-1deee67c3e2e?auto=format&fit=crop&w=900&q=80"
              alt="Baker in kitchen"
              className="h-full min-h-[24rem] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-3xl border border-white bg-white/85 px-4 py-3 text-sm font-semibold text-[var(--color-outline)] shadow-sm">
              Handcrafted with joy
            </div>
          </div>

          <div className="space-y-6 rounded-[2.5rem] border border-soft bg-white p-8 shadow-soft sm:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-outline)]">
                Meet Jonathan
              </p>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-inverted)] sm:text-4xl">
                The heart and hands behind Kuya Jon's Cakes
              </h2>
              <p className="text-base leading-8 text-[var(--text-muted)]">
                Jonathan started baking with a passion for sweet details and
                joyful celebrations. Every cake is made with a warm touch,
                hand-picked flavors, and a story that speaks from the oven.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[var(--color-secondary)] p-5 text-center">
                <p className="text-3xl font-bold text-[var(--color-outline)]">
                  10+
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Years of baking
                </p>
              </div>
              <div className="rounded-3xl bg-[var(--color-secondary)] p-5 text-center">
                <p className="text-3xl font-bold text-[var(--color-outline)]">
                  5k+
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Cakes delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="order"
        className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20"
      >
        <div className="rounded-[2.5rem] border border-soft bg-white/90 p-6 shadow-soft sm:p-10">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-outline)]">
              Start Your Sweet Order
            </p>
            <h2 className="font-heading text-3xl font-bold text-[var(--color-inverted)] sm:text-4xl">
              Tell us about your dream cake and we’ll bake it happen
            </h2>
            <p className="text-base leading-8 text-[var(--text-muted)]">
              Fill in the details below and Jonathan will reach out to craft
              your perfect celebration cake.
            </p>
          </div>

          <form className="mt-10 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[var(--color-outline)]">
                  What’s the occasion?
                </span>
                <input
                  type="text"
                  placeholder="Birthday, Wedding, Anniversary..."
                  className="mt-2 w-full rounded-3xl border border-soft bg-[var(--color-secondary)] px-4 py-3 text-sm text-[var(--color-inverted)] outline-none transition focus:border-[var(--color-outline)] focus:ring-2 focus:ring-[var(--color-outline)]/15"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[var(--color-outline)]">
                  When do you need it?
                </span>
                <input
                  type="date"
                  className="mt-2 w-full rounded-3xl border border-soft bg-[var(--color-secondary)] px-4 py-3 text-sm text-[var(--color-inverted)] outline-none transition focus:border-[var(--color-outline)] focus:ring-2 focus:ring-[var(--color-outline)]/15"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-outline)]">
                Your dream cake details
              </span>
              <textarea
                rows="5"
                placeholder="Describe flavors, colors, and any special characters or themes..."
                className="mt-2 w-full rounded-[1.75rem] border border-soft bg-[var(--color-secondary)] px-4 py-4 text-sm text-[var(--color-inverted)] outline-none transition focus:border-[var(--color-outline)] focus:ring-2 focus:ring-[var(--color-outline)]/15"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-[var(--color-outline)] px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--color-outline)]/90"
            >
              Send My Cake Order 🍰
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-soft bg-white p-6 text-center shadow-soft">
            <p className="text-3xl">💬</p>
            <h3 className="mt-4 font-heading text-xl font-semibold text-[var(--color-inverted)]">
              Messenger
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Chat with us directly on Facebook.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex rounded-full bg-[var(--color-outline)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-outline)]/90"
            >
              Send Message
            </a>
          </div>
          <div className="rounded-[2rem] border border-soft bg-white p-6 text-center shadow-soft">
            <p className="text-3xl">📞</p>
            <h3 className="mt-4 font-heading text-xl font-semibold text-[var(--color-inverted)]">
              Phone Number
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Call or SMS for urgent orders.
            </p>
            <p className="mt-4 text-sm font-semibold text-[var(--color-outline)]">
              +1 (555) 123-CAKE
            </p>
          </div>
          <div className="rounded-[2rem] border border-soft bg-white p-6 text-center shadow-soft">
            <p className="text-3xl">📍</p>
            <h3 className="mt-4 font-heading text-xl font-semibold text-[var(--color-inverted)]">
              Our Location
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Visit our boutique studio in Manila, Philippines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
