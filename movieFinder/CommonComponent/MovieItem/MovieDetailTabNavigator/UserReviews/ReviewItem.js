import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import style from './style';

class ReviewItem extends React.Component {

    navigateToMovieDetails = (reviewItem) => {
        this.props.navigation.navigate({
            key: 'ReviewDetail',
            routeName: 'ReviewDetail',
            params: { reviewItem: reviewItem }
        })
    }
    static navigationOptions = {
        header: null
    };
    render() {
        let { reviewItem } = this.props;
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(reviewItem)}>
                <View style={style.reviewContainer}>
                    <Card style={[style.cardContainer, { overflow: 'hidden' }]}>
                        <CardItem header>
                            <Text>{reviewItem.author}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={style.contentText} numberOfLines={4}>
                                    {reviewItem.content}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text numberOfLines={1}>{reviewItem.url}</Text>
                        </CardItem>
                        <Text style={style.infoTitle}>...See more</Text>
                    </Card>
                </View>
            </TouchableOpacity>
        );
    }
}
export default ReviewItem;