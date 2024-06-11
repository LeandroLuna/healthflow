import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";

import { CheckArrowIcon } from "../assets/images/icons/CheckArrowIcon";

export const Solution = () => {
  return (
      <section
          className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
          id="solution"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                  <span className="block-subtitle">Embrace Innovation</span>
                  <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                    Unlike any tool you used before
                  </h2>
                  <p className="mb-10 text-secondaryText leading-loose">
                    Discover a new level of data analysis with our innovative and
                    user-friendly platform. Transform your business needs with
                    actionable insights.
                  </p>
                  <ul className="mb-6 text-primaryText">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Real-time data visualization</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Advanced predictive analytics</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Seamless integration with APIs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
                <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
                  <div className="mb-4 py-3 pl-3 pr-2 rounded">
                    <img
                      src={feature1.src}
                      alt="Feature image 1"
                      className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                      aria-label="Feature image 1"
                    />
                  </div>
                  <div className="py-3 pl-3 pr-2 rounded ">
                    <img
                      src={feature2.src}
                      alt="Feature image 2"
                      className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                      aria-label="Feature image 2"
                    />
                  </div>
                </div>
                <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
                  <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                    <img
                      src={feature3.src}
                      alt="Feature image 3"
                      className="rounded-xl  main-border-gray"
                      aria-label="Feature image 3"
                    />
                  </div>
                  <div className="py-3 pl-3 pr-2 rounded-lg ">
                    <img
                      src={feature4.src}
                      alt="Feature image 4"
                      className="rounded-xl  main-border-gray"
                      aria-label="Feature image 4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
            <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
              <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
                <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                  <img
                    src={feature5.src}
                    alt="Feature image 5"
                    className="rounded-xl  main-border-gray"
                  />
                </div>
                <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                  <img
                    src={feature6.src}
                    alt="Feature image 6"
                    className="rounded-xl  main-border-gray"
                  />
                </div>
              </div>
            </div>
    
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
              <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                <span className="block-subtitle">Make Data-Driven Decisions</span>
                <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                  Issue tracking you’ll enjoy using
                </h2>
                <p className="mb-12 text-secondaryText leading-loose">
                  Monitor and track data issues with ease using our intuitive and
                  efficient issue tracking system. Stay ahead of potential problems
                  and improve your workflow.
                </p>
                <ul className="mb-6 text-primaryText">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Collaborative environment</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Smart issue categorization</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Customizable notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  );
}