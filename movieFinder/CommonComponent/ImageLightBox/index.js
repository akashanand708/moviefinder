import React from 'react';
import { Modal, Text, TouchableOpacity,ActivityIndicator } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './style';
import { Colors } from '../../DevScreens/DevTheme';
import ShareComponent from '../ShareComponent';
import CommonLoader from '../CommonLoader/CommonLoader';

class ImageLightbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            index: props.index
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
    renderFooter = () => {
        let { images } = this.props;
        let { index } = this.state;
        return <ShareComponent
            color={Colors.closeButtonColor}
            sharedUrl={images[index].url}
        />
    }
    imageChange = (index) => {
        console.log("IMAGE INDEX......", index);
        this.setState({ index });
    }
    render() {
        let { images } = this.props;
        let { visible, index } = this.state;
        console.log("Images light box....",images);
        return (
            <Modal
                visible={visible}
                transparent={false}
                onRequestClose={() => {
                }}
            >
                <ImageViewer
                    imageUrls={images}
                    index={index}
                    enableSwipeDown={true}
                    enablePreload={true}
                    onCancel={this.closeModal}
                    onChange={this.imageChange}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
                    footerContainerStyle={style.sharePhoto}
                />
            </Modal>
        );
    }
}

export default ImageLightbox;