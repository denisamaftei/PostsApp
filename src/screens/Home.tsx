import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable,
    TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost } from '../store/actions/posts.actions';
import { Post } from '../store/postsTypes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faRemove, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/state';
import PostItem from '../components/PostItem';

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [isCreating, onCreate] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');

    const dispatch: ThunkDispatch<RootState, {}, any> = useDispatch();
    const posts = useSelector((state: RootState) => state.posts.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const handleAddPost = () => {
        if (newPostBody && newPostTitle) {
            const newPost: Post = {
                body: newPostBody,
                title: newPostTitle,
                uid: "",
            };
            dispatch(addPost(newPost));
            setNewPostTitle('');
            setNewPostBody('');
            onCreate(false);
        }
    };

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
                <Text style={styles.header}>Welcome, User!</Text>
                <View style={styles.view}>
                    {posts.map((post) => (
                        <React.Fragment key={post.uid}>
                            <PostItem post={post} />
                        </React.Fragment>
                    ))}
                </View>
                {isCreating ? (<View><TextInput
                    style={styles.titleInput}
                    placeholder='Title'
                    onChangeText={setNewPostTitle}
                    value={newPostTitle}
                />
                    <TextInput
                        style={styles.bodyInput}
                        placeholder='Description'
                        onChangeText={setNewPostBody}
                        value={newPostBody}
                    />
                    <View style={styles.btnsContainer}>
                        <Pressable
                            onTouchStart={() => handleAddPost()}
                        >
                            <FontAwesomeIcon
                                icon={faCheck}
                                size={30}
                                style={{ ...styles.icon, ...styles.editIcon, ...styles.createIcon }}
                            />
                        </Pressable><Pressable
                            onTouchStart={() => onCreate(false)}
                        >
                            <FontAwesomeIcon
                                icon={faRemove}
                                size={30}
                                style={{ ...styles.icon, ...styles.editIcon, ...styles.createIcon }}
                            />
                        </Pressable>
                    </View>
                </View>) : 
                    (<Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#7593C5' : '#7593eb',
                                },
                                styles.button,
                            ]}
                            onPressIn={() => onCreate(true)}
                        >
                            <Text style={styles.text}>Create New Post</Text>
                        </Pressable>)}
                <Pressable style={styles.signOutBtn}
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}
                >
                    <FontAwesomeIcon
                        icon={faRightFromBracket}
                        size={20}
                        style={styles.signOutIcon}
                    />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    backgroundStyle: {
        backgroundColor: "#fff",
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
        marginLeft: 20
    },
    bodyInput: {
        marginLeft: 20
    },
    createIcon: {
        alignSelf: "center"
    },
    signOutBtn: {
        width: 50,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 100,
        backgroundColor: '#7593eb',
        marginLeft: 335,
        marginTop: 20
    },
    signOutIcon: {
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    view: {
        backgroundColor: "#fff"
    },
    btnsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});
