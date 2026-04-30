import { createContext, useContext, useState } from 'react';

type ModuleProviderState = {
  moduleName: string;
};

type ModuleProviderActions = {
  setModuleName: (moduleName: string) => void;
};

type ModuleProviderContextType = ModuleProviderState & ModuleProviderActions;

const initialState: ModuleProviderState = {
  moduleName: '',
};

const ModuleProviderContext = createContext<ModuleProviderContextType>({
  ...initialState,
  setModuleName: () => {},
});

export function ModuleProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<ModuleProviderState>(initialState);

  const setModuleName = (moduleName: string) =>
    setValues((prev) => ({ ...prev, moduleName }));

  return (
    <ModuleProviderContext.Provider value={{ ...values, setModuleName }}>
      {children}
    </ModuleProviderContext.Provider>
  );
}

export function useModule() {
  const context = useContext(ModuleProviderContext);

  if (context === undefined)
    throw new Error('useModule must be used within a ModuleProvider');

  return context;
}
