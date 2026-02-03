# Configuration settings for the application

# Database settings
DATABASE_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'database': 'n8n_practice',
    'user': 'admin'
}

# API settings
API_CONFIG = {
    'base_url': 'https://api.example.com',
    'timeout': 30,
    'max_retries': 3
}

# Feature flags
FEATURES = {
    'enable_notifications': True,
    'enable_logging': True,
    'debug_mode': False
}

# Application settings
APP_CONFIG = {
    'app_name': 'n8n Practice App',
    'version': '1.0.0',
    'environment': 'development'
}

def get_config(config_type):
    """Get configuration by type"""
    configs = {
        'database': DATABASE_CONFIG,
        'api': API_CONFIG,
        'features': FEATURES,
        'app': APP_CONFIG
    }
    return configs.get(config_type, {})
```

4. Click **"Commit new file"**

---

## Now Your Repository Has Multiple Files!

Your repository structure will look like this:
```
n8n-practice/
├── README.md
├── index.html
├── app.js
├── data.json
├── style.css
└── config.py
