/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBox = {
  mode: "hint" | "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBox = HintBoxProps | WarningBox;

export const InfoBox = ( props: InfoBox) => {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
};
