export const criticalCSS = `
/* Critical CSS for above-the-fold content */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: none;
}

/* Hero section critical styles */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-30 {
  z-index: 30;
}

.w-full {
  width: 100%;
}

.h-\\[50vh\\] {
  height: 50vh;
}

@media (min-width: 640px) {
  .sm\\:h-\\[60vh\\] {
    height: 60vh;
  }
}

@media (min-width: 768px) {
  .md\\:h-\\[70vh\\] {
    height: 70vh;
  }
}

@media (min-width: 1024px) {
  .lg\\:h-\\[80vh\\] {
    height: 80vh;
  }
}

@media (min-width: 1280px) {
  .xl\\:h-\\[85vh\\] {
    height: 85vh;
  }
}

.overflow-hidden {
  overflow: hidden;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

/* Text styles */
.text-white {
  color: rgb(255 255 255);
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.leading-none {
  line-height: 1;
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.opacity-100 {
  opacity: 1;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

@media (min-width: 640px) {
  .sm\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

@media (min-width: 768px) {
  .md\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .lg\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}

@media (min-width: 1280px) {
  .xl\\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }
}

@media (min-width: 1536px) {
  .2xl\\:text-8xl {
    font-size: 6rem;
    line-height: 1;
  }
}

.font-thin {
  font-weight: 100;
}

.font-bold {
  font-weight: 700;
}

/* Container styles */
.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.text-left {
  text-align: left;
}

.max-w-full {
  max-width: 100%;
}

/* Background overlay */
.bg-black\\/30 {
  background-color: rgb(0 0 0 / 0.3);
}

/* Object fit for images */
.object-cover {
  object-fit: cover;
}

.object-center {
  object-position: center;
}

/* Transitions */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-500 {
  transition-duration: 500ms;
}

/* Loading animation */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

/* Gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-gray-900 {
  --tw-gradient-from: #111827;
  --tw-gradient-to: rgb(17 24 39 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-gray-800 {
  --tw-gradient-to: rgb(31 41 55 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1f2937, var(--tw-gradient-to);
}

.to-gray-700 {
  --tw-gradient-to: #374151;
}

.to-gray-900 {
  --tw-gradient-to: #111827;
}
`; 