import React, { useState } from "react";
import { InferType } from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { invitatinSchema } from "../../validations/InvitationValidation";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(invitatinSchema) });
  const [buttonText, setButtonText] = useState("Enviar");
  const [email, setEmail] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [buttonEnable, setButtonEnable] = useState(false);
  const [status, setStatus] = useState(0);

  type Props = InferType<typeof invitatinSchema>;

  const formSubmit = (values: Props) => {
    setButtonEnable(true);
    setButtonText("Registrando asistencia...");
    axios.post("https://api.kaudalcultural.cl/clients", values).then((res) => {
      setStatus(res.status);
      setButtonText("Registrado!");
    });
    // e.preventDefault();
    // const target = e.target;
    // let data = {
    //   names: target.names.value,
    //   lastNames: target.lastNames.value,
    //   email: target.email.value,
    //   confirmEmail: target.confirmEmail.value,
    //   cellPhone: target.cellPhone.value,
    // };
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-first-name"
            >
              Nombres
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              {...register("names")}
              type="text"
              placeholder="Ingrese sus nombres"
            />
            <span className="text-xs italic text-red-500">
              {errors?.names?.message}
            </span>
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-last-name"
            >
              Apellidos
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-last-name"
              {...register("lastNames")}
              type="text"
              placeholder="Ingrese sus apellidos"
            />
            <span className="text-xs italic text-red-500">
              {errors?.lastNames?.message}
            </span>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-email"
            >
              E-mail
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-email"
              {...register("email")}
              value={email}
              type="text"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <span className="text-xs italic text-red-500">
              {errors?.email?.message}
            </span>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-email"
            >
              Confirme su E-mail
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-email"
              {...register("confirmEmail")}
              type="text"
              value={emailConfirmed}
              placeholder="Reingrese su correo electrónico"
              onChange={(e) => setEmailConfirmed(e.target.value.toLowerCase())}
            />
            <span className="text-xs italic text-red-500">
              {errors?.confirmEmail?.message}
            </span>
          </div>
        </div>

        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-number"
            >
              Celular
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-number"
              {...register("cellPhone")}
              type="text"
              placeholder="Ingrese su número celular"
            />
            <span className="text-xs italic text-red-500">
              {errors?.cellPhone?.message}
            </span>
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-tickets"
            >
              Cantidad de Tickets
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-tickets"
              {...register("numberOfTickets")}
              type="number"
              placeholder="Cuantos tickets necesita?"
            />
            <span className="text-xs italic text-red-500">
              {errors?.numberOfTickets?.message}
            </span>
          </div>
        </div>

        <button
          className="focus:shadow-outline mt-4 mb-4 rounded bg-orange-500 py-2 px-4 font-bold text-white shadow hover:bg-orange-400 focus:outline-none"
          type="submit"
          disabled={buttonEnable}
        >
          {buttonText}
        </button>
      </form>
      <span className="mt-2 text-lg italic text-green-600">
        {status === 201
          ? "Asistencia registrada con éxito. Los tickets se han enviado al e-mail ingresado."
          : null}
      </span>
    </>
  );
};

export default Form;
