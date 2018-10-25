import React from 'react';
import { Linking } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import style from './style';

const ReviewDetail = (props) => {
    let { reviewItem } = props.navigation.state.params;
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem header>
                        <Text>{reviewItem.author}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                {reviewItem.content}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text style={[style.underLine]} onPress={() => Linking.openURL(reviewItem.url)}>{reviewItem.url}</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
export default ReviewDetail;