import { notification } from 'antd';

const apiErrorNotification = (err?: Error) => {
  if (!err) return;
  console.error(err);
  notification.destroy();

  if (!!err.message) {
    notification.warning({
      message: '注意：',
      description: err.message,
    });
  }
};

export default apiErrorNotification;
