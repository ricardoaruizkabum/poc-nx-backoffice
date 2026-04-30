export type MenuItem = {
  moduleName: string;
  title: string;
  url: string;
  icon: React.ComponentType;
  children?: Omit<MenuItem, 'moduleName'>[];
};
