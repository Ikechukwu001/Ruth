
"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.src = "YOUR_TAWKTO_WIDGET_SCRIPT_URL";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
