import { Select } from 'antd';

const { Option } = Select

export const optionsGenerator = (itemsList) => {
  return itemsList.map(item => {
    return <Option key={item.id}>{item.name}</Option>
  })
}
