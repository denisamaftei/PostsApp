import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable,
    Button,
    TextInput
} from 'react-native';
import React, { type PropsWithChildren, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts, addPost, removePost, editPost } from '../store/actions/posts.actions';
import { Post } from '../store/postsTypes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { ThunkDispatch } from '@reduxjs/toolkit';
import RootState from '../store/reducers';
import uuid from 'react-native-uuid';

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [isEditing, onEdit] = useState(false);
    const [isCreating, onCreate] = useState(false);
    const [text, onChangeText] = useState('Useless Text');
    const [title, onChangeTitle] = useState('Useless Text');
    const [body, onChangeBody] = useState('Useless Text');
    const [isLoggedIn, onLogging] = useState(true)

    const dispatch: ThunkDispatch<typeof RootState, {}, any> = useDispatch();
    const handleAddPost = () => {
        // throw new Error("error")
        const newPost: Post = {
          // Create a new post object
          body: body,
          title: title,
          uid: ""
        };
        // console.log(limit(uuid.v1().toString().replace(/-/g, ''),20))
        dispatch(addPost(newPost)); // Dispatch the addPost action with the new post object
    }
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

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

    let iconButton;
    let postDescription;
    if(isEditing) {
        iconButton = <FontAwesomeIcon icon={faCheck} size={20} style={{ ...styles.icon, ...styles.editIcon }} />
        postDescription= <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
    />
    }
    else {
        iconButton = <FontAwesomeIcon icon={faPenToSquare} size={20} style={{ ...styles.icon, ...styles.editIcon }} />
        postDescription= <Text>{text}</Text>
    }
    let fielsdOrButton;
    if(isCreating) {
        fielsdOrButton = [<TextInput
            style={styles.titleInput}
            onChangeText={onChangeTitle}
            value={title}
        />, <TextInput
            style={styles.bodyInput}
            onChangeText={onChangeBody}
            value={body}
        />,
        <Pressable onTouchStart={() => handleAddPost()} onPressIn={() => onCreate(!isCreating)}  ><FontAwesomeIcon icon={faCheck} size={30} style={{ ...styles.icon, ...styles.editIcon, ...styles.createIcon }} /></Pressable>]
    }
    else {
        fielsdOrButton = <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#7593C5' : '#7593eb',
            },
            styles.button,
        ]}
            onPressIn={() => onCreate(!isCreating)}>
            <Text style={styles.text}>Create New Post</Text>
        </Pressable>
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
                            <View style={styles.description}>
                            {postDescription}
                            </View>
                            <View style={styles.iconsContainer}>
                                <Pressable onPressIn={() => onEdit(!isEditing)} style={styles.iconButton}>{iconButton}</Pressable>
                                <Pressable style={styles.iconButton}><FontAwesomeIcon icon={faRemove} size={20} style={styles.icon} /></Pressable>
                            </View>
                        </View>
                    </Section>
                    <Separator />
                </View>
               <View>{fielsdOrButton}</View>
                <Button
                    title="Sign Out"
                    onPress={() => {navigation.navigate('SignIn'); 
                    // isLoggedIn = false
                }}
                />
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
        paddingRight: 20,
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
        color: "#7593eb",
    },
    iconButton: {
        paddingVertical: 0
    },
    description: {
        flex: 1
    },
    iconsContainer: {
        flex: 2,
        alignSelf: "flex-end"
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: "row",
        width: 1000
    },
    editIcon: {
        marginBottom: 10
    },
    titleInput: {
        flex:1
    },
    bodyInput: {
        flex:1
    },
    input: {
        
    },
    createIcon: {
        flex: 2,
        alignSelf: "center"
    }

});