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
        marginBottom: Metrics.baseMargin,
        paddingLeft: Metrics.basePadding,
        paddingRight: Metrics.basePadding
    }
})
