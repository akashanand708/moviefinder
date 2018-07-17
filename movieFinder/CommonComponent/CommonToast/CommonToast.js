import { Toast } from 'native-base';
import _ from 'lodash';

const toastId = null;
export const CustomToast = {
    showToast: (message, type) => {
        if (toastId) {
            Toast.hide(toastId)
        }
        if (_.isEmpty(message)) {
            message = "Default message";
        }
        if (_.isEmpty(type)) {
            toastId = Toast.show({
                text: message,
                position: 'bottom',
                duration: 0
            })
        } else {
            toastId = Toast.show({
                text: message,
                position: 'bottom',
                type,
                duration: 3000
            })
        }
    }
}