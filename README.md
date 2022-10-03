# jest-transformer-esbuild

A simple Jest transformer using esbuild.

Supports:
* mocks
* `istanbul ignore` comments, see below for details
* sync and async transformers
* Jest ESM mode

`istanbul ignore` comments should be defineds as multiline legal comments
```typescript
/*! istanbul ignore next */
```

## Install

```bash
npm install --save-dev @cloudventure/jest-transformer-esbuild

yarn add -D @cloudventure/jest-transformer-esbuild
```

## Usage

`jest.config.json` example:

```JSON
{
    "transform": {
        "^.+\\.tsx?$": ["@cloudventure/jest-transformer-esbuild"]
    }
}
```

### ESM

Please follow this guide for enabling ESM for Jest https://jestjs.io/docs/ecmascript-modules.

`jest.config.json` example:

```JSON
{
    "transform": {
        "^.+\\.tsx?$": ["@cloudventure/jest-transformer-esbuild"]
    },
    "extensionsToTreatAsEsm": [".ts", ".tsx"]
}
```
