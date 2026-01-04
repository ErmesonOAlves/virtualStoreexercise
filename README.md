# Loja Virtual

A simple virtual store application built with React, allowing users to view products fetched from an API and add new products manually.

## Features

- Display a list of products in a grid layout using cards.
- Add new products with title and price via a form.
- Responsive design with PrimeReact components.
- Fetches initial products from an external API.

## Technologies Used

- React
- PrimeReact (for UI components)
- Axios (for API calls, assumed in `api.js`)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd virtualstore
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. View products and add new ones using the form.

## Project Structure

- `src/App.js`: Main app component.
- `src/components/ProductList.js`: Displays the list of products and the add form.
- `src/components/ProductForm.js`: Form to add new products.
- `src/components/ProductCard.js`: Card component for individual products.
- `src/services/api.js`: API service for fetching products.

## Contributing

Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.