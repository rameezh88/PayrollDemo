import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.payrolldemo',
  appName: 'payrolldemo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
