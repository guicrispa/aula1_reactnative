import React from 'react';
import { View, Text, Image} from 'react-native';

// app é um componente
function AppMyPerfil(){ 
  let img = 'https://media.licdn.com/dms/image/D4D03AQGuWdLYgmdzWg/profile-displayphoto-shrink_800_800/0/1681580068212?e=2147483647&v=beta&t=N7KJ4Q_xBnE3xp_0cUElHUZYloepkIFugMGr9oEA-B8';
  let prop1 = 'Dados pessoais:'
  let prop2 = 'Formação:'
  let prop3 = 'Experiências:'
  let prop4 = 'Projetos:'
  return(
    <View>
      <Text style={{color: '#dddddd', fontSize: 25, textAlign: 'center'}}>
        Guilherme Crispim
      </Text>

      <Image
        source={{uri: img}}
        style={{width: 200, height: 200, margin: 'auto'}}
      />

      <Text style={{fontSize: 15, margin: 15}}>{prop1}</Text>
      <Text style={{marginLeft: 15}}>Nome: Guilherme Crispim Yañes Silva;</Text>
      <Text style={{marginLeft: 15}}>Idade: 19 anos;</Text>
      <Text style={{marginLeft: 15}}>Estado Civil: Solteiro;</Text>
      <Text style={{marginLeft: 15}}>Time de futebol: Corinthians;</Text>
      <Text style={{marginLeft: 15}}>Github: github.com/guicrispa;</Text>
      <Text style={{marginLeft: 15}}>Portfólio: behance.net/guilhermecrispim;</Text>
      
      <Text style={{fontSize: 15, margin: 15}}>{prop2}</Text>
      <Text style={{marginLeft: 15}}>Técnico em Redes de Computadores no Senai de Santos - Antônio Sousa Noscheze;</Text>
      <Text style={{marginLeft: 15}}>Cursando Tecnólogo em Sistemas para Internet na Fatec Rubens Lara;</Text>

      
      <Text style={{fontSize: 15, margin: 15}}>{prop3}</Text>
      <Text style={{marginLeft: 15}}>Estágio de 1 ano na Bistec - Consultoria de TI;</Text>
      <Text style={{marginLeft: 15}}>mais de 3 anos de experiência como freelancer de Social Media e Designer Gráfico;</Text>
      
      <Text style={{fontSize: 15, margin: 15}}>{prop4}</Text>
      <Text style={{marginLeft: 15}}>Bistec.com.br e Bistec.com.pt;</Text>
      <Text style={{marginLeft: 15}}>Auratrip - App de Gerenciamento de Viagens;</Text>
      <Text style={{marginLeft: 15}}>Liderança na Prática - Fundação Escolar;</Text>
      <Text style={{marginLeft: 15}}>Programa Cibereducação - Cisco;</Text>
    </View>
    // JSX é a programação em react native (JS com XML)
  )
}


export default AppMyPerfil;