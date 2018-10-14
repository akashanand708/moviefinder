import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { SuperGridSectionList } from 'react-native-super-grid';
import MovieItem from '../MovieItem/MovieItem';

class SuperGridSectionListCustom extends React.Component {

    _keyExtractor = (item, index) => index;

    renderItem = (item) => {
        return this.props.renderItem(item);
    }
    render() {
        let { itemList, gridHeight, spacing, horizontal, staticDimension, moviesFetching } = this.props;

        return (
            <View>
                <SuperGridSectionList
                    itemDimension={100}
                    sections={[
                        {
                            title: '',
                            data: itemList
                        }
                    ]}
                    style={gridHeight}
                    spacing={spacing}
                    fixed={true}
                    keyExtractor={this._keyExtractor}
                    ListFooterComponent={() => { return <ActivityIndicator animating={moviesFetching} size="large" /> }}
                    initialNumToRender={1}
                    onEndReached={() => this.props.handleEnd()}
                    onEndReachedThreshold={0.8}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    renderItem={({ item }) => (
                        this.renderItem(item)
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={{ color: 'green' }}>{section.title}</Text>
                    )}
                />
            </View>

        )
    }
}

export default SuperGridSectionListCustom;