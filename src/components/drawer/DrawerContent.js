import React from 'react';
import {
  View,
  StyleSheet,
  Image, Text,
  SafeAreaView, Button, Linking, Platform,
  TouchableOpacity
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,


} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Store
import { store } from '../../store/index';
import i18n from '../../constants/translation/I18n';
import { useDispatch } from "react-redux";
import { Logout } from "../../store/actions/auth";
export function DrawerContent() {

    const dispatch = useDispatch();
    const submit = () => {
      dispatch(Logout());
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require('../../assets/bitloLogo.png')}
        style={styles.sideMenuProfileIcon}
      />
    
      <DrawerContentScrollView >
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://www.bitlo.com/?gclid=CjwKCAjwt7SWBhAnEiwAx8ZLajZGx3gSI4EVq4XKUQ-SwDCn3xXcBhTCwQwiZ87whs3LKhuHjv2zjBoCWO0QAvD_BwE');
            }}>
          {i18n.t('visitUs')}
          </Text>
        </View>
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://www.bitlo.com/biz-kimiz');
            }}>
          {i18n.t('aboutBitlo')}
          </Text>
        </View>
       
      </DrawerContentScrollView>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon
            name="exit-to-app"
            color='black'
            size={25}
          />
        )}
        label={i18n.t('signOut')}
        onPress={submit}
      />
         
         {/* <TouchableOpacity
          mode="outlined"
          onPress={submit}
          style={{ marginTop: 20 }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>  */}
       
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'black',
          paddingBottom: 20
        }}>
      
      </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: Platform.OS === 'ios' ? 140 : 140,
    height: Platform.OS === 'ios' ? 110 : 110,
    borderRadius: Platform.OS === 'ios' ? 10 : 10,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});