export default interface CreateComponent {
  componentName: string;
  styleName?: string;
  useReactImport?: boolean;
  useReactFC?: boolean;
  useCSSModule?: boolean;
  usesStylesTailwindCSSParser?: boolean;
  useExportDefault?: boolean;
}
