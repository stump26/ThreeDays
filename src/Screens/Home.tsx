import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { UserContext } from '~/Context/User';

const Home = () => {
  const { logout } = useContext<IUserContext>(UserContext);
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
