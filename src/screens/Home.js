import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React from 'react';
import {data, data2, images, SIZES, COLORS, FONTS} from '../constants';

const Home = () => {
  //console.log(data);

  const renderItem = ({item}) => {
    return (
      <View style={{marginLeft: 15, marginBottom: 15}}>
        <TouchableOpacity>
          <Image source={item.image} style={[styles.icon, {marginLeft: 10}]} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{item.name} </Text>
      </View>
    );
  };

  const renderItem2 = ({item}) => {
    return (
      <ScrollView>
        <View
          style={{
            marginLeft: 15,
            marginBottom: 10,
            flexDirection: 'row',
            width: '75%',
          }}>
          <TouchableOpacity>
            <Image source={item.image} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              marginLeft: 10,
            }}>
            <Text style={[styles.titleText, {textAlign: 'left'}]}>
              {item.name}
            </Text>
            <Text style={[styles.titleText, {textAlign: 'left'}]}>
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  const headerFlatList = () => {
    return (
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.titleText,
            {fontSize: 16, padding: 5, marginLeft: 10},
          ]}>
          Favorites
        </Text>
        <FlatList
          data={data2}
          keyExtractor={({id}) => `key${id}`}
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItem}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.headerContainer2}>
        <Text style={[styles.titleText, {fontSize: 16, margin: 15}]}>
          Recomemded
        </Text>
        <FlatList
          data={data}
          keyExtractor={({id}) => `key-id-${id}`}
          //keyboardDismissMode="on-drag"
          renderItem={renderItem2}
          // showsVerticalScrollIndicator={true}
          // scrollEnabled={true}
        />
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.bblue,
        }}>
        <View style={styles.headerTextContainer}>
          <TouchableOpacity>
            <Image source={images.flag} style={styles.flag} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.titleText, {fontSize: 18}]}>Coaches</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.titleText, {fontSize: 16, color: COLORS.red}]}>
              32 Min
            </Text>
          </TouchableOpacity>
        </View>
        {headerFlatList()}
        <View style={{height: 6}} />
        {renderBody()}
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  icon: {
    height: 65,
    width: 65,
    //marginHorizontal: 2,
  },
  flag: {
    height: 50,
    width: 50,
  },
  titleText: {
    //fontSize: 25,
    ...FONTS.text1,
    color: COLORS.black,
    textAlign: 'center',
  },
  headerContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: COLORS.white,
  },
  headerContainer2: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    height: '100%',
  },
  headerTextContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
