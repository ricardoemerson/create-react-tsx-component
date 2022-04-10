import CreateComponent from "../../interfaces/CreateComponent";
import pascalCase from "./pascal-case";

export default ({ componentName }: CreateComponent) =>
  `
export * from './${componentName}';
`;
