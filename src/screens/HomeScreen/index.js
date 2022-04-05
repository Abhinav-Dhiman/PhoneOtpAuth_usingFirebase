import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  console.log(auth().currentUser);
  const [num, setNum] = useState(null);
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      <View>
        <Text style={{fontSize: 30, color: '#000'}}>HomeScreen</Text>
        <View style={{margin: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              padding: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
            onPress={() => setNum(auth().currentUser.phoneNumber)}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Get User</Text>
          </TouchableOpacity>
        </View>
      </View>
      {num ? (
        <View>
          <Text
            style={{
              padding: 20,
              borderRadius: 50,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Currently signed in No : {num}
          </Text>
        </View>
      ) : null}

      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(() => {
              alert('Successfully Signed Out');
              navigation.navigate('LoginScreen');
            })
            .catch(err => console.log(err.message))
        }
        style={{
          backgroundColor: 'red',
          padding: 10,
          width: 120,
          height: 120,
          borderRadius: 150,
          justifyContent: 'center',
          alignItems: 'center',
          top: 300,
          left: 100,
        }}>
        <Text style={{color: '#fff', fontSize: 16}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
