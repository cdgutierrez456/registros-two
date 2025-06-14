import { toast } from "sonner";

export const getValidatedFormFields = (
  form: HTMLFormElement
): Record<string, FormDataEntryValue> | null => {
  const formData = new FormData(form);
  const fields = Object.fromEntries(formData);

  const requiredFields = Array.from(form.querySelectorAll("[required]")).map(
    (input) => (input as HTMLInputElement).name
  );

  const emptyRequiredFields = requiredFields.filter((field) => !fields[field]);

  if (emptyRequiredFields.length > 0) {
    toast.error("Debe completar todos los campos requeridos ⚠️");
    return null;
  }

  return fields;
};
