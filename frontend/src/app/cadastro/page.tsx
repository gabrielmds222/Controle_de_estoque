"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import axios from "axios";

type FormData = {
  name: string;
  phone: string;
  birthdate: string;
  enterprise: string;
  cnpj: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const Cadastro = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    if (data) {
      router.push("/");
    }
  });

  // const onSubmit = handleSubmit((data) => {
  //   console.log(JSON.stringify(data));
  //   if (data) {
  //     router.push("/principal");
  //   }
  // });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-white px-12 py-8 rounded max-w-xl mx-auto drop-shadow-lg"
        onSubmit={onSubmit}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Cadastro</h2>
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Digite seu nome"
            {...register("name", { required: true })}
            defaultValue=""
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
              {...register("phone", { required: true })}
              defaultValue=""
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
              {...register("birthdate")}
              defaultValue=""
            />
          </div>
        </div>

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
              {...register("enterprise", { required: true })}
              defaultValue=""
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
              {...register("cnpj", { required: true })}
              defaultValue=""
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
            placeholder="Digite seu email"
            {...register("email", { required: true })}
            defaultValue=""
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
              {...register("password", { required: true })}
              defaultValue=""
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="password_confirmation"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirmar senha:
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Digite sua senha"
              {...register("password_confirmation", { required: true })}
              defaultValue=""
            />
          </div>
        </div>

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
