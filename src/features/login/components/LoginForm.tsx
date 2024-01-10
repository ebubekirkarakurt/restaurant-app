import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userDetail } from '../../../utils/userDetail';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navigation = useAppNavigation();

  const onHandleSubmit = handleSubmit((data) => {
    const { email, password } = data;
    userDetail.map((item) => {
      if (item.password === password && item.email === email) {
        navigation.navigate('Restaurants');
      }
    });
  });

  return (
    <View style={styles.main}>
      <Controller
        {...register('email')}
        name="email"
        control={control}
        rules={{
          required: 'Mail girmek zorunludur',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Mail adresinizi giriniz"
              />
            </View>
          );
        }}
      />

      {errors.email && (
        <Text style={styles.errTxt}>{errors.email.message} </Text>
      )}

      <Controller
        {...register('password')}
        name="password"
        control={control}
        rules={{
          required: 'Şifre girmek zorunludur',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Şifrenizi giriniz"
              />
            </View>
          );
        }}
      />

      {errors.password && (
        <Text style={styles.errTxt}> {errors.password.message} </Text>
      )}

      <Pressable style={styles.btn} onPress={onHandleSubmit}>
        <Text style={styles.btnTxt}>Giriş yap</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.txt}>Hesabınız yok mu? Hesap oluşturun..</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
  },
  input: {
    backgroundColor: 'lightgrey',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    width: '100%',
  },

  errTxt: {
    color: 'red',
    paddingStart: 20,
    fontWeight: '600',
  },

  btn: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 30,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  txt: {
    fontSize: 12,
    fontWeight: '600',
    color: 'gray',
  },
});
