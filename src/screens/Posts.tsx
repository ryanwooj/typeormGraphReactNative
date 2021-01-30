import React from "react";
import {
  SafeAreaView,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
} from "react-native";
import { usePostsQuery, useCreatePostMutation } from "../../graphql";
import { CardView } from "../components";

interface Props {
  navigation;
}

const Posts: React.FC<Props> = ({ navigation }) => {
  const { data, refetch } = usePostsQuery();

  const [createPlace] = useCreatePostMutation();

  return (
    <SafeAreaView style={styles.andSafeArea}>
      <ScrollView>
        {data &&
          data.posts.map((item: any) => (
            <CardView
              key={item.id}
              {...(item as any)}
              onPress={() => navigation.navigate("Detail", { item })}
            />
          ))}
      </ScrollView>
      <Button
        title="Add New Post"
        onPress={() => {
          createPlace({
            variables: {
              title: `Post #${data!.posts.length + 1}`,
              description: "This is generated post",
              imageUrl: "",
            },
          })
            .then(() => refetch())
            .catch((err) => console.log(err));
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  andSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default Posts;
