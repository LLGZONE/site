import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, message } from 'antd';
import http from 'lib/http';
import * as URL from 'constants/api/topfeed';
import LabelInput from 'ui/label-input';
import { State } from 'react-powerplug';
import './index.less';

class AccountSetting extends React.Component<{
  path: string;
  username: string;
  description: string;
  update_info: (any) => void;
}> {
  render() {
    const { username, description, update_info } = this.props;
    return (
      <div className="account-setting-container">
        <LabelInput label={'username'} disabled value={username} />
        <LabelInput label={'description'} disabled value={description} />
        <State
          initial={{ loading: false, visible: false, username, description }}
        >
          {({ state, setState }) => (
            <React.Fragment>
              <Modal
                confirmLoading={state.loading}
                visible={state.visible}
                className={'edit-info-modal'}
                onCancel={() => {
                  setState({
                    visible: false
                  });
                }}
                onOk={async () => {
                  setState({
                    loading: true
                  });
                  try {
                    const result = await http<any>({
                      method: 'POST',
                      url: URL.user_update,
                      data: {
                        user_info: {
                          username: state.username,
                          description: state.description
                        }
                      }
                    });

                    update_info(result.user_info);
                    setState({ visible: false });
                    message.success('信息修改成功');
                  } finally {
                    setState({
                      loading: false
                    });
                  }
                }}
              >
                <div className="edit-info">
                  <LabelInput
                    label={'username'}
                    value={state.username}
                    onChange={e => {
                      setState({ username: e.target.value });
                    }}
                  />
                  <LabelInput
                    label={'description'}
                    value={state.description}
                    onChange={e => {
                      setState({
                        description: e.target.value
                      });
                    }}
                  />
                </div>
              </Modal>
              <Button onClick={() => setState({ visible: true })}>
                修改信息
              </Button>
            </React.Fragment>
          )}
        </State>
      </div>
    );
  }
}
const mapState = state => {
  return {
    username: state.user_info.username,
    description: state.user_info.description
  };
};
const mapDispatch = state => ({
  update_info: state.user_info.update
});
export default connect(
  mapState,
  mapDispatch
)(AccountSetting);
