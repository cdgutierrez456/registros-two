import React from "react";

export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-6 items-start p-11 w-full rounded-xl bg-slate-50 max-w-[518px] max-md:p-9 max-md:max-w-none max-sm:gap-5 max-sm:p-6"
      method="POST"
      action="https://formsubmit.co/megapagosco@gmail.com"
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <label
          htmlFor="name"
          className="text-lg font-bold leading-4 text-zinc-800"
        >
          Nombre:
        </label>
        <div className="flex gap-2.5 items-center px-8 py-4 w-full bg-white rounded-lg max-sm:px-6 max-sm:py-4">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name..."
            className="w-full text-md py-2 leading-4 text-gray-500 bg-transparent border-[nonepx] max-sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start w-full">
        <label
          htmlFor="email"
          className="text-lg font-bold leading-4 text-zinc-800"
        >
          Correo
        </label>
        <div className="flex gap-2.5 items-center px-8 py-4 w-full bg-white rounded-lg max-sm:px-6 max-sm:py-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email..."
            className="w-full text-md py-2 leading-4 text-gray-500 bg-transparent border-[nonepx] max-sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start w-full">
        <label
          htmlFor="message"
          className="text-lg font-bold leading-4 text-zinc-800"
        >
          Mensaje
        </label>
        <div className="flex gap-2.5 items-start px-8 py-4 w-full bg-white rounded-lg h-[171px] max-sm:px-6 max-sm:py-4 max-sm:h-[120px]">
          <textarea
            id="message"
            name="message"
            placeholder="Writing your message here..."
            className="text-md py-2 leading-4 text-gray-500 bg-transparent resize-none border-[nonepx] size-full max-sm:text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="gap-2.5 px-10 py-6 w-full text-base font-bold leading-4 text-center text-white bg-blue-600 rounded-[100px] max-sm:px-8 max-sm:py-5 max-sm:w-full max-sm:text-sm"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
