import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const OtpScreen = ({
  route: {
    params: {phone},
  },
  navigation,
}) => {
  const [otp, setOtp] = useState();
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    signInWithPhone();
  }, []);

  const signInWithPhone = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error.message);
    }
  };

  const confirmCode = async () => {
    try {
      const response = await confirm.confirm(otp);
      if (response) {
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', marginVertical: 100}}>
        OTP Screen
      </Text>
      <View
        style={{
          marginVertical: 10,
        }}>
        <TextInput
          value={otp}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            padding: 15,
            width: 200,
            fontSize: 18,
            textAlign: 'center',
            color: '#000',
          }}
          placeholder="Enter Otp"
          keyboardType="number-pad"
          onChangeText={value => setOtp(value)}
          autoFocus
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 5,
          margin: 40,
          width: 300,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => confirmCode()}>
        <Text style={{color: '#fff', fontSize: 22}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
