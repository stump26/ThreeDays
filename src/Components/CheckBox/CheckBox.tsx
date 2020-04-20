import React from 'react';
import styled from 'styled-components/native';

import { IC_CHKBOX_OFF, IC_CHKBOX_ON } from '~/Utils/svg';

const ChkBoxContainer = styled.TouchableWithoutFeedback`
  border-radius: 8px;
`;

const CheckBoxField = styled.View`
  align-items: center;
  flex-basis: 20%;
`;

const CheckBox = ({
  id,
  value,
  size,
  handleChecker,
}: {
  id: number;
  value: boolean;
  size?: { width: number; height: number };
  handleChecker: (id: number) => void;
}) => {
  return (
    <CheckBoxField>
      <ChkBoxContainer
        onPress={() => {
          handleChecker(id);
        }}
      >
        {value ? (
          <IC_CHKBOX_ON width={size?.width || 30} height={size?.height || 30} />
        ) : (
          <IC_CHKBOX_OFF
            width={size?.width || 30}
            height={size?.height || 30}
          />
        )}
      </ChkBoxContainer>
    </CheckBoxField>
  );
};

export default CheckBox;
