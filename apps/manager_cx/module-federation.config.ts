import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'manager_cx',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  additionalShared: [
    [
      'react-router-dom',
      { singleton: true, strictVersion: false, requiredVersion: '^6.0.0' },
    ],
  ],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
