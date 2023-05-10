export default interface CreateComponent {
  componentName: string;
  styleName?: string;
  useReactImport?: boolean;
  useReactFC?: boolean;
  useCSSModule?: boolean;
  usesStylesCVA?: boolean;
  useExportDefault?: boolean;
}
