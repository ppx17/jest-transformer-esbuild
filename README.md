# jest-transformer-esbuild

A simple Jest transformer using esbuild, supports mocks and `istanbul ignore` comments.

* `istanbul ignore` must be defines as multiline legal comments, for example

```typescript
/*! istanbul ignore next */
```

## Install

```bash
npm install --save-dev @cloudventure/jest-transformer-esbuild

yarn add -D @cloudventure/jest-transformer-esbuild
```

## Usage

```JSON
{
    "transform": {
        "^.+\\.tsx?$": ["@cloudventure/jest-transformer-esbuild"]
    }
}
```
