import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import LightBoxHeader from './lightBoxHeader';
import style from './style';

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
        <LightBoxHeader/>
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
                />
            </Modal>
        );
    }
}

export default ImageLightbox;