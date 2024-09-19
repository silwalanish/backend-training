# WEEK 1

## Question

```text
Create a simple Node.js module and use it in a basic application


    Create a Node.js module using Typescript to generate a unique list of cost centers ordered alphabetically from a given array of cost centers.

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

### 2. Publish the module to NPM

* Login to NPM

```bash
npm login
```

* Publish the package

> `--scope=public` is for setting the scope of the namespace package to public i.e. `@saphall/sort-cost-center`

```bash
npm publish --scope=public
```

![image](https://github.com/user-attachments/assets/7747e4ae-435f-41d6-bfe1-29fee30a6205)


### 3. Create a Node.js application to use the published package

* Create `node_app_test`

```bash
mkdir ./node_app_test
cd node_app_test/

npm init -y
```

* Install the published package to serve the output in an HTTP endpoint

> Use `express` for a minimal and flexible web application framework

```bash
npm install express 
npm install @saphall/sort-cost-center

touch index.js
```

* Write the node script and run

```bash
node index.js
```

![image](https://github.com/user-attachments/assets/c841ee89-a643-4c33-b509-4a382748f068)

