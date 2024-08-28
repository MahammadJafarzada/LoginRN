import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Safe Area View
import tw from 'twrnc'; // Import Tailwind

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input field
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    // Handle OTP submission
    console.log('Entered OTP:', otp.join(''));
  };

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-gray-200`}>
      <View style={tw`w-full max-w-md p-6 bg-white rounded-lg shadow-lg`}>
        <Text style={tw`text-3xl font-bold mb-4 text-center text-gray-800`}>Verify OTP</Text>
        <Text style={tw`text-lg mb-6 text-center text-gray-600`}>Please enter the 4-digit code sent to your phone.</Text>
        <View style={tw`flex-row justify-between`}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              ref={(ref) => inputRefs.current[index] = ref}
              placeholder="0"
              placeholderTextColor="#aaa"
            />
          ))}
        </View>
        <TouchableOpacity 
          style={tw`mt-6 w-full p-4 bg-blue-700 rounded-lg shadow-md`}
          onPress={handleSubmit}
        >
          <Text style={tw`text-white text-lg text-center font-semibold`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 60,
    height: 60,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 8,
    fontSize: 24,
    color: '#000',
    backgroundColor: '#f8f8f8',
    elevation: 1, // Add elevation for shadow effect
  },
});

export default OtpVerification;
