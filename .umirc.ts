import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  npmClient: 'npm',
  history: { type: 'hash' },
  plugins: ['@umijs/plugins/dist/locale'],
  locale: {
    antd: true,
    baseNavigator: false,
    baseSeparator: '-',
    default: 'en-US',
    title: true,
    useLocalStorage: false,
  },
  title: 'UMI WEB TEMPLATE',
  theme: {
    'primary-color': '#1DA57A',
  },
  routes,
});
