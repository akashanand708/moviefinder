import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LightBoxHeader from './lightBoxHeader';
import style from './style';
import { Colors } from '../../DevScreens/DevTheme';

class ImageLightbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }
    closeModal = () => {
        this.props.closeLightBox();
        this.setState({ visible: false });
    }
    renderHeader = () => {
        return <TouchableOpacity onPress={this.closeModal} style={[style.closeButton]}>
            <Icon name="times" size={40} style={{ color: Colors.closeButtonColor }} />
        </TouchableOpacity>
    }
    render() {
        let { images, index } = this.props;
        let { visible } = this.state;
        return (
            <Modal visible={visible} transparent={false}>
                <ImageViewer
                    imageUrls={images}
                    index={index}
                    enableSwipeDown={true}
                    enablePreload={true}
                    onCancel={this.closeModal}
                    renderHeader={this.renderHeader}
                    loadingRender={() => { return <Text style={{color: 'white'}}>{"Loading..."}</Text> }}
                />
            </Modal>
        );
    }
}

export default ImageLightbox;