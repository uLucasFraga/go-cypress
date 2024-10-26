# 🚀 Cypress E2E Testing Framework

[![Cypress Tests](https://github.com/uLucasFraga/go-cypress/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uLucasFraga/go-cypress/actions/workflows/ci.yml)

> Automation project using Cypress + Cucumber + Allure Reports to test e2e features.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- NPM (comes with Node.js)
- Chrome browser

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/uLucasFraga/go-cypress.git

# Navigate to the project folder
cd go-cypress

# Install dependencies
npm install
```

## 🔑 Setting Up Environment Variables:

To avoid exposing sensitive data like usernames and passwords, a cypress.env.json file is used and ignored by version control. You need to create this file in the project root with the following structure:

```json
{
    "USER_STANDARD": "standard_user",
    "INVALID_USER": "invalid_user",
    "USER_LOCKED": "locked_out_user",
    "USER_PASSWORD": "secret_sauce",
    "INVALID_PASSWORD": "invalid_sauce"
}
```

Make sure to replace the values as needed for your testing environment.

## 🎯 Running Tests

# Open Cypress Test Runner
npm run cy:open

# Run tests in headless mode
npm run cy:e2e

# Generate and open Allure report
npm run test:full

## 📁 Project Structure

cypress/
├── e2e/               # Test files
│   ├── features/      # Feature files in Gherkin
│   └── step_definitions/  # Step definitions
├── fixtures/          # Test data
├── pages/            # Page objects
└── support/          # Support files and commands

## 📊 Test Reports

- Reports are automatically generated after test execution
- Allure reports are published to GitHub Pages
- View the latest report on the GitHub Pages

## ⚡ GitHub Actions

Tests are automatically triggered on:

- Push to main branch
- Pull requests to main branch
- Schedule: Twice daily (12:00 and 20:00) on weekdays

## 📝 Features Covered
 - Login
 - Inventory
 - Cart
 - Checkout

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📫 Support

For support, email thifraga27@gmail.com or open an issue.

## 📜 License

This project is licensed under the ISC License - see the LICENSE file for details.

--- 

Made with ❤️ by Thiago Fraga
