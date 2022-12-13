import ErrorBoundary from '@/components/ErrorBoundary';
import Provider from '@/contexts';
import { ConfigProvider } from 'antd';
import { Outlet } from 'umi';

function Layout() {
  const userInfo = { avatar: '', name: '' };

  return (
    <Provider userInfo={userInfo}>
      <ErrorBoundary>
        <ConfigProvider>
          <Outlet />
        </ConfigProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default Layout;
