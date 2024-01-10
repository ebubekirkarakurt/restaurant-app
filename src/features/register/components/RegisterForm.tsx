import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userDetail } from '../../../utils/userDetail';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';

type Props = {};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = (props: Props) => {
  const schema = z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Paralolar eşleşmiyor..',
      path: ['confirmPassword'],
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
    userDetail.push({ email, password });
    Alert.alert(
      'Giriş Başarılı',
      'Lütfen yöndlendirilen sayfadan giriş yapınız..',
      [
        {
          text: 'Yönlendir',
          onPress: () => navigation.goBack(),
        },
      ],
    );
  });

  return (
    <View style={styles.main}>
      <Controller
        {...register('firstName')}
        name="firstName"
        control={control}
        rules={{
          required: 'First Name required.',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Please enter your firstname.."
              />
            </View>
          );
        }}
      />

      {errors.firstName && (
        <Text style={styles.errTxt}>{errors.firstName.message}</Text>
      )}
      <Controller
        {...register('lastName')}
        name="lastName"
        control={control}
        rules={{
          required: 'Last Name required.',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Please enter your lastname.."
              />
            </View>
          );
        }}
      />
      {errors.lastName && (
        <Text style={styles.errTxt}>{errors.lastName.message}</Text>
      )}

      <Controller
        {...register('email')}
        name="email"
        control={control}
        rules={{
          required: 'Email required.',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Please enter your email.."
                keyboardType="email-address"
              />
            </View>
          );
        }}
      />
      {errors.email && (
        <Text style={styles.errTxt}>{errors.email.message}</Text>
      )}

      <Controller
        {...register('password')}
        name="password"
        control={control}
        rules={{
          required: 'Password required.',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Please enter your password.."
              />
            </View>
          );
        }}
      />
      {errors.password && (
        <Text style={styles.errTxt}>{errors.password.message}</Text>
      )}

      <Controller
        {...register('confirmPassword')}
        name="confirmPassword"
        control={control}
        rules={{
          required: 'Password required.',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Please confirm your password.."
              />
            </View>
          );
        }}
      />
      {errors.confirmPassword && (
        <Text style={styles.errTxt}>{errors.confirmPassword.message}</Text>
      )}

      <Pressable style={styles.btn} onPress={onHandleSubmit}>
        <Text style={styles.btnTxt}>Kayıt ol</Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  input: {
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
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
  errTxt: {
    color: 'red',
    paddingStart: 20,
    fontWeight: '600',
  },
});
