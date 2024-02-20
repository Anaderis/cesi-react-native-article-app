import { Text, View, StyleSheet, Pressable } from "react-native";

function ArticleItem(props) {
  return (
    <View style={styles.articleItem}>
      <Pressable
        style={styles.pressableItem}
        onPress={props.onSelectArticle?.bind(this, {
          id: props.id,
          name: props.name,
          price: props.price,
        })}
        android_ripple={{ color: "blueviolet" }}
      >
        <Text style={styles.articleText}>
          {props.name} : {props.price} €
        </Text>
      </Pressable>
    </View>
  );
}

export default ArticleItem;

const styles = StyleSheet.create({
  articleItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "dodgerblue",
  },
  pressableItem: { alignItems: "center" },
  articleText: { color: "white", padding: 8, fontSize: 18 },
});
