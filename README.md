# `benthos stream ui`

> A react based UI for benthos streams that be used for debugging runtime configuration

### Requirements

- [Node.js](https://nodejs.org/en/)

### Setup

##### Config setup
1. `touch .env.local` (.gitignored)
2. add your custom benthos host and port in this format
```.dotenv
VITE_BENTHOS_HOST=0.0.0.0
VITE_BENTHOS_PORT=5195
```
defaults to `localhost:4195`

#### Development
- `npm start` # spins up dev server
- `npm run format` # formats code via prettier

### Production build

- `npm run build`
