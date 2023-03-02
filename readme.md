# Generating routes and specs:

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
`npx @openapitools/openapi-generator-cli generate -i ./build/swagger.json -g asciidoc -o ./openapi-generator-cli-output`

# SDK
## Generating SDK
This will use the configuration in `openapitools.json` to generate generators for javascript and python. Folders will be created in the temp folder for each SDK

`yarn sdk`
The results will be in `./temp/<output-key-value-in-openapitools.json>`

## Installing SDK
Navigate to the sdk folder and follow the steps in `README.md` to install the SDK

### Running SDK
Start the main application with `yarn start`

Execute the file in `./running_sdks`, these files contain examples of how to hit endpoints with the SDK. This should be done with the relevant execution command. For example `node javascript.js` or `python python.js`

This should hit the correct api and validate returning the `SUCCESS 201` response
