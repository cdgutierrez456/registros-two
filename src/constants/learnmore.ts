import Civil from "@/assets/civil.jpg";
import Matrimonio from "@/assets/matrimonio.jpg";
import Defuncion from "@/assets/defuncion.jpg";

export const LEARNMORE = [
  {
    title: "Registro civil de nacimiento",
    subtitle: "¿Quién puede realizar el Registro civil de nacimiento?",
    content:
      "El registro civil de nacimiento es un proceso que permite registrar la nacimiento de una persona en el Registro Civil de la República de Colombia. Este registro es un documento legal que establece la existencia jurídica de la persona y valida su identidad personal.",
    subContent:
      "Los padres del recién nacido son los encargados de realizar la inscripción. En caso de que los padres no puedan hacerlo, pueden encargarse de la inscripción los abuelos, tíos, hermanos mayores de edad o el representante legal del menor. Si el nacimiento se produce en un hospital, el personal del centro de salud también puede llevar a cabo el registro.",
    position: "left",
    image: Civil.src,
    alt: "civil-image",
    href: "/registros/civiles",
    background: "blue",
  },
  {
    title: "Registro civil de matrimonio",
    subtitle: "¿Quién puede realizar el Registro civil de matrimonio?",
    content:
      "La inscripción del matrimonio valida la unión ante el Estado, otorgando derechos y responsabilidades a los contrayentes. Independiente que se haya realizado mediante rito religioso, siempre debe ser inscrito en el Registro civil de matrimonio para que tenga validez legal.",
    subContent:
      "Los colombianos que se casen, ya sea dentro del país o en el extranjero, ya sea entre dos colombianos o entre un colombiano y un extranjero, independientemente de si los colombianos son nacidos en Colombia o por adopción, deben registrar su matrimonio.",
    position: "right",
    image: Matrimonio.src,
    alt: "matrimonio-image",
    href: "/registros/matrimonio",
    background: "white",
  },
  {
    title: "Registro civil de defunción",
    subtitle: "¿Quién puede realizar el Registro civil de defunción?",
    content:
      "Este registro certifica el fallecimiento de una persona, marcando el fin de su vida civil. Con ello se extinguen sus derechos y deberes como ciudadano.",
    subContent: `1. El cónyuge sobreviviente
2. Las personas que residan en el hogar donde ocurrió el fallecimiento
3. El médico que atendió al difunto
4. La funeraria encargada de su sepultura
5. El director o administrador del centro público o privado donde se haya producido el hecho
6. La autoridad de policía que encuentre un cadáver de persona desconocida o no reclamado.`,
    position: "left",
    image: Defuncion.src,
    alt: "defuncion-image",
    href: "/registros/defuncion",
    background: "blue",
  },
];
