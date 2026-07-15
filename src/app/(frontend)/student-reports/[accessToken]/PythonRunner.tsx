"use client";

import { useState } from "react";
import styles from "./StudentReport.module.css";

// Pyodide chỉ được nạp từ CDN khi người xem bấm "Chạy thử", nên không ảnh hưởng
// tốc độ tải trang. Một interpreter dùng chung cho mọi khối Python trên trang.
const PYODIDE_VERSION = "0.26.4";
const PYODIDE_BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodidePromise: Promise<any> | null = null;

function loadPyodide(): Promise<any> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    const w = window as any;
    const init = () =>
      w.loadPyodide({ indexURL: PYODIDE_BASE }).then(resolve).catch(reject);
    if (w.loadPyodide) {
      init();
      return;
    }
    const script = document.createElement("script");
    script.src = `${PYODIDE_BASE}pyodide.js`;
    script.onload = init;
    script.onerror = () => reject(new Error("Không tải được trình chạy Python."));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

export default function PythonRunner({ code }: { code: string }) {
  const [output, setOutput] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [running, setRunning] = useState(false);

  const run = async () => {
    setRunning(true);
    setIsError(false);
    setOutput("");
    try {
      const pyodide = await loadPyodide();
      let buffer = "";
      const append = (s: string) => {
        buffer += s + "\n";
      };
      pyodide.setStdout({ batched: append });
      pyodide.setStderr({ batched: append });
      await pyodide.runPythonAsync(code);
      setOutput(buffer || "(Chương trình không in ra gì)");
    } catch (err) {
      setIsError(true);
      setOutput(err instanceof Error ? err.message : String(err));
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className={styles.python}>
      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
      <div className={styles.pyRow}>
        <button className={styles.runBtn} onClick={run} disabled={running}>
          {running ? "⏳ Đang chạy…" : "▶ Chạy thử"}
        </button>
        <span className={styles.pyNote}>Chạy trực tiếp trên trình duyệt (Pyodide)</span>
      </div>
      {output !== null && (
        <div>
          <div className={styles.pyOutLabel}>Kết quả:</div>
          <pre className={`${styles.pyOut} ${isError ? styles.pyOutError : ""}`}>
            <code>{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
