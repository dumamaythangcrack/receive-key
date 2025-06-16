export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>🔐 Cryzhen Free Key</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          * { box-sizing: border-box; user-select: none; }
          html, body { margin: 0; padding: 0; background: linear-gradient(145deg, #1f1f1f, #292929); color: #fff; font-family: Segoe UI, sans-serif; height: 100vh; overflow: hidden; }
          .container { max-width: 480px; margin: auto; margin-top: 10vh; background: #2a2a2a; padding: 30px; border-radius: 16px; box-shadow: 0 0 15px #0005; text-align: center; }
          h1 { font-size: 24px; color: #00ffc3; }
          .key-box { margin: 20px auto; padding: 16px; background: #111; border: 2px solid #00ffc3; border-radius: 10px; font-weight: bold; font-size: 20px; color: #00ffa5; opacity: 0; transition: 1s; }
          .key-box.show { opacity: 1; }
          .loading { animation: blink 1s infinite; }
          button.copy-btn { background: #00ffc3; border: none; padding: 10px 20px; font-size: 14px; color: #000; border-radius: 8px; cursor: pointer; }
          button.copy-btn:hover { background: #00ffa3; }
          .footer { margin-top: 20px; font-size: 12px; color: #777; }
          @keyframes blink { 0%, 100% {opacity: 1;} 50% {opacity: 0.4;} }
        `}</style>
      </head>
      <body onContextMenu={() => false} onKeyDown={(e) => e.preventDefault()}>
        <div className="container">
          <h1>🔐 Cryzhen Free Key</h1>
          <div id="key" className="key-box loading">🔄 Generating key...</div>
          <button className="copy-btn" onClick={() => copyKey()}>📋 Copy Key</button>
          <div className="footer">© 2025 Cryzhen System</div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
            const keyBox = document.getElementById("key");

            setTimeout(() => {
              fetch("/api/getkey").then(res => res.json()).then(data => {
                if (data.key) {
                  keyBox.textContent = data.key;
                } else {
                  keyBox.textContent = "❌ No free key available.";
                }
                keyBox.classList.remove("loading");
                keyBox.classList.add("show");
              }).catch(err => {
                keyBox.textContent = "❌ Failed to load key.";
              });
            }, 2500);

            function copyKey() {
              const text = keyBox.textContent;
              if (!text.includes("Generating")) {
                navigator.clipboard.writeText(text);
                alert("✅ Copied: " + text);
              }
            }

            // Anti DevTools
            setInterval(() => {
              const open = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;
              const start = new Date(); debugger; const end = new Date();
              if (open || end - start > 100) {
                document.body.innerHTML = "<h2 style='color:red;text-align:center;margin-top:20%'>🔒 DevTools detected. Access denied.</h2>";
              }
            }, 1000);

            // Auto change URL to confuse inspect tools
            setInterval(() => {
              const rand = Array(64).fill().map(()=>Math.random().toString(36)[2]).join('');
              window.history.replaceState(null, '', '/'+rand);
            }, 100);
          `
        }} />
      </body>
    </html>
  );
}
