// components/GoogleTranslateWrapper.jsx
"use client";

import { useEffect, useRef } from "react";

export default function GoogleTranslateWrapper() {
  const initialized = useRef(false);

  useEffect(() => {
    // ---- Global patch to prevent removeChild errors ----
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      try {
        // Check if the child is actually a child of this node
        if (this.contains(child)) {
          return originalRemoveChild.call(this, child);
        }
        // If not, just return the child without throwing
        return child;
      } catch (e) {
        // In case anything else goes wrong, ignore
        return child;
      }
    };

    // ---- Initialize Google Translate (only once) ----
    if (!initialized.current) {
      initialized.current = true;
      // The script already calls googleTranslateElementInit
      // We just need to ensure the container exists
    }

    // ---- Cleanup: restore original method ----
    return () => {
      Node.prototype.removeChild = originalRemoveChild;
    };
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}