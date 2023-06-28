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
    TextInput,
} from 'react-native';
import React, { useState, useEffect, PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost, removePost, editPost } from '../store/actions/posts.actions';
import { Post } from '../store/postsTypes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
        const newPost: Post = {
            body: newPostBody,
            title: newPostTitle,
            uid: "",
        };
        dispatch(addPost(newPost));
        setNewPostTitle('');
        setNewPostBody('');
    };

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.backgroundStyle}>
                <Text style={styles.header}>Welcome, @User!</Text>
                <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, flex: 1 }}>
                </View>
                <View>
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
                    <Pressable
                        onTouchStart={() => handleAddPost()}
                        onPressIn={() => onCreate(false)}
                    >
                        <FontAwesomeIcon
                            icon={faCheck}
                            size={30}
                            style={{ ...styles.icon, ...styles.editIcon, ...styles.createIcon }}
                        />
                    </Pressable></View>) : (<Pressable
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
                <Button
                    title="Sign Out"
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}
                />
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
        backgroundColor: "#fff"
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
        flex: 1
    },
    bodyInput: {
        flex: 1
    },
    input: {

    },
    createIcon: {
        flex: 2,
        alignSelf: "center"
    }

});
