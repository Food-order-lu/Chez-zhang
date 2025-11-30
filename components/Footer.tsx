import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            Chez <span className="text-primary">Zhang</span>
                        </h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Une expérience culinaire authentique alliant les saveurs de la Chine et de la Thaïlande dans un cadre élégant.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>2 rue de bridel, L-7217 Bereldange Walferdange</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+352 26 33 17 10</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Horaires</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                <span>Ouvert 7j/7</span>
                            </li>
                            <li>Midi : 11h45 - 14h30</li>
                            <li>Soir : 18h00 - 22h30</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-neutral-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chez Zhang. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
