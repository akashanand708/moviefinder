import React from 'react'
import { View, FlatList } from 'react-native'
import TrailerItem from './TrailerItem';

class RenderTrailerItem extends React.Component {

    render() {
        let { trailerList } = this.props;
        _keyExtractor = (item) => item.id;
        return (
            trailerList &&
            <View style={{ flex: 1 }}>
                <FlatList
                    data={trailerList}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => (
                        <TrailerItem
                            key={item.id}
                            trailerItem={item}
                            navigation={this.props.navigation}
                        />
                    )}
                />
            </View>
        )
    }
}
export default RenderTrailerItem;