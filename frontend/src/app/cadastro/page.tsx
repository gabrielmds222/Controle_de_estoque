import { useRouter } from "next/router";

const Cadastro = () => {
  //   const router = useRouter();
  //   function handleSubmit() {
  //     router.push("/principal");
  //   }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-white px-12 py-8 rounded max-w-xl mx-auto drop-shadow-lg"
        // onSubmit={handleSubmit}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Cadastro</h2>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            required
            placeholder="Digite seu nome"
          />
        </div>

        <div className="flex mb-6 border-b-2 border-zinc-200 pb-6">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Telefone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite seu telefone"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="birthdate"
              className="block text-gray-700 font-bold mb-2"
            >
              Data de Nascimento:
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite sua data de nascimento"
            />
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex mb-6 border-b-2 border-zinc-200 pb-6">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="companyName"
              className="block text-gray-700 font-bold mb-2"
            >
              Nome da Empresa:
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite o nome da empresa"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="cnpj"
              className="block text-gray-700 font-bold mb-2"
            >
              CNPJ:
            </label>
            <input
              type="text"
              id="cnpj"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite o CNPJ da empresa"
            />
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Digite seu email"
          />
        </div>

        <div className="flex mb-6">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirmar senha:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex items-center justify-center pt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
