/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare  } from "@fortawesome/free-solid-svg-icons";
import { faRemove  } from "@fortawesome/free-solid-svg-icons";
import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const Separator = () => <View style={styles.separator} />;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onPressFunction(): void {
    console.log("test")
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.header}>Welcome, @User!</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white, flex: 1
          }}>
          <Section title="Post Name" >
            <View style={styles.descriptionContainer}>
           <View style={styles.description}><Text>Post Description Post DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost Description</Text></View>
           <View style={styles.iconsContainer}>
          <Pressable style={styles.iconButton}><FontAwesomeIcon icon={faPenToSquare} size={20} style={styles.icon} /></Pressable> 
          <Pressable style={styles.iconButton}><FontAwesomeIcon icon={faRemove} size={20} style={styles.icon} /></Pressable> 
          </View>
          </View>
          </Section>
          <Separator />
        </View>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? '#7593C5' : '#7593eb',
          },
          styles.button,
        ]}
          onPress={onPressFunction}
          >
          <Text style={styles.text}>Create New Post</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
   
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    paddingRight:20,
    flex: 1
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    fontWeight: "900",
    fontSize: 30,
    textAlign: 'center',
    color: '#7593eb',
    padding: 15,
    backgroundColor: "#fff"
  },
  button: {
    color: '#fff',
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 25,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  separator: {
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 20,
    borderBottomColor: '#7593eb',
    borderBottomWidth: 3
  },
  icon: {
    color: "#7593eb"
  },
  iconButton: {
    paddingVertical:0
  },
  description: {
    flex:1
  },
  iconsContainer: {
    flex: 2,
    alignSelf: "flex-end"
  },
  descriptionContainer: {
    flex: 1,
    flexDirection:"row",
    width:1000
  }
});

export default App;
