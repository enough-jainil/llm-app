# LLM Price Check

A React application that allows users to compare and calculate the exact prices for various Large Language Models (LLMs) from different providers.

![LLM Price Check Screenshot](screenshot.png)

## Features

- **Price Comparison Table**: Browse through a comprehensive list of LLMs from different providers along with their quality ratings, context window sizes, and pricing information.
- **Search Functionality**: Quickly find specific models or providers using the search bar.
- **Pricing Calculator**: Calculate the exact cost for using specific LLMs based on input and output tokens.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Tech Stack

- React
- TypeScript
- Vite
- CSS (no external UI libraries)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/llm-price-check.git
   cd llm-price-check
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app running.

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Data Source

The LLM pricing data is sourced from various provider websites and is maintained in the `src/data/llmModels.ts` file. To add or update pricing information, you can modify this file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
