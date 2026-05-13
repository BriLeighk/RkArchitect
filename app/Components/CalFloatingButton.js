"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useMemo } from "react";
import { getCalComPath } from "../lib/cal";

function trimPublic(value) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

const CAL_FLOATING_HOVER_STYLE_ID = "rk-cal-floating-hover";

/**
 * Cal's floating button lives in a closed styling API (no hoverColor prop) but uses
 * an open shadow root, so we can add hover feedback without replacing their embed.
 */
function attachCalFloatingButtonHover(namespace) {
  const safeNs = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(namespace) : namespace;
  const el = document.querySelector(`cal-floating-button[data-cal-namespace="${safeNs}"]`);
  const root = el?.shadowRoot;
  if (!root || root.getElementById(CAL_FLOATING_HOVER_STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = CAL_FLOATING_HOVER_STYLE_ID;
  style.textContent = `
    button {
      transition: filter 0.2s ease, box-shadow 0.2s ease;
    }
    button:hover {
      filter: brightness(1.12);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
    }
    button:active {
      filter: brightness(0.95);
    }
    @media (prefers-reduced-motion: reduce) {
      button {
        transition-duration: 0.01ms;
      }
    }
  `;
  root.appendChild(style);
}

/**
 * Cal.com floating booking button (home page). Uses the same env as BookingEmbed:
 * NEXT_PUBLIC_CALCOM_EMBED_LINK, NEXT_PUBLIC_CALCOM_NAMESPACE.
 */
export default function CalFloatingButton() {
  const calLink = useMemo(() => getCalComPath(), []);
  const namespace = useMemo(() => {
    const explicit = trimPublic(process.env.NEXT_PUBLIC_CALCOM_NAMESPACE);
    if (explicit) return explicit;
    if (calLink) {
      const parts = calLink.split("/").filter(Boolean);
      const last = parts[parts.length - 1];
      if (last) return last.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 64);
    }
    return "booking";
  }, [calLink]);

  useEffect(() => {
    if (!calLink) return;

    let cancelled = false;
    (async function () {
      const cal = await getCalApi({ namespace });
      if (cancelled) return;
      cal("floatingButton", {
        calLink,
        buttonText: "Virtual coffee",
        buttonPosition: "bottom-right",
        buttonColor: "#887951",
        buttonTextColor: "white",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      attachCalFloatingButtonHover(namespace);
    })();

    return () => {
      cancelled = true;
    };
  }, [calLink, namespace]);

  return null;
}
