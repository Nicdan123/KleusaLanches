import React from "react";
import { Star, MapPin, ChevronRight } from "lucide-react";

// ===== IMPORTAÇÕES DAS IMAGENS =====
import lanche from "../src/assets/Lanche.webp";
import mega from "../src/assets/mega.webp";
import cheddar from "../src/assets/Cheddar.webp";
import smash from "../src/assets/smash.webp";
import gigante from "../src/assets/Gigante Kleusa.png";

function PaginaInicial() {
  return (
    <main
      className="
        text-zinc-800
        bg-gradient-to-b
        from-[#FFE29F]
        via-[#FF9A3C]
        to-[#F97316]
      "
    >
      {/* ==========================================================
                          COMPONENTE: HERO
      =========================================================== */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full">
              🍔 Hambúrguer Artesanal
            </span>

            <h1 className="text-6xl font-black mt-6 leading-tight">
              O Hambúrguer que vai conquistar seu paladar.
            </h1>

            <p className="mt-6 text-xl text-zinc-700">
              Ingredientes selecionados, carnes artesanais e muito sabor. Venha
              conhecer a melhor hamburgueria da cidade.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                Fazer Pedido
                <ChevronRight />
              </button>

              <button className="border-2 border-zinc-700 px-8 py-4 rounded-xl font-bold hover:bg-white transition">
                Ver Cardápio
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-210 h-160 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src={lanche}
                alt="Hambúrguer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
                        COMPONENTE: DESTAQUES
      =========================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-black text-center">
            Lanches em Destaque
          </h2>

          <p className="text-center mt-3 text-zinc-700">
            Os favoritos dos nossos clientes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                nome: "Mega Burger",
                preco: "R$ 32,90",
                img: mega,
              },
              {
                nome: "Cheddar Bacon",
                preco: "R$ 35,90",
                img: cheddar,
              },
              {
                nome: "Smash Burger",
                preco: "R$ 28,90",
                img: smash,
              },
            ].map((item) => (
              <div
                key={item.nome}
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  hover:scale-105
                  transition
                  overflow-hidden
                "
              >
                <img
                  src={item.img}
                  alt={item.nome}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{item.nome}</h3>

                  <p className="text-red-600 font-bold text-xl mt-2">
                    {item.preco}
                  </p>

                  <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
                    Pedir Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
                        COMPONENTE: AVALIAÇÕES
      =========================================================== */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center text-5xl font-black">
            O que nossos clientes dizem
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              "Melhor hambúrguer que já comi!",
              "Entrega rápida e muito sabor.",
              "Ambiente incrível e atendimento nota 10.",
            ].map((texto, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                <div className="flex mb-5 text-yellow-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>

                <p className="text-zinc-600 italic">"{texto}"</p>

                <h3 className="mt-5 font-bold">Cliente Satisfeito</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
                      COMPONENTE: LOCALIZAÇÃO
      =========================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 text-red-600">
              <MapPin size={35} />
              <h2 className="text-5xl font-black">Nossa Localização</h2>
            </div>

            <p className="mt-8 text-xl text-zinc-700">
              Estamos esperando você para experimentar os melhores hambúrgueres
              artesanais da cidade.
            </p>

            <img
              src={gigante}
              alt="Lendaria Kleusa Lanches"
              className="mt-10 w-full max-w-md rounded-2xl scale-133"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.18758264986968!2d-40.49737319381081!3d-7.574832934341775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79fa9003917e50f%3A0x3ced5f8a1426581c!2sCasa%20do%20CARALHA!5e0!3m2!1spt-BR!2sbr!4v1785878803757!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* ==========================================================
                        COMPONENTE: FOOTER
      =========================================================== */}
      <footer className="bg-orange-900 text-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black">Kleusa Lanches 🍔</h2>
          <p className="mt-3 text-zinc-400">Feito com muito sabor para você.</p>
        </div>
      </footer>
    </main>
  );
}

export default PaginaInicial;
