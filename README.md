<p align="center">
  <br />
  <a title="Learn more about Create React JS and React Native Component" href="https://github.com/ricardoemerson/create-react-tsx-component">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-react-tsx-component/master/images/cover-logo.png" alt="Create React JS and React Native Component Logo" width="256"  heigth="256"/>
    </a>
</p>

# What's new in Create React JS and React Native Component 1.5

* Adds **Orange Icon** 🔶 for React JS Component Actions.
* Adds **Blue Icon** 🔷 for React Native Component Actions.
* Adds **Create React JS Named Component** for creation of a React JS Component file with a name of component without folder creation.
* Adds **Create React Native Named Component** for creation of a React Native Component file with a name of component without folder creation.
* Adds the setting **useArrowFunctionComponent** that defines if component will be created using an `Arrow Function` or a `Regular Function`.
* Adds the setting **useReactFC** that defines if component will be typed using `React.FC`. **Important:** Only applicable if option `Use Arrow Function Component` and `Use React Import` is enabled.
* Adds the setting **useReactImport** that defines if the import of React (`import React from 'react';`) will be used at the beginning of the component. This option should only be used if you are using **React 17+**, that comes with support for the new JSX transform, where we don’t need to import React to our components anymore to use JSX.
* Adds the setting **useCSSModule** that defines if CSS file name will be sufixed with `.module.css` or `.module.scss`. **Important:** Only applicable if option `Styles Format` is `CSS` or `SCSS`.

## Support

**Create React JS and React Native Component** is an extension created for **Visual Studio Code**. If you find it useful, please consider supporting it.

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="PayPal" href="https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96">
        Donate with PayPal
      </a>
    </td>
    <td>
      <a title="Mercado Pago" href="https://mpago.la/1LvP93a">
        Donate with Mercado Pago
      </a>
    </td>
  </tr>
</table>

# Create React JS and React Native Component

[![Version](https://vsmarketplacebadge.apphb.com/version/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component&ssr=false#review-details)

This extension creates a Functional Component for React JS, React Native and Next JS using Typescript or Javascript with Styled Components, SASS, LESS or CSS.

## Settings

These are all available configurations with their default values.

![Usage](images/all-settings.png)


## Configuration for the Component File (tsx, jsx or js)

By default components files are created using Typescript using files with the extension `.tsx`. It is also possible to create components with Javascript using files with the extension `.jsx` or `.js`.

![Usage](images/component-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.fileExtension": "tsx|jsx|js",
}
```


## Configuration for create a component using Arrow Function or Regular Function

Defines if component will be created using an `Arrow Function` or a `Regular Function`.

![Usage](images/use-arrow-function-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.useArrowFunctionComponent": false,
}
```
Example of component creation using `Arrow Function` or `Regular Function`:

![Usage](images/use-arrow-function-created.png)


## Configuration for create a component using React.FC for typing.

Defines if component will be typed using `React.FC`. **Important:** Only applicable if option `Use Arrow Function Component` and `Use React Import` is enabled.

![Usage](images/use-react-fc-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.useReactFC": false,
}
```
Example of component creation using `React.FC` or not:

![Usage](images/use-react-fc-created.png)


## Configuration for create a component using import for React to use JSX.

Defines if the import of React (`import React from 'react';`) will be used at the beginning of the component.
This option should only be used if you are using **React 17+**, that comes with support for the new JSX transform, where we don’t need to import React to our components anymore to use JSX.

![Usage](images/use-react-import-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.useReactImport": false,
}
```
Example of component creation using `import React from 'react';` or not:

![Usage](images/use-react-import-created.png)

## Configuration for the Style File (Styled Components, SCSS, LESS or CSS)

It is also possible to create components **just for React JS and Next JS** using SASS (`.scss`) or CSS (`.css`) to define component styles.

![Usage](images/styles-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.stylesFormat": "Styled Components|SCSS|LESS|CSS",
}
```
## Configuration for use (CSS Modules with SCSS or CSS)

It is also possible use **CSS Module** in the creation of styles for your components **just for SCSS and CSS**. This option, which by default is disabled, adds the suffix `.module.css` or `.module.scss` to the style files created.

![Usage](images/use-css-module-settings.png)

Example of `settings.json`:

```json
{
  ...
  "createReactTSXComponent.useCSSModule": true,
}
```
Example of component creation using styles format `CSS` and `useCSSModule` enabled:

![Usage](images/use-css-module-created.png)


## Usage Examples

You can create a React or React Native Component either by typing in the vscode command palette or by right-clicking any folder in the tree view and use the followed options:
- `Create React JS Component`
- `Create React JS Component with Styles`
- `Create React JS Named Component`
- `Create React Native Component`
- `Create React Native Component with Styles`
- `Create React Native Named Component`

### All Commands (Ctrl+Shift+P or Cmd+Shift+P):
![Usage](images/show-all-commands.png)

### Mouse Right Click:
![Usage](images/usage-right-mouse-click.png)

## Create React JS Component with Styles Example:

Select the folder when the component will be created and choose `Create React JS Component with Styles` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a folder with the component name entered containing the component's `index.tsx` file and the `styles.ts` file for defining the component styles.

## Results

`Header/index.tsx`

![Usage](images/component-created.png)

`Header/styles.ts`

![Usage](images/styled-created.png)

## Create React Native Component with Styles Example:

Select the folder when the component will be created and choose `Create React Native Component with Styles` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a folder with the component name entered containing the component's `index.tsx` file and the `styles.ts` file for defining the component styles.

## Results

`Card/index.tsx`

![Usage](images/rn-component-created.png)

`Card/styles.ts`

![Usage](images/rn-styled-created.png)


## Create React JS Named Component Example:

Select the folder when the component will be created and choose `Create React JS Named Component` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a file with the component name entered.

## Results

`Header.tsx`

![Usage](images/named-component-created.png)

You can also create components without using `Styled Components`.

## Next JS

These settings can be used to create components using the `Next JS Framework`.

### Settings:

![Usage](images/next-js-settings.png)

Example of `settings.json`:

```
{
  ...
  "createReactTSXComponent.useArrowFunctionComponent": false,
  "createReactTSXComponent.useReactFC": false,
  "createReactTSXComponent.useReactImport": false,
}
```

### Create React JS Named Component Example:

Select the folder when the component will be created and choose `Create React JS Named Component` and enter the name of the component to be created.

![Usage](images/next-js-name-of-component.png)

This will create a file with the component name entered.

#### Results

`Product.tsx`

![Usage](images/next-js-component-created.png)


## ESLint for Airbnb Code Style

To resolve issues such as:

### Using Typescript

- Import `.ts` files without informing the file extension;
- Use `jsx` code in `tsx` files.

The `eslint-import-resolver-typescript` plugin should be used as a development dependency and include the rules and settings below into `.eslintrc.json`.

```json
  ...
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "import/extensions": ["error", "ignorePackages", { "ts": "never", "tsx": "never" }],
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

### Using Javascript

To use `jsx` code in `js` files, include the rule below into `.eslintrc.json`.

```json
  ...
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
  }
}
```

**Enjoy!**
