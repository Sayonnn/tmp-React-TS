import React from "react";
import { icons } from "../utilities/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function QAM() {
  useGSAP(() => {
    gsap.fromTo(
      "#QAMLinks",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 1,
        ease: "power1.in",
      }
    );
  }, []);

  const loadLinks = () => {
    const links: { icon: JSX.Element; title: string; action?: string }[] = [
      {
        icon: icons.iGmail,
        title: "Laud Zion • Zitech Gmail",
        action: `mailto:cascallalaudzion19@gmail.com`,
      },
      {
        icon: icons.iGithub,
        title: "Laud Zion • Zitech Github",
        action: "https://github.com/Sayonnn",
      },
      {
        icon: icons.iLinkedIn,
        title: "Laud Zion • Zitech LinkedIn",
        action: "https://www.linkedin.com/in/laud-zion-cascalla-42b8982b2/",
      },
      {
        icon: icons.iLink,
        title: "Laud Zion • Zitech Portfolio",
        action: "https://portfolio-4c0c7.web.app/",
      },
    ];

    return links.map((link, index) => (
      <a
        key={index}
        className="p-1 rounded-full hover:scale-125 cursor-pointer duration-200 transition ease-in"
        title={link.title}
        href={link.action}
      >
        {link.icon}
      </a>
    ));
  };

  return (
    <div
      className="flex flex-col gap-4 fixed bottom-4 left-4 p-4 z-[100000]"
      id="QAMLinks"
    >
      {loadLinks()}
    </div>
  );
}

export default QAM;
