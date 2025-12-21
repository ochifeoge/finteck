import {
  industrySolutions,
  logo,
  menu,
  socialIcons,
} from "../components/details";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="container pt-20 pb-8">
      <div className="flex items-center md:items-start justify-between flex-wrap">
        <div className="flex flex-col gap-2 items-center md:items-start basis-full md:basis-[23%] mb-4">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <p className="text-gray-500">
            Join our newsletter to stay up to date on{" "}
            <br className="hidden md:block" /> features and releases.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              className="basis-3/5 border-gray-300 border-[0.3px] outline-none p-2 rounded-sm"
              placeholder="Email address"
            />
            <Button active={true} label="subscribe" />
          </div>
        </div>

        <div className="basis-1/2 sm:basis-[50%] lg:basis-[23%] md:text-end lg:text-start">
          <h4 className="mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            {menu.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 capitalize hover:text-blue-700 font-semibold text-md">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="basis-1/2 sm:basis-[50%] lg:basis-[23%] ">
          <h4 className="mb-4 text-end md:text-start">Industry Solutions</h4>
          <div className="flex flex-col gap-2 items-end md:items-start lg:items-start">
            {industrySolutions.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 capitalize hover:text-blue-700 font-semibold text-md">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="basis-full sm:basis-[50%] lg:basis-[23%] flex flex-col items-start md:items-end lg:items-start">
          <h4 className="mb-4">socials</h4>
          <div className="flex flex-col gap-2">
            {socialIcons.map(({ name, icon: IconComponent }, index) => (
              <div
                className="flex gap-2 items-center text-gray-700 capitalize hover:text-blue-700 font-semibold text-md cursor-pointer"
                key={index}>
                <IconComponent size={24} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
