import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "CHEZ ZHANG | Restaurant Chinois et Thaïlandais à Bereldange",
    description: "Restaurant Chez Zhang à Bereldange : cuisine chinoise et thaïlandaise authentique. Sur place, à emporter ou livraison rapide. Réservez dès maintenant !",
    keywords: "restaurant Bereldange, cuisine chinoise Luxembourg, cuisine thaïlandaise, canard laqué, pad thaï, dim sum, livraison restaurant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
