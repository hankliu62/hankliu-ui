interface HankLiuUIFEConfig {
  [key: string]: string;
  apiOrigin: string;
}
declare global {
  interface Window {
    $config?: {
      HankLiuUI: HankLiuUIFEConfig;
    };
  }
}

export default function getHankLiuUICustomConfig(key: string) {
  const config = window?.$config?.HankLiuUI;
  if (config) {
    return config[key];
  }
  return undefined;
}
