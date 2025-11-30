"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
    { id: "starters", name: "Entrées" },
    { id: "main", name: "Plats Principaux" },
    { id: "thai", name: "Spécialités Thaï" },
    { id: "desserts", name: "Desserts" },
];

const menuItems = {
    starters: [
        { name: "Rouleaux de Printemps", price: "8.50€", desc: "Légumes croquants, vermicelles, sauce aigre-douce." },
        { name: "Dim Sum Variés", price: "12.00€", desc: "Panier de 6 pièces : crevettes, porc, légumes." },
        { name: "Potage Pékinois", price: "9.00€", desc: "Soupe aigre-piquante traditionnelle." },
        { name: "Salade de Papaye Verte", price: "11.50€", desc: "Épicée, cacahuètes, tomates cerises, haricots verts." },
    ],
    main: [
        { name: "Canard Laqué de Pékin", price: "24.00€", desc: "Servi avec crêpes, oignons verts et sauce hoisin." },
        { name: "Poulet Gong Bao", price: "18.50€", desc: "Dés de poulet, cacahuètes, piments secs, poivre de Sichuan." },
        { name: "Boeuf au Poivre Noir", price: "21.00€", desc: "Tendre boeuf sauté sur plaque chauffante." },
        { name: "Crevettes Sauté au Basilic", price: "22.50€", desc: "Crevettes géantes, légumes frais, basilic thaï." },
    ],
    thai: [
        { name: "Pad Thaï Royal", price: "19.50€", desc: "Nouilles de riz, crevettes, tofu, oeuf, cacahuètes." },
        { name: "Curry Vert au Poulet", price: "18.00€", desc: "Lait de coco, bambou, basilic, piments verts." },
        { name: "Tom Yum Kung", price: "20.00€", desc: "Soupe de crevettes à la citronnelle et galanga." },
    ],
    desserts: [
        { name: "Mangue Fraîche & Riz Gluant", price: "10.00€", desc: "Au lait de coco tiède." },
        { name: "Perles de Coco", price: "7.50€", desc: "2 pièces, vapeur." },
        { name: "Glace au Thé Vert Matcha", price: "6.00€", desc: "Artisanale." },
    ],
};

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("starters");

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                        Notre <span className="text-primary">Carte</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Une sélection raffinée de saveurs asiatiques.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-6 py-3 rounded-full text-lg font-medium transition-all duration-300",
                                activeCategory === cat.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto"
                >
                    {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
                        <div key={idx} className="group flex justify-between items-start border-b border-white/5 pb-6">
                            <div className="pr-4">
                                <h3 className="text-xl font-serif font-bold text-white group-hover:text-secondary transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-neutral-400 text-sm mt-2">{item.desc}</p>
                            </div>
                            <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
