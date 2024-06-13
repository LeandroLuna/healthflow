import { LinkedinIcon } from "../assets/images/icons/LinkedinIcon";

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex justify-center items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  {/* <TailcastLogo /> */}
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  HealthFlow
                </div>
              </div>
              <p className="mb-10 mt-4 text-gray-400 leading-loose text-center mx-auto lg:mx-0">
              Transformando a gestão hospitalar com inteligência artificial.
              </p>
              <div className="mx-auto lg:mx-0 flex justify-center">
                <a
                  className="inline-block w-10 h-10 p-2 pt-[0.55rem] outlined-button"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
              <p className="mt-14 text-gray-500 leading-loose text-center mx-auto lg:mx-0 text-xs">
                © 2024 HealthFlow. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
