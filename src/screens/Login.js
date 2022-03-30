import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

import {images, COLORS, SIZES, FONTS} from '../constants';
import {Textinput, CustomButton} from '../components';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState('');
  const [eTrue, setEtrue] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [validPassword, setValidPassword] = React.useState('');
  const [pTrue, setPtrue] = React.useState(false);

  const handleValidEmail = value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (value.length === 0) {
      setValidEmail('Email address must be enter');
    } else if (reg.test(value) === false) {
      setValidEmail('Enter valid Email Address');
    } else if (reg.test(value) === true) {
      setValidEmail('');
      setEtrue(true);
    }
  };

  const handleValidPassword = value => {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (value.length === 0) {
      setValidPassword('Enter password');
    } else if (reg.test(value) === false) {
      setValidPassword(
        `Minimum eight characters...
at least one letter and one number:`,
      );
    } else if (reg.test(value) === true) {
      setValidPassword('');
      setPtrue(true);
    }
  };

  const handleSubmit = () => {
    //console.log(password === confirmPass);
    pTrue && eTrue
      ? navigation.replace('Home')
      : Alert.alert('Please enter Your details correctly.');
  };

  const renderHeader = () => {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerTop}>
          <Image source={images.profile_clip} style={styles.image} />
        </View>
        <View style={styles.spacer}>
          <Text style={[styles.titleText, {fontSize: 30}]}>
            We are Here for You!
          </Text>
          <Text style={[styles.titleText, {fontSize: 20}]}>
            Login to Continue
          </Text>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={{marginVertical: 50}}>
        <View style={{alignItems: 'center'}}>
          <Textinput
            text="Email"
            placeholder="example@gmail.com"
            value={email}
            validText={validEmail}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
          <Textinput
            text="Password"
            placeholder="*********"
            value={password}
            onChangeText={value => {
              setPassword(value);
              handleValidPassword(value);
            }}
            validText={validPassword}
            secureTextEntry={true}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <CustomButton
          name="Login"
          propStyle={{backgroundColor: COLORS.byellow}}
          textStyle={{color: COLORS.white}}
          onPress={() => handleSubmit()}
        />
        <Text style={{color: COLORS.black, marginTop: 10}}>
          or login using social media
        </Text>
        <View style={[styles.iconContainer]}>
          <TouchableOpacity>
            <Image source={images.facebook} style={[styles.icon]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.google_plus} style={[styles.icon]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.twitter} style={[styles.icon]} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.titleText,
              {fontSize: 16},
            ]}>{`Don't have an account yet?  `}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                color: COLORS.hyperLink,
                fontSize: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleText: {
    //fontSize: 25,
    ...FONTS.title,
    color: COLORS.black,
  },
  image: {
    height: 90,
    width: 90,
    marginTop: -20,
  },
  bgContainer: {
    //height: SIZES.height > 700 ? '30%' : '25%',
    //borderWidth: 1,
    borderColor: COLORS.white,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  headerTop: {
    backgroundColor: COLORS.bblue,
    // flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
    height: 130,
    width: 170,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {alignItems: 'center', marginTop: 15},
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});
