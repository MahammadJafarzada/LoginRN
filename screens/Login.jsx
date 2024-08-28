import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import tw from 'twrnc'; 
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../assets/customs.png';

const Login = ({ route }) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate to the OTP verification screen
    navigation.navigate('OtpVerification');
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ImageBackground 
        source={backgroundImage}  
        style={tw`flex-1 justify-center`} 
        resizeMode="cover" 
      >
        <View style={tw`flex-1 justify-center items-center p-5 bg-black/30`}>
          <Text style={tw`text-3xl text-white mb-5`}>Login</Text>
          <TextInput 
            style={tw`w-4/5 p-3 mb-5 rounded bg-white/80 text-black`} 
            placeholder="Email" 
            placeholderTextColor="#ccc"
          />
          <TextInput 
            style={tw`w-4/5 p-3 mb-5 rounded bg-white/80 text-black`} 
            placeholder="Password" 
            placeholderTextColor="#ccc" 
            secureTextEntry 
          />
          <TouchableOpacity 
            style={tw`w-4/5 p-3 bg-blue-600 rounded`} 
            onPress={handleLogin}
          >
            <Text style={tw`text-white text-center`}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
