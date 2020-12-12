import React from "react";
import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";
import { SocialLink } from "../../../types";
import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon";

interface IFooterLink {
  href: string;
  title: string;
}

interface ISocialLink {
  href: "#";
  title: SocialLink;
}

const footerLinks: IFooterLink[] = [
  {
    title: "JOIN US",
    href: "#"
  },
  {
    title: "DONATE",
    href: "#"
  },
  {
    title: "DOCS & HELP",
    href: "#"
  },
  {
    title: "HOST AN EVENT",
    href: "#"
  },
  {
    title: "CONTACT US",
    href: "#"
  },
  {
    title: "JOBS",
    href: "#"
  }
];

const socialLinks: ISocialLink[] = [
  {
    href: "#",
    title: "discord"
  },
  {
    href: "#",
    title: "twitter"
  },
  {
    href: "#",
    title: "github"
  },
  {
    href: "#",
    title: "instagram"
  },
  {
    href: "#",
    title: "facebook"
  }
];

const Footer = () => {
  return (
    <header className="bg-secondary px-32 pt-44 pb-16">
      <div className="flex items-center justify-between">
        <Logo type="svg" tune="dark" />

        <nav className="flex-grow">
          <ul className="flex items-center">
            {footerLinks.map(({ title, href }) => (
              <li className="ml-12" key={title}>
                <Link href={href}>
                  <a className="text-captions font-medium tracking-widest text-white">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center">
          {socialLinks.map(({ title, href }) => (
            <li className="ml-12" key={title}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-captions font-medium tracking-widest text-white"
              >
                <SocialMediaIcon social={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="w-full pt-20 text-white opacity-25 font-bold text-base">
        Copyright &copy; Open Source Community Africa 2020
      </p>
    </header>
  );
};

export default Footer;