import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import logo from "@/assets/menu/logo.jpg";
import hero from "@/assets/menu/hero.jpg";
import decor from "@/assets/menu/footer-decor.jpg";
import p1 from "@/assets/menu/p1.jpg";
import p2 from "@/assets/menu/p2.jpg";
import p3 from "@/assets/menu/p3.jpg";
import p4 from "@/assets/menu/p4.jpg";
import p5 from "@/assets/menu/p5.jpg";
import p6 from "@/assets/menu/p6.jpg";
import p7 from "@/assets/menu/p7.jpg";
import p8 from "@/assets/menu/p8.jpg";
import p9 from "@/assets/menu/p9.jpg";
import p10 from "@/assets/menu/p10.jpg";
import p11 from "@/assets/menu/p11.jpg";
import p12 from "@/assets/menu/p12.jpg";
import b1 from "@/assets/menu/b1.jpg";
import b2 from "@/assets/menu/b2.jpg";
import b3 from "@/assets/menu/b3.jpg";
import b4 from "@/assets/menu/b4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Menu — Pizza House" },
      { name: "description", content: "Browse authentic Italian pizzas at Pizza House." },
      { property: "og:title", content: "Our Menu — Pizza House" },
      { property: "og:description", content: "Browse authentic Italian pizzas at Pizza House." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type P = [string, string, string, string?];
const pages: P[][] = [
  [[p1, "Margherita Pizza", "8.50", "20%"], [p2, "Pepperoni Pizza", "9.00", "15%"], [p3, "BBQ Chicken Pizza", "9.50"], [p4, "Four Cheese Pizza", "9.00", "10%"],
  [p5, "Veggie Pizza", "8.00"], [p6, "Meat Lovers Pizza", "10.00", "20%"], [p7, "Hawaiian Pizza", "9.00"], [p8, "Buffalo Chicken Pizza", "9.50", "15%"],
  [p9, "Truffle Mushroom Pizza", "10.00", "10%"], [p10, "Mediterranean Pizza", "9.00"], [p11, "Spicy Italian Pizza", "9.50", "15%"], [p12, "Seafood Pizza", "11.00"]],
  [[p11, "Diavola Pizza", "9.50", "10%"], [p4, "Bianca Pizza", "8.50"], [p8, "Pepper Chicken Pizza", "9.50"], [p2, "Salami Pizza", "9.00", "20%"],
  [p10, "Garden Pizza", "8.50"], [p6, "Capricciosa Pizza", "10.00"], [p12, "Shrimp Pizza", "11.50", "15%"], [p9, "Porcini Pizza", "10.50"],
  [p5, "Olive Pizza", "8.00"], [p3, "Smoky BBQ Pizza", "9.50", "10%"], [p1, "Caprese Pizza", "8.50"], [p7, "Prosciutto Pizza", "10.00"]],
  [[p6, "Quattro Carni Pizza", "11.00"], [p1, "Basil Pizza", "8.00", "15%"], [p12, "Frutti di Mare Pizza", "12.00"], [p9, "Funghi Pizza", "9.00"],
  [p3, "Tikka Chicken Pizza", "9.50", "20%"], [p10, "Greek Pizza", "9.00"], [p2, "Double Pepperoni Pizza", "10.00"], [p11, "Calabrese Pizza", "9.50", "10%"],
  [p4, "Gorgonzola Pizza", "9.50"], [p7, "Tropical Pizza", "9.00", "15%"], [p8, "Hot Wings Pizza", "9.50"], [p5, "Primavera Pizza", "8.50"]],
];
const cats = [["Classic Pizza", 12], ["Special Pizza", 18], ["Chicken Pizza", 10], ["Vegetarian Pizza", 8], ["Seafood Pizza", 6], ["Desserts", 4], ["Drinks", 8]];
const best = [[b1, "Margherita Pizza", "8.50"], [b2, "Pepperoni Pizza", "9.00"], [b3, "BBQ Chicken Pizza", "9.50"], [b4, "Truffle Mushroom Pizza", "10.00"]];
const tags = ["Pizza", "Italian", "Cheese", "Chicken", "Mushroom", "Pepperoni", "Seafood", "Vegetarian", "Spicy", "Dessert", "Drinks"];

function Logo() {
  return (
    <div className="flex flex-col items-center leading-none">
      <img src={logo} alt="" className="h-11 w-auto mix-blend-multiply" />
      <span className="font-display text-2xl uppercase">Pizza House</span>
      <span className="mt-1 text-[9px] uppercase tracking-wide">Italian Food</span>
      <span className="mt-1 flex h-1.5 w-[72px]"><i className="flex-1 bg-flag-green" /><i className="flex-1 bg-card" /><i className="flex-1 bg-destructive" /></span>
    </div>
  );
}

function Index() {
  const [page, setPage] = useState(0);
  const go = (n: number) => { setPage(n); window.scrollTo({ top: 250, behavior: "smooth" }); };
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section className="relative">
        <img src={hero} alt="" className="h-48 w-full object-cover sm:h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:left-[16%]">
          <h1 className="font-display text-3xl font-light uppercase sm:text-4xl">Our Menu</h1>
          <p className="mt-2 text-xs sm:text-sm">
            <Link to="/">Home</Link> <span className="mx-3">&gt;</span> Menu
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_230px]">
        <div>
          <div className="mb-3 flex items-center justify-between text-xs">
            <span>Showing {page * 12 + 1}–{page * 12 + 12} of 36 results</span>
            <span className="flex items-center gap-6">Default Sorting <ChevronDown className="h-3 w-3" /></span>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {(pages[page] ?? []).map(([img, name, price, save]) => (
              <div key={name} className="relative text-center">
                {save && <span className="absolute right-0 top-0 bg-primary px-2 py-0.5 text-[11px] text-primary-foreground">{save} Save</span>}
                <img src={img} alt={name} className="aspect-[155/155] w-full object-cover" />
                <h3 className="mt-3 font-serif text-base sm:text-lg">{name}</h3>
                <p className="mt-2 text-sm sm:text-base">$ {price}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-md border-t border-foreground/40" />
          <div className="mt-6 flex items-center justify-center gap-8 text-sm">
            <button aria-label="Previous" disabled={page === 0} onClick={() => go(page - 1)} className="disabled:opacity-30">⟵</button>
            {[0, 1, 2].map((n) => (
              <button key={n} onClick={() => go(n)} className={n === page ? "font-bold" : "text-muted-foreground"}>0{n + 1}</button>
            ))}
            <button aria-label="Next" disabled={page === 2} onClick={() => go(page + 1)} className="disabled:opacity-30">⟶</button>
          </div>
        </div>

        <aside className="h-fit rounded border border-border p-6">
          <h2 className="font-display text-2xl font-light uppercase">Categories</h2>
          <ul className="mt-4 space-y-3 text-xs uppercase">
            {cats.map(([c, n]) => <li key={c} className="flex justify-between"><span>{c}</span><span>{n}</span></li>)}
          </ul>
          <hr className="my-7 border-border" />
          <h2 className="font-display text-2xl font-light uppercase">Best Sellers</h2>
          <ul className="mt-5 space-y-3">
            {best.map(([img, n, p]) => (
              <li key={n} className="flex items-start gap-4 text-xs">
                <img src={img} alt={n} className="h-15 w-16 shrink-0 object-cover" />
                <div className="pt-3"><p>{n}</p><p className="mt-2">$ {p}</p></div>
              </li>
            ))}
          </ul>
          <hr className="my-7 border-border" />
          <h2 className="font-display text-2xl font-light uppercase">Tags</h2>
          <ul className="mt-4 flex w-full min-w-0 flex-wrap gap-y-2 text-[11px]">
            {tags.map((t, i) => (
              <li key={t} className="whitespace-nowrap">
                {t}
                {i < tags.length - 1 && <span className="mx-2 text-muted-foreground">|</span>}
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <footer className="relative overflow-hidden bg-muted">
        <img src={decor} alt="" className="pointer-events-none absolute right-0 top-0 hidden h-64 md:block" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-6 md:grid-cols-[280px_1fr]">
          <div className="md:border-r md:border-border">
            <div className="w-fit"><Logo /></div>
            <p className="mt-2 text-sm leading-relaxed">Authentic Italian pizzas made with<br />fresh ingredients and a lot of love.</p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Youtube, Phone].map((I, i) => (
                <span key={i} className="grid h-8 w-8 place-items-center rounded-full border border-foreground"><I className="h-4 w-4" /></span>
              ))}
            </div>
          </div>
          <div className="md:pt-10">
            <h2 className="font-display text-2xl font-light uppercase">Contact Us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-4"><MapPin className="h-4 w-4" />123 Pizza Street, New York, NY 10001</li>
              <li className="flex gap-4"><Phone className="h-4 w-4" />+1 234 567 890</li>
              <li className="flex gap-4"><Mail className="h-4 w-4" />info@pizzahouse.com</li>
              <li className="flex gap-4"><Clock className="h-4 w-4" />Mon - Sun: 11:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="relative mx-auto mt-4 flex max-w-6xl flex-col gap-3 border-t border-border px-6 py-6 text-xs sm:flex-row sm:justify-between">
          <span>© 2024 Pizza House. All Rights Reserved.</span>
          <span>Privacy Policy <span className="mx-3">|</span> Terms of Service <span className="mx-3">|</span> Cookie Policy</span>
        </div>
      </footer>
    </div>
  );
}
