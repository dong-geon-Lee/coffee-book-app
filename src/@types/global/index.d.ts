declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.gif";

declare var process: {
  env: {
    NODE_ENV: string;
    PUBLIC_URL: string;
  };
};
