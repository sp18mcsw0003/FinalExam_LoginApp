import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    name: {
        fontSize: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontWeight: 'bold',
        marginTop: 65,
        textAlign: 'center',
        color: '#fff',
    },
    mainbg: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "#9B0B18"
    },
    mainscreen: {
        flex: 1,
        width: 412,
        height: 250,
        backgroundColor: "#9B0B18"
    },
    sisc: {
        marginTop: -15,
        marginLeft: 95,
    },
    forbtn: {
        flex: 1,
        alignItems: 'center',
        marginTop: 330,
    },
    headicon: {
        fontSize: 50,
        color: 'red',
        marginLeft: -185,
        marginTop: -55,
    },
    headiconmain: {
        fontSize: 50,
        color: 'red',
        marginLeft: -185,
        marginTop: 3,
    },
    mainbtn: {
        marginLeft: 85,
        marginTop: -245,
        flexDirection: 'row',

    },
    BGroup: {
        marginTop: 5,
        textAlign: 'center',
    },
    donorform: {
        marginTop: 40,
    },
    Donorlist: {
        marginBottom: 500,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        marginTop: 10,
    },
    create: {
        textAlign : 'center',
        color : 'yellow',
        fontSize : 25,
        
    },
    handshake: {
        width : 100, 
        height : 100,
        marginLeft : 80, 
        marginBottom : 8,
    },
    blooddrop: {
        width : 100, 
        height : 100,
        marginLeft : 80, 
        marginBottom : 8,
    },
    myCard: {
        width: 250,
    },
    signoutscreen: {
        width : 100, 
        height : 100,
        marginLeft : 80, 
        marginBottom : 8,
    },
    custom: {
        marginTop: -170,
        marginLeft: 80,
    },
})