import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../../../DevScreens/DevTheme'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    reviewMain: {
        ...ApplicationStyles.screen.alignColumnCenter,
        height: '100%',
    },
    reviewContainer: {
        width: 298,
        height: 200
    },
    cardContainer: {
        width: 298,
        height: 195
    },
    contentText: {
        height: 50,
    }
})
