declare module 'virtual:astrocraft/user-config' {
  const Config: import('./types').AstrocraftConfig;
  export default Config;
}

declare module 'virtual:astrocraft/project-context' {
  export default { root: string };
}