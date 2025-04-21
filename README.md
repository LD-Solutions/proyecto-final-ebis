# Finsmart

A comprehensive financial management platform offering investment tools, portfolio tracking, and financial education services. Finsmart helps users make informed financial decisions through a suite of tools and educational resources.

## Project Overview

Finsmart is a web-based financial management platform designed to provide users with:
- Professional investment tools and portfolio tracking
- Real-time stock market information
- Educational resources for financial literacy
- Personalized savings and investment calculators

## Project Structure

```
proyecto-final-ebis/
├── assets/
│   ├── data/         # JSON data files (portfolio data)
│   ├── icons/        # Brand assets (favicon, logo)
│   ├── images/       # Web content images
│   └── styles/       # CSS styling files
├── dist/             # Compiled TypeScript output
├── docs/            # Project documentation
├── src/             # TypeScript source files
│   ├── dashboard.ts
│   └── typescript.ts
├── views/           # HTML views/pages
└── index.html       # Main entry point
```

## Features

### Core Functionality
- **Portfolio Management (Mi cartera)**: Personal investment portfolio tracking and analysis
- **Market Status (Estado de la bolsa)**: Real-time stock market information and trends
- **Savings Calculator (Calculadora de ahorro)**: Tool for planning and tracking savings goals

### Additional Services
- **Financial Education (Fórmate con nosotros)**: Educational resources and training materials
- **News Section (Noticias)**: Latest financial news and market updates
- **Company Information (Conócenos)**: About us and company details
- **Contact (Contacto)**: Customer support and contact information

## Technical Stack

### Frontend Technologies
- HTML5
- CSS3
- TypeScript

### TypeScript Configuration
- Target: ES2022
- Strict type checking enabled
- Declaration files generation
- Output directory: ./dist
- Additional features:
  - No implicit any
  - No emit on error
  - Comments removed in output

## Development

### Version Control
The project uses Git for version control with the following main branches:
- `main`: Production-ready code
- `noticias`: News feature development
- `formacion`: Training/education feature development

### Build Process
1. Ensure TypeScript is installed
2. Compile using the provided tsconfig.json configuration
3. Output is generated in the ./dist directory

## Legal Information

Finsmart S.L. is a regulated financial services company:
- Authorized by the Banco de España and the European Central Bank
- Regulated by the Comisión Nacional del Mercado de Valores (CNMV)
- Registered office: Calle de la Vida, 42, Madrid, 28001, España

## Getting Started

### Prerequisites
- Node.js and npm
- TypeScript compiler
- Modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile TypeScript:
   ```bash
   tsc
   ```

4. Serve the project locally using a web server of your choice

### Development Setup
1. Install development dependencies
2. Configure your IDE for TypeScript support
3. Ensure you have the necessary permissions for the repository

## Contributing

### Guidelines
1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Submit a pull request

### Branch Naming Convention
- Feature branches: `feature/[feature-name]`
- Bug fixes: `fix/[bug-description]`
- Documentation: `docs/[description]`

### Pull Request Process
1. Update documentation as needed
2. Follow the existing code style
3. Ensure all tests pass
4. Request review from team members

## License

All rights reserved. This project is proprietary and confidential.

