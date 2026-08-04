import React from "react";

function MenuLado() {
  return (
    <div className="w-60 fixed h-screen bg-gradient-to-b from-gray-950 via-red-950 to-orange-900 grid grid-rows-[auto_1fr_auto] p-2 gap-2 text-center flex-shrink-0">
      {/* Cima */}
      <div>
        <div className=" p-2">
          <span className="text-2xl font-bold text-gray-100">
            Kleusa Lanches
          </span>
        </div>
      </div>

      {/* Meio */}
      <div className="flex flex-col gap-6 pt-10">
        <div className=" font-semibold text-lg text-gray-300 p-2">
          <i className="bi bi-house"></i> Página Inicial
        </div>
        <div className=" font-semibold text-lg text-gray-300 p-2">
          <i className="bi bi-fork-knife"></i> Moda da Casa
        </div>
        <div className=" font-semibold text-lg text-gray-300 p-2">
          <i className="bi bi-card-list"></i> Cardápio
        </div>
        <div className=" font-semibold text-lg text-gray-300 p-2">
          <i className="bi bi-telephone-fill"></i> Contato
        </div>
        <div className=" font-semibold text-lg text-gray-300 p-2">
          <i className="bi bi-info-circle"></i> Quem Somos
        </div>
      </div>

      {/* Baixo */}
      <div>
        <div className=" p-2">
          <img src="/src/assets/Logo.png" alt="Logo da Hamburgueria" />
        </div>
      </div>
    </div>
  );
}

export default MenuLado;
