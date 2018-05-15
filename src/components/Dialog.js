import {Modal, Button} from 'antd';
import React from 'react';
import 'antd/dist/antd.css'

export class Dialog extends React.Component {
  state = {
    visible: false,
    title: "alitest",
    content: "wish to pass :)"
  }

  showDialog = (props) => {
    this.setState({
      visible: true,
      title: props.title,
      content: props.message
    });
  }

  handleOk = () => {
    console.log('you clicked ok');
    this.setState({
      visible: false
    });
  }
  handleCancel = () => {
    console.log('you clicked cancel');
    this.setState({
      visible: false
    });
  }

  render() {
    return (
        <div>
          <Button type="primary" onClick={this.showDialog}>Open</Button>
          <Modal
              title={this.state.title}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
            <p>{this.state.content}</p>
          </Modal>
        </div>
    );
  }
}

//
// showDialog({title: '标题', message: '内容信息'}).then(() => {
//   console.log('you clicked ok'),
// }, () => {
//   console.log('you clicked cancel),
// });

