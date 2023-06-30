import { Pencil, Trash } from "@phosphor-icons/react";

const Tabela = () => {
  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          1
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          Arroz branco
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">4</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">R$ 7,00</td>
        <td className="whitespace-nowrap px-4 py-2">
          <button
            type="button"
            className="inline-block rounded bg-green-600 p-2 text-xs font-medium text-white hover:bg-green-700"
          >
            <Pencil size={24} color="#fff" weight="bold" />
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <button
            type="button"
            className="inline-block rounded bg-red-600 p-2 text-xs font-medium text-white hover:bg-red-700"
          >
            <Trash size={24} color="#fff" weight="bold" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Tabela;
