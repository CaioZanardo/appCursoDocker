import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView, Image, FlatList} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      cidade: '',
      escolaridade: 'Médio',
      exp: 0,
      reco: false,
      resultado: '',
      feed:[
        {id: 1, nome: 'Joseffe', cidade: 'São Paulo', comentario: 'Muito Bom, Indico \n'},
        {id: 2, nome: 'Caio', cidade: 'São Caetano do Sul', comentario: 'Agregou muito no meu dia a dia \n'},
        {id: 3, nome: 'Gabriela', cidade: 'Santo Andre', comentario: 'Muito bom para aqueles que querem conhecer o Docker \n'},
        {id: 4, nome: 'Bryan', cidade: 'Ubatuba', comentario: 'Partiu modo Avançado!!! \n'},
        {id: 5, nome: 'Bernardo', cidade: 'Atibaia', comentario: 'Superou Minhas expectativas \n'},
      ]

    };
    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
    this.setState({
      resultado: 'Nome: ' + this.state.nome + '\n' +
                 'Cidade: ' + this.state.cidade + '\n' +
                 'Escolaridade: ' + this.state.escolaridade + '\n' +
                 'Experiencia: ' + this.state.exp + ' anos \n' +
                 ( (this.state.reco) ? 'Recomendaria' : 'Não recomendaria' )
    });
  }
 
  render(){
    return(
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Curso Online</Text>
        <ScrollView horizontal={true}>

            <View style={styles.borda}>
              <Image style={styles.imagem}
              source={{uri: 'https://blog.safetycontrol.ind.br/wp-content/uploads/2021/11/Docker.png'}}/>
            </View>
            <View style={styles.borda}>
            <Image style={styles.imagem}
              source={{uri: 'https://www.hashroot.com/assets/img/services/devops/docker.png'}}/>
              </View>
        </ScrollView>
        <View style={{marginLeft: 5}}>
        <Text style={styles.subt}>Sobre o Curso:</Text>
        <Text>Docker é uma plataforma opensource que te permite construir, distribuir e rodar aplicações de       maneira isolada e que está mudando o paradigma de virtualização de ambientes. Focado nas figuras do desenvolvedor e do operador de sistemas, é uma ferramenta para criar, hospedar, alterar e distribuir contêineres Linux e está mudando o jeito que as empresas hoje fazem o fluxo de desenvolvimento, testes, e entrega de aplicações, principalmente aplicações web.</Text>

        <Text style={styles.subt}>Objetivo:</Text>
        <Text>O objetivo do curso é capacitar o aluno a instalar o Docker em seus ambientes, montar imagens manualmente e utilizando Dockerfiles, automatizar essa criação de imagens, utilizar repositórios de imagens como o Docker Hub, expor aplicações rodando em contêineres para acesso via rede, mapeamento de portas, trabalhar com volumes de tipos diferentes para persistência de dados, trabalhar com vários contêineres rodando simultaneamente de maneira manual e através de ferramentas como Docker Compose, saber utilizar o Docker Machine para provisionar ambientes locais e até em nuvem, e ensinar a montar clusters com alta disponibilidade utilizando o modo Swarm.</Text>
        <Text style={styles.subt}>Valor:</Text>
        <Text>R$ 1.800 (a vista)</Text>
        <Text>R$ 200 (em 12x no cartão ou boleto)</Text>
      </View>

        <View style={{marginLeft: 5}}>
        <Text style={styles.subt2}>Avaliações:</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
        </View>

      <View style={{marginLeft: 5}}>
        <Text style={styles.subt2}>Inscrição:</Text>
      </View>
      <Text style={styles.subt}>Nome:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({nome: valor})}
          />

          <Text style={styles.subt}>Cidade:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({cidade: valor})}
          />

          <Text style={styles.subt}>Escolaridade:</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
          >
            <Picker.Item key={1} value='Médio' label="Médio" />
            <Picker.Item key={2} value='Graduação' label="Graduação" />
            <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
            <Picker.Item key={4} value='MBA' label="MBA" />
          </Picker>

          <Text style={styles.subt}>Tempo de Experiência:</Text>
          <Slider
            minimumValue={0}
            maximumValue={50}
            step={1}
            value={this.state.exp}
            onValueChange={ (valorSelecionado) => this.setState({exp: valorSelecionado})}
            
          />
          <Text style={styles.expe}>{this.state.exp}</Text>

          <Text style={styles.label}>Aluno recomendaria o curso?</Text>
          <Switch 
          value={this.state.reco}
          onValueChange={ (valorSwitch) => this.setState({reco: valorSwitch})}
          />

          <Button title="Confirmar" onPress={this.confirmar} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>
      </ScrollView>
      </View>
    );
  }
}

class Pessoa extends Component{
    render(){
      return(
        <View style={styles.areaPessoa}>
          <Text style={styles.areaPessoa}> Nome: {this.props.data.nome} </Text>
          <Text style={styles.areaPessoa}> Cidade: {this.props.data.cidade} </Text>
          <Text style={styles.areaPessoa}> Comentario: {this.props.data.comentario} </Text>
        </View>
      );
    }
  }
 
export default App;