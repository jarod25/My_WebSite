import React from "react";
import "./Footer.css";

interface IProps {
  owner: string;
}

export const Footer = ({ owner }: IProps) => {
  const startingYear: string = "©2022-";
  const currentDate: Date = new Date();

  return (
    <div className="footer">
      <p className="copyright">
        {startingYear}
        {currentDate.getFullYear()} {owner}
      </p>
    </div>
  );
};
