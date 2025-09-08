/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sea-green': '#20B2AA',
                'sky-blue': '#48CAE4',
                'terra-siena': '#A0522D',
                'beige-pedra': '#F5F5DC',
                'gris-carbo': '#2F2F2F',
            }
        },
    },
    plugins: [],
}