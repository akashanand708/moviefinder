import React from 'react'
import { Text } from 'react-native'
import { SuperGridSectionList } from 'react-native-super-grid';

class SuperGridSectionListCustom extends React.Component {

    static defaultProps = {
        itemDimension: 100,
        fixed: true
    }
    _keyExtractor = (item, index) => {
        if (item[0]) {
            if (item[0].id) {
                return item[0].id + index;
            } else {
                return item[0].file_path;
            }
        }
    };

    renderItem = (item, index) => {
        return this.props.renderItem(item, index);
    }
    refreshList = () => {
        this.props.refreshList();
    }
    render() {
        let { itemList, gridHeight, fixed, spacing, horizontal, staticDimension, moviesFetching, itemDimension } = this.props;
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
                fixed={fixed}
                onRefresh={this.refreshList}
                refreshing={moviesFetching}
                keyExtractor={this._keyExtractor}
                // ListFooterComponent={() => { return <ActivityIndicator animating={moviesFetching} size="large" /> }}
                initialNumToRender={20}
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