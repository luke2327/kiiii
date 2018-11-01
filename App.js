/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, WebView, FlatList } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { ListItem, ThemeProvider, Button } from 'react-native-elements';


const list = [
  {
    title: '태양광으로 달리는 쏘나타',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    date: '2018-10-31 14:52',
    kind: '생활/문화',
    contents: '영화에서나 나올법한 일이 내년 현실화할 것으로 전망된다. 현대·기아차가 내년 태양광으로 차량 배터리를 충전할 수 있는 차량을 내놓는다.',

  },
  {
    title: '파킨슨병 환자에 치료용 마약 허용',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2018-10-31 14:22',
    kind: '생활/문화',
    contents: '식품의약품안전처(식약처)는 국내 대체 치료제가 없는 희귀·난치병 환자가 자가 치료를 목적으로 마약과 향정신성의약품을 사용할 수 있도록 하는 내용이 담긴 마약류 관리에 관한 법률 시행규칙을 개정·공포했다고 31일 밝혔다.',
  },
  {
    title: '美, 中 산업스파이 또 적발',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2018-10-31 14:34',
    kind: '세계',
    contents: '로이터통신과 홍콩 사우스차이나모닝포스트(SCMP)는 이날 미국 법무부가 중국인 10명을 산업스파이 혐의로 기소했다고 보도했다. 법무부 발표에 따르면 이들 중 2명은 국가안전부 장쑤성 지부 소속으로 앞서 기소된 쉬옌진의 부하인 것으로 드러났다. '
  },
  {
    title: 'KT 10기가 인터넷에 ‘맞불’ SKB “우리도 한다”',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2018-10-31 14:46',
    kind: 'IT/과학',
    contents: '31일 KT는 서울 종로구 광화문 KT스퀘어에서 기자간담회를 열고 서울 및 6대 광역시를 비롯해 전국 주요 도시에 최고 10Gbps 속도의 10기가 인터넷을 서비스한다고 밝혔다. '
  },
  {
    title: '모디 재킷 선물받은 文대통령 너무 잘 맞아···후의에 감사',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    date: '2018-10-31 17:10',
    kind: '정치',
    contents: '문 대통령은 이날 오후 자신의 페이스북에 글을 올려 "인도 모디 총리께서 멋진 옷을 보내왔다"며 "인도 전통의상을 한국에서도 쉽게 입을 수 있도록 개량한 모디 재킷인데, 너무 잘 맞는다"고 고마움을 표시했다.'
  },
]


// 첫 번째 탭
 const FirstRoute = () => (
   <View style={[styles.container, { backgroundColor: '#f4f4f4' }]} >
     <WebView source={{uri: 'https://google.com'}}/>
   </View>
 );

// 두 번째 탭
 const SecondRoute = () => (
   <View style={[styles.container_1,     // 탭 내부의 스타일
   { backgroundColor: '#f4f4f4' }]} >
     <View>
      {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.title}
        subtitle={
          <View>
            <Text style={styles.date}>{l.date} | <Text style={styles.kind}>{l.kind}</Text></Text>
            <Text numberOfLines={2} style={styles.container_1}>{l.contents}</Text>
          </View>
        }
      />
    ))
      }
     </View>
   </View>
 );

// 세 번째 탭
 const ThirdRoute = () => (
   <View style={[styles.container, { backgroundColor: '#e0e0e8' }]} />
 );

 export default class TabViewExample extends React.Component {
   state = {
     index: 1,  // 첫 탭
     routes: [
       { key: 'first', title: 'Web' },   // title : 라벨
       { key: 'second', title: 'List' },
       { key: 'third', title: 'Third' },
     ],
   };

   render() {
     return (
       <TabView                         // 탭 뷰 선언
         navigationState={this.state}
         renderScene={SceneMap({
           first: FirstRoute,
           second: SecondRoute,
           third: ThirdRoute,
         })}
         onIndexChange={index => this.setState({ index })}
         initialLayout={{
                         width: Dimensions.get('window').width,   //
                         height: Dimensions.get('window').height,
                          }}
       />
     );
   }
 }


const styles = StyleSheet.create({  // styles 라는 객체 생성
  container: {                      // container 라는 이름의 StyleSheet
    flex: 1,
    color: '#3078ff',
  },
  date: {
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 10,
    color: '#3078ff',
  },
  kind: {
    textAlign: 'right',
  },

  container_1: {
    paddingLeft: 10,
    paddingRight: 15,
    height: 40,
  },
  in_container: {
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
