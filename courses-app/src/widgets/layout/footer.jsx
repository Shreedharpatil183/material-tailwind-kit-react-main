import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaGooglePlay } from "react-icons/fa";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="bg-white px-4 pt-10 pb-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          {/* Left Logo & Description */}
          <div className="w-full px-4 lg:w-4/12 flex flex-col items-center lg:items-start">
            <img
              src="/logo.png" // Replace with your logo path
              alt="CCAT Preparation"
              className="w-32 h-32 mb-4"
            />
            <Typography className="text-sm text-blue-gray-600 mb-4">
              We’re always in search for talented and motivated people. Don’t be shy — introduce yourself!
            </Typography>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-900 text-white px-4 py-2 rounded flex items-center gap-2 w-fit">
                <FaGooglePlay className="text-lg" />
                <div className="text-left text-sm">
                  <div className="text-xs">Get It On</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </a>
          </div>

          {/* Social Media + Menu */}
          <div className="w-full lg:w-8/12 flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
              <Typography variant="h4" className="mb-2" color="blue-gray">
                {title}
              </Typography>
              <Typography className="font-normal text-blue-gray-500 lg:w-4/5">
                {description}
              </Typography>
              <div className="flex justify-center gap-2 mt-4">
                {socials.map(({ color, name, path }) => (
                  <a key={name} href={path} target="_blank" rel="noopener noreferrer">
                    <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                      <Typography color={color}>
                        <i className={`fa-brands fa-${name}`} />
                      </Typography>
                    </IconButton>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-12">
              {menus.map(({ name, items }) => (
                <div key={name}>
                  <Typography variant="small" color="blue-gray" className="mb-2 block font-medium uppercase">
                    {name}
                  </Typography>
                  <ul className="mt-3">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Typography
                          as="a"
                          href={item.path}
                          target="_blank"
                          rel="noreferrer"
                          variant="small"
                          className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                        >
                          {item.name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="small" className="font-normal text-blue-gray-500">
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "CCAT Preparation",
  description:
    "Join Our Youtube / LinkedIn to get Job Reference, Study Material, Technology Updates and CDAC Notifications.",
  socials: [
    { color: "gray", name: "linkedin", path: "https://linkedin.com" },
    { color: "gray", name: "instagram", path: "https://instagram.com" },
    { color: "gray", name: "youtube", path: "https://youtube.com" },
  ],
  menus: [
    {
      name: "Useful Links",
      items: [
        { name: "Contact Us", path: "#" },
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "Login & Register", path: "#" },
      ],
    },
    {
      name: "Get Contact",
      items: [
        { name: "Phone: 8668777707", path: "tel:8668777707" },
        { name: "Email: ccatpreparation@gmail.com", path: "mailto:ccatpreparation@gmail.com" },
        { name: "Location: Pune, Maharashtra", path: "#" },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Code Integer Pvt Ltd. All Rights Reserved.
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
