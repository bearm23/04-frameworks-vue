module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
    "^~/(.*)": "<rootDir>/$1",
    "#app": "<rootDir>/node_modules/nuxt/dist/app/index.js",
    "#imports": "<rootDir>/node_modules/nuxt/dist/pages/runtime/composables.js",
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(nuxt3|unenv))",
  ],
  setupFiles: [
    "./test-utils/global-test-utils-config.ts"
  ],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}
