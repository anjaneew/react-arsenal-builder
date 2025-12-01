import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { type ReactNode } from "react";

type Links = {
    href: string;
    label: string;
    icon: ReactNode;
}

const Contact = () => {
  const links: Links[] = [{
    href: "https://x.com/anjaneew",
    label: "Twitter",
    icon: <FaTwitter/>,
  },
  {
    href: "https://github.com/anjaneew",
    label: "Github",
    icon: <FaGithub/>,
  },
  {
    href: "mailto:anjaneew@gmail.com",
    label: "Email",
    icon: <FaEnvelope/>
  },
]

  return (
    <div>
      <h2>Contact</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}><a href={link.href}>{link.label}{link.icon}</a></li> )
        )}
      </ul>
    </div>
  );
};

export default Contact;