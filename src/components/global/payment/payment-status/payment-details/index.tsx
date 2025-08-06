interface PaymentDetailsProps {
  paymentId: string;
  email: string;
  date: string;
  time: string;
  address: string;
  phone: string;
}

export default function PaymentDetails({
  paymentId,
  email,
  date,
  time,
  address,
  phone,
}: PaymentDetailsProps) {
  return (
    <section className="flex relative flex-col gap-8 px-5 w-full max-w-[800px] max-sm:gap-6">
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-xl font-medium leading-8 text-neutral-500 max-md:text-lg max-sm:text-base">
          ID de Pago
        </h3>
        <p className="text-xl font-semibold leading-8 text-stone-800 max-md:text-lg max-sm:text-base">
          {paymentId}
        </p>
      </div>
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-xl font-medium leading-8 text-neutral-500 max-md:text-lg max-sm:text-base">
          Correo
        </h3>
        <p className="text-xl font-semibold leading-8 text-stone-800 max-md:text-lg max-sm:text-base">
          {email}
        </p>
      </div>
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-xl font-medium leading-8 text-neutral-500 max-md:text-lg max-sm:text-base">
          Fecha de Pago
        </h3>
        <p className="text-xl font-semibold leading-8 text-stone-800 max-md:text-lg max-sm:text-base">
          {date}
        </p>
      </div>
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-xl font-medium leading-8 text-neutral-500 max-md:text-lg max-sm:text-base">
          Hora de Pago
        </h3>
        <p className="text-xl font-semibold leading-8 text-stone-800 max-md:text-lg max-sm:text-base">
          {time}
        </p>
      </div>

      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-[#7A7A7A] font-medium text-lg">
          Numero de telefono
        </h3>

        <p className="text-xl font-semibold leading-8 text-stone-800">
          {phone}
        </p>
      </div>
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-2">
        <h3 className="text-[#7A7A7A] font-medium text-lg">Dirección</h3>

        <p className="text-xl font-semibold leading-8 text-stone-800 capitalize">
          {address}
        </p>
      </div>
    </section>
  );
}
