import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

import CheckBox from '@react-native-community/checkbox';

import {COLORS, SIZES, FONTS, images} from '../constants';
import {Textinput, CustomButton} from '../components/';

const SignUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const [fName, setFName] = React.useState('');
  const [validFname, setValidFname] = React.useState('');
  const [fTrue, setFtrue] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState('');
  const [eTrue, setEtrue] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [validPassword, setValidPassword] = React.useState('');
  const [pTrue, setPtrue] = React.useState(false);

  const [confirmPass, setConfirmPass] = React.useState('');
  const [validConfirmPassword, setConfirmPassword] = React.useState('');
  const [confirmTrue, setConfirmtrue] = React.useState(false);

  const handleValidCheck = (value, whatToCheck) => {
    let username = /^.{7,}$/;
    let passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (whatToCheck === 'checkEmail') {
      if (value.length === 0) {
        setValidEmail('Email address must be enter');
      } else if (emailReg.test(value) === false) {
        setValidEmail('Enter valid Email Address');
      } else if (emailReg.test(value) === true) {
        setValidEmail('');
        setEtrue(true);
      }
    } else if (whatToCheck === 'checkFname') {
      if (value.length === 0) {
        setValidFname('UserName is required');
      } else if (username.test(value) === false) {
        setValidFname('Minimum 7 characters');
      } else if (username.test(value) === true) {
        setValidFname('');
        setFtrue(true);
      }
    } else if (whatToCheck === 'checkPassword') {
      if (value.length === 0) {
        setValidPassword('Enter password');
      } else if (passwordReg.test(value) === false) {
        setValidPassword(
          `Minimum eight characters...
at least one letter and one number:`,
        );
      } else if (passwordReg.test(value) === true) {
        setValidPassword('');
        setPtrue(true);
      }
    } else if (whatToCheck === 'checkConfirmPassword') {
      if (value !== password) {
        setConfirmPassword('password did not match');
      } else if (value === password) {
        setConfirmPassword('');
        setConfirmtrue(true);
      }
      //console.log(value === password);
    }
  };

  const handleSubmit = () => {
    //console.log(password === confirmPass);
    fTrue && pTrue && eTrue && confirmTrue
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
            Register with Us!
          </Text>
          <Text style={[styles.titleText, {fontSize: 20}]}>
            Signup to Continue
          </Text>
        </View>
      </View>
    );
  };
  //console.log(password);
  // const handleConfirmPass = value => {
  //   if (value !== password) {
  //     setConfirmPassword('password did not match');
  //   } else if (value === password) {
  //     setConfirmPassword('');
  //   }
  //   console.log(value === password);
  // };

  //console.log(`validConfirmPassword`, validConfirmPassword);
  // console.log(password.length);
  // console.log(confirmPass.length);

  const renderBody = () => {
    return (
      <View style={{marginVertical: 20}}>
        <View style={{alignItems: 'center'}}>
          <Textinput
            text="Name"
            placeholder="Username"
            value={fName}
            onChangeText={fname => {
              setFName(fname);
              handleValidCheck(fname, 'checkFname');
            }}
            validText={validFname}
          />
          <Textinput
            text="Email"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={e => {
              setEmail(e);
              handleValidCheck(email, 'checkEmail');
            }}
            validText={validEmail}
          />
          <Textinput
            text="Password"
            placeholder="*********"
            value={password}
            onChangeText={value => {
              setPassword(value);
              handleValidCheck(value, 'checkPassword');
            }}
            validText={validPassword}
            secureTextEntry={true}
          />
          <Textinput
            text="Confirm Password"
            placeholder="*********"
            value={confirmPass}
            onChangeText={value => {
              setConfirmPass(value);
              handleValidCheck(value, 'checkConfirmPassword');
            }}
            validText={validConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={[styles.titleText]}>
            {`Email me if you have any deal.`}
          </Text>
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
          name="Sign Up"
          propStyle={{backgroundColor: COLORS.byellow}}
          textStyle={{color: COLORS.white}}
          onPress={() => handleSubmit()}
        />
        <Text style={{color: COLORS.black, marginTop: 4}}>
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
          <Text style={[styles.titleText]}>{`Already have an account?  `}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: COLORS.hyperLink,
                fontSize: 15,
                textAlign: 'center',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  descriptionText: {
    color: COLORS.gray,
    width: '70%',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
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
  checkBox: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    marginTop: 5,
    width: SIZES.width * 0.7,
  },
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
