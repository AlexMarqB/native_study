
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Tarefa from './components/tarefa';

//arquivo principal

//view == div  ja vem flex ativado

export default function App() {
  const [tarefa, setTarefa] = useState('')

  const [list, setList] = useState([])

  const handleAdd = () => {
    if(tarefa === '') {
      return
    }

    let dados = {
      key: Date.now(),
      item: tarefa
    }

    //pego o valor já existente, e adiciono em um novo vetor
    setList(oldArray => [dados, ...oldArray])
    setTarefa('')
  }

  const handleDelete = (item) => {
    let filterItem = list.filter((tarefa) => tarefa.item !== item)
    setList(filterItem)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Digite uma tarefa...'
          style={styles.input}
          value={tarefa}
          onChangeText={(t) => setTarefa(t)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <AntDesign name='plus' size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        //definir a key de cada item
        keyExtractor={(item) => item.key}
        //qual componente quer mostrar?
        renderItem={({ item }) => <Tarefa data={item} deleteItem={() => handleDelete(item.item)}/>}
        style={styles.list}
      />
    </View>
  );
}

//"objeto de estilização"
//  valores de % são referentes ao tamanho da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: '10%',
    height: 40,
    backgroundColor: '#73f7ff',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  list: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingStart: '4%',
    paddingEnd: '4%',
  }
})