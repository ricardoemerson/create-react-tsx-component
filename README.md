<p align="center">
  <br />
  <a title="Learn more about Create Next, React and React Native Component" href="https://github.com/ricardoemerson/create-react-tsx-component">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-react-tsx-component/master/images/cover-logo.png" alt="Create Next, React and React Native Component Logo" width="256"  heigth="256"/>
    </a>
</p>

# What's new in Create Next, React and React Native Component 1.7.0

- The names of Next JS components and pages have rules that are applied automatically and the extension will apply the Pascal Case or Kebab Case format depending on the situation. So now just type the name of the component or page and the extension will apply the correct pattern.
- Added the setting `useExportDefault` that defines if the component will use export default or named export.

## Support

**Create Next, React and React Native Component** is an extension created for **Visual Studio Code**. If you find it useful, please consider supporting it.

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

# Create Next, React and React Native Component

[![Version](https://vsmarketplacebadge.apphb.com/version/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ricardo-emerson.create-react-tsx-component.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component&ssr=false#review-details)

This extension creates a Functional Component for Next, React and React Native using Typescript or Javascript with Styled Components, SASS, LESS or CSS.

## Settings

These are all available configurations with their default values.

![Usage](images/all-settings.png)

## Configuration for the Page or Component File (tsx, jsx or js)

By default pages or components files are created using Typescript with files extension `.tsx`. It is also possible to create pages or components with Javascript with files extension `.jsx` or `.js`.

![Usage](images/component-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.fileExtension": "tsx|jsx|js"
}
```

## Configuration for create a component using Regular Function or Arrow Function

By default pages or components files are created using `Regular Function`. It is also possible to create pages or components using `Arrow Function`.

![Usage](images/use-arrow-function-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.useArrowFunctionComponent": true
}
```

Example of page or component creation using `Regular Function` or `Arrow Function`:

![Usage](images/use-arrow-function-created.png)

## Configuration for create a page or component using React.FC.

By default pages or components files are created whithout uses `React.FC`. It is also possible to create pages or components using `React.FC`.

**Important:** This option it is only applicable if option `Use Arrow Function Component` is enabled.

![Usage](images/use-react-fc-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.useReactFC": true
}
```

Example of page or component creation using `React.FC` or not:

![Usage](images/use-react-fc-created.png)

## Configuration for create a component using import for React to use JSX.

By default pages or components files are created whithout uses the React import (`import React from 'react';`) it the beginning of the component. It is also possible to create pages or components using the React import.

This option should only be used if you are using **React 16 or previous version**.

![Usage](images/use-react-import-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.useReactImport": true
}
```

Example of component creation using `import React from 'react';` or not:

![Usage](images/use-react-import-created.png)

## Configuration for the Style File (Styled Components, SCSS, LESS or CSS)

It is also possible to create components **just for React** using SASS (`.scss`) or CSS (`.css`) to define component styles.

![Usage](images/styles-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.stylesFormat": "Styled Components|SCSS|LESS|CSS"
}
```

> The option `TailwindCSSParser` it is only for my personal use and can not be used.

## Configuration for use (CSS Module with SCSS or CSS)

It is also possible use **CSS Module** in the creation of styles for your components **just for SCSS and CSS**. This option, which by default is disabled, adds the suffix `.module.css` or `.module.scss` to the style files created.

![Usage](images/use-css-module-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.useCSSModule": true
}
```

Example of component creation using styles format `CSS` and `useCSSModule` enabled:

![Usage](images/use-css-module-created.png)

# Usage Examples

You can create a Next, React or React Native Component either by typing in the vscode command palette or by right-clicking any folder in the tree view and use the followed options:

- `Create Next or React Component`
- `Create Next or React Component with Styles`
- `Create Next or React Named Component`
- `Create Next Page`
- `Create React Native Component`
- `Create React Native Component with Styles`
- `Create React Native Named Component`

### All Commands (Ctrl+Shift+P or Cmd+Shift+P):

![Usage](images/show-all-commands.png)

### Mouse Right Click:

![Usage](images/usage-right-mouse-click.png)

## Create Next or React Component with Styles Example:

Select the folder when the component will be created and choose `Create Next or React Component with Styles` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a folder with the component name entered containing the component's `index.tsx` file and the `styles.ts` file for defining the component styles.

## Results

`Card/index.tsx`

![Usage](images/component-created.png)

`Card/styles.ts`

![Usage](images/styled-created.png)

## Create React Native Component with Styles Example:

Select the folder when the component will be created and choose `Create React Native Component with Styles` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a folder with the component name entered containing the component's `index.tsx` file and the `styles.ts` file for defining the component styles.

## Results

`Header/index.tsx`

![Usage](images/rn-component-created.png)

`Header/styles.ts`

![Usage](images/rn-styled-created.png)

## Create Next or React Named Component Example:

Select the folder when the component will be created and choose `Create Next or React Named Component` and enter the name of the component to be created.

![Usage](images/name-of-component.png)

This will create a file with the component name entered.

## Results

`Header.tsx`

![Usage](images/named-component-created.png)

You can also create components without using `Styled Components`.

## Create Next Page Example:

Select the folder when the page will be created and choose `Create Next Page` and enter the name of the page to be created.

![Usage](images/name-of-page.png)

This will create a file with the page name entered.

## Results

`products.tsx`

![Usage](images/next-page-created.png)

## Next JS Recipe

These settings can be used to create pages using the `Next JS Framework`.

### Settings:

![Usage](images/all-settings.png)

Example of `settings.json`:

```json
{
  "createReactTSXComponent.useArrowFunctionComponent": false,
  "createReactTSXComponent.useReactFC": false,
  "createReactTSXComponent.useReactImport": false
}
```

**Enjoy!**
