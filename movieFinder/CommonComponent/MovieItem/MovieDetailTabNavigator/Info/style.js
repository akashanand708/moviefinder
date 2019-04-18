import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../../../DevScreens/DevTheme'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        width: '100%',
        height: '100%',
        marginTop: Metrics.baseMargin,
        paddingLeft: Metrics.basePadding,
        paddingRight: Metrics.basePadding
    },
    readMoreLess: {
        color: Colors.linkColor,
        marginBottom: 10
    },
})
