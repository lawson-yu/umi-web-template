import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link } from 'umi';

const ErrorPage = () => {
  return (
    <Result
      title={'页面不存在'}
      icon={<SmileOutlined />}
      extra={
        <Button type="primary">
          <Link style={{ color: '#ffffff' }} to={'/'}>
            {'返回首页'}
          </Link>
        </Button>
      }
    />
  );
};

export default ErrorPage;
