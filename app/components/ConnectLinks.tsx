import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanlucdev/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/tanlucdev",
    icon: <FaGithub />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tanlucdev/",
    icon: <FaInstagram />,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@tanlucdev",
    icon: <FaThreads />,
  },

];

export default ConnectLinks;