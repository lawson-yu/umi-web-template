import { Component, PropsWithChildren } from 'react';
import { Link } from 'umi';
import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

type IProps = PropsWithChildren<any>;
interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? (
      <Result
        title={'页面遇到一些小问题'}
        icon={<SmileOutlined />}
        extra={
          <Button type="primary">
            <Link style={{ color: '#ffffff' }} to={'/'}>
              {'返回首页'}
            </Link>
          </Button>
        }
      />
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
