declare module "*.png";
declare module "*.jpg";

declare var process: {
  env: {
    NODE_ENV: string;
    PUBLIC_URL: string;
  };
};
