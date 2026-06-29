import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Cake, Sparkles, DollarSign, RefreshCw, Check } from "lucide-react";

const spongeColors = {
  Chocolate: "#4A2F1D",
  Vanilla: "#FFFDEB",
  "Red Velvet": "#B32233",
  Carrot: "#E88D43",
  Lemon: "#FFF09C",
};

const frostingColors = {
  Buttercream: "#FAF8F2",
  Fondant: "#FFFFFF",
  "Whipped Cream": "#F2EBE1",
  "Chocolate Glaze": "#3A1E0E",
};

const Pricing = () => {
  const [searchParams] = useSearchParams();

  const [occasion, setOccasion] = useState("Birthday");
  const [shape, setShape] = useState(() => searchParams.get("shape") || "Circle");
  const [tiers, setTiers] = useState(() => {
    const p = searchParams.get("tiers");
    return p ? parseInt(p, 10) : 1;
  });
  const [size, setSize] = useState(() => searchParams.get("size") || "8 inch");
  const [sponge, setSponge] = useState(() => {
    const p = searchParams.get("flavor");
    return p && spongeColors[p] ? p : "Chocolate";
  });
  const [frosting, setFrosting] = useState(() => {
    const p = searchParams.get("frosting");
    return p && frostingColors[p] ? p : "Buttercream";
  });
  const [filling, setFilling] = useState("Chocolate Ganache");
  const [extras, setExtras] = useState([]);
  const [cakeText, setCakeText] = useState("");

  const occasions = ["Birthday", "Wedding", "Anniversary", "Baby Shower", "Graduation", "Other"];
  const shapes = ["Circle", "Square", "Heart"];
  const sizes = ["6 inch", "8 inch", "10 inch", "12 inch"];
  const sponges = ["Chocolate", "Vanilla", "Red Velvet", "Carrot", "Lemon"];
  const frostings = ["Buttercream", "Fondant", "Whipped Cream", "Chocolate Glaze"];
  const fillings = ["Chocolate Ganache", "Salted Caramel", "Fresh Strawberries", "Cream Cheese", "Custard", "Raspberry Jam"];

  const extrasList = [
    { id: "gold-leaf", name: "Edible Gold Leaf", price: 300, emoji: "✨" },
    { id: "flowers", name: "Fresh Flowers", price: 400, emoji: "🌸" },
    { id: "topper", name: "Custom Topper", price: 200, emoji: "👑" },
    { id: "sprinkles", name: "Glitter Sprinkles", price: 80, emoji: "🎊" },
  ];

  const toggleExtra = (id) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setOccasion("Birthday");
    setShape("Circle");
    setTiers(1);
    setSize("8 inch");
    setSponge("Chocolate");
    setFrosting("Buttercream");
    setFilling("Chocolate Ganache");
    setExtras([]);
    setCakeText("");
  };

  // Price Calculation (in Philippine Peso)
  const priceBreakdown = () => {
    let base = 450;
    if (size === "8 inch") base = 850;
    if (size === "10 inch") base = 1400;
    if (size === "12 inch") base = 2000;

    let shapeAdd = 0;
    if (shape === "Square") shapeAdd = 100;
    if (shape === "Heart") shapeAdd = 200;

    let tiersMultiplier = 1;
    if (tiers === 2) tiersMultiplier = 1.6;
    if (tiers === 3) tiersMultiplier = 2.2;

    let subtotal = (base + shapeAdd) * tiersMultiplier;

    let flavorAdd = 0;
    if (sponge === "Red Velvet") flavorAdd = 200;
    if (sponge === "Carrot") flavorAdd = 250;
    if (sponge === "Lemon") flavorAdd = 150;

    let fillingAdd = 0;
    if (filling === "Fresh Strawberries") fillingAdd = 150;
    if (filling === "Salted Caramel") fillingAdd = 100;

    let frostingAdd = 0;
    if (frosting === "Fondant") frostingAdd = 300;
    if (frosting === "Chocolate Glaze") frostingAdd = 150;

    const extrasTotal = extras.reduce((sum, id) => {
      const item = extrasList.find((e) => e.id === id);
      return sum + (item ? item.price : 0);
    }, 0);

    const total = Math.round(subtotal + flavorAdd + fillingAdd + frostingAdd + extrasTotal);

    return {
      base: Math.round((base + shapeAdd) * tiersMultiplier),
      flavor: flavorAdd,
      filling: fillingAdd,
      frosting: frostingAdd,
      extras: extrasTotal,
      total,
    };
  };

  const breakdown = priceBreakdown();
  const currentFrostingColor = frostingColors[frosting] || "#ffffff";
  const currentSpongeColor = spongeColors[sponge] || "#4A2F1D";

  return (
    <div className="bg-[#FBF9F1] min-h-screen py-12 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Price Estimator
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#864e5a] mt-3">
            Design Your Dream Cake
          </h1>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-base sm:text-lg">
            Pick your options and get an instant price estimate.{" "}
            <span className="font-semibold text-[#864e5a]">No signup required</span> — just explore!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─── LEFT: Live Cake Canvas + Price Summary ─── */}
          {/* FIX 1: order-2 on mobile so the options panel appears first */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 lg:sticky lg:top-24">

            {/* Cake Visual */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-soft shadow-soft">
              <h3 className="font-heading font-bold text-[#864e5a] mb-6 text-base flex items-center gap-2">
                <Sparkles size={16} className="text-[#fed9b8] fill-[#fed9b8]" />
                Live Preview
              </h3>

              <div className="relative w-full flex flex-col justify-end items-center min-h-[280px] bg-gradient-to-b from-[#fed9b8]/5 to-transparent rounded-2xl pb-8">
                {/* Sprinkles overlay */}
                {extras.includes("sprinkles") && (
                  <div className="absolute inset-0 opacity-30 bg-sprinkle rounded-2xl pointer-events-none"></div>
                )}

                <div className="flex flex-col items-center justify-end w-full relative">
                  {/* Tier 3 */}
                  {tiers >= 3 && (
                    <div
                      style={{ backgroundColor: currentFrostingColor, borderColor: currentSpongeColor === "#4A2F1D" ? "#4A2F1D" : "#fed9b8" }}
                      className="w-20 h-12 rounded-t-lg shadow-md border-b-4 border-dashed relative z-30 transition-all duration-500 flex flex-col justify-end"
                    >
                      {extras.includes("flowers") && <div className="absolute -top-3 -right-2 text-base">🌸</div>}
                      <div style={{ backgroundColor: currentSpongeColor }} className="w-full h-1 opacity-70"></div>
                    </div>
                  )}

                  {/* Tier 2 */}
                  {tiers >= 2 && (
                    <div
                      style={{ backgroundColor: currentFrostingColor, borderColor: currentSpongeColor === "#4A2F1D" ? "#4A2F1D" : "#fed9b8" }}
                      className="w-32 h-14 rounded-t-lg shadow-md border-b-4 border-dashed relative z-20 transition-all duration-500 flex flex-col justify-end"
                    >
                      {extras.includes("flowers") && <div className="absolute -top-2 -left-2 text-base">🌸</div>}
                      <div style={{ backgroundColor: currentSpongeColor }} className="w-full h-1.5 opacity-70"></div>
                    </div>
                  )}

                  {/* Tier 1 (Base) */}
                  <div
                    style={{ backgroundColor: currentFrostingColor, borderColor: currentSpongeColor === "#4A2F1D" ? "#4A2F1D" : "#fed9b8" }}
                    className={`h-20 rounded-t-xl shadow-lg border-b-4 border-dashed relative z-10 transition-all duration-500 flex flex-col justify-end ${
                      shape === "Square" ? "w-44 rounded-t-none" : "w-44"
                    }`}
                  >
                    {cakeText && (
                      <div className="absolute inset-0 flex items-center justify-center px-3">
                        <span className="font-heading font-bold text-xs text-[#864e5a] bg-white/80 backdrop-blur-xs py-0.5 px-2 rounded-md shadow-xs max-w-full truncate">
                          {cakeText}
                        </span>
                      </div>
                    )}
                    {extras.includes("gold-leaf") && (
                      <>
                        <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full blur-[1px] animate-pulse"></div>
                        <div className="absolute top-9 left-5 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-pulse"></div>
                      </>
                    )}
                    {extras.includes("flowers") && <div className="absolute -top-2 -right-3 text-lg">🌹</div>}
                    <div style={{ backgroundColor: currentSpongeColor }} className="w-full h-2 opacity-70"></div>
                  </div>

                  {/* Custom Topper */}
                  {extras.includes("topper") && (
                    <div className="absolute -top-8 z-40 text-2xl animate-float-slow">👑</div>
                  )}
                </div>

                {/* Stand */}
                <div className="w-52 h-2.5 bg-gray-300 rounded-full shadow-md z-5 mt-0"></div>
                <div className="w-20 h-3 bg-gray-400 rounded-b-xl shadow-md"></div>
              </div>

              {/* Config summary pills */}
              <div className="flex flex-wrap gap-2 mt-5 justify-center">
                <span className="text-xs bg-[#ffb7c5]/20 text-[#864e5a] px-2.5 py-1 rounded-full font-semibold border border-[#ffb7c5]/30">{tiers} Tier{tiers > 1 ? "s" : ""}</span>
                <span className="text-xs bg-[#fed9b8]/30 text-[#74593f] px-2.5 py-1 rounded-full font-semibold border border-[#fed9b8]/40">{shape}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-semibold">{size}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-semibold">{sponge}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-semibold">{frosting}</span>
              </div>
            </div>

            {/* Price Breakdown Card */}
            <div className="bg-white p-6 rounded-3xl border border-soft shadow-soft space-y-3">
              <h3 className="font-heading font-bold text-[#864e5a] flex items-center gap-2 text-base">
                <DollarSign size={16} /> Price Breakdown
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Base Cake ({size}, {tiers} tier{tiers > 1 ? "s" : ""}, {shape})</span>
                  <span className="font-semibold">₱{breakdown.base.toLocaleString()}</span>
                </div>
                {breakdown.flavor > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>{sponge} Sponge</span>
                    <span className="font-semibold">+₱{breakdown.flavor.toLocaleString()}</span>
                  </div>
                )}
                {breakdown.filling > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>{filling}</span>
                    <span className="font-semibold">+₱{breakdown.filling.toLocaleString()}</span>
                  </div>
                )}
                {breakdown.frosting > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>{frosting}</span>
                    <span className="font-semibold">+₱{breakdown.frosting.toLocaleString()}</span>
                  </div>
                )}
                {extras.map((id) => {
                  const item = extrasList.find((e) => e.id === id);
                  return item ? (
                    <div key={id} className="flex justify-between text-gray-600">
                      <span>{item.emoji} {item.name}</span>
                      <span className="font-semibold">+₱{item.price.toLocaleString()}</span>
                    </div>
                  ) : null;
                })}
              </div>

              <div className="border-t border-[#eeded8] pt-3 flex justify-between items-center">
                <span className="font-heading font-bold text-gray-700">Estimated Total</span>
                <span className="font-extrabold text-2xl text-[#74593f]">₱{breakdown.total.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-gray-400 text-center leading-tight">
                This is an estimate only. Final pricing may vary based on complexity and custom design work.
              </p>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="w-full py-3 rounded-2xl border-2 border-dashed border-[#eeded8] text-[#864e5a] font-semibold text-sm hover:bg-[#ffb7c5]/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <RefreshCw size={15} /> Reset All Options
            </button>
          </div>

          {/* ─── RIGHT: Options Panel ─── */}
          {/* FIX 1 cont: order-1 on mobile so this shows first */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-soft shadow-soft space-y-8 order-1 lg:order-2">

            {/* Occasion */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Occasion</h2>
              {/* FIX 2: 2 cols on mobile, 3 on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      occasion === occ
                        ? "bg-[#864e5a] text-white border-transparent shadow-md"
                        : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Shape & Size */}
            <section className="space-y-4">
              <h2 className="font-heading text-lg font-bold text-gray-800">Shape & Size</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Shape</label>
                  <div className="grid grid-cols-3 gap-2">
                    {shapes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setShape(s)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          shape === s
                            ? "bg-[#864e5a] text-white border-transparent"
                            : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                        }`}
                      >
                        {s === "Circle" ? "⭕" : s === "Square" ? "🔲" : "❤️"}
                        <span className="block text-[10px] mt-0.5">{s}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Size</label>
                  <div className="grid grid-cols-2 gap-2">
                    {sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSize(sz)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          size === sz
                            ? "bg-[#864e5a] text-white border-transparent"
                            : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Tiers */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Number of Tiers</h2>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTiers(t)}
                 
                    className={`py-3 sm:py-5 rounded-2xl font-bold flex flex-col items-center justify-center gap-1.5 border-2 transition-all cursor-pointer ${
                      tiers === t
                        ? "bg-[#864e5a] text-white border-transparent shadow-md scale-105"
                        : "bg-gray-50 text-[#5c484b] border-gray-200 hover:border-[#ffb7c5] hover:bg-[#ffb7c5]/10"
                    }`}
                  >
                    <Cake size={22} />
                    <span className="text-xs">{t} Tier{t > 1 ? "s" : ""}</span>
                  </button>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Sponge Flavor */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Sponge Flavor</h2>
              {/* FIX 4: 1 col on mobile, 2 on sm, 3 on lg */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {sponges.map((sp) => (
                  <button
                    key={sp}
                    onClick={() => setSponge(sp)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer ${
                      sponge === sp
                        ? "bg-[#864e5a] text-white border-transparent"
                        : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                    }`}
                  >
                    <span
                      style={{ backgroundColor: spongeColors[sp] }}
                      className="w-3 h-3 rounded-full border border-gray-300 shrink-0"
                    ></span>
                    {sp}
                  </button>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Frosting */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Frosting Style</h2>
              <div className="grid grid-cols-2 gap-2">
                {frostings.map((fr) => (
                  <button
                    key={fr}
                    onClick={() => setFrosting(fr)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer ${
                      frosting === fr
                        ? "bg-[#864e5a] text-white border-transparent"
                        : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                    }`}
                  >
                    <span
                      style={{ backgroundColor: frostingColors[fr], border: "1px solid #d1d5db" }}
                      className="w-3 h-3 rounded-full shrink-0"
                    ></span>
                    {fr}
                  </button>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Filling */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Premium Filling</h2>
              {/* FIX 4 cont: same responsive grid treatment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {fillings.map((fl) => (
                  <button
                    key={fl}
                    onClick={() => setFilling(fl)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-left cursor-pointer ${
                      filling === fl
                        ? "bg-[#864e5a] text-white border-transparent"
                        : "bg-gray-50 text-[#5c484b] border-gray-200 hover:bg-[#ffb7c5]/10"
                    }`}
                  >
                    {fl}
                  </button>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Extras */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">Add-On Extras</h2>
              {/* FIX 5: 1 col on mobile, 2 on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extrasList.map((item) => {
                  const selected = extras.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleExtra(item.id)}
                      className={`p-3 sm:p-4 rounded-2xl border-2 text-left flex items-start justify-between gap-2 cursor-pointer transition-all duration-200 ${
                        selected
                          ? "bg-[#ffb7c5]/15 border-[#864e5a] text-[#864e5a]"
                          : "bg-gray-50 border-gray-200 hover:border-[#ffb7c5] text-gray-700"
                      }`}
                    >
                      <div>
                        <span className="text-lg block mb-1">{item.emoji}</span>
                        <span className="text-xs font-bold block">{item.name}</span>
                        <span className="text-[10px] text-gray-400 font-semibold mt-0.5 block">+₱{item.price.toLocaleString()}</span>
                      </div>
                      {selected && (
                        <div className="w-5 h-5 bg-[#864e5a] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Custom Text */}
            <section className="space-y-3">
              <h2 className="font-heading text-lg font-bold text-gray-800">
                Message on Cake <span className="text-gray-400 font-normal text-sm">(Optional)</span>
              </h2>
              <input
                type="text"
                maxLength={25}
                value={cakeText}
                onChange={(e) => setCakeText(e.target.value)}
                placeholder="e.g. Happy Birthday Jon! 🎉"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm outline-none transition-all focus:border-[#ffb7c5] focus:bg-white"
              />
              <p className="text-[11px] text-gray-400">{cakeText.length}/25 characters</p>
            </section>

          </div>
        </div>

        {/* Contact CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#864e5a] to-[#74593f] rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden">
          <div className="absolute -top-8 -right-8 text-8xl opacity-10 select-none">🎂</div>
          <div className="absolute -bottom-8 -left-8 text-8xl opacity-10 select-none">✨</div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2">Ready to Order?</h2>
          <p className="text-[#ffb7c5] mb-6 max-w-md mx-auto text-sm sm:text-base">
            Like what you see? Reach out to Kuya Jon directly to place your custom cake order!
          </p>
          {/* FIX 6: stack vertically on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <a
              href="https://www.facebook.com/jonathan.mandariaga"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              📘 Message on Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              📸 DM on Instagram
            </a>
            <a
              href="tel:+63973998166"
              className="flex items-center justify-center gap-2 bg-[#fed9b8] text-[#74593f] hover:bg-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              📞 Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;