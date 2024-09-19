# WEEK 1

## Question

```text
Create a simple Node.js module and use it in a basic application


    Create a Node.js module using Typescript to generate the unique list of cost centers ordered alphabetically from a given array of cost center.

    Example:

        Input: [ [“100”, “Cost Center B”],  [“200”, “Cost Center A”], [“100”, “Cost Center B”], …]

        Output: [
        {
        “id”: “200”,
            “name”: “Cost Center A”
        },
        {
        “id”: “100”,
            “name”: “Cost Center B”
        },
          …
        ]

    Publish the module to NPM and in a separate Node.js application use your module to serve the output of the module in an HTTP endpoint.
```

## Solution

### 1. Create Node.js module (/package)

* Create directory `./package` and configure `package.json`

```bash
mkdir ./package
cd package/

npm init --scope=saphall
npm i typescript --save-dev
```

* Configure `tsconfig.json`

```bash
tsc --init
```

* Create module login in `src/index.ts`

* Build the module

```bash
npx tsc
```

### 2. Pulish the module to NPM

* Login to NPM

```bash
npm login
```

* Publish the package

> `--scope=public` is for setting the scope of namespace package to public i.e. `@saphall/sort-cost-center`

```bash
npm publish --scope=public
```

### 3. Create Node.js application to use the published package

* Create `node_app_test`

```bash
mkdir ./node_app_test
cd node_app_test/

npm init -y
```

* Install the publised package to serve the output in a HTTP endpoint

> Use `express` for minimal and flexible web application framework

```bash
npm install express 
npm install @saphall/sort-cost-center

touch index.js
```

* Write the node script and run

```bash
node index.js
```
