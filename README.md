# react-scripts-ts-ce

Create React App Scripts for TypeScript and React powered Chrome Extensions

Createa  a chrome extension using create-react-app with:

``` bash
$ create-react-app my-ts-ce --scripts-version=@baristalabs/react-scripts-ts-ce
```

start the application with
``` bash
$ yarn start
```

Load the extension in chrome with:

1. Open ```chrome://extensions```
2. Check ```Developer Mode```
3. Click on ```Load Unpacked Extension```
4. Select the ```build``` folder.


---

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

Additional Resources
---(https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Enhancements:
---
 - Typescript Support via Awesome-Typescript-Loader & tslint support.
- Additional loaders: scss-loader, worker-loader, raw-loader
- Webpack 3.x support.
- Includes default code-split entry points for runtime and vendor.


Loader support in Typescript:
---

update tsconfig.json and add loaders via:

```
"compilerOptions" {
    "paths": {
        "loader!*" : ["*"]
    }
}
```

See: https://github.com/Microsoft/TypeScript/issues/10988
Incorporates suggestions from https://developer.epages.com/blog/tech-stories/typescript-codesplitting-treeshaking/ for code splitting and tree shaking.