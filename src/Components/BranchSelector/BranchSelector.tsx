import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
  style?: StyleProp<ViewStyle>;
  onValueChange: (value: any, index: number) => void;
}

const BranchRelator = Styled.View`
  width:100%;
  margin-bottom:15px;
  border-bottom-width:1px;
  border-bottom-color:#000;
`;

const BranchSelector: React.SFC<Props> = ({ style, onValueChange }) => {
  return (
    <BranchRelator style={style ? style : undefined}>
      <RNPickerSelect
        style={{
          placeholder: {
            color: '#B3B3B3',
          },
          done: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 21,
          },
          inputAndroid: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 21,
          },
        }}
        placeholder={{
          label: '상속 목표를 설정해주세요.',
          color: '#B3B3B3',
        }}
        onValueChange={onValueChange}
        items={[
          { label: 'Football', value: 'football', color: 'black' },
          { label: 'Baseball', value: 'baseball', color: 'black' },
          { label: 'Hockey', value: 'hockey', color: 'black' },
        ]}
      />
    </BranchRelator>
  );
};

export default BranchSelector;
