"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Actual Api Call
    const response = await fetch("/api/link", {
      method: "POST",
      body: JSON.stringify({
        url,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.status == 200) {
      const data = await response.json();
      setShortenedUrl(data.link);
    }
    if (response.status == 400) {
      alert("use http/https link");
    }
    setIsLoading(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Premium background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-slate-100/60 via-zinc-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-stone-100/60 via-slate-100/40 to-transparent rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      <main className="w-full max-w-4xl mx-auto text-center space-y-10 relative">
        {/* Logo and title */}
        <div className="space-y-5">
          <div className="inline-block">
            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
                Zappy
              </h1>
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-slate-900 rounded-full shadow-lg shadow-slate-900/40"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
            The premium URL shortener for modern teams
          </p>
        </div>

        {/* URL shortener form */}
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <form onSubmit={handleShorten} className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-900/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                required
                className="relative w-full text-gray-700 px-7 py-6 text-lg rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/50 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !url}
              className="w-full md:w-auto px-14 py-6 text-lg font-semibold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/0 via-slate-700/50 to-slate-800/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              {isLoading ? (
                <span className="flex items-center justify-center gap-3 relative z-10">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Shortening...
                </span>
              ) : (
                <span className="relative z-10">Shorten URL →</span>
              )}
            </button>
          </form>

          {/* Result */}
          {shortenedUrl && (
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/50 animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900"></div>
              <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                Your shortened URL
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <a
                  href={`https://${shortenedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors break-all"
                >
                  {shortenedUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold shadow-lg shadow-slate-900/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1">
            <div className="w-14 h-14 mb-5 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shadow-lg shadow-slate-900/20">
              ⚡
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">
              Lightning Fast
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Shorten URLs instantly with our optimized global infrastructure
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1">
            <div className="w-14 h-14 mb-5 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shadow-lg shadow-slate-900/20">
              🔒
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">
              Secure & Private
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Enterprise-grade security with end-to-end encryption for your data
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1">
            <div className="w-14 h-14 mb-5 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shadow-lg shadow-slate-900/20">
              📊
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">
              Analytics Ready
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Powerful analytics and insights to track your link performance
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center text-sm text-slate-500 font-medium">
        <p>© 2025 Zappy · Built for speed and reliability</p>
      </footer>
    </div>
  );
}
