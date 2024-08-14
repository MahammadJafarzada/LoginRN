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
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    Colors,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/styles'

const{ brand,darkLight, primary } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] =  useState(true)
  return (
    <StyledContainer>
        <StatusBar style='dark'/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/icon.png')}/>
            <PageTitle>Flower Crib</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <Formik
                initialValues={{email:'', password:''}}
                onSubmit={(values) =>{
                    console.log(values)
                }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MytextInput
                    label="Email"
                    icon="mail"
                    placeholder="yourmail@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
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
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                        Login
                    </ButtonText>
                </StyledButton>
                <Line/>
                <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" size = {25} color={primary}/>
                    <ButtonText google={true}>
                        Sign in with Google
                    </ButtonText>
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account already?</ExtraText>
                    <TextLink>
                        <TextLinkContent>Sign up</TextLinkContent>
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
export default Login