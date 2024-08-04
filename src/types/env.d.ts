interface ImportMetaEnv {
  readonly VITE_MULTIPLAYER_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.fbx" {
  const value: string;
  export default value;
}

declare module "*.gltf" {
  const value: string;
  export default value;
}

declare module "*.glb" {
  const value: string;
  export default value;
}

declare module "*.frag" {
  const value: string;
  export default value;
}

declare module "*.vert" {
  const value: string;
  export default value;
}
