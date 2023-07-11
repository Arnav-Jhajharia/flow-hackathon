import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  SafeAreaView,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  SpritzApiClient,
  Environment,
} from '../../../node_modules/@spritz-finance/api-client/dist/spritz-api-client.mjs';

import {
  BankAccountType,
  BankAccountSubType,
} from '../../../node_modules/@spritz-finance/api-client/dist/spritz-api-client.mjs';

const windowHeight = Dimensions.get('window').height;

const Card = ({navigation}) => {
  const client = SpritzApiClient.initialize({
    environment: Environment.Staging,
    apiKey: 'ak_YmNmOTg5ZjMtMmQ5NS00ODBkLThiMmUtY2MxYmYwZWM3NzMw',
    integrationKey: 'ik_MjdlNGJjODgtMjhhMC00ZWJjLWFjMWQtZTNhMDcwMWUyMTUy',
  });

  async function createUser(emailID) {
    try {
      // const user = await client.user.createUser({
      //   email: emailID,
      // });
      // client.setApiKey(user.apiKey);
      // const verificationData = await client.user.getUserVerification();
      console.log(client);
      const virtualCard = await client.virtualCard.fetch();

      return virtualCard;
      // const bankAccounts = await client.bankAccount.list();
      // const bankAccount = await client.bankAccount.create(
      //   BankAccountType.USBankAccount,
      //   {
      //     accountNumber: '123456789',
      //     routingNumber: '031201360',
      //     email: emailID,
      //     holder: 'Anshuman Tekriwal',
      //     name: 'Precious Savings',
      //     ownedByUser: true,
      //     subType: BankAccountSubType.Savings,
      //   },
      // );
      // const updatedBankAccounts = await client.bankAccount.list();
      // console.log('Bank:', bankAccounts);
      // console.log('Updated Banks:', updatedBankAccounts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    async function call() {
      const userData = await createUser('tekriwalanshuman@gmail.com');
      console.log(userData);
      // navigation.push('RedeemForm', {
      //   name: userData.identity.verificationUrl,
      // });
    }

    call();
  }, []);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <FastImage source={require('./card.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get a personalised {'\n'} Xade card</Text>
        <Text style={styles.subtitle}>
          Get your own non-custodial card powered by Visa to spend globally and
          to win exclusive rewards
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://docs.xade.finance')}>
          <Text style={styles.buttonText}>Apply now</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: `EuclidCircularA-Medium`,
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#a0a0a0',
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    fontFamily: `EuclidCircularA-Medium`,
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 5,
    marginTop: '20%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: `EuclidCircularA-Medium`,
  },
});

export default Card;
