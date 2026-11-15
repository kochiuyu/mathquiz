"""Render the released P1 exit-ticket record as direct-download A4 PDFs.

The source of each PDF is the same versioned paper/key URL used by MathQuiz.
Run after publishing a change to the quiz renderer, then inspect all four PDFs.
"""

import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urlencode


IDS = ".".join((
    "count20a-12", "next1-10", "pictureadd1-38", "parts18a-58",
    "storyadd1-70", "otherway1-3",
))
ROOT = Path(__file__).resolve().parents[1]


def browser_path(explicit):
    if explicit:
        return Path(explicit)
    for name in ("msedge", "chromium", "chromium-browser", "google-chrome"):
        found = shutil.which(name)
        if found:
            return Path(found)
    for candidate in (
        Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
        Path(r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"),
    ):
        if candidate.is_file():
            return candidate
    raise SystemExit("No Edge or Chromium executable found; pass --browser PATH")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default="https://kochiuyu.github.io/mathquiz/")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "papers")
    parser.add_argument("--browser", help="Edge or Chromium executable")
    args = parser.parse_args()
    browser = browser_path(args.browser)
    if not browser.is_file():
        raise SystemExit(f"Browser not found: {browser}")
    args.output_dir.mkdir(parents=True, exist_ok=True)
    base = args.base_url.rstrip("/") + "/"
    with tempfile.TemporaryDirectory(prefix="mathquiz-pdf-") as profile:
        for lang in ("en", "zh"):
            for view in ("paper", "key"):
                query = urlencode({"v": "3", "lang": lang, "p": "1", "items": IDS, "view": view})
                url = base + "?" + query
                path = args.output_dir / f"p1-exit-ticket-{lang}-{view}.pdf"
                command = [str(browser), "--headless", "--disable-gpu", "--no-first-run",
                           "--no-pdf-header-footer", f"--user-data-dir={profile}",
                           f"--print-to-pdf={path.resolve()}", url]
                subprocess.run(command, check=True, timeout=60, capture_output=True)
                data = path.read_bytes()
                if not data.startswith(b"%PDF-") or len(data) < 1000:
                    raise RuntimeError(f"Invalid PDF: {path}")
                print(f"{path.name}: {len(data)} bytes")


if __name__ == "__main__":
    main()
