import React, { PropsWithChildren, useState } from 'react';
import { View, Text, TextInput, Pressable,StyleSheet, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { editPost } from '../store/actions/posts.actions';
import { Post } from '../store/postsTypes';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
const [editedBody, setEditedBody] = useState(post.body);

const Separator = () => <View style={styles.separator} />;
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
      ]}
    >
      {title}
    </Text>
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}
    >
      {children}
    </Text>
  </View>
);
};
//   const handleEditPost = () => {
//     const editedPost: Post = {
//       ...post,
//       title: editedTitle,
//       body: editedBody,
//     };
//     dispatch(editPost(editedPost));
//     setEditing(false);
//   };

  const iconButton = isEditing ? (
    <FontAwesomeIcon
      icon={faCheck}
      size={20}
      style={{ ...styles.icon, ...styles.editIcon }}
    />
  ) : (
    <FontAwesomeIcon
      icon={faPenToSquare}
      size={20}
      style={{ ...styles.icon, ...styles.editIcon }}
    />
  );

  const postDescription = isEditing ? (
    <TextInput
      style={styles.input}
      onChangeText={setEditedBody}
      value={editedBody}
    />
  ) : (
    <Text>{post.body}</Text>
  );

  return (
    <View key={post.uid}>
      <Section title={post.title}>
        <View style={styles.descriptionContainer}>
          <View style={styles.description}>{postDescription}</View>
          <View style={styles.iconsContainer}>
            <Pressable onPressIn={() => setEditing(!isEditing)} style={styles.iconButton}>
              {iconButton}
            </Pressable>
            <Pressable style={styles.iconButton}>
              <FontAwesomeIcon icon={faRemove} size={20} style={styles.icon} />
            </Pressable>
          </View>
        </View>
      </Section>
      <Separator />
    </View>
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
})
export default PostItem;
