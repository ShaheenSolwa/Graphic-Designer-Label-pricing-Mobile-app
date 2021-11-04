import React, { useState } from 'react';
import { StyleSheet, Button, Alert, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Name, setName] = useState('','');
  const [Markup, setMarkup] = useState(0);
  const [Length, setLength] = useState(0);
  const [Width, setWidth] = useState(0);
  const [ppl, setppl] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const CalcClick = () => {
    setppl(((Length/1000)*(Width/1000) * (100+Markup/100)).toFixed(2));
  }

  const Receipt = () => {
    Alert.alert("Receipt",
      " Name: "+Name+
      "\n Size: "+Length+"x"+Width+
      "\n Cost: R"+((Length/1000)*(Width/1000) * (100+Markup/100)).toFixed(2)+
      "\n Quantity: "+quantity+
      "\n Total: R"+(quantity*(Length/1000)*(Width/1000) * (100+Markup/100)).toFixed(2)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>REFLECT MEDIA PRICING</Text>
      <Text></Text>
      <Text style={styles.texts} defaultValue={Name} onChangeText={Name => setName(Name)}>Name:</Text>
      <TextInput placeholder="Name" style={styles.input} defaultValue={Name} onChangeText={Name => setName(Name)}></TextInput>
      
      <Text style={styles.texts}>Length:</Text>
      <TextInput onChangeText={Length => setLength(Length)} placeholder="Length" style={styles.input} keyboardType="numeric"></TextInput>
    
      <Text style={styles.texts}>Width:</Text>
      <TextInput onChangeText={Width => setWidth(Width)} placeholder="Width" style={styles.input} keyboardType="numeric"></TextInput>
      
      <Text></Text>
      
      <Text style={styles.texts}>Mark Up (%):</Text>
      <TextInput onChangeText={Markup => setMarkup(Markup)} placeholder="Markup %" style={styles.input} keyboardType="numeric"></TextInput>

      <Text></Text>

      <Button
        title="Get Price"
        onPress={CalcClick}
      />

      <Text></Text>

      <Text style={styles.texts}>Price per Item: R{ppl}</Text>

      <Text></Text>

      <Text style={styles.texts}>Quantity:</Text>
      <TextInput defaultValue={1} onChangeText={quantity => setQuantity(quantity)} placeholder="Quantity" style={styles.input} keyboardType="numeric"></TextInput>

      <Text></Text>

      <Button
        title="Print Recipt"
        onPress={Receipt} 
      />

      {/*() => Alert.alert('Simple Button pressed')*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    fontSize: 24,
    color: "#141823",
    borderBottomWidth: 2,
  },
  input: {
    borderBottomWidth: 1,
    
  },
  texts: {
    fontSize: 18,
  }
});
