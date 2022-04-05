import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState();
  const GetOTP = () => {
    if (phone && phone.length > 9) {
      console.log('Phone Number : ', phone);
      navigation.navigate('OtpScreen', {phone});
    } else alert('Please enter 10 digit phone number');
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', marginVertical: 100}}>
        Login Screen
      </Text>
      <View
        style={{
          marginVertical: 10,
        }}>
        <TextInput
          value={phone}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            padding: 15,
            width: 300,
            fontSize: 18,
            textAlign: 'center',
            color: '#000',
          }}
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          onChangeText={value => setPhone(value)}
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
        onPress={GetOTP}>
        <Text style={{color: '#fff', fontSize: 22}}>Get Otp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
