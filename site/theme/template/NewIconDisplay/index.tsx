import * as IconList from '@hankliu/icons/lib/icons';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Input from '../../../../components/input';
import Select from '../../../../components/select';
import Clipboard from '../../../../components/clipboard';
import Message from '../../../../components/message';

const { Option } = Select;

function NewIconDisplay() {
  const [currentTheme, setCurrentTheme] = React.useState('');
  const [filter, setFilter] = useState('');

  function getList(val: string, theme: string) {
    return Object.keys(IconList)
      .filter((key) => !val || key.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1)
      .filter((iconName) => iconName.includes(theme))
      .map((key) => {
        // @ts-ignore
        const IconItem = IconList[key];
        return (
          <Clipboard
            text={key}
            key={key}
            onSuccess={(e: any) => {
              Message.success('图标名称已复制');
              // e.clearSelection();
            }}
          >
            <div className="new-icon-item">
              <IconItem style={{ fontSize: '32px' }} />
              <p>{key}</p>
            </div>
          </Clipboard>
        );
      });
  }
  const [list, setList] = useState<React.ReactNode[]>([]);
  useEffect(
    debounce(() => {
      setList(getList(filter, currentTheme));
    }, 50),
    [filter, currentTheme],
  );
  return (
    <div>
      <p>
        推荐使用新版 @hankliu/icons 图标方案，
        <a rel="noreferrer" href="https://github.com/ant-design/ant-design-icons" target="_blank">
          查看使用文档
        </a>
      </p>
      <h2>@hankliu/icons 图标列表</h2>
      <div
        style={{
          marginBottom: 20,
          display: 'flex',
          gap: '10px',
        }}
      >
        <Select style={{ width: 200 }} value={currentTheme} onChange={setCurrentTheme}>
          <Option value="">全部</Option>
          <Option value="Filled">Filled</Option>
          <Option value="Outlined">Outlined</Option>
          <Option value="TwoTone">Two-Tone</Option>
          <Option value="Icon">自定义</Option>
        </Select>
        <Input
          placeholder="在此搜索图标，点击图标可复制"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <div>{list}</div>
    </div>
  );
}
export default NewIconDisplay;
