import { BorderButton, Button } from '~/Components/shared/Button';
import { IC_CALANDAL_EXPIRE, IC_GRAY_THIN_PLUS } from '~/utils/svg';
import React, { useContext, useEffect, useState } from 'react';

import { BranchSelector } from '~/Components/shared';
import DatePicker from 'react-native-datepicker';
import DocumentPicker from 'react-native-document-picker';
import Styled from 'styled-components/native';
import { SubJobsContext } from '~/Context/SubJobs';
import Toast from 'react-native-simple-toast';
import { TodoContext } from '~/Context/Todo';
import { TouchableOpacity } from 'react-native';
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
  const [todoMemo, setTodoMemo] = useState('');
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [attachedFile, setAttachedFile] = useState(undefined);
  const { subJobsLists, dispatchSubJobs } = useContext<ISubJobsContext>(
    SubJobsContext,
  );

  const onChangeExpireDateChange = (edate: Date): void => {
    setExpireDate(edate);
  };

  const handleAddTasks = (): void => {
    dispatchSubJobs && dispatchSubJobs({ type: 'MAKE_ITEM' });
  };

  const handleSubJobName = (jid, text): void => {
    console.log('TodoEdit:React.SFC -> text', text);
    dispatchSubJobs &&
      dispatchSubJobs({ type: 'MODIFY_SUB_JOBNAME', JID: jid, TEXT: text });
  };

  const handleEditCheckOut = (): void => {
    console.log(onewayID(9));
    if (todoName === '') {
      Toast.show('작업 이름이 비어있습니다.');
      return;
    }
    const sJIDs =
      subJobsLists?.length !== 0
        ? subJobsLists?.reduce(
            (acc: Array<string>, cur) => [...acc, cur.sJID],
            [],
          )
        : undefined;

    const newTodoItem: ITodoInfo = {
      JID: onewayID(8),
      JName: todoName,
      sJIDs,
      SJCK: false,
      expireDate,
      note: todoMemo,
    };
    console.log('TodoEdit:React.SFC -> newTodoItem', newTodoItem);
  };

  // Handle FilePicker
  const onClickFilePicker = async (): Promise<void> => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  console.log('TodoEdit:React.SFC -> subJobsLists', subJobsLists);
  return (
    <Container>
      <EditFormBody>
        <TodoNameField
          placeholder="작업 이름"
          onChangeText={(text: string): void => setTodoName(text)}
          value={todoName}
        />

        <SubTaskContainer>
          {subJobsLists?.map((subTask) => (
            <SubTaskField
              key={subTask.sJID}
              placeholder="하위 작업 이름"
              onChangeText={(text: string): void => {
                handleSubJobName(subTask.sJID, text);
              }}
              value={subTask.jobName}
            />
          ))}
          <BorderButton onPress={handleAddTasks}>
            <IC_GRAY_THIN_PLUS />
            <BtnLabel> 하위작업 생성</BtnLabel>
          </BorderButton>
        </SubTaskContainer>

        <BranchSelector
          onValueChange={(value: string): void => console.log(value)}
        />
        <ExpireDatePickerContainer>
          <CalandalExpireICON />
          <ExpireDatePicker
            placeholder="기한 설정"
            date={expireDate}
            onDateChange={onChangeExpireDateChange}
          />
        </ExpireDatePickerContainer>
        <OKButton onPress={onClickFilePicker}>
          <BtnLabel style={{ color: '#fff' }}>File</BtnLabel>
        </OKButton>
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
