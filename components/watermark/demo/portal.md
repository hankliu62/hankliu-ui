---
order: 5
title: 模态框水印
---

## zh-CN

在 Modal 与 Drawer 中使用。

## en-US

Use in Modal and Drawer.

```jsx
import { Button, Drawer, Space, Modal, Watermark } from '@hankliu/hankliu-ui';

const Placeholder = () => {
  return (
    <div
      style={{
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(150, 150, 150, 0.2)',
      }}
    >
      A mock height
    </div>
  );
};

const PortalWatermarkDemo = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showDrawer2, setShowDrawer2] = React.useState(false);

  const closeModal = () => setShowModal(false);
  const closeModal2 = () => setShowModal2(false);
  const closeModal3 = () => setShowModal3(false);
  const closeModal4 = () => setShowModal4(false);
  const closeDrawer = () => setShowDrawer(false);
  const closeDrawer2 = () => setShowDrawer2(false);

  return (
    <div>
      <Space size="large">
        <Button type="primary" onClick={() => setShowModal(true)}>
          Show in Modal
        </Button>
        <Button type="primary" onClick={() => setShowModal2(true)}>
          Show in Modal2
        </Button>
        <Button type="primary" onClick={() => setShowModal3(true)}>
          Not Show in Modal3
        </Button>
        <Button type="primary" onClick={() => setShowModal3(true)}>
          Not Show in Modal4
        </Button>
        <Button type="primary" onClick={() => setShowDrawer(true)}>
          Show in Drawer
        </Button>
        <Button type="primary" onClick={() => setShowDrawer2(true)}>
          Not Show in Drawer
        </Button>
      </Space>
      <Watermark content="Hank Liu UI">
        <Modal
          destroyOnClose
          open={showModal}
          title="Modal"
          onCancel={closeModal}
          onOk={closeModal}
        >
          {<Placeholder />}
        </Modal>
        <Modal open={showModal2} title="Modal2" onCancel={closeModal2} onOk={closeModal2}>
          {<Placeholder />}
        </Modal>
        <Drawer destroyOnClose open={showDrawer} title="Drawer" onClose={closeDrawer}>
          {<Placeholder />}
        </Drawer>
      </Watermark>
      <Watermark content="Hank Liu UI" inherit={false}>
        <Drawer destroyOnClose open={showDrawer2} title="Drawer" onClose={closeDrawer2}>
          {<Placeholder />}
        </Drawer>
        <Modal open={showModal3} title="Modal3" onCancel={closeModal3} onOk={closeModal3}>
          {<Placeholder />}
        </Modal>
      </Watermark>
      <Modal
        destroyOnClose
        open={showModal4}
        title="Modal4"
        onCancel={closeModal4}
        onOk={closeModal4}
      >
        {<Placeholder />}
      </Modal>
    </div>
  );
};

ReactDOM.render(<PortalWatermarkDemo />, mountNode);
```
