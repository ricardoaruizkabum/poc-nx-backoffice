import { ModuleFederationConfig } from '@nx/module-federation';

console.log('process.env.PRODUCT_REMOTE_URL', process.env.PRODUCT_REMOTE_URL);

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [
    ['product', process.env.PRODUCT_REMOTE_URL ?? 'http://localhost:4201'],
    [
      'pc_builder',
      process.env.PC_BUILDER_REMOTE_URL ?? 'http://localhost:4202',
    ],
    [
      'manager_cx',
      process.env.MANAGER_CX_REMOTE_URL ?? 'http://localhost:4203',
    ],
  ],
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
