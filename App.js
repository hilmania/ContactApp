import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

class App extends React.Component {
  state = {
    name: "",
    phone: "",
    desc: "",
    contacts: [],
  }

  tambahContact = () => {
    var newContact = {
      name:this.state.name,
      phone:this.state.phone,
      desc:this.state.desc
    };
    var arr = this.state.contacts;
    arr.push(newContact);
    this.setState({contacts: arr, name: "", phone: '', desc: ''});
  }

  hapusContact = (t) => {
    var arr = this.state.contacts;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({contacts: arr});
  }

  tampilContacts = () => {
    return this.state.contacts.map(t=> {
      return (
        <TouchableOpacity key={t.name}>
          <Text
            style={styles.todo}
            onPress={()=>{this.hapusContact(t)}}
    >{t.name} {t.phone}{"\n"}{t.desc}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return (
      <View style={styles.generalStyle}>
        <ScrollView>
        <View style={styles.innerStyle}>
          <Text style={styles.header}>Contact App</Text>
          <Text>Nama</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(name)=>this.setState({name})}
            value={this.state.name}/>
          <Text>No. HP</Text>
          <TextInput
            style={styles.inputStyle}
            keyboardType='phone-pad'
            onChangeText={(phone)=>this.setState({phone})}
            value={this.state.phone}/>
          <Text>Keterangan</Text>
          <TextInput
            style={styles.descStyle}
            multiline={true}
            numberOfLines={4}
            onChangeText={(desc)=>this.setState({desc})}
            value={this.state.desc}/>
          <Button
            style={styles.buttonStyle}
            title="Tambah Contact"
            color="black"
            onPress={this.tambahContact}/>

          <View style={{marginTop: 100}}/>
            {this.tampilContacts()}
        </View>
        </ScrollView>
      </View>
    );
  }  
}

const styles = {
  generalStyle: {
    backgroundColor: "grey",
    flex: 1
  },
  innerStyle: {
    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: "center",
    margin: 10,
  },
  inputStyle: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 1
  },
  descStyle: {
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 1
  },
  buttonStyle: {
    marginTop: 40,
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'white'
  }
}

export default App;