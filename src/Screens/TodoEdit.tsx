import { BorderButton, Button } from '~/Components/shared/Button';
import { IC_CALANDAL_EXPIRE, IC_GRAY_THIN_PLUS, IC_PLUS } from '~/utils/svg';
import React, { useContext, useState } from 'react';

import { BranchSelector } from '~/Components/shared';
import DatePicker from 'react-native-datepicker';
import Styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import { TodoContext } from '~/Context/Todo';
import { onewayID } from '~/utils/hashid';

interface SubJobTypes {
  sJID: string;
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
  padding:40px 0;
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

const ExpireDatePickerContainer = Styled.View`
  width:100%;
  flex-direction:row;
  margin-bottom:15px;
`;

const ExpireDatePicker = Styled(DatePicker).attrs(() => {
  function getFormatDate(date: Date): string {
    const year = date.getFullYear();
    const month = 1 + date.getMonth();
    const day = date.getDate();

    return `${year}-${month >= 10 ? month : '0' + month}-${
      day >= 10 ? day : '0' + day
    }`;
  }
  return {
    minDate: getFormatDate(new Date()),
    mode: 'datetime',
    androidMode: 'spinner',
    showIcon: false,
    customStyles: {
      dateInput: {
        borderWidth: 0,
      },
      dateTouchBody: {
        color: '#979797',
      },
    },
  };
})`
  flex:1;
  flex-basis:80%;
  margin-left:10px;
  border-bottom-width:2px;
  border-bottom-color:#979797;
`;

const CalandalExpireICON = Styled(IC_CALANDAL_EXPIRE)`
  width:27px;
  height:27px;
  top:2px;
  margin:auto 2px;
`;

const TodoEdit: React.SFC = () => {
  const { dispatchTodo } = useContext<ITodoContext>(TodoContext);
  const [todoName, setTodoName] = useState('');
  const [subTasks, setSubTasks] = useState<Array<SubJobTypes>>([]);
  const [todoMemo, setTodoMemo] = useState('');
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);

  const onChangeExpireDateChange = (edate: Date): void => {
    setExpireDate(edate);
  };
  const handleAddTasks = (): void => {
    const defualtTaskForm: SubJobTypes = {
      sJID: onewayID(9),
      jobName: '',
      sjck: false,
    };
    setSubTasks([...subTasks, defualtTaskForm]);
  };

  const handleEditCheckOut = (): void => {
    if (todoName === '') {
      Toast.show('작업 이름이 비어있습니다.');
      return;
      // throw new Error('task name not setted');
    }
    const sJIDs =
      subTasks.length !== 0
        ? subTasks.reduce((acc: Array<string>, cur) => [...acc, cur.sJID], [])
        : undefined;

    const newTodoItem: ITodoInfo = {
      JID: onewayID(8),
      JName: todoName,
      sJIDs,
      SJCK: false,
      expireDate,
      note: todoMemo,
    };
  };

  return (
    <Container>
      <EditFormBody>
        <TodoNameField
          placeholder="작업 이름"
          onChangeText={(text: string): void => setTodoName(text)}
          value={todoName}
        />

        <SubTaskContainer>
          {subTasks.map((subTask) => (
            <SubTaskField
              key={subTask.sJID}
              placeholder="하위 작업 이름"
              value={subTask.jobName}
            />
          ))}
          <BorderButton onPress={handleAddTasks}>
            <IC_GRAY_THIN_PLUS />
            <BtnLabel> 하위작업 생성</BtnLabel>
          </BorderButton>
        </SubTaskContainer>

        <BranchSelector onValueChange={(value: string): void => console.log(value)} />
        <ExpireDatePickerContainer>
          <CalandalExpireICON />
          <ExpireDatePicker
            placeholder="기한 설정"
            date={expireDate}
            onDateChange={onChangeExpireDateChange}
          />
        </ExpireDatePickerContainer>
        <TextField placeholder="파일 추가" />
        <MemoField
          numberOfLines={7}
          onChangeText={(text: string): void => setTodoMemo(text)}
          placeholder="메모를 입력하세요"
          value={todoMemo}
        />
      </EditFormBody>
      <OKButton onPress={handleEditCheckOut}>
        <BtnLabel style={{ color: '#fff' }}>확인</BtnLabel>
      </OKButton>
    </Container>
  );
};

export default TodoEdit;
