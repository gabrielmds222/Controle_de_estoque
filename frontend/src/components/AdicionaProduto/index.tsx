import { Plus } from "@phosphor-icons/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const AdicionaProduto = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex justify-end w-4/5 max-w-screen-xl mx-auto mt-10">
        <button
          className="p-2 rounded mb-4 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={openModal}
        >
          <Plus size={24} color="#fff" weight="bold" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form className="bg-white px-12 py-8 rounded max-w-sm mx-auto">
                    <div className="mb-6">
                      <label
                        htmlFor="nome"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Nome do produto:
                      </label>
                      <input
                        type="text"
                        id="nome"
                        className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Digite o nome do produto"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="preco"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Preço:
                      </label>
                      <input
                        type="text"
                        id="preco"
                        className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Digite o preço do produto"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="quantidade"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Quantidade:
                      </label>
                      <input
                        type="number"
                        id="quantidade"
                        className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Digite a quantidade do produto"
                        min="1"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-4">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                      >
                        Adicionar
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AdicionaProduto;
