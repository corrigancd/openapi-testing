# Steps to run:

## 0. Install packages
`yarn`

## 1. Create build folder
`yarn build`

## 2. Start node server
`yarn start`

# Building the docs 
## Using @redocly/cli
`npx @redocly/cli preview-docs build/swagger.json`   

Open sample on:
`http://localhost:8080`

## Generating as markdown using Widdershins
`npx widdershins build/swagger.json -o widdershins-output/openapi.md`

Preview markdown file generated in `widdershins-output/openapi.md` as you would, e.g. AsciiDoc VS Code extension

## Generating as adoc using @openapitools/openapi-generator-cli
`npx @openapitools/openapi-generator-cli generate -i ./build/swagger.json -g asciidoc -o ./openapi-generator-cli-output `