const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = path.resolve(__dirname, filePath);
  }

  parse() {
    try {
      const fileContent = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error parsing file: ${error.message}`);
      return null;
    }
  }

  static validateSchema(data, schema) {
    return Object.keys(schema).every(key => {
      const expectedType = schema[key];
      return typeof data[key] === expectedType;
    });
  }
}

module.exports = Parser;