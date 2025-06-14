import { RegistryPayment } from "@/redux/slices/registryPaymentSlice";

interface CombinedObjectParams {
  fields: Record<string, any>;
  total: number;
  civilRegisters: any;
}

export const buildPaymentRequest = ({
  fields,
  total,
  civilRegisters,
}: CombinedObjectParams) => {
  return {
    request: {
      type_product: 1,
      payment_method: fields.payment_method,
      document_type: fields.document_type || null,
      document_number: fields.document_number,
      email:
        fields.payment_method === "card"
          ? fields.email
          : fields.payment_method === "pse" || fields.payment_method === "code"
            ? fields.email === fields.confirm_email
            : fields.email || null,
      phone: fields.phone_number || null,
      bank: fields.bank || null,
      person_type: fields.person_type || fields.type_person || null,
      card_name: fields.fullname || null,
      card_number: fields.card_number || null,
      card_year:
        typeof fields.card_year === "string"
          ? fields.card_year.split("/")[1]
          : null,
      card_month:
        typeof fields.card_year === "string"
          ? fields.card_year.split("/")[0]
          : null,
      card_cvv: fields.card_cvv || null,
      installments: 1 || null,
      fullname: fields.fullname || fields.name || null,
      total_amount: total,
      redirect_url:
        fields.payment_method === "pse"
          ? "http://localhost:3333/payment"
          : null,
      civil_registers: civilRegisters || null,
      redeem_codes: {
        value_redeem_code: fields.reedem_code || null,
        amount_pay: null,
      },
    },
  };
};


export const getCivilRegisters = (registryPayment: RegistryPayment[]) => {
  return registryPayment.map((item) => ({
    type_record:
      item?.registro_civil === "6"
        ? "civil_marriage"
        : item?.registro_civil == "5"
          ? "civil_death"
          : "civil_birth",
    first_name: item?.name || null,
    second_name: item?.second_name || null,
    first_surname: item?.first_lastname || null,
    second_surname: item?.second_lastname || null,
    document: item?.document || item?.document_number || null,
    serial_registry: item?.serial_number || null,
    type_marriage: item?.type_marriage || null,
    document_person_one: item?.document_number_1 || null,
    document_person_two: item?.document_number_2 || null,
    name_person_one: item?.first_name_1 || null,
    name_person_two: item?.second_name_2 || null,
    surname_person_one: item?.first_lastname_1 || null,
    surname_person_two: item?.second_lastname_2 || null,
    serial_code_registry: item?.serial || null,
    type_search: item?.type_search || null,
    name_first_registrant: item?.name_first_registrant || null,
    name_second_registrant: item?.name_second_registrant || null,
    surname_first_registrant: item?.surname_first_registrant || null,
    surname_second_registrant: item?.surname_second_registrant || null,
  }));
};



