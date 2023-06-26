import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, View, Button } from 'react-native';

export default function SignIn  ({navigation}: {navigation: any}) {
    // Set an initializing state whilst Firebase connects
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
    // // Handle user state changes
    // function onAuthStateChanged(user: any) {
    //   setUser(user);
    //   if (initializing) setInitializing(false);
    // }
    
    // useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);
    
    // if (initializing) return null;
    
    // if (!user) {
    //   return (
    //     <View>
    //       <Text>Login</Text>
    //     </View>
    //   );
    // }
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sign In</Text>
          <Button
          title="Sign In"
          onPress={() => {navigation.navigate('Home');
        //    isLoggedIn = true
        }}
        />
        </View>
      );
    }