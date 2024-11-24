export type ComponentModule = {
  component: React.FC;
  properties: { [key: string]: { type: string; label: string; value: any } };
};

type ComponentInfo = {
  name: string;
  component: React.FC;
  properties: { [key: string]: { type: string; label: string; value: any } };
};

export const loadComponents = (): ComponentInfo[] => {
  const components: Record<string, { default: ComponentModule }> = import.meta.glob('./components/*.tsx', { eager: true });
  return Object.entries(components).map(([path, module]): ComponentInfo => {
    const componentName = path.split('/').pop()?.replace('.tsx', '') ?? '';
    const { component, properties } = module.default;
    return { name: componentName, component, properties };
  });
};