import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant Ambiance"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Chez <span className="text-primary">Zhang</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            L&apos;excellence de la cuisine chinoise et thaïlandaise dans un cadre d&apos;exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button
              size="lg"
              className="text-lg px-12"
              data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
              data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
            >
              Commander
            </Button>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="text-lg px-12">
                Voir le Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
              alt="Chef cooking"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
              </div>
              <p className="font-serif text-2xl">Une cuisine authentique</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Notre <span className="text-primary">Passion</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Situé au cœur de Bereldange, Chez Zhang vous invite à un voyage culinaire inoubliable.
              Nos chefs passionnés sélectionnent les meilleurs ingrédients pour vous offrir une fusion
              parfaite entre les traditions chinoises millénaires et les saveurs exotiques de la Thaïlande.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Que ce soit pour un déjeuner d&apos;affaires ou un dîner romantique, notre cadre élégant
              et notre service attentionné feront de votre repas un moment d&apos;exception.
            </p>
            <Link href="/menu" className="inline-flex items-center gap-2 text-primary hover:text-red-400 transition-colors font-medium text-lg mt-4">
              Découvrir notre carte <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="bg-neutral-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nos <span className="text-secondary">Spécialités</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Des plats signatures préparés avec soin pour éveiller vos sens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Canard Laqué",
                desc: "Croustillant et fondant, servi avec ses crêpes fines.",
                img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2029&auto=format&fit=crop"
              },
              {
                title: "Pad Thaï Royal",
                desc: "Nouilles de riz sautées aux crevettes tigrées et cacahuètes.",
                img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1979&auto=format&fit=crop"
              },
              {
                title: "Dim Sum Maison",
                desc: "Assortiment de vapeurs faits main chaque matin.",
                img: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-80 rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
