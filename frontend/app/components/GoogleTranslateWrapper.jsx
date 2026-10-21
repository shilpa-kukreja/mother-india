// components/GoogleTranslateWrapper.jsx
"use client";
import { useEffect } from "react";

export default function GoogleTranslateWrapper() {
  useEffect(() => {
    // Patch removeChild to prevent React errors
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      try {
        if (this.contains(child)) {
          return originalRemoveChild.call(this, child);
        }
        return child;
      } catch (e) {
        return child;
      }
    };

    return () => {
      Node.prototype.removeChild = originalRemoveChild;
    };
  }, []);

  // Make sure this container exists, but you don't need to display it
  return <div id="google_translate_element" style={{ display: "none" }} />;
}