import os
import mimetypes
from flask import Flask, send_from_directory, abort

ROOT = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

# Ensure WebAssembly is served with the correct MIME so streaming instantiation works.
mimetypes.add_type("application/wasm", ".wasm")


@app.route("/")
def index():
    return send_from_directory(ROOT, "index.html")


@app.route("/<path:path>")
def serve(path):
    full = os.path.join(ROOT, path)
    if os.path.isdir(full):
        idx = os.path.join(full, "index.html")
        if os.path.isfile(idx):
            return send_from_directory(full, "index.html")
        abort(404)
    if not os.path.isfile(full):
        abort(404)
    return send_from_directory(ROOT, path)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, threaded=True)
