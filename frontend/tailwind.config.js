module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: true,
    theme: {
        extend: {},
    },
    variants: {
        opacity: ({ after }) => after(['disabled'])
      },
    plugins: [require('@tailwindcss/forms')],
}
