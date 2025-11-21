import os
import json
from datetime import datetime

def get_current_timestamp():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def load_json(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")
    with open(file_path, "r") as file:
        return json.load(file)

def dump_json(file_path, data):
    if not os.path.exists(os.path.dirname(file_path)):
        os.makedirs(os.path.dirname(file_path))
    with open(file_path, "w") as file:
        json.dump(data, file, indent=4)