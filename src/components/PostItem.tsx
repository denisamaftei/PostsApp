import React, { useState } from 'react';
import { View, Text, TextInput, Pressable,StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { editPost, removePost } from '../store/actions/posts.actions';
import { Post } from '../store/postsTypes';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/state';

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => {
const dispatch: ThunkDispatch<RootState, {}, any> = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
const [editedBody, setEditedBody] = useState(post.body);

const Separator = () => <View style={styles.separator} />;

  const handleEditPost = () => {
    const editedPost: Post = {
      ...post,
      title: editedTitle,
      body: editedBody,
    };
    dispatch(editPost(editedPost));
    setEditing(false);
  };
  const handleRemovePost = (uid: string) => {
    dispatch(removePost(uid));
  };

  const iconButton = isEditing ? (
    <Pressable onPressIn={() => handleEditPost()}><FontAwesomeIcon
      icon={faCheck}
      size={20}
      style={{ ...styles.icon, ...styles.editIcon }}
    />
    </Pressable>
  ) : (
    <FontAwesomeIcon
      icon={faPenToSquare}
      size={20}
      style={{ ...styles.icon, ...styles.editIcon }}
    />
  );

  const postDescription = isEditing ? (
    <TextInput 
      style={styles.bodyInput}
      multiline={true}
      onChangeText={setEditedBody}
      value={editedBody}
    />
  ) : (
    <Text style={styles.body}>{post.body}</Text>
  );

  const postTitle = isEditing ? (
    <TextInput 
      style={styles.titleInput}
      onChangeText={setEditedTitle}
      value={editedTitle}
    />
  ) : (
    <Text style={styles.title}>{post.title}</Text>
  );

  return (
    <View style={styles.postsContainer} key={post.uid}>
        <View>{postTitle}</View>
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>{postDescription}</View>
          <View style={styles.iconsContainer}>
            <Pressable onPressIn={() => setEditing(!isEditing)} style={styles.iconButton}>
              {iconButton}
            </Pressable>
            <Pressable onPressIn={() => handleRemovePost(post.uid)} style={styles.iconButton}>
              <FontAwesomeIcon icon={faRemove} size={20} style={styles.icon} />
            </Pressable>
          </View>
        </View>
      <Separator />
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginLeft:20,
        marginTop:20
    },
    body: {
        marginLeft:20
    },
    titleInput: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft:20,
        marginTop:20
    },
    bodyInput: {
        marginLeft:20
    },
    postsContainer: {
        // marginLeft:
    },
    // sectionDescription: {
    //     marginTop: 8,
    //     fontSize: 18,
    //     fontWeight: '400',
    //     paddingRight: 20,
    //     flex: 1
    // },
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
    createIcon: {
        flex: 2,
        alignSelf: "center"
    }
})
export default PostItem;
