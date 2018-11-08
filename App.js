/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions,  
  WebView, 
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  FlatList } from 'react-native';
import { 
  TabView, 
  TabBar, 
  SceneMap } from 'react-native-tab-view';
import { 
  Card, 
  ListItem,
  SocialIcon,
  Slider, 
  Button,
  List,
  Text,
  Tile,
  Avatar,
  ThemeProvider } from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';


const list = [
  {
    title: '태양광으로 달리는 쏘나타',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 14:52',
    kind: '생활/문화',
    contents: '영화에서나 나올법한 일이 내년 현실화할 것으로 전망된다. 현대·기아차가 내년 태양광으로 차량 배터리를 충전할 수 있는 차량을 내놓는다.',

  },
  {
    title: '파킨슨병 환자에 치료용 마약 허용',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 14:22',
    kind: '생활/문화',
    contents: '식품의약품안전처(식약처)는 국내 대체 치료제가 없는 희귀·난치병 환자가 자가 치료를 목적으로 마약과 향정신성의약품을 사용할 수 있도록 하는 내용이 담긴 마약류 관리에 관한 법률 시행규칙을 개정·공포했다고 31일 밝혔다.',
  },
  {
    title: '美, 中 산업스파이 또 적발',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 14:34',
    kind: '세계',
    contents: '로이터통신과 홍콩 사우스차이나모닝포스트(SCMP)는 이날 미국 법무부가 중국인 10명을 산업스파이 혐의로 기소했다고 보도했다. 법무부 발표에 따르면 이들 중 2명은 국가안전부 장쑤성 지부 소속으로 앞서 기소된 쉬옌진의 부하인 것으로 드러났다. '
  },
  {
    title: 'KT 10기가 인터넷에 ‘맞불’ SKB “우리도 한다”',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 14:46',
    kind: 'IT/과학',
    contents: '31일 KT는 서울 종로구 광화문 KT스퀘어에서 기자간담회를 열고 서울 및 6대 광역시를 비롯해 전국 주요 도시에 최고 10Gbps 속도의 10기가 인터넷을 서비스한다고 밝혔다. '
  },
  {
    title: '모디 재킷 선물받은 文대통령 너무 잘 맞아···후의에 감사',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 17:10',
    kind: '정치',
    contents: '문 대통령은 이날 오후 자신의 페이스북에 글을 올려 "인도 모디 총리께서 멋진 옷을 보내왔다"며 "인도 전통의상을 한국에서도 쉽게 입을 수 있도록 개량한 모디 재킷인데, 너무 잘 맞는다"고 고마움을 표시했다.'
  },
  {
    title: '10월 수출 550억달러…6개월 연속 500억달러 넘어 (종합)',
    date: '2018-11-01 12:11',
    kind: '경제',
    contents: '10월 수출이 549억7000만달러로 지난해 같은 기간과 비교해 22.7% 늘어난 것으로 나타났다. 추석 연휴 효과에다 반도체, 석유화학, 기계류 등의 수출이 호조를 보였기 때문이다. 지난해 5월 이후 6개월 연속 수출이 500억달러를 넘기게 됐다.'
  },
  {
    title: 'KT 10기가 인터넷에 ‘맞불’ SKB “우리도 한다”',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 14:46',
    kind: 'IT/과학',
    contents: '31일 KT는 서울 종로구 광화문 KT스퀘어에서 기자간담회를 열고 서울 및 6대 광역시를 비롯해 전국 주요 도시에 최고 10Gbps 속도의 10기가 인터넷을 서비스한다고 밝혔다. '
  },
  {
    title: '모디 재킷 선물받은 文대통령 너무 잘 맞아···후의에 감사',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-10-31 17:10',
    kind: '정치',
    contents: '문 대통령은 이날 오후 자신의 페이스북에 글을 올려 "인도 모디 총리께서 멋진 옷을 보내왔다"며 "인도 전통의상을 한국에서도 쉽게 입을 수 있도록 개량한 모디 재킷인데, 너무 잘 맞는다"고 고마움을 표시했다.'
  },
  {
    title: '10월 수출 550억달러…6개월 연속 500억달러 넘어 (종합)',
    url: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=105&oid=417&aid=0000353251',
    date: '2018-11-01 12:11',
    kind: '경제',
    contents: '10월 수출이 549억7000만달러로 지난해 같은 기간과 비교해 22.7% 늘어난 것으로 나타났다. 추석 연휴 효과에다 반도체, 석유화학, 기계류 등의 수출이 호조를 보였기 때문이다. 지난해 5월 이후 6개월 연속 수출이 500억달러를 넘기게 됐다.'
  }
]
const users = [
  {
    cardTitle: 'Flex Direction',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/bu.jpg'
  },
  {
    cardTitle: 'Align Items',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/iStock-546424192.jpg'
  },
  {
    cardTitle: 'Justify Content',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/jonathan-martin-brunate-lead-image_0.jpg'
  },
  {
    cardTitle: 'TouchableOpacity',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/kekenn.jpeg'
  },
  {
    cardTitle: 'ScrollView',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/makigng.jpeg'
  },
  {
    cardTitle: 'Linking',
    contents: '그보다 앞서 트럼프 대통령은 시 주석과 무역 대화를 앞두고 의견을 교환했으며 트위터를 통해 대화가 "길고 아주 좋았다"고 말해 기대감을 키웠다.\n이날 트럼프 대통령과 시 주석의 전화통화가 있기 전까지 양국의 통상갈등을 바라보는 시선은 암울하기만 했다. \n공격과 반격, 경고와 경고가 되풀이되는 악순환 속에서 긴장이 계속 증폭돼왔기 때문이다. \n트럼프 대통령은 취임 전후로 중국이 미국에 대해 불공정한 무역 관행으로 미국에 막대한 손실을 안기고 있다고 끊임없이 경고해 왔으며 올해 여러 단계에 걸쳐 관세폭탄을 투척하며 본격적인 무역전쟁에 나섰다.',
    avatar: './static/img/shogaku.jpeg'
  },
 ]

 // 첫 번째 탭
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
    <WebView source={{uri: 'https://google.com'}}/>
  </View>
);

// 두 번째 탭
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
    <View style={{flex: 1}}>
      <ScrollView>
        {
          list.map((l, i) => (
            <TouchableOpacity 
              onPress={() => Linking.openURL(l.url)}
              key={i}>
              <ListItem
                containerStyle={{ backgroundColor: '#ffffff' }}
                key={i}
                title={l.title.toString()}
                subtitle={
                  <View>
                    <Text style={styles.date}>{l.date} | {l.kind}</Text>
                    <Text numberOfLines={2} style={styles.container_1}>{l.contents}</Text>
                  </View>
                }
              />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  </View>
);

// 세 번째 탭
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ffffff' }]} >
    <ScrollView>
      {
        users.map((l, i) => (
          <Card
            key={i}
            title={l.cardTitle.toString()}
            image={require('./static/img/bu.jpg')}>
            <Text style={{marginBottom: 10, lineHeight: 25}}>
              {l.contents}
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              // resizeMode='contain'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        ))
      }
    </ScrollView>
  </View>
);

// 네 번째 탭
const FourthRoute = () => (
  <View>
    <ScrollView>
      <Tile
        imageSrc={require('./static/img/bu.jpg')}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
        contentContainerStyle={{ height: 70 }}
      >
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text>Caption</Text>
          <Text>Caption</Text>
        </View>
      </Tile>
<View style={{height: 40}}></View>
<Tile
  imageSrc={require('./static/img/bu.jpg')}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
  style={{marginTop: 40}}
/>

    </ScrollView>
  </View>
)

// 기본 컴포넌트 뷰
export default class TabViewExample extends React.Component {
  state = {
    index: 2,  // 첫 탭
    routes: [
      { key: 'first', title: 'WEB' },   // title : 라벨
      { key: 'second', title: 'LIST' },
      { key: 'third', title: 'CARD' },
      { key: 'fourth', title: 'TILE'}
    ],
    value: 0,
  };
   
  render() {
    return (
      <TabView                         // 탭 뷰 선언
        navigationState={this.state}
        renderScene={
          SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout=
        {{
          width: Dimensions.get('window').width,
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
    height: 40,
    backgroundColor: '#ffffff',
    flex: 1
  },
  in_container: {
  },
  user: {
    flex: 1,
    flexDirection: 'row',
  },
  item1: {
    flex: 1,
    backgroundColor: 'red'
  }
});
