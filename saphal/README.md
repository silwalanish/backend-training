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

* Initialize project

```bash
tsc --init
```

* Compile

```bash
tsc
```

* Run the compiled JS file

```bash
node index.js
```
