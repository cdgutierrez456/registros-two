import { registryPayment } from "@/types/payment";

const buildPaymentRequest = (checkout: registryPayment[]) => {
  const civilRegisters = checkout.map((item: any) => ({
    type_record:
      item?.registro_civil === "6"
        ? "civil_marriage"
        : item?.registro_civil == "5"
          ? "civil_death"
          : "civil_birth",
    first_name: item?.name || null, // civil_birth
    second_name: item?.second_name || null, // civil_birth
    first_surname: item?.first_lastname || null, // civil_birth
    second_surname: item?.second_lastname || null, // civil_birth
    document: item?.document || item?.document_number || null, // civil_birth
    serial_registry: item?.serial_number || null, // civil_birth serial registry
    type_marriage: item?.type_marriage || null, // marriage type
    document_person_one: item?.document_number_1 || null, // marriage  type document
    document_person_two: item?.document_number_2 || null, // marriage type document
    name_person_one: item?.first_name_1 || null, // serial marriage type
    name_person_two: item?.second_name_2 || null, // serial marriage type
    surname_person_one: item?.first_lastname_1 || null, // serial marriage type
    surname_person_two: item?.second_lastname_2 || null, // serial marriage type
    serial_code_registry: item?.serial || null, // serial marriage type
    type_search: item?.type_search || null, // death type search
    name_first_registrant: item?.name_first_registrant || null, // death type
    name_second_registrant: item?.name_second_registrant || null, // death type
    surname_first_registrant: item?.surname_first_registrant || null, // death type
    surname_second_registrant: item?.surname_second_registrant || null,
  }));

  return {
    civilRegisters,
  };
};

export default buildPaymentRequest;
