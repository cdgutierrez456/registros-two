const phoneIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] max-sm:w-[20px] max-sm:h-[20px] flex-shrink-0"> <path d="M21.9916 17.467V20.467C21.9928 20.7455 21.9357 21.0211 21.8241 21.2763C21.7126 21.5315 21.5489 21.7606 21.3437 21.9488C21.1385 22.1371 20.8962 22.2805 20.6324 22.3697C20.3686 22.4589 20.089 22.492 19.8116 22.467C16.7345 22.1326 13.7786 21.0811 11.1816 19.397C8.76546 17.8616 6.71697 15.8131 5.18163 13.397C3.49161 10.7882 2.43988 7.81797 2.11163 4.72697C2.08664 4.45044 2.11951 4.17173 2.20813 3.9086C2.29676 3.64546 2.4392 3.40366 2.6264 3.19859C2.81359 2.99352 3.04144 2.82968 3.29542 2.71749C3.54941 2.60531 3.82397 2.54723 4.10163 2.54697H7.10163C7.58694 2.5422 8.05742 2.71405 8.42539 3.0305C8.79336 3.34696 9.03371 3.78642 9.10163 4.26697C9.22826 5.22704 9.46308 6.1697 9.80163 7.07697C9.93618 7.4349 9.96529 7.82389 9.88554 8.19785C9.80578 8.57182 9.6205 8.91508 9.35163 9.18697L8.08163 10.457C9.50519 12.9605 11.5781 15.0334 14.0816 16.457L15.3516 15.187C15.6235 14.9181 15.9668 14.7328 16.3408 14.6531C16.7147 14.5733 17.1037 14.6024 17.4616 14.737C18.3689 15.0755 19.3116 15.3103 20.2716 15.437C20.7574 15.5055 21.201 15.7502 21.5182 16.1245C21.8353 16.4988 22.0038 16.9765 21.9916 17.467Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

const emailIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] max-sm:w-[20px] max-sm:h-[20px] flex-shrink-0"> <path d="M4.89453 4.53076H20.8945C21.9945 4.53076 22.8945 5.43076 22.8945 6.53076V18.5308C22.8945 19.6308 21.9945 20.5308 20.8945 20.5308H4.89453C3.79453 20.5308 2.89453 19.6308 2.89453 18.5308V6.53076C2.89453 5.43076 3.79453 4.53076 4.89453 4.53076Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22.8945 6.53076L12.8945 13.5308L2.89453 6.53076" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

const mapIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] max-sm:w-[20px] max-sm:h-[20px] flex-shrink-0"> <g clip-path="url(#clip0_1_2962)"> <path d="M1.25098 6.34033V22.3403L8.25098 18.3403L16.251 22.3403L23.251 18.3403V2.34033L16.251 6.34033L8.25098 2.34033L1.25098 6.34033Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.25098 2.34033V18.3403" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.251 6.34033V22.3403" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_1_2962"> <rect width="24" height="24" fill="white" transform="translate(0.250977 0.340332)"></rect> </clipPath> </defs> </svg>`;

export const CONTACT_INFO = [
  {
    icon: phoneIcon,
    title: "Teléfono",
    content: "+1 (333) 000-0000",
  },
  {
    icon: emailIcon,
    title: "Email",
    content: "hi@supaklin.com",
  },
  {
    icon: mapIcon,
    title: "Dirección",
    content: "123 Main St, Suite 500, New York, NY 10001",
  },
];
