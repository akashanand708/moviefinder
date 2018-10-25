import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { SuperGridSectionList } from 'react-native-super-grid';
import style from './style';
import MovieItem from '../MovieItem/MovieItem';

class SuperGridSectionListCustom extends React.Component {

    static defaultProps = {
        itemDimension: 100
    }
    //_keyExtractor = (item, index) => {console.log("INDEX.....",index);item.id};

    renderItem = (item, index) => {
        return this.props.renderItem(item, index);
    }
    render() {
        let { itemList, gridHeight, spacing, horizontal, staticDimension, moviesFetching, itemDimension } = this.props;
        return (
            <SuperGridSectionList
                itemDimension={itemDimension}
                sections={[
                    {
                        title: '',
                        data: itemList
                    }
                ]}
                style={gridHeight}
                spacing={spacing}
                fixed={true}
                //keyExtractor={this.props._keyExtractor}
                ListFooterComponent={() => { return <ActivityIndicator animating={moviesFetching} size="large" /> }}
                initialNumToRender={10}
                onEndReached={() => this.props.handleEnd()}
                onEndReachedThreshold={0.8}
                horizontal={horizontal}
                staticDimension={staticDimension}
                renderItem={({ item, index }) => (
                    this.renderItem(item, index)
                )}
                renderSectionHeader={({ section }) => (
                    <Text style={{ color: 'green' }}>{section.title}</Text>
                )}
            />

        )
    }
}
export default SuperGridSectionListCustom;