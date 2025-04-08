import React from "react";

interface IconProps {
  size?: string;
}

export const IconoTypescript: React.FC<IconProps> = ({ size = "50px" }) => (
  <i className="devicon-typescript-plain colored" style={{ fontSize: size }}></i>
);

export const IconoPython: React.FC<IconProps> = ({ size = "50px" }) => (
  <i className="devicon-python-plain colored" style={{ fontSize: size }}></i>
);

export const IconoLinux: React.FC<IconProps> = ({ size = "50px" }) => (
  <i className="devicon-linux-plain colored" style={{ fontSize: size }}></i>
);

export const IconoReact: React.FC<IconProps> = ({ size = "50px" }) => (
  <i className="devicon-react-original colored" style={{ fontSize: size }}></i>
);

export const IconoMySQL: React.FC<IconProps> = ({ size = "50px" }) => (
  <i className="devicon-mysql-original colored" style={{ fontSize: size }}></i>
);

export const IconoNodeJS: React.FC<IconProps> = ({ size = "50px" }) => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
    alt="Node.js"
    style={{ width: size, height: size }}
  />
);
