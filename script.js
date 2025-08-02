let pyodide = null;

async function loadPyodideAndPackages() {
  pyodide = await loadPyodide();
  console.log("✅ Pyodide بارگذاری شد.");
}

loadPyodideAndPackages();

async function runPython() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");
  try {
    let result = await pyodide.runPythonAsync(code);
    output.className = "success";
    output.innerText = result !== undefined ? result : "✅ اجرا شد بدون خروجی.";
  } catch (err) {
    output.className = "error";
    output.innerText = "❌ خطا:\n" + err;
  }
}

function clearOutput() {
  const output = document.getElementById("output");
  output.innerText = "...";
  output.className = "";
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light");
}
