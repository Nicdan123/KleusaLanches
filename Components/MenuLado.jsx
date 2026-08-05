import React, { useState } from "react";
import Logo from "../src/assets/Logo.png";

function MenuLado() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {/* =====================================================
          MENU HAMBÚRGUER
          Aparece somente até 1300px
      ===================================================== */}

      <div className="min-[1301px]:hidden">
        {/* Botão */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="
            fixed
            top-4
            left-4
            z-[60]
            w-12
            h-12
            rounded-lg
            bg-red-950
            text-white
            text-2xl
            shadow-lg
            flex
            items-center
            justify-center
          "
        >
          <i className={`bi ${menuAberto ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        {/* Fundo escuro */}
        <div
          onClick={() => setMenuAberto(false)}
          className={`
            fixed
            inset-0
            z-40
            bg-black/50
            transition-opacity
            duration-300

            ${
              menuAberto
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        ></div>

        {/* Menu que desliza */}
        <aside
          className={`
            fixed
            top-0
            left-0
            z-50

            h-dvh
            w-60
            max-w-[80vw]

            bg-gradient-to-b
            from-gray-950
            via-red-950
            to-orange-900

            grid
            grid-rows-[auto_1fr_auto]
            p-2
            gap-2
            text-center

            overflow-y-auto

            transition-transform
            duration-500
            ease-in-out

            ${menuAberto ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Cima */}
          <div>
            <div className="p-2">
              <span className="text-xl sm:text-2xl font-bold text-gray-100">
                Kleusa Lanches
              </span>
            </div>
          </div>

          {/* Meio */}
          <div className="flex flex-col gap-4 sm:gap-6 pt-6 sm:pt-10">
            <div className="font-semibold text-base sm:text-lg text-gray-300 p-2">
              <i className="bi bi-house mr-2"></i>
              Página Inicial
            </div>

            <div className="font-semibold text-base sm:text-lg text-gray-300 p-2">
              <i className="bi bi-fork-knife mr-2"></i>
              Moda da Casa
            </div>

            <div className="font-semibold text-base sm:text-lg text-gray-300 p-2">
              <i className="bi bi-card-list mr-2"></i>
              Cardápio
            </div>

            <div className="font-semibold text-base sm:text-lg text-gray-300 p-2">
              <i className="bi bi-telephone-fill mr-2"></i>
              Contato
            </div>

            <div className="font-semibold text-base sm:text-lg text-gray-300 p-2">
              <i className="bi bi-info-circle mr-2"></i>
              Quem Somos
            </div>
          </div>

          {/* Logo */}
          <div>
            <div className="p-2">
              <img
                src={Logo}
                alt="Logo da Hamburgueria"
                className="w-full max-w-[180px] mx-auto"
              />
            </div>
          </div>
        </aside>
      </div>

      {/* =====================================================
          MENU NORMAL
          Aparece somente a partir de 1301px
      ===================================================== */}

      <aside
        className="
          hidden
          min-[1301px]:grid

          fixed
          top-0
          left-0
          z-50
          h-dvh
          w-60

          bg-gradient-to-b
          from-gray-950
          via-red-950
          to-orange-900

          grid-rows-[auto_1fr_auto]
          p-2
          gap-2
          text-center
          flex-shrink-0
        "
      >
        {/* Cima */}
        <div>
          <div className="p-2">
            <span className="text-2xl font-bold text-gray-100">
              Kleusa Lanches
            </span>
          </div>
        </div>

        {/* Meio */}
        <div className="flex flex-col gap-6 pt-10">
          <div className="font-semibold text-lg text-gray-300 p-2">
            <i className="bi bi-house mr-2"></i>
            Página Inicial
          </div>

          <div className="font-semibold text-lg text-gray-300 p-2">
            <i className="bi bi-fork-knife mr-2"></i>
            Moda da Casa
          </div>

          <div className="font-semibold text-lg text-gray-300 p-2">
            <i className="bi bi-card-list mr-2"></i>
            Cardápio
          </div>

          <div className="font-semibold text-lg text-gray-300 p-2">
            <i className="bi bi-telephone-fill mr-2"></i>
            Contato
          </div>

          <div className="font-semibold text-lg text-gray-300 p-2">
            <i className="bi bi-info-circle mr-2"></i>
            Quem Somos
          </div>
        </div>

        {/* Logo */}
        <div>
          <div className="p-2">
            <img src={Logo} alt="Logo da Hamburgueria" className="w-full" />
          </div>
        </div>
      </aside>
    </>
  );
}

export default MenuLado;
