import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../../../DevScreens/DevTheme'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin
    },
    header: {
        ...ApplicationStyles.screen.alignRowLeft,
        height: 14,
        paddingLeft: 10
    }
})
