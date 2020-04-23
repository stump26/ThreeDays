import { BorderButton, Button } from '~/Components/shared/Button';
import { IC_GRAY_THIN_PLUS, IC_PLUS } from '~/utils/svg';
import React, { useState } from 'react';

import { BranchSelector } from '~/Components/shared';
import Styled from 'styled-components/native';

interface SubJobTypes {
  jobId: string;
  jobName: string;
  sjck: boolean;
}

const Container = Styled.View`
  flex:1;
  width: 97%;
  flex-direction:column;
  align-items:center;
  margin:0 auto;
  padding:0;
`;

const OKButton = Styled(Button)`
  width: 100%;
  background:#00DF9B;
  margin:5px 5px;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  border:none;
`;

const BtnLabel = Styled.Text``;

const EditFormBody = Styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  flex:1;
  width: 85%;
  padding:0;
  margin:0;
`;

const InputField = Styled.TextInput.attrs(() => ({
  placeholderTextColor: '#979797',
}))`
  width:100%;
  border-bottom-width:1px;
  border-bottom-color:#000;
`;

const TodoNameField = Styled(InputField)`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom:15px;
`;

const TextField = Styled(InputField)`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-bottom:15px;
`;

const SubTaskContainer = Styled.View`
  width:85%;
  margin-bottom:20px;
  align-self:flex-end;
  flex-direction:column;
`;

const SubTaskField = Styled(InputField)`
  width:100%;
  font-weight: bold;
  font-size: 14px;
  margin-bottom:4px;
  padding:3px 0;
`;

const MemoField = Styled.TextInput.attrs(() => ({
  multiline: true,
  placeholderTextColor: '#B3B3B3',
}))`
  width:100%;
  background: #F7F7F7;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  align-items:flex-start;
`;

const TodoEdit: React.SFC = () => {
  const [todoName, setTodoName] = useState('');
  const [subTasks, setSubTasks] = useState<Array<SubJobTypes>>([]);
  const [todoMemo, setTodoMemo] = useState('');

  const handleAddTasks = (): void => {
    const defualtTaskForm = {
      jobId: Math.random().toString(36).substring(6),
      jobName: '',
      sjck: false,
    };
    setSubTasks([...subTasks, defualtTaskForm]);
  };

  return (
    <Container>
      <EditFormBody>
        <TodoNameField
          placeholder="목표"
          onChangeText={(text): void => setTodoName(text)}
          value={todoName}
        />

        <SubTaskContainer>
          {subTasks.map((subTask) => (
            <SubTaskField
              key={subTask.jobId}
              placeholder="하위 작업 이름"
              value={subTask.jobName}
            />
          ))}
          <BorderButton onPress={handleAddTasks}>
            <IC_GRAY_THIN_PLUS />
            <BtnLabel> 하위작업 생성</BtnLabel>
          </BorderButton>
        </SubTaskContainer>

        <BranchSelector onValueChange={(value): void => console.log(value)} />
        <TextField placeholder="기간 설정" />
        <TextField placeholder="파일 추가" />
        <MemoField
          numberOfLines={7}
          onChangeText={(text): void => setTodoMemo(text)}
          placeholder="메모를 입력하세요"
          value={todoMemo}
        />
      </EditFormBody>
      <OKButton>
        <BtnLabel style={{ color: '#fff' }}>확인</BtnLabel>
      </OKButton>
    </Container>
  );
};

export default TodoEdit;
