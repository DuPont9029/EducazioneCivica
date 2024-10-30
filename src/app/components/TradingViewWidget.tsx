"use client"

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current !== null) { // Ensure container.current is not null
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "MIL:ENI",
          "interval": "D",
          "timezone": "Europe/Rome",
          "theme": "light",
          "style": "1",
          "locale": "it",
          "gridColor": "rgba(0, 0, 0, 0.06)",
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%", padding: "16px 0" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://it.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="my-2"></span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);