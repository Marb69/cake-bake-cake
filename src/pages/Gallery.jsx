import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Heart } from "lucide-react";


import { galleryItems } from "../data/gallery";



const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCake, setSelectedCake] = useState(null);
  const [likes, setLikes] = useState({});

  const categories = ["All", "Birthday", "Celebration", "Cupcake"];

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.flavor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCustomizeClick = (cake) => {
    // Navigate to pricing page and pass the cake configuration as state
    navigate(`/pricing?preset=${cake.id}&tiers=${cake.tiers}&shape=${cake.shape}&flavor=${cake.flavor}&frosting=${cake.frosting}`);
    setSelectedCake(null);
  };

  return (
    <div className="bg-[#FBF9F1] min-h-screen py-12 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#864e5a] bg-[#ffb7c5]/30 rounded-full">
            Our Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#864e5a] mt-3">
            Oven-Fresh Inspirations
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base sm:text-lg">
            Explore our collections of hand-crafted birthday, wedding, and novelty cakes. Let them inspire your custom design.
          </p>
        </div>

        {/* Filters & Search controls */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-10 bg-white p-5 rounded-3xl border border-soft shadow-soft">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#864e5a] text-white shadow-md"
                    : "bg-[#eeded8]/40 text-[#5c484b] hover:bg-[#eeded8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search flavors, cake names..."
              className="w-full pl-11 pr-5 py-2.5 rounded-full border border-gray-200 bg-gray-50/50 outline-none text-sm transition-all focus:border-[#ffb7c5] focus:bg-white"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-soft shadow-soft">
            <p className="text-gray-500 text-lg">No cake masterpieces match your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-[#864e5a] font-bold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCake(item)}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-gray-150">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Category label */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-bold text-[#864e5a] shadow-xs">
                    {item.category}
                  </div>
                  {/* Like Button */}
                  <button
                    onClick={(e) => handleLike(e, item.id)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-[#864e5a] shadow-xs transition-colors hover:bg-white"
                  >
                    <Heart size={16} className={likes[item.id] ? "fill-[#864e5a]" : ""} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading text-xl font-bold text-[#864e5a] group-hover:text-[#9e5f6e] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                        ★ {item.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
                    <div>
                      <span className="text-xs text-gray-400 block uppercase tracking-wider font-semibold">
                        Price Range
                      </span>
                      <span className="font-bold text-[#74593f]">{item.priceRange}</span>
                    </div>
                    <span className="text-[#864e5a] font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Overlay */}
        {selectedCake && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div
              className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCake(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center text-gray-500 hover:text-black shadow-md cursor-pointer transition-transform hover:scale-105"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Cake Image side */}
                <div className="md:col-span-5 bg-gray-100 relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
                  <img
                    src={selectedCake.image}
                    alt={selectedCake.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#864e5a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {selectedCake.category}
                  </div>
                </div>

                {/* Info side */}
                <div className="md:col-span-7 p-8 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#864e5a] leading-tight">
                        {selectedCake.title}
                      </h2>
                      <div className="flex gap-3 items-center mt-2 text-sm text-gray-500">
                        <span>★ {selectedCake.rating} Customer Rating</span>
                        <span>•</span>
                        <span>{selectedCake.shape} Shape</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Description</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{selectedCake.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Flavor Profile & Filling</h4>
                      <p className="text-gray-700 text-sm leading-relaxed bg-[#fed9b8]/20 p-3.5 rounded-xl border border-[#fed9b8]/30">
                        {selectedCake.details}
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-3 gap-3 border-t border-b border-gray-100 py-3.5">
                      <div className="text-center">
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Tiers</span>
                        <span className="font-bold text-[#864e5a] text-sm">{selectedCake.tiers} Tier(s)</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Flavor</span>
                        <span className="font-bold text-[#74593f] text-sm">{selectedCake.flavor}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Frosting</span>
                        <span className="font-bold text-[#864e5a] text-sm">{selectedCake.frosting}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 border-t border-gray-100 pt-6">
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-semibold block">Estimated Price</span>
                      <span className="text-2xl font-extrabold text-[#74593f]">{selectedCake.priceRange}</span>
                    </div>

                    <button
                      onClick={() => handleCustomizeClick(selectedCake)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#864e5a] text-white rounded-full font-heading font-semibold hover:bg-[#9e5f6e] transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      Customize This Cake <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;