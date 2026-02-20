"use client";

import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!charset) {
      setPassword("");
      return;
    }
    let result = "";
    const arr = new Uint8Array(length);
    crypto.getRandomValues(arr);
    for (let i = 0; i < length; i++) {
      result += charset[arr[i] % charset.length];
    }
    setPassword(result);
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Şifre Oluşturucu</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex items-center gap-2 text-gray-300">
          <span className="text-sm">Uzunluk:</span>
          <input
            type="number"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value) || 16)}
            className="w-16 px-2 py-1 rounded bg-dark-tertiary border border-gray-600 text-white text-sm"
          />
        </label>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            className="rounded text-accent-green"
          />
          <span className="text-sm">Büyük harf</span>
        </label>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="rounded text-accent-green"
          />
          <span className="text-sm">Küçük harf</span>
        </label>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            className="rounded text-accent-green"
          />
          <span className="text-sm">Rakam</span>
        </label>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
            className="rounded text-accent-green"
          />
          <span className="text-sm">Sembol</span>
        </label>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          readOnly
          value={password}
          className="flex-1 px-4 py-2 rounded-lg bg-dark-tertiary border border-gray-600 text-white font-mono text-sm"
          placeholder="Oluştur butonuna tıklayın"
        />
        <button
          type="button"
          onClick={generate}
          className="px-4 py-2 rounded-lg bg-accent-green text-dark-primary font-semibold hover:bg-accent-green/90 transition-colors"
        >
          Oluştur
        </button>
        <button
          type="button"
          onClick={copy}
          disabled={!password}
          className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700/50 disabled:opacity-50 transition-colors"
        >
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
    </div>
  );
}
