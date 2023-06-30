"use client";

import * as React from "react";
import Tabela from "@/components/Tabela";
import AdicionaProduto from "@/components/AdicionaProduto";
import { Plus } from "@phosphor-icons/react";

const Principal = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <AdicionaProduto />
      <div className="bg-white px-12 py-6 rounded w-3/5 max-w-screen-xl mx-auto drop-shadow-lg overflow-x-auto mb-10">
        <div className="table-container">
          <table className="table-fixed min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Id
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Descrição
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Quantidade
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Preço
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
            <Tabela />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Principal;
