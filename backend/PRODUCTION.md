# Production Deployment Guide

## What the Warning Means

The warning "This is a development server. Do not use it in a production deployment" appears because Flask's built-in server (`app.run()`) is designed only for development and testing. It's:
- **Single-threaded** - can only handle one request at a time
- **Not optimized** for performance or security
- **Fine for development** - safe to ignore during local testing

## Production Solutions

### Option 1: Waitress (Recommended for Windows/Linux/Mac)

Waitress is a production WSGI server that works on all platforms.

**Install:**
```bash
pip install waitress
```

**Run:**
```bash
waitress-serve --host=0.0.0.0 --port=5000 app:app
```

**Or create a production script** (`run_production.py`):
```python
from waitress import serve
from app import app

if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=5000, threads=4)
```

### Option 2: Gunicorn (Linux/Mac only)

**Install:**
```bash
pip install gunicorn
```

**Run:**
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Option 3: Using Render.com (Already Configured)

Your `render.yaml` is already set up for Render.com deployment. Render will automatically use a production server.

## For Development

The warning is **safe to ignore** during development. The development server is fine for:
- Local testing
- Development on your network (10.10.99.172)
- Testing the contact form

The code has been updated to suppress the warning message during development.

