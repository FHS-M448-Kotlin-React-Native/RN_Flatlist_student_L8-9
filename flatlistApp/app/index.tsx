import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import defaultStyles from "../styles/defaultStyles";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("")

  type dataType = {
    id: string; // unique identifier
    title: string; // text we see in flatlist
  }

  const DATA: dataType[] = [
    {id: "1", title: "First"},
    {id: "2", title: "Second"},
    {id: "3", title: "Third"},
    {id: "4", title: "Fourth"},
    {id: "5", title: "Fifth"},
  ];
  
  /*
  delcaring a function called selectedList that recieves
  a param of type dataType that we will refer to as 'item'
  I can access the values of item using dot notation
  */

  const selectedList = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title);
  };

  const handleRowPress = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            renderItem={({item}) => (
              <ListItem 
                item={item}
                isSelected={item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
