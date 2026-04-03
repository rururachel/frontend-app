const fs = require('fs');
const path = require('path');

class Parser {
    constructor(filePath) {
        this.filePath = path.resolve(filePath);
    }

    parse() {
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`File not found: ${this.filePath}`);
        }

        const fileContent = fs.readFileSync(this.filePath, 'utf-8');
        return this._parseContent(fileContent);
    }

    _parseContent(content) {
        try {
            return JSON.parse(content);
        } catch (error) {
            throw new Error(`Failed to parse JSON: ${error.message}`);
        }
    }
}

module.exports = Parser;