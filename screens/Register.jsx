import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import {Formik} from 'formik'

import {Octicons, Ionicons,Fontisto} from '@expo/vector-icons'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/styles'

const{ brand,darkLight, primary } = Colors;

const Register = () => {
    const [hidePassword, setHidePassword] =  useState(true)
  return (
    <StyledContainer>
        <StatusBar style='dark'/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/icon.png')}/>
            <PageTitle>Flower Crib</PageTitle>
            <SubTitle>Account Register</SubTitle>
            <Formik
                initialValues={{fullName:'', email:'',dateOfBirth:'', password:''}}
                onSubmit={(values) =>{
                    console.log(values)
                }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MytextInput
                    label="Full Name"
                    icon="person"
                    placeholder="Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                />
                <MytextInput
                    label="Email"
                    icon="calendar"
                    placeholder="yourmail@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                />
                <MytextInput
                    label="Date of birth"
                    icon="mail"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={handleBlur('dateOfBirth')}
                    value={values.email}
                />
                <MytextInput
                    label="Password"
                    icon="lock"
                    placeholder="*********"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />
                <MytextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="*********"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                        Login
                    </ButtonText>
                </StyledButton>
                <Line/>
                <ExtraView>
                    <ExtraText>Already have an accounnt?</ExtraText>
                    <TextLink>
                        <TextLinkContent>Login </TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>)}
            </Formik>
        </InnerContainer>
    </StyledContainer>

  )
}
const MytextInput = (label,icon,isPassword,hidePassword,setHidePassword, ...props) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size = {30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword('hidePassword')}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}
export default Register